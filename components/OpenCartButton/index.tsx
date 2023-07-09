"use client";
import React, { useRef, useEffect } from "react";
import { CartIcons } from "../icons/CartIcons";

const index = () => {
    const cartRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClick = () => {
            document.dispatchEvent(new CustomEvent("CartOpen"));
        };
        cartRef.current?.addEventListener("click", handleClick);
    }, []);

    return (
        <div ref={cartRef}>
            <CartIcons />
        </div>
    );
};
export default index;
