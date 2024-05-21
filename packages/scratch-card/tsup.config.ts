import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['./src/index.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
    outDir: 'lib',
    format:  ['esm', 'cjs'],
    dts: true,
    minify: true,
})