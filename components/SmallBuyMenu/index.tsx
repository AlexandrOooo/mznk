import React from "react";
import BuySection from "../BuySection";
import SellerSection from "../SellerSection";

const index: React.FC<{ infoProduct: any }> = ({ infoProduct }) => {
  return (
    <>
      <SellerSection infoProduct={infoProduct} />
      <BuySection infoProduct={infoProduct} />
    </>
  );
};

export default index;
