import { access, readFile, stat } from "node:fs/promises";
import path from "node:path";

const outputDirectory = path.resolve("out");
const basePath = (process.env.PAGES_BASE_PATH ?? "").replace(/\/$/, "");

if (basePath && !basePath.startsWith("/")) {
  throw new Error("PAGES_BASE_PATH must be empty or begin with '/'.");
}

const requiredPaths = ["index.html", "404.html", "_next"];

await Promise.all(
  requiredPaths.map((requiredPath) =>
    access(path.join(outputDirectory, requiredPath)),
  ),
);

const nextDirectory = await stat(path.join(outputDirectory, "_next"));
if (!nextDirectory.isDirectory()) {
  throw new Error("Expected out/_next to be a directory.");
}

const indexHtml = await readFile(path.join(outputDirectory, "index.html"), "utf8");
const nextAssetPrefix = `${basePath}/_next/`;

if (!indexHtml.includes(nextAssetPrefix)) {
  throw new Error(
    `The static export does not reference Next.js assets under '${nextAssetPrefix}'.`,
  );
}

if (basePath) {
  for (const unprefixedReference of ['href="/_next/', 'src="/_next/']) {
    if (indexHtml.includes(unprefixedReference)) {
      throw new Error(
        `Found an asset URL that is missing the '${basePath}' base path.`,
      );
    }
  }
}

console.log(`Static export verified for base path '${basePath || "/"}'.`);
