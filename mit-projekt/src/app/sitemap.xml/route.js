import fs from "fs";
import path from "path";

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mortenrwinther.dk";

  const appDir = path.join(process.cwd(), "src", "app");

  async function collectPages(dir, rel = "") {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    const pages = [];

    const pageFile = entries.find(
      (entry) => entry.isFile() && /^page\.(js|jsx|ts|tsx)$/.test(entry.name)
    );

    const isPublicRoute =
      pageFile &&
      !/[\[\]]/.test(rel) &&
      !rel.split("/").some((segment) => segment.startsWith("("));

    if (isPublicRoute) {
      const route = rel ? `/${rel}` : "/";
      const pagePath = path.join(dir, pageFile.name);
      const pageStats = await fs.promises.stat(pagePath);

      pages.push({
        loc: `${base}${route}`,
        lastmod: pageStats.mtime.toISOString().split("T")[0],
        changefreq: route === "/" || route === "/vods" ? "weekly" : "monthly",
        priority: route === "/" ? "0.8" : "0.6",
      });
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
    pages = [
      {
        loc: `${base}/`,
        lastmod: new Date().toISOString().split("T")[0],
        changefreq: "weekly",
        priority: "0.8",
      },
    ];
  }

  // dedupe and sort
  pages = Array.from(new Map(pages.map((page) => [page.loc, page])).values()).sort((a, b) =>
    a.loc.localeCompare(b.loc)
  );

  function urlEntry(loc, lastmod, changefreq = "monthly", priority = "0.5") {
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  }

  const internalEntries = pages
    .map((page) => urlEntry(page.loc, page.lastmod, page.changefreq, page.priority))
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${internalEntries}\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
