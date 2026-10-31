export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mortenrwinther.dk";

  const pages = [
    "/",
    "/content-crew",
    "/mrw-agency",
    "/setup",
    "/vods",
    "/cv",
    "/om-mig",
    "/kontakt",
    "/cookie-policy",
    "/privacy-policy",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => `  <url>
    <loc>${new URL(page, siteUrl).toString()}</loc>
  </url>`)
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
