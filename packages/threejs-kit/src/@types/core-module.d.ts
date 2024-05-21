import InitScene from "../core/InitScene";

export interface CoreModule {
    readonly name: string;
    readonly dependencies: string[];

    init: () => void;
}