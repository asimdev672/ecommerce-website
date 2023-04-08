import React from "react";

const FormatePrice = ({ price }) => {
  return (
    <>
      {new Intl.NumberFormat("en-PK", {
        style: "currency",
        maximumFractionDigits: 2,
        currency: "PKR",
      }).format(price / 100)}
    </>
  );
};

export default FormatePrice;
