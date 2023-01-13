import clsx from "clsx";
import React, { useState } from "react";
import { BookingLabel } from "./BookingLabel";

export function selectionPage() {
  return (
    <>
      <div className="bg-background divide-y divide-solid">
        <header className="text-white">select Date & Time</header>
        <div className="grid grid-cols-4 grid-rows-3 border-dark-light">
          <p className="text-white-dimmed">DATE</p>
          Select Date
        </div>
        <div className="grid grid-cols-4 grid-rows-2 border-r-dark-light">
          <p className="text-white-dimmed">TIME</p>
          Select Time
        </div>
      </div>
    </>
  );
}
