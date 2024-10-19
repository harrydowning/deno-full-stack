import esbuild from "esbuild";

const result = await esbuild.build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  platform: "browser",
  outdir: "dist",
  splitting: true,
  format: "esm",
  minify: true,
  metafile: true,
});

console.log(esbuild.analyzeMetafileSync(result.metafile, { color: true }));
