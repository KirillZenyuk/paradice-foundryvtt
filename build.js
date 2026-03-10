import esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  format: 'esm',
  target: 'es2022',
  outfile: 'dist/paradice.js',
  sourcemap: false,
  minify: false,
  logLevel: 'info',
})
