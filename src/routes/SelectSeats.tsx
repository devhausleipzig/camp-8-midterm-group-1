import { Days } from "../components/MockData";
import { Seat } from "../components/Seat";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

export function seatsLoader() {
  let data = new Days();
  return data.days[0].screenings[0].seats;
}

export function SelectSeats() {
  type SeatInfo = {
    ocupied: boolean;
    id: string;
  };

  const [seats, setSelectedSeats] = useState<string[]>([]);

  function toggle(seatNum: number) {
    if (seats.includes(String(seatNum))) {
      //use setter to remove item from state.
      setSelectedSeats((preItems) =>
        preItems.filter((seat) => seat !== String(seatNum))
      );
    } else {
      setSelectedSeats([...seats, String(seatNum)]);
    }
  }
  const seatInfo = useLoaderData() as SeatInfo[];
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
                selected={seats.includes(String(seat.id))}
                onClick={() => toggle(seat.id)}
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
