/// <reference types="vite/client" />

export interface VDialog {
    open?: boolean;
    isModal?: boolean;
    backdropStyles?: object | null;
    scrollable?: false,
}

export interface DialogElement extends HTMLDialogElement {
    showModal: () => void;
    show: () => void;
    close: () => void;
}