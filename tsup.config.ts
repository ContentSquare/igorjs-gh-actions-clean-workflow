import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  outDir: 'dist',
  minify: true,
  splitting: false,
  target: 'node26',
  noExternal: [/.*/],
})
