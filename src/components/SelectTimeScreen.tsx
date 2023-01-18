import clsx from "clsx";
import React, { useState } from "react";
import { Button, ButtonVariant } from "./Button";

export function SelectTimeScreen() {
  return (
    <div className=" w-60 max-h-96 ">
      <div className="divide-y divide-solid ">
        <header className="text-white">select Date & Time</header>
        <p className="text-white-dimmed">DATE</p>
        <div className="grid grid-cols-4 grid-rows-3 border-dark-light text-description">
          Select Dates
        </div>

        <div className=" grid grid-cols-4 grid-rows-2 border-dark-light text-description">
          <p className="text-white-dimmed">TIME</p>
          Select Time
        </div>
      </div>

      <div>
        <Button variant={ButtonVariant.primary} label={"Select Seat"} />
      </div>
    </div>
  );
}
