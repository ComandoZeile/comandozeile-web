"use client";

import { useWindowSize, WindowSize } from "@/hooks/windowEvents";
import { useStyleProperty } from "@/hooks/documentEvents";

import "@/styles/tunnelStripes.scss";


export default function TunnelStripes() {
    let stripes: Array<any> = [];
    // offset like in circleControl.tsx + stripe should stick half in border of circle => 3px
    const OFFSET_X: number = 8 + 3;
    const OFFSET_Y: number = 11 + 3;

    const { windowWidth, windowHeight }: WindowSize = useWindowSize();
    console.log(windowWidth, " ------ ", windowHeight);

    const circleRadius: number = parseFloat(useStyleProperty("--circle-size")) / 2;

    const degreeToRadian: CallableFunction = (degree: number) => {
        return degree * Math.PI / 180;
    }

    let stripeAngle: number = 0;
    console.log("circleRadius: " + circleRadius);
    console.log("windowWidth: " + windowWidth);
    // 5 stripes in each 90-degree sector
    for (let index: number = 1; index <= 6; index++) {
        const posX = parseFloat(Math.cos(degreeToRadian(stripeAngle)).toFixed(15)) * circleRadius + windowWidth / 2 - OFFSET_X;
        const posY = parseFloat(Math.sin(degreeToRadian(stripeAngle)).toFixed(15)) * circleRadius + windowHeight / 2 - OFFSET_Y;

        console.log("posX: " + posX);
        console.log("fixed x:" + posX.toFixed(1));
        console.log("posY:" + posY);
        console.log("fixed y: " + posY.toFixed(1));

        let stripePos: object = {
            "top": posY.toFixed(1) + "px",
            "left" : posX.toFixed(1) + "px"
        }
        stripes.push(<div className="stripe" style={stripePos} key={`stripe-${index}`}></div>);

        stripeAngle += 18;
    }

    return (
        <div className="tunnel-stripe-wrapper">
            {stripes}
        </div>
    );
}