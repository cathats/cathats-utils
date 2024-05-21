import * as THREE from 'three';
import Stat from 'three/examples/jsm/libs/stats.module';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import GUI from 'lil-gui';

type CurrentContainer = `#${string}` | HTMLElement;

interface InitOptions {
    // 指定默认配置
    backgroundColor?: number;
    fogColor?: number;

    // 基础开关
    disableShadows?: boolean;
    disableLights?: boolean;
    disableCamera?: boolean;
    disableControls?: boolean;

    // 工具类开关
    statEnabled?: boolean;
    orbitControlsEnabled?: boolean;
    guiControlsEnabled?: boolean;
}

declare class ElementModule {
    readonly name = "element";
    readonly dependencies: never[];
    private readonly element;
    constructor(context: InitScene, container: CurrentContainer);
    get(): HTMLElement;
    getSize(): {
        clientWidth: number;
        clientHeight: number;
    };
    appendChild(element: HTMLElement): void;
}

declare class StatModule {
    readonly context: InitScene;
    readonly name = "stat";
    readonly dependencies: string[];
    private stat?;
    constructor(context: InitScene);
    init(): void;
    get(): Stat | undefined;
    update(): void;
}

declare class OrbitControlsModule {
    readonly context: InitScene;
    readonly name = "orbit-controls";
    readonly dependencies: string[];
    private controller?;
    constructor(context: InitScene);
    init(): void;
    get(): OrbitControls | undefined;
    update(): void;
}

interface CoreModule {
    readonly name: string;
    readonly dependencies: string[];

    init: () => void;
}

declare class GuiControlsModule implements CoreModule {
    readonly context: InitScene;
    readonly name = "gui-controls";
    readonly dependencies: never[];
    private gui?;
    constructor(context: InitScene);
    init(): void;
    get(): GUI | undefined;
    inject(fn: any): void;
    close(): void;
}

declare class InitScene {
    private container;
    options: InitOptions;
    element: ElementModule;
    stat: StatModule;
    controller: OrbitControlsModule;
    gui: GuiControlsModule;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    constructor(container: CurrentContainer, options: InitOptions);
    init(): void;
    animate(fn?: () => void): void;
}

declare class RendererControl {
    readonly gui: GUI;
    readonly webGLRenderer: THREE.WebGLRenderer;
    readonly scene: THREE.Scene;
    readonly camera: THREE.Camera;
    private name;
    private rendererFolder;
    private enum;
    private propertyHolder;
    constructor(gui: GUI, webGLRenderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera);
    init(): void;
    initHolder(): void;
    updateWebGLRendererProperties(): void;
}

export { type CurrentContainer, type InitOptions, InitScene, RendererControl };
