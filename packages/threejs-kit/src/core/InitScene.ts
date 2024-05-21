'use strict';

import * as THREE from 'three';
import {CurrentContainer, InitOptions} from "../@types/base";
import ElementModule from "./module/ElementModule";
import {updateOnResize} from "../utils/update-on-resize";
import StatModule from "./module/StatModule";
import OrbitControlsModule from "./module/OrbitControlsModule";
import GuiControlsModule from "./module/GuiControlsModule";

class InitScene {
    public element!: ElementModule;
    public stat!: StatModule;
    public controller!: OrbitControlsModule;
    public gui!: GuiControlsModule

    public scene!: THREE.Scene;
    public camera!: THREE.PerspectiveCamera;
    public renderer!: THREE.WebGLRenderer;

    constructor(private container: CurrentContainer, public options: InitOptions) {
        this.element = new ElementModule(this, container);
        this.init();

        this.stat = new StatModule(this);
        this.controller = new OrbitControlsModule(this);
        this.gui = new GuiControlsModule(this);
    }

    init() {
        const {
            backgroundColor = 0x000000,
            fogColor
        } = this.options;

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(backgroundColor);

        if (fogColor) {
            this.scene.fog = new THREE.Fog(fogColor, 1, 50);
        }

        const {clientWidth, clientHeight} = this.element.getSize()
        this.camera = new THREE.PerspectiveCamera(75, clientWidth / clientHeight, 0.1, 100);

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(clientWidth, clientHeight);
        this.renderer.setClearColor(backgroundColor)

        updateOnResize(() => {
            const {clientWidth, clientHeight} = this.element.getSize()
            this.camera.aspect = clientWidth / clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(clientWidth, clientHeight);
        })

        this.renderer.setSize(window.innerWidth, window.innerHeight)

        this.element.appendChild(this.renderer.domElement)
    }

    animate(fn = () => {}) {
        const animate = () => {
            requestAnimationFrame(animate);
            fn();
            this.renderer.render(this.scene, this.camera);

            this.stat?.update();
            this.controller?.update();
        }
        animate();
    }
}

export default InitScene