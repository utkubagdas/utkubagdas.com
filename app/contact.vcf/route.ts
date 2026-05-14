import { contactEmail } from "@/lib/social";

export const dynamic = "force-static";

export async function GET() {
  const vcf = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Bağdaş;Utku;;;",
    "FN:Utku Bağdaş",
    "TITLE:Lead Game Developer",
    "ORG:Mimiko Technology",
    `EMAIL;TYPE=INTERNET:${contactEmail}`,
    "URL:https://utkubagdas.com",
    "ADR;TYPE=WORK:;;;Istanbul;;;Türkiye",
    "NOTE:Lead Game Developer with 6.5+ years of Unity and 50+ titles shipped.",
    "END:VCARD",
    "",
  ].join("\r\n");

  return new Response(vcf, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="utku-bagdas.vcf"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
