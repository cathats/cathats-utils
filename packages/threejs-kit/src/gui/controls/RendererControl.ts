import * as THREE from "three";
import GUI from "lil-gui";

export class RendererControl {
    private name = 'WebGLRenderer'
    private rendererFolder!: GUI;
    private enum = {
        toneMappingOptions: {
            None: THREE.NoToneMapping,
            Linear: THREE.LinearToneMapping,
            Reinhard: THREE.ReinhardToneMapping,
            Cineon: THREE.CineonToneMapping,
            ACESFilmic: THREE.ACESFilmicToneMapping,
            Custom: THREE.CustomToneMapping,
        },
        shadowMapping: {
            Basic: THREE.BasicShadowMap,
            PCFS: THREE.PCFShadowMap,
            PCFSoft: THREE.PCFSoftShadowMap,
            VSM: THREE.VSMShadowMap,
        },
        outputEncodings: {
            // Linear: THREE.LinearEncoding,
            // sRGB: THREE.sRGBEncoding,
        },
    }
    private propertyHolder: any = {}

    constructor(
        readonly gui: GUI,
        readonly webGLRenderer: THREE.WebGLRenderer,
        readonly scene: THREE.Scene,
        readonly camera: THREE.Camera,
    ) {
        this.init()
    }

    init() {
        this.rendererFolder = this.gui.addFolder(this.name);
        this.initHolder()

        // this.rendererFolder.onChange((_) => {
        //     this.updateWebGLRendererProperties();
        // });
        //
        const clearSettingsFolder = this.rendererFolder.addFolder("clearSettings");
        clearSettingsFolder.add(this.propertyHolder.clearSettings, "autoClear");
        clearSettingsFolder.addColor(this.propertyHolder.clearSettings, "clearColor");
        clearSettingsFolder.onChange((value) => {
            const { autoClear, clearColor } = value.object as any;
            console.log('autoClear, clearColor', autoClear, clearColor)
            this.webGLRenderer.autoClear = autoClear;
            this.webGLRenderer.setClearColor(0x000000);
            this.webGLRenderer.clear()
            // this.webGLRenderer.clearColor();
        })

        this.rendererFolder.close();
    }

    initHolder() {
        const clearColorHolder = new THREE.Color();
        this.webGLRenderer.getClearColor(clearColorHolder);

        this.propertyHolder = {
            shadowMap: {
                enabled: this.webGLRenderer.shadowMap.enabled,
            },
            clearSettings: {
                autoClear: this.webGLRenderer.autoClear,
                clearColor: clearColorHolder.getHex()
            },
        }

        console.log(' this.propertyHolder',  this.propertyHolder)
    }

    updateWebGLRendererProperties() {
        this.webGLRenderer.shadowMap.enabled = this.propertyHolder.shadowMap.enabled;

        // clear setting
        this.webGLRenderer.autoClear = this.propertyHolder.clearSettings.autoClear;
        this.webGLRenderer.setClearColor(this.propertyHolder.clearSettings.clearColor);

        console.log('===', this.webGLRenderer, this.propertyHolder.clearSettings)
        this.webGLRenderer.clear()
    }
}

export default RendererControl