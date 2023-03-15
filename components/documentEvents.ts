"use client";

import { useState, useEffect } from "react";


function useStyleProperty(propertyName: string, value: any) {
    useEffect(() => {
        const root = document.documentElement;

        console.log(`prop name: ${propertyName} && value: ${value}`);
        root?.style.setProperty(propertyName, value);
    });
}


export {
    useStyleProperty
}