import Stat from "three/examples/jsm/libs/stats.module";

import InitScene from "../InitScene";

export default class StatModule {
    readonly name = 'stat';
    readonly dependencies = ['element'];
    private stat?: Stat

    constructor(readonly context: InitScene) {
        this.init();
    }

    init() {
        if (!this.context.element) return;
        if (!this.context.options.statEnabled) return;
        this.stat = new Stat();
        this.context.element.appendChild(this.stat.dom);
    }

    get() {
        return this.stat;
    }

    update() {
        if (!this.stat) return;
        this.stat.update();
    }
}