import esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/index.tsx"],
  bundle: true,
  platform: "browser",
  outfile: "dist/index.js",
  minify: true,
  metafile: true,
});
