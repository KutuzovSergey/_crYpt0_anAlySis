import { MouseEvent } from "react";

export type InputEditingType = [
    appearance: boolean,
    showInput: () => void,
    hideInput: (e: MouseEvent<HTMLDivElement>) => void,
]