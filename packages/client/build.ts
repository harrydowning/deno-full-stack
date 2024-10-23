import fs from "node:fs";
import esbuild from "esbuild";
import process from "node:process";

const outDir = "dist";
const staticDir = "static";

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir);
fs.readdirSync(staticDir).forEach((file) => {
  fs.cpSync(`${staticDir}/${file}`, outDir);
});

const options = Object.freeze({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  platform: "browser",
  outdir: outDir,
  splitting: true,
  format: "esm",
  minify: true,
  metafile: true,
});

if (process.argv.includes("--watch")) {
  const ctx = await esbuild.context(options);
  await ctx.watch();
  const { host, port } = await ctx.serve({ servedir: outDir });
  console.log(`Serving at http://${host}:${port}`);
} else {
  const result = await esbuild.build(options);
  console.log(esbuild.analyzeMetafileSync(result.metafile, { color: true }));
}
