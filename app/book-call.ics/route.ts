import { contactEmail } from "@/lib/social";

export const dynamic = "force-static";

function fmt(d: Date) {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

export async function GET() {
  const start = new Date();
  start.setUTCDate(start.getUTCDate() + 3);
  start.setUTCHours(13, 0, 0, 0);
  const end = new Date(start.getTime() + 30 * 60 * 1000);
  const stamp = fmt(new Date());

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//utkubagdas.com//Discovery Call//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:discovery-${stamp}@utkubagdas.com`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    "SUMMARY:Discovery Call · Utku Bağdaş",
    `DESCRIPTION:30-minute discovery call to discuss your project. Reach out at ${contactEmail} to confirm or reschedule.`,
    `ORGANIZER;CN=Utku Bağdaş:mailto:${contactEmail}`,
    "LOCATION:Online",
    "STATUS:TENTATIVE",
    "BEGIN:VALARM",
    "ACTION:DISPLAY",
    "DESCRIPTION:Discovery call with Utku Bağdaş",
    "TRIGGER:-PT15M",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");

  return new Response(lines, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="discovery-call.ics"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
