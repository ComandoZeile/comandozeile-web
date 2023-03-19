"use client";

import { useEffect } from "react";


let stylePropValue: string;

function useStyleProperty(propName: string, iniValue: string = ""): string | undefined {
    useEffect(() => {
        const root = document.documentElement;

        switch (iniValue) {
            case "":
                console.log(`get prop: ${propName}`);
                stylePropValue = root?.style.getPropertyValue(propName);
                break;
            default:
                console.log(`set prop name: ${propName} with value: ${iniValue}`);
                root?.style.setProperty(propName, iniValue);
        }
    });

    if (stylePropValue) return stylePropValue;
}

export {
    useStyleProperty
}