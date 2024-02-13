declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare global {
    interface Window {
        localStream?: any;
    }
}

declare module '*.svg';
declare module '*.gif';
declare module '*.png';
declare module '*.jpg';