import React, { useState } from "react";
import { Button, ButtonVariant } from "../components/Button";
import { SelectButton, SelectButtonVariant } from "../components/SelectButton";
import { Days } from "../components/MockData";
import { useParams } from "react-router-dom";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { useTicketStore } from "../stores/BookingStore";
export function timesLoader() {
  return new Days();
}

export function SelectDateTime() {
  const { setDate, setTime } = useTicketStore();
  const data = useLoaderData() as Days;
  const [selectedDates, setSelectedDates] = useState<string>("");
  const [selectedTimes, setSelectedTimes] = useState<string>("");
  const navigate = useNavigate();
  const { movieId } = useParams();

  function clickDate(toCheck: string) {
    if (selectedDates == toCheck) {
      return setSelectedDates("");
    } else {
      setSelectedDates(toCheck);
    }
  }

  function clickTime(toCheck: string) {
    if (selectedTimes == toCheck) {
      return setSelectedTimes("");
    } else {
      setSelectedTimes(toCheck);
    }
  }

  return (
    <div className="flex flex-col justify-between items-center bg-dark h-full">
      <div className="w-full h-full flex flex-col justify-between items-stretch">
        <div className="flex flex-col justify-between px-3  divide-y divide-white-dimmed outline-1">
          <div>
            <p className="text-white-dimmed text-description">DATE</p>
            <br />
            <div className="grid grid-flow-row-dense gap-x-2 gap-y-3 grid-cols-4 py-6 text-description text-center ">
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
            <p className="text-white-dimmed text-description py-2">TIME</p>
            <br />
            <div className="grid grid-flow-row-dense gap-x-2 gap-y-2 grid-cols-4 grid-rows-2 border-dark-light text-description text-center">
              {data.days[0].screenings.map((screen) => {
                return (
                  <SelectButton
                    key={screen.time}
                    type="button"
                    variant={
                      screen.isFull()
                        ? SelectButtonVariant.reserved
                        : selectedTimes == screen.time
                        ? SelectButtonVariant.selected
                        : SelectButtonVariant.available
                    }
                    label={screen.time}
                    onClick={() => clickTime(screen.time)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-2">
          <Button
            variant={ButtonVariant.primary}
            label={"Select Seat"}
            onClick={() => {
              setDate(selectedDates);
              setTime(selectedTimes);
              navigate(`/movie/${movieId}/selectseats`);
            }}
          />
        </div>
      </div>
    </div>
  );
}
function useRouter() {
  throw new Error("Function not implemented.");
}
