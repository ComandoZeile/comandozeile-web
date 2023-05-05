"use client";

import { useState, useEffect } from "react";

interface WindowSize {
    windowWidth: number,
    windowHeight: number
}

function useWindowSize() {
    const [windowWidth, setWindowWidth] = useState<number | undefined>(typeof window !== "undefined" ? window.innerWidth : undefined);
    const [windowHeight, setWindowHeight] = useState<number | undefined>(typeof window !== "undefined" ? window.innerHeight : undefined);

    useEffect(() => {
        function handleWindowResize() {
            setWindowWidth(() => window.innerWidth);
            setWindowHeight(() => window.innerHeight);
        }

        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    });

    console.log(`width: ${windowWidth} && height: ${windowHeight}`);

    return windowWidth != undefined && windowHeight != undefined ? { windowWidth, windowHeight } : { windowWidth: 1920, windowHeight: 780 };
}


export {
    useWindowSize,
    type WindowSize
}