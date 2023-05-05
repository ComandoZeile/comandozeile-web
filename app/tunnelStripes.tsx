"use client";

import { useWindowSize, WindowSize } from "@/hooks/windowEvents";
import { useStyleProperty } from "@/hooks/documentEvents";

import "@/styles/tunnelStripes.scss";
import { cos, sin } from "@/utilities/math";


export default function TunnelStripes() {
    const { windowWidth, windowHeight }: WindowSize = useWindowSize();

    let stripes: Array<any> = [];
    let stripeLength: number = windowWidth / 2;
    const STRIPE_MIDDLE: number = stripeLength / 2; // stripe rotation point is center -> create bigger circle with r=circleR + half stripe length, later move stripe half stripe length back
    const OFFSET_X: number = 2;
    const OFFSET_Y: number = 3; // border of stripe = 6 -> stripe middle centered and not just upper edge half up => 6 / 2 = 3

    const circleRadius: number = parseFloat(useStyleProperty("--circle-size")) / 2 + STRIPE_MIDDLE - OFFSET_X;

    let stripeAngle: number = 0;
    console.log("circleRadius: " + circleRadius);
    console.log("windowWidth: " + windowWidth);
    // 5 stripes in each 90-degree sector
    for (let index: number = 1; index <= 20; index++) {
        const posX: number = cos(stripeAngle) * circleRadius + windowWidth / 2 - STRIPE_MIDDLE;
        const posY: number = sin(stripeAngle) * circleRadius + windowHeight / 2 - OFFSET_Y;

        let stripePos: object = {
            "top": posY.toFixed(1) + "px",
            "left" : posX.toFixed(1) + "px",
            "width": stripeLength + "px"
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