import clsx from "clsx";
import React, { useState } from "react";
import { Button, ButtonVariant } from "../components/Button";
import { format, compareAsc } from "date-fns";
import { formatWithOptions } from "date-fns/fp";
import { eo } from "date-fns/locale";
import { SelectButton, SelectButtonVariant } from "../components/SelectButton";
import { Days } from "../components/MockData";
import { useLoaderData } from "react-router-dom";
export function timesLoader() {
  return new Days();
}

export function SelectDateTime() {
  const data = useLoaderData() as Days;
  const [selectedDates, setSelectedDates] = useState<string>("");
  function clickDate(toCheck: string) {
    if (selectedDates.includes(toCheck)) {
      return setSelectedDates("");
    } else {
      setSelectedDates(toCheck);
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
                    key={day.date}
                    type="button"
                    variant={
                      day.isFull()
                        ? SelectButtonVariant.reserved
                        : selectedDates == day.date
                        ? SelectButtonVariant.selected
                        : SelectButtonVariant.available
                    }
                    label={day.date}
                    onClick={() => clickDate(day.date)}
                  />
                );
              })}
            </div>
          </div>
          <div className="">
            <p className="text-white-dimmed text-description p-2">TIME</p>
            <br />
            <div className="grid grid-flow-row-dense gap-x-2 gap-y-3 grid-cols-4 grid-rows-2 border-dark-light text-description text-center">
              {data.days[0].screenings.map((screen) => {
                return (
                  <SelectButton
                    key={screen.time}
                    type="button"
                    variant={
                      screen.isFull()
                        ? SelectButtonVariant.reserved
                        : SelectButtonVariant.available
                    }
                    label={screen.time}
                  />
                );
              })}
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
