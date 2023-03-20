"use client";


let stylePropValue: string | undefined;

function useStyleProperty(propName: string, iniValue: string = ""): any {
    if (typeof window !== "undefined") {
        const root = document.documentElement;

        switch (iniValue) {
            case "":
                stylePropValue = root?.style.getPropertyValue(propName);
                break;
            default:
                root?.style.setProperty(propName, iniValue);
        }

    }

    if (stylePropValue) return stylePropValue;
}


export {
    useStyleProperty
}