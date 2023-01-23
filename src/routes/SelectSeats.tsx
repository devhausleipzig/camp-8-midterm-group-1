import { Days } from "../components/MockData";
import { Seat } from "../components/Seat";
import { useState } from "react";

export function SelectSeats() {
  type SeatInfo = {
    fill: boolean;
    id: string;
  };
  let data = new Days();
  const seatInfo = data.days[0].screenings[0].seats;

  const [seats, setSelectedSeats] = useState<String[]>([]);

  function toggle(selected: String[]) {
    setSelectedSeats((preValue) => {
      return preValue.map((seatid:String[]) => {
        return seatid === selected ? "" : "";
      });
    });
  }

  let arrayofseats = [];

  function seatFill(i: number) {
    if (i == 0 || i == 45 || i == 8 || i == 53) {
      return false;
    } else if ((i - 4) % 9 == 0) {
      return false;
    } else {
      return true;
    }
  }
  let j = 0;
  for (let i = 0; i < 54; i++) {
    arrayofseats.push({
      fill: seatFill(i),
      id: seatFill(i) ? j++ : NaN,
    });
  }

  return (
    <>
      <div className="flex items-center justify-center mt-8 mx-5 my-5">
        <div
          className="grid grid-cols-9 grid-rows-6 gap-3 gap-y-3 mt-4 rounded"
          id="seatcontainer"
        >
          {arrayofseats.map((seat) => {
            return seat.fill == true ? (
              <Seat
                id={String(seat.id)}
                reserved={seatInfo[seat.id].ocupied}
                selected={false}
                onClick={toggle}
              />
            ) : (
              <div></div>
            );
          })}
        </div>
      </div>
    </>
  );
}
