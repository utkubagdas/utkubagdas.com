"use client";

import { useEffect, useRef } from "react";

/* --- Icosahedron geometry (precomputed) --- */
const PHI = (1 + Math.sqrt(5)) / 2;
const RAW_VERTS: [number, number, number][] = [
  [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
  [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
  [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1],
];
const FACES: [number, number, number][] = [
  [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
  [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
  [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
  [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
];

const fillPositions: number[] = [];
const fillNormals: number[] = [];
for (const [ai, bi, ci] of FACES) {
  const a = RAW_VERTS[ai], b = RAW_VERTS[bi], c = RAW_VERTS[ci];
  const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
  const vx = c[0] - a[0], vy = c[1] - a[1], vz = c[2] - a[2];
  let nx = uy * vz - uz * vy;
  let ny = uz * vx - ux * vz;
  let nz = ux * vy - uy * vx;
  const l = Math.hypot(nx, ny, nz) || 1;
  nx /= l; ny /= l; nz /= l;
  for (const v of [a, b, c]) {
    fillPositions.push(v[0], v[1], v[2]);
    fillNormals.push(nx, ny, nz);
  }
}

const edgeSet = new Set<string>();
for (const f of FACES) {
  for (let i = 0; i < 3; i++) {
    const a = f[i], b = f[(i + 1) % 3];
    edgeSet.add(a < b ? `${a}-${b}` : `${b}-${a}`);
  }
}
const wirePositions: number[] = [];
for (const e of edgeSet) {
  const [a, b] = e.split("-").map(Number);
  wirePositions.push(...RAW_VERTS[a], ...RAW_VERTS[b]);
}

/* --- Tiny mat4 helpers --- */
function perspective(fov: number, aspect: number, near: number, far: number) {
  const f = 1 / Math.tan(fov / 2);
  const nf = 1 / (near - far);
  return new Float32Array([
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, (far + near) * nf, -1,
    0, 0, 2 * far * near * nf, 0,
  ]);
}
function modelMatrix(rx: number, ry: number, tz: number) {
  const cx = Math.cos(rx), sx = Math.sin(rx);
  const cy = Math.cos(ry), sy = Math.sin(ry);
  return new Float32Array([
    cy,        0,    -sy,       0,
    sx * sy,   cx,   sx * cy,   0,
    cx * sy,  -sx,   cx * cy,   0,
    0,         0,    tz,        1,
  ]);
}

/* --- Shaders --- */
const VERT = `
attribute vec3 a_pos;
attribute vec3 a_normal;
uniform mat4 u_proj;
uniform mat4 u_model;
varying vec3 v_normal;
varying vec3 v_view;
void main() {
  v_normal = mat3(u_model) * a_normal;
  vec4 pos = u_model * vec4(a_pos, 1.0);
  v_view = -pos.xyz;
  gl_Position = u_proj * pos;
}
`;
const FRAG_FILL = `
precision mediump float;
varying vec3 v_normal;
varying vec3 v_view;
void main() {
  vec3 n = normalize(v_normal);
  vec3 v = normalize(v_view);
  vec3 light = normalize(vec3(0.4, 0.7, 0.7));
  float diff = max(dot(n, light), 0.0);
  float fres = pow(1.0 - max(dot(n, v), 0.0), 2.0);
  vec3 cyan = vec3(0.13, 0.83, 0.93);
  vec3 emerald = vec3(0.20, 0.83, 0.60);
  vec3 col = mix(cyan, emerald, fres);
  col *= 0.25 + diff * 0.55;
  gl_FragColor = vec4(col, 0.35);
}
`;
const VERT_WIRE = `
attribute vec3 a_pos;
uniform mat4 u_proj;
uniform mat4 u_model;
void main() {
  gl_Position = u_proj * u_model * vec4(a_pos, 1.0);
}
`;
const FRAG_WIRE = `
precision mediump float;
void main() {
  gl_FragColor = vec4(0.20, 0.83, 0.60, 0.95);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type);
  if (!sh) return null;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  return gl.getShaderParameter(sh, gl.COMPILE_STATUS) ? sh : null;
}
function makeProgram(gl: WebGLRenderingContext, vsSrc: string, fsSrc: string) {
  const vs = compile(gl, gl.VERTEX_SHADER, vsSrc);
  const fs = compile(gl, gl.FRAGMENT_SHADER, fsSrc);
  if (!vs || !fs) return null;
  const p = gl.createProgram();
  if (!p) return null;
  gl.attachShader(p, vs);
  gl.attachShader(p, fs);
  gl.linkProgram(p);
  return gl.getProgramParameter(p, gl.LINK_STATUS) ? p : null;
}

export default function WebGL3DObject() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      (canvas.getContext("webgl", { alpha: true, antialias: true }) as WebGLRenderingContext | null) ??
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
    if (!gl) return;

    const fillProg = makeProgram(gl, VERT, FRAG_FILL);
    const wireProg = makeProgram(gl, VERT_WIRE, FRAG_WIRE);
    if (!fillProg || !wireProg) return;

    const fillPos = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, fillPos);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(fillPositions), gl.STATIC_DRAW);
    const fillNorm = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, fillNorm);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(fillNormals), gl.STATIC_DRAW);
    const wirePos = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, wirePos);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(wirePositions), gl.STATIC_DRAW);

    const uniforms = {
      fillProj: gl.getUniformLocation(fillProg, "u_proj"),
      fillModel: gl.getUniformLocation(fillProg, "u_model"),
      fillPos: gl.getAttribLocation(fillProg, "a_pos"),
      fillNorm: gl.getAttribLocation(fillProg, "a_normal"),
      wireProj: gl.getUniformLocation(wireProg, "u_proj"),
      wireModel: gl.getUniformLocation(wireProg, "u_model"),
      wirePos: gl.getAttribLocation(wireProg, "a_pos"),
    };

    let raf = 0;
    let visible = true;
    let proj = perspective(Math.PI / 4, 1, 0.1, 50);
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    const start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      const w = Math.max(1, Math.floor(rect.width * dpr));
      const h = Math.max(1, Math.floor(rect.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
        proj = perspective(Math.PI / 4, w / h, 0.1, 50);
      }
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      target.y = ((e.clientX - cx) / cx) * 0.6;
      target.x = ((e.clientY - cy) / cy) * 0.4;
      void rect;
    };

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    const tick = () => {
      if (visible) {
        const t = (performance.now() - start) / 1000;
        cur.x += (target.x - cur.x) * 0.06;
        cur.y += (target.y - cur.y) * 0.06;
        const rx = cur.x + Math.sin(t * 0.4) * 0.25;
        const ry = cur.y + t * 0.45;
        const model = modelMatrix(rx, ry, -5.5);

        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // Filled translucent body
        gl.useProgram(fillProg);
        gl.uniformMatrix4fv(uniforms.fillProj, false, proj);
        gl.uniformMatrix4fv(uniforms.fillModel, false, model);
        gl.bindBuffer(gl.ARRAY_BUFFER, fillPos);
        gl.enableVertexAttribArray(uniforms.fillPos);
        gl.vertexAttribPointer(uniforms.fillPos, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, fillNorm);
        gl.enableVertexAttribArray(uniforms.fillNorm);
        gl.vertexAttribPointer(uniforms.fillNorm, 3, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.TRIANGLES, 0, fillPositions.length / 3);

        // Wireframe overlay
        gl.useProgram(wireProg);
        gl.uniformMatrix4fv(uniforms.wireProj, false, proj);
        gl.uniformMatrix4fv(uniforms.wireModel, false, model);
        gl.bindBuffer(gl.ARRAY_BUFFER, wirePos);
        gl.enableVertexAttribArray(uniforms.wirePos);
        gl.vertexAttribPointer(uniforms.wirePos, 3, gl.FLOAT, false, 0, 0);
        gl.lineWidth(1);
        gl.drawArrays(gl.LINES, 0, wirePositions.length / 3);
      }
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      gl.deleteProgram(fillProg);
      gl.deleteProgram(wireProg);
      gl.deleteBuffer(fillPos);
      gl.deleteBuffer(fillNorm);
      gl.deleteBuffer(wirePos);
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-panel/40 backdrop-blur">
      <div className="flex items-center justify-between border-b border-border/60 bg-bg/40 px-3 py-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
          ub.geometry
        </span>
        <span className="font-mono text-[10px] text-muted/50">icosahedron · 20 faces</span>
      </div>
      <canvas ref={canvasRef} aria-hidden className="block h-44 w-full" />
    </div>
  );
}
