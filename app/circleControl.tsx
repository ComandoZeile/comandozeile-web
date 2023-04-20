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

    const CIRCLE_BORDER: number = 12;
    const OFFSET_Y: number = CIRCLE_BORDER / 2;
    const circleSize: number = 250;
    let circles: Array<any> = [];
    let newCircleSize: number = circleSize + CIRCLE_BORDER;

    const [circlePosX, setCirclePosX] = useState<string>(windowWidth / 2 + "px");
    const [circlePosY, setCirclePosY] = useState<string>(windowHeight / 2 - circleSize / 2 - OFFSET_Y + "px");
    useStyleProperty("--circle-pos-x", circlePosX);
    useStyleProperty("--circle-pos-y", circlePosY);

    useEffect(() => {
        setCirclePosX(windowWidth / 2 + "px");
        setCirclePosY(windowHeight / 2 - circleSize / 2 - OFFSET_Y + "px");
    }, [windowWidth, windowHeight, OFFSET_Y]);

    useStyleProperty("--circle-size", newCircleSize.toString());
    let index:number = 1;
    for (index; windowWidth >= newCircleSize || windowHeight >= newCircleSize; index++) {
        circles = [...circles, <div className="circle" key={`circle-${index}`}></div>];
        newCircleSize += 160;
    }
    circles = [...circles, <div className="circle" key={`circle-${index}`}></div>];

    useStyleProperty("--circle-count", circles.length.toString());

    return mounted ? (
        <div className="circle-wrapper">
            {circles}
        </div>
    ) : <div/>;
}