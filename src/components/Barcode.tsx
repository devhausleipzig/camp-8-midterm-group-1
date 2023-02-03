import React, { StrictMode } from "react";
import Barcode from "react-barcode";
import { useTicketStore } from "../stores/BookingStore";

export function CodeBar() {
  const store = useTicketStore();

  return (
    <Barcode
      value={
        store.date.split(".").join("") +
        store.time.split(":").join("") +
        store.totalPrice.toString().replace(".", "").slice(0, -1) +
        store.seats.join("")
      }
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
