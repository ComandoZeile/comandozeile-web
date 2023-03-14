'use client';

import { ReactElement, useEffect, useState } from "react";

export default function CircleControl() {
    if (typeof window !== "undefined" && typeof document !== "undefined") {

        const root = document.documentElement;
        const circleSize: number = 250;

        const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
        const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

        const [circlePos, setCirclePos] = useState<string>(windowHeight / 2 - circleSize / 2 - 14 + "px");
        root?.style.setProperty("--circle-pos", circlePos);

        let circles: Array<ReactElement> = [];
        let index: number = 1;
        let newCircleSize: number = circleSize + 12;
        let addCircle: boolean = true;
        while (addCircle) {
            if (windowWidth <= newCircleSize && windowHeight <= newCircleSize) {
                addCircle = false;
            }

            circles.push(<div className="circle" key={`circle-${index}`}></div>);
            newCircleSize = newCircleSize + 160;
            index++;
        }

        root?.style.setProperty("--circle-count", circles.length.toString());

        useEffect(() => {
            function handleWindowResize() {
                setWindowWidth(() => window.innerWidth);
                setWindowHeight(() => window.innerHeight);
            }

            window.addEventListener("resize", handleWindowResize);

            return () => {
                window.removeEventListener("resize", handleWindowResize);
            }
        }, [windowWidth, windowHeight]);

        return (
            <div className="circle-wrapper">
                {circles}
            </div>
        );
    }
}