"use client";
import React, { useState } from "react";
import PLPHeader from "@/components/PLPHeader";
import TheNavigation from "@/components/TheNavigation";

const layout: React.FC<{ children: any }> = ({ children }) => {
  const [infoProduct, setInfoProduct] = useState({
    title:
      "Сухой корм для котят Club 4 Paws (Клуб 4 Лапы) Премиум со вкусом курицы 5 кг (4820083909108)(B4651001)",
    price: 100,
    discount: 32,
    code: 31454,
    currency: "USD",
    rating: 3.4,
    photos: ["/product1.webp"],
    isLimited: true,
    inStock: true,
    saller: "saller",
    isFavoriteSelectNumber: 200,
    salesNumber: 100,
    description: "description",
    guarantee:
      "Гарантия. Законом о защите прав потребителей не предусмотрено возвращение этого товара надлежащего качества.",
    paymauntType:
      'Оплата. Оплата при получении товара, Оплата картой в отделении, Google Pay, Картой онлайн, -5% скидки при оплате от 500 грн картой Mastercard Универсальная/Универсальная Gold от ПриватБанк, Безналичными для юридических лиц, Оплатить онлайн социальной картой "Пакунок малюка", Безналичными для физических лиц, Apple Pay, Оплатить онлайн картой "єПідтримка", Visa, Mastercard ',
    characteristics: [
      {
        name: "type",
        value: "kolbasa",
        important: true,
      },
      {
        name: "size",
        value: "big",
        important: true,
      },
      {
        name: "destination",
        value: "cat",
        important: true,
      },
      {
        name: "class",
        value: "econom",
        important: true,
      },
      {
        name: "weight",
        value: "1kg",
        important: false,
      },
      {
        name: "countryRegistration",
        value: "ukraina",
        important: false,
      },
      {
        name: "countryProduction",
        value: "ukraina",
        important: false,
      },
      {
        name: "count",
        value: 1,
        important: false,
      },
      {
        name: "features",
        value: ["features", "features", "features"],
        important: false,
      },
      // width: null,
      // height: null,
      // color: null,
      {
        name: "dayOfGarantee",
        value: 14,
        important: false,
      },
    ],
  });
  return (
    <>
      <TheNavigation />
      <div className="container">
        <PLPHeader infoProduct={infoProduct} />
        {children}
      </div>
    </>
  );
};
export default layout;
