/// <reference types="vite/client" />

export interface VDialog {
    open?: boolean
    isModal?: boolean
    backdropStyles?: object | null
    scrollable?: false
    blur?: false
    contentClass?: object | [] | null
    fullscreen: boolean
}

export interface DialogElement extends HTMLDialogElement {
    showModal: () => void;
    show: () => void;
    close: () => void;
}