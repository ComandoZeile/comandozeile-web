"use client";

import { useWindowSize } from "@/hooks/windowEvents";
import { useStyleProperty } from "@/hooks/documentEvents";

import "@/styles/tunnelStripes.scss";


export default function TunnelStripes() {
    let stripes: Array<any> = [];

    const { windowWidth, windowHeight } = useWindowSize();
    console.log(windowWidth, " ------ ", windowHeight);

    const circleRadius: number = Number(useStyleProperty("--circle-size")) / 2;

    const stripeCoordinates = (stripeAngle: number) => {
        const posX = parseFloat(Math.cos(stripeAngle).toFixed(15)) * circleRadius + windowWidth / 2;
        const posY = parseFloat(Math.sin(stripeAngle).toFixed(15)) * circleRadius + windowHeight / 2;
    }

    let stripePos: object = {
        "top": "0",
        "left" : "0"
    }
    for (let index: number = 1; index <= 20; index++) {

        stripes.push(<div className="stripe" style={stripePos} key={`stripe-${index}`}></div>);
    }

    return (
        <div className="tunnel-stripe-wrapper">
            {stripes}
        </div>
    );
}