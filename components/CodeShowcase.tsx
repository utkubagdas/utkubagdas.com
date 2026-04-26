"use client";

import { useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n/dictionaries";
import SectionHeading from "./SectionHeading";

type Snippet = {
  id: string;
  name: string;
  file: string;
  desc: { tr: string; en: string };
  code: string;
};

const SNIPPETS: Snippet[] = [
  {
    id: "pool",
    name: "Pool<T>",
    file: "Pool.cs",
    desc: {
      tr: "Hypercasual prototiplerde sıkça kullandığım hafif object pool — Instantiate / Destroy çağrılarını tamamen ortadan kaldırır.",
      en: "Lightweight object pool used across hypercasual prototypes — eliminates Instantiate / Destroy calls completely.",
    },
    code: `using System.Collections.Generic;
using UnityEngine;

public sealed class Pool<T> where T : Component {
    readonly Stack<T> _stack = new();
    readonly T _prefab;

    public Pool(T prefab, int prewarm = 0) {
        _prefab = prefab;
        for (var i = 0; i < prewarm; i++)
            Release(Object.Instantiate(_prefab));
    }

    public T Get() {
        if (_stack.Count > 0) {
            var inst = _stack.Pop();
            inst.gameObject.SetActive(true);
            return inst;
        }
        return Object.Instantiate(_prefab);
    }

    public void Release(T inst) {
        inst.gameObject.SetActive(false);
        _stack.Push(inst);
    }
}`,
  },
  {
    id: "ease",
    name: "Easing",
    file: "Ease.cs",
    desc: {
      tr: "DOTween eklemeden minimal easing fonksiyonları. UI animasyonu, kamera hareketi ve juice için yeterli.",
      en: "Minimal easing functions without pulling in DOTween. Enough for UI motion, camera moves and juice.",
    },
    code: `using UnityEngine;

public static class Ease {
    // Apple-style spring overshoot, perfect for buttons & toasts.
    public static float OutBack(float t) {
        const float c1 = 1.70158f, c3 = c1 + 1f;
        return 1f + c3 * Mathf.Pow(t - 1f, 3f) + c1 * Mathf.Pow(t - 1f, 2f);
    }

    public static float InOutCubic(float t) =>
        t < 0.5f
            ? 4f * t * t * t
            : 1f - Mathf.Pow(-2f * t + 2f, 3f) / 2f;

    public static float OutElastic(float t) {
        const float c4 = 2f * Mathf.PI / 3f;
        if (t == 0f) return 0f;
        if (Mathf.Approximately(t, 1f)) return 1f;
        return Mathf.Pow(2f, -10f * t)
             * Mathf.Sin((t * 10f - 0.75f) * c4) + 1f;
    }
}`,
  },
  {
    id: "events",
    name: "TypedEvents",
    file: "Events.cs",
    desc: {
      tr: "Unity'nin SendMessage'ı yerine kullandığım type-safe global event bus. Allocsız, dictionary tabanlı dispatch.",
      en: "A type-safe global event bus I use instead of Unity's SendMessage. Allocation-free, dictionary-backed dispatch.",
    },
    code: `using System;
using System.Collections.Generic;

public static class Events {
    static readonly Dictionary<Type, Delegate> _map = new();

    public static void Subscribe<T>(Action<T> handler) {
        _map.TryGetValue(typeof(T), out var existing);
        _map[typeof(T)] = Delegate.Combine(existing, handler);
    }

    public static void Unsubscribe<T>(Action<T> handler) {
        if (!_map.TryGetValue(typeof(T), out var existing)) return;
        var next = Delegate.Remove(existing, handler);
        if (next == null) _map.Remove(typeof(T));
        else _map[typeof(T)] = next;
    }

    public static void Raise<T>(T evt) {
        if (_map.TryGetValue(typeof(T), out var d))
            ((Action<T>)d)?.Invoke(evt);
    }
}

// Usage
//   Events.Subscribe<LevelCompleted>(OnLevelComplete);
//   Events.Raise(new LevelCompleted { score = 100 });`,
  },
  {
    id: "async",
    name: "Async helpers",
    file: "AsyncEx.cs",
    desc: {
      tr: "Coroutine yerine kullanılan async/await yardımcıları — Tasks doğal akışta CancellationToken ile.",
      en: "async/await helpers that replace coroutines — natural flow with CancellationToken support.",
    },
    code: `using System.Threading;
using System.Threading.Tasks;
using UnityEngine;

public static class AsyncEx {
    public static async Task Delay(float seconds, CancellationToken ct = default) {
        var ms = Mathf.RoundToInt(seconds * 1000f);
        await Task.Delay(ms, ct);
    }

    public static async Task NextFrame(CancellationToken ct = default) {
        var f = Time.frameCount;
        while (Time.frameCount == f) {
            ct.ThrowIfCancellationRequested();
            await Task.Yield();
        }
    }

    public static async Task UntilTrue(System.Func<bool> predicate,
                                       CancellationToken ct = default) {
        while (!predicate()) {
            ct.ThrowIfCancellationRequested();
            await Task.Yield();
        }
    }
}`,
  },
];

const KEYWORDS = new Set([
  "using",
  "namespace",
  "public",
  "private",
  "internal",
  "protected",
  "static",
  "readonly",
  "sealed",
  "class",
  "struct",
  "interface",
  "where",
  "new",
  "var",
  "void",
  "return",
  "if",
  "else",
  "for",
  "foreach",
  "while",
  "do",
  "in",
  "out",
  "ref",
  "this",
  "base",
  "null",
  "true",
  "false",
  "const",
  "async",
  "await",
  "default",
]);

function highlightLine(line: string, key: number) {
  if (line.trim().startsWith("//")) {
    return (
      <span key={key} className="italic text-muted/70">
        {line}
        {"\n"}
      </span>
    );
  }
  const tokens = line.split(/(\b|\s+|[(){};,<>])/);
  return (
    <span key={key}>
      {tokens.map((tok, i) => {
        if (KEYWORDS.has(tok)) {
          return (
            <span key={i} className="text-[#c084fc]">
              {tok}
            </span>
          );
        }
        if (/^[A-Z][A-Za-z0-9_]*$/.test(tok)) {
          return (
            <span key={i} className="text-[#60a5fa]">
              {tok}
            </span>
          );
        }
        if (/^\d/.test(tok)) {
          return (
            <span key={i} className="text-[#22d3ee]">
              {tok}
            </span>
          );
        }
        if (/"[^"]*"/.test(tok)) {
          return (
            <span key={i} className="text-[#fbbf24]">
              {tok}
            </span>
          );
        }
        return <span key={i}>{tok}</span>;
      })}
      {"\n"}
    </span>
  );
}

