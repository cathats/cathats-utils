import {CurrentContainer} from "../../@types/base";
import InitScene from "../InitScene";

export default class ElementModule {
    readonly name = 'element';
    readonly dependencies = [];
    private readonly element: HTMLElement;

    constructor(context: InitScene, container: CurrentContainer) {
        if (container instanceof HTMLElement) {
            this.element = container;
        } else {
            this.element = document.querySelector(container) as HTMLElement;
        }
    }

    get() {
        return this.element;
    }

    getSize() {
        return {
            clientWidth: this.element.clientWidth,
            clientHeight: this.element.clientHeight
        }
    }

    appendChild(element: HTMLElement) {
        // if (this.element.hasChildNodes()) return
        this.element.appendChild(element);
    }
}