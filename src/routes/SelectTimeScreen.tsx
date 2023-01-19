import clsx from "clsx";
import React, { useState } from "react";
import { Button, ButtonVariant } from "../components/Button";
import { format, compareAsc } from "date-fns";
import { formatWithOptions } from "date-fns/fp";
import { eo } from "date-fns/locale";
import { SelectButton, SelectButtonVariant } from "../components/SelectButton";
import { Days } from "../components/MockData";

export function SelectTimeScreen() {
  const data = new Days();
  console.log(data.days);
  function dateFill(i: number) {
    if (i == 0 || i == 12) {
      return false;
    } else if ((i - 4) % 9 == 0) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="flex justify-center items-center ">
      <div className="w-60 h-96 flex justify-center flex-col rounded-xl bg-background">
        <div className="p-3 divide-y divide-white-dimmed outline-1 ">
          <div>
            <p className="text-white-dimmed text-description ">DATE</p>
            <br />
            <div className="grid grid-flow-row-dense gap-x-2 gap-y-3 grid-cols-4 p-2 text-description text-center ">
              {data.days.map((day) => {
                return (
                  <SelectButton
                    type="button"
                    variant={SelectButtonVariant.primary}
                    label={day.date}
                  />
                );
              })}
            </div>
          </div>
          <div className="">
            <p className="text-white-dimmed text-description p-2">TIME</p>
            <br />
            <div className="grid grid-flow-row-dense gap-x-2 gap-y-3 grid-cols-4 grid-rows-2 border-dark-light text-description text-center">
              <div>00:00</div>
              <div>00:00</div>
              <div>00:00</div>
              <div>00:00</div>
              <div>00:00</div>
              <div>00:00</div>
              <div>00:00</div>
              <div>00:00</div>
            </div>
          </div>
        </div>
        <div className="h-1/3"></div>
        <div className="p-2">
          <Button variant={ButtonVariant.primary} label={"Select Seat"} />
        </div>
      </div>
    </div>
  );
}
