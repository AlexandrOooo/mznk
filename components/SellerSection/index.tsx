import React from "react";

const index: React.FC<{ infoProduct: any }> = ({ infoProduct }) => {
  return (
    <p className="p-4 font-bold border-b-2 border-b-slate-400 border-b-solid">
      Продавец: {infoProduct.saller}
    </p>
  );
};

export default index;
