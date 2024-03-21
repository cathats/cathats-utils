export default {
    entryPoints: ['./src/threejs-kit.ts'],
    format: 'cjs',
    outDir: './lib',
    dts: true,
    minify: true,
    watch: ['./src'],
};