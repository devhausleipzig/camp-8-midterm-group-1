import React from "react";
import Barcode from "react-barcode";

export function CodeBar() {
  return (
    <Barcode
      value="08JAN14304285C3C5A4SKRR"
      lineColor="white"
      background=""
      format="CODE128"
      textAlign="center"
      width={1}
      height={40}
      fontSize={12}
      displayValue={true}
    />
  );
}
