import GUI from 'lil-gui'

import InitScene from "../InitScene";
import {CoreModule} from "../../@types/core-module";

export default class GuiControlsModule implements CoreModule {
    readonly name = 'gui-controls';
    readonly dependencies = [];
    private gui?: GUI;

    constructor(readonly context: InitScene) {
        this.init()
    }

    init() {
        const options = this.context.options;
        if (!options.guiControlsEnabled) return;
        if (this.gui) return;

        this.gui = new GUI();
    }

    get() {
        return this.gui
    }

    inject(fn: any) {
        if (!this.gui) return;
        if (!fn) return;

        fn(this.gui, this.context)
    }

    close() {
        if (!this.gui) return;
        this.gui.close()
    }
}