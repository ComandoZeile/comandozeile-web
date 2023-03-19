"use client";

import { useEffect, useState } from "react";
import { useWindowSize, WindowSize } from "@/hooks/windowEvents";
import { useStyleProperty } from "@/hooks/documentEvents";

import "@/styles/circles.scss";


export default function CircleControl() {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { windowWidth, windowHeight }: WindowSize = useWindowSize();

    const circleSize: number = 250;

    const [circlePos, setCirclePos] = useState<string>(windowHeight / 2 - circleSize / 2 - 14 + "px");
    useStyleProperty("--circle-pos", circlePos);

    useEffect(() => {
        setCirclePos(windowHeight / 2 - circleSize / 2 - 14 + "px");
    }, [windowWidth, windowHeight]);

    let circles: Array<any> = [];
    let newCircleSize: number = circleSize + 12;
    useStyleProperty("--circle-size", newCircleSize.toString());
    for (let index:number = 1; windowWidth >= newCircleSize || windowHeight >= newCircleSize; index++) {
        circles = [...circles, <div className="circle" key={`circle-${index}`}></div>];
        newCircleSize += 160;
    }

    useStyleProperty("--circle-count", circles.length.toString());

    return mounted ? (
        <div className="circle-wrapper">
            {circles}
        </div>
    ) : <div/>;
}