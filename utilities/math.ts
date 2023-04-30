function degreeToRadian(degree: number): number {
    return degree * Math.PI / 180;
}

function cos(stripeAngle: number): number {
    return parseFloat(Math.cos(degreeToRadian(stripeAngle)).toFixed(15));
}

function sin(stripeAngle: number): number {
    return parseFloat(Math.sin(degreeToRadian(stripeAngle)).toFixed(15));
}



export {
    cos,
    sin
}