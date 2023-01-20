import { SeatSquares } from "../components/SeatSquares";

export function SelectSeats() {

  type SeatInfo = {
    fill: boolean;
    id: string;
  };

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
  for (let i = 0; i < 54; i++) {
    arrayofseats.push({
      fill: seatFill(i),
      id: seatFill(i) ? String(i) : NaN,
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
              <SeatSquares square="Available" key={seat.id} />
            ) : (
              <div></div>
            );
          })}
        </div>
      </div>
    </>

  );
}
