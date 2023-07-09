"use client";
import React, { useState, useRef, useEffect } from "react";
import CartEmptyPopup from "@/components/CartEmptyPopup";
import { ClosePopup } from "@/components/icons/ClosePopup";
import CartItemsPopup from "@/components/CartItemsPopup";

const pseudoCartItems = [
    {
        price: 100,
        title: "Товар 1",
    },
];
const Index: React.FC<{}> = () => {
    const [visibility, setVisibility] = useState(false);
    const modalRef = useRef(null);
    const closeModalButtonRef = useRef(null);

    const handleClickClose = (event: any) => {
        if (
            !isClickOnRef(event, modalRef) ||
            isClickOnRef(event, closeModalButtonRef)
        ) {
            setVisibility((prev) => !prev);
        }
    };

    const isClickOnRef = (event: any, ref: any) => {
        if (ref.current.contains(event.target)) {
            return true;
        }
    };

    useEffect(() => {
        const openModal = () => {
            setVisibility(true);
        };
        document.addEventListener("CartOpen", openModal);
    }, []);

    useEffect(() => {
        if (visibility) {
            document.body.style.overflow = "hidden";
            document.body.style.height = "100vh";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [visibility]);

    return (
        <div
            className={visibility ? "visible" : "invisible"}
            onClick={handleClickClose}
        >
            <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
                <div
                    ref={modalRef}
                    className="relative mx-auto my-0 bg-white rounded-lg w-[912px] h-[912px]"
                >
                    <h3 className="px-6 h-14 flex items-center justify-between ">
                        <span className="font-bold text-2xl">Корзина</span>
                        <div
                            ref={closeModalButtonRef}
                            className="cursor-pointer"
                        >
                            <ClosePopup />
                        </div>
                    </h3>
                    {pseudoCartItems.length ? (
                        <CartEmptyPopup />
                    ) : (
                        <CartItemsPopup />
                    )}
                </div>
            </div>
        </div>
    );
};
export default Index;
