"use client";


import { useClientCheck } from "@/hooks/clientEvents";

let stylePropValue: string | undefined;

function useStyleProperty(propName: string, iniValue: string = ""): any {
    if (!useClientCheck()) return null;

    const root = document.documentElement;

    switch (iniValue) {
        case "":
            stylePropValue = root?.style.getPropertyValue(propName);
            break;
        default:
            root?.style.setProperty(propName, iniValue);
    }

    if (stylePropValue) return stylePropValue;
}


export {
    useStyleProperty
}