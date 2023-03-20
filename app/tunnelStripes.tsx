"use client";

import { useWindowSize, WindowSize } from "@/hooks/windowEvents";
import { useStyleProperty } from "@/hooks/documentEvents";

import "@/styles/tunnelStripes.scss";


export default function TunnelStripes() {
    let stripes: Array<any> = [];

    const { windowWidth, windowHeight }: WindowSize = useWindowSize();
    console.log(windowWidth, " ------ ", windowHeight);

    const circleRadius: number = parseFloat(useStyleProperty("--circle-size")) / 2;

    let stripeAngle: number = 0;
    for (let index: number = 1; index <= 20; index++) {
        console.log("circleRadius: " + circleRadius);
        console.log("windowWidth: " + windowWidth);
        const posX = parseFloat(Math.cos(stripeAngle).toFixed(15)) * circleRadius + windowWidth / 2;
        const posY = parseFloat(Math.sin(stripeAngle).toFixed(15)) * circleRadius + windowHeight / 2;

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