export default function CodeShowcase({
  t,
  locale,
}: {
  t: Dictionary;
  locale: Locale;
}) {
  const [active, setActive] = useState(SNIPPETS[0].id);
  const snippet = SNIPPETS.find((s) => s.id === active) ?? SNIPPETS[0];
  const lines = snippet.code.split("\n");

  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label={t.codeshow.label}
          title={t.codeshow.title}
          subtitle={t.codeshow.subtitle}
        />

        <div
          data-reveal
          className="mt-12 overflow-hidden rounded-xl border border-border bg-panel/40 backdrop-blur"
        >
          <div className="flex items-center gap-1 overflow-x-auto border-b border-border/60 bg-bg/50 px-3 py-2">
            <div className="flex shrink-0 gap-1.5 pr-3" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
            </div>
            {SNIPPETS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActive(s.id)}
                className={`shrink-0 rounded-md px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest transition ${
                  active === s.id
                    ? "border border-accent/40 bg-accent/10 text-accent"
                    : "border border-transparent text-muted hover:text-white"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          <div className="border-b border-border/60 px-5 py-3">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted">
              {snippet.file}
            </p>
            <p className="mt-1 text-sm text-white/85">
              {snippet.desc[locale]}
            </p>
          </div>

          <pre className="overflow-x-auto px-5 py-4 font-mono text-[12px] leading-6 text-white/85 md:text-[13px]">
            <code>
              {lines.map((line, i) => (
                <span key={i} className="flex">
                  <span className="mr-4 inline-block w-6 select-none text-right text-muted/40">
                    {i + 1}
                  </span>
                  <span className="flex-1 whitespace-pre">
                    {highlightLine(line, i)}
                  </span>
                </span>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
