import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['./src/threejs-kit.ts'],
    splitting: false,
    sourcemap: true,
    clean: true,
    outDir: 'lib',
    format:  ['esm', 'cjs'],
    dts: true,
    minify: true,
})