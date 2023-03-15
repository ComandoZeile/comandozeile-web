"use client";

import {ReactElement, useEffect, useState} from "react";
import { useWindowSize, WindowSize } from "@/components/windowEvents";
import { useStyleProperty } from "@/components/documentEvents";

import "@/styles/circles.scss";


export default function CircleControl() {
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const { windowWidth, windowHeight }: WindowSize = useWindowSize();
    console.log(windowWidth, " ------ ", windowHeight);

    const circleSize: number = 250;

    const [circlePos, setCirclePos] = useState<string>(windowHeight / 2 - circleSize / 2 - 14 + "px");
    useStyleProperty("--circle-pos", circlePos);

    useEffect(() => {
        setCirclePos(windowHeight / 2 - circleSize / 2 - 14 + "px");
    }, [windowWidth, windowHeight]);

    let circles: Array<any> = [];
    let newCircleSize: number = circleSize + 12;
    for (let index:number = 1; windowWidth >= newCircleSize || windowHeight >= newCircleSize; index++) {
        console.log(newCircleSize, " --- new circle size");

        circles = [...circles, <div className="circle" key={`circle-${index}`}></div>];
        newCircleSize += 160;

        console.log("for infos");
        console.log(index);
        console.log(newCircleSize);
        console.log(circles);
    }

    console.log(`circles:`);
    console.log(circles);
    useStyleProperty("--circle-count", circles.length.toString());

    console.log(`circles before return:`);
    console.log(circles);
    return mounted ? (
        <div className="circle-wrapper">
            {circles}
            <p>Test</p>
        </div>
    ) : <div/>;
}