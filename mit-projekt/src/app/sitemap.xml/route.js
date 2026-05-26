import fs from "fs";
import path from "path";

export async function GET() {
  const base = "https://www.mortenrwinther.dk";
  const today = new Date().toISOString().split("T")[0];

  const appDir = path.join(process.cwd(), "src", "app");

  async function collectPages(dir, rel = "") {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    // ignore dirs that are Next grouping or special
    const pages = [];

    const hasPage = entries.some(
      (e) => e.isFile() && /^page\.(js|jsx|ts|tsx)$/.test(e.name)
    );

    // Filter out grouped/dynamic routes (contain [ or ] or start with '(')
    if (hasPage && !/[\[\]]/.test(rel) && !rel.split("/").some((p) => p.startsWith("("))) {
      const route = rel ? `/${rel}` : "/";
      pages.push(route);
    }

    for (const e of entries) {
      if (e.isDirectory()) {
        const name = e.name;
        if (name.startsWith("(") || name.startsWith("_") || name === "api") continue;
        const subdir = path.join(dir, name);
        const subrel = rel ? `${rel}/${name}` : name;
        pages.push(...(await collectPages(subdir, subrel)));
      }
    }

    return pages;
  }

  let pages = [];
  try {
    pages = await collectPages(appDir);
  } catch (err) {
    // fallback to root-only if something fails
    pages = ["/"];
  }

  // dedupe and sort
  pages = Array.from(new Set(pages)).sort();

  const external = [
    "https://www.youtube.com/@mortenrwinther/playlists",
    "https://www.twitch.tv/mortenrwinther",
    "https://www.instagram.com/mrwpulls/",
  ];

  function urlEntry(loc, lastmod = today, changefreq = "monthly", priority = "0.5") {
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }

  const internalEntries = pages
    .map((p) => urlEntry(`${base}${p}`, today, p === "/" || p === "/vods" ? "weekly" : "monthly", p === "/" ? "0.8" : "0.6"))
    .join("\n");

  const externalEntries = external.map((u) => urlEntry(u, today, "weekly", "0.2")).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${internalEntries}\n${externalEntries}\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
