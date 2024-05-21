export type CurrentContainer = `#${string}` | HTMLElement;

export interface InitOptions {
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