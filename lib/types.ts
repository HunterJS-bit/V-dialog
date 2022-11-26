/// <reference types="vite/client" />

export interface VDialog {
    open?: boolean;
    isModal?: boolean;
    backdropStyles?: object;
}

export interface DialogElement extends HTMLDialogElement {
    showModal: () => void;
    show: () => void;
    close: () => void;
}