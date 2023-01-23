import React, { StrictMode } from "react";
import Barcode from "react-barcode";
import { useTicketStore } from "../stores/BookingStore";

export function CodeBar() {
  const store = useTicketStore();
  // console.log(typeof store.totalPrice);

  function temp1() {
    const temp = [];
    for (let i = 0; i < 5; i++) {
      if (i % 2 === 0) {
        temp.push(store.seats[i].split("-").join(""));
      }
    }
    console.log(temp);
    console.log(typeof temp);
    return temp.map((x) => {
      x.split(",");
    });
  }

  temp1();

  return (
    <Barcode
      value={
        store.date.split(".").join("") +
        store.time.split(":").join("") +
        store.totalPrice.toString().replace(".", "").slice(0, -1) +
        temp1()
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
