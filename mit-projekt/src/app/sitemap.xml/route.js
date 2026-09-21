export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mortenrwinther.dk";
  const today = new Date().toISOString().split("T")[0];

  const pages = [
    { loc: `${base}/`, lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: `${base}/mrw-agency`, lastmod: today, changefreq: "monthly", priority: "0.7" },
    { loc: `${base}/setup`, lastmod: today, changefreq: "monthly", priority: "0.6" },
    { loc: `${base}/vods`, lastmod: today, changefreq: "weekly", priority: "0.7" },
    { loc: `${base}/cv`, lastmod: today, changefreq: "monthly", priority: "0.6" },
    { loc: `${base}/om-mig`, lastmod: today, changefreq: "monthly", priority: "0.6" },
    { loc: `${base}/kontakt`, lastmod: today, changefreq: "monthly", priority: "0.6" },
    { loc: `${base}/cookie-policy`, lastmod: today, changefreq: "yearly", priority: "0.3" },
    { loc: `${base}/privacy-policy`, lastmod: today, changefreq: "yearly", priority: "0.3" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
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
