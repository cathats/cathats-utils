import InitScene from "../InitScene";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default class OrbitControlsModule {
    readonly name = 'orbit-controls';
    readonly dependencies = ['camera', 'renderer'];
    private controller?: OrbitControls;

    constructor(readonly context: InitScene) {
        this.init();
    }

    init() {
        if (!this.context.options.orbitControlsEnabled) return

        this.controller = new OrbitControls(this.context.camera, this.context.renderer.domElement);

        this.controller.enableDamping = true
        this.controller.dampingFactor = 0.05
        this.controller.minDistance = 1
        this.controller.maxDistance = 100
        this.controller.minPolarAngle = Math.PI / 4
        this.controller.maxPolarAngle = (3 * Math.PI) / 4
    }

    get() {
        return this.controller;
    }

    update() {
        if (!this.controller) return;
        this.controller.update();
    }
}