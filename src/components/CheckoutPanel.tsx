import { Transition } from "@headlessui/react";
import { useNavigate, useParams, useRoutes } from "react-router-dom";
import { useTicketStore } from "../stores/BookingStore";
import { Button, ButtonVariant } from "./Button";
import { Seats, SeatsLocationPrice } from "./SeatsLocationPrice";
export type PTags = {
  type: string;
  num: number;
};
type InputProps = {
  seats: PTags[];
};
const pricesObject: Record<Seats, number> = {
  Front: 12.95,
  Middle: 14.95,
  Back: 16.95,
};

export function CheckoutPanel({ seats }: InputProps) {
  const navigate = useNavigate();
  const { setTotalPrice, setSeats } = useTicketStore();
  const { movieId } = useParams();
  const typesOfSeats: string[] = [];
  seats.map((seat) => {
    if (!typesOfSeats.includes(seat.type)) {
      typesOfSeats.push(seat.type);
    }
  });
  function calculateTotalPrice(input: PTags[]) {
    let price: number = 0;
    typesOfSeats.map((type) => {
      price +=
        input.filter((seat) => seat.type == type).length *
        pricesObject[type as Seats];
    });
    return Math.trunc(price * 100) / 100;
  }

  return (
    <Transition
      show={seats.length > 0}
      className="py-6 px-5 flex flex-col gap-4 bg-dark-light rounded-t-3xl w-screen"
      enter="transition transform translate-y duration-[750ms]"
      enterFrom="translate-y-60"
      enterTo=""
    >
      <div className="flex flex-col gap-2 items-start">
        {typesOfSeats.map((type) => {
          return (
            <SeatsLocationPrice
              number={seats.filter((seat) => seat.type == type).length}
              type={type as Seats}
              key={type}
            />
          );
        })}
      </div>
      <hr className="mb-4 text-white-dimmed-heavy" />
      <div className="grid grid-cols-3">
        <div>
          <p className="text-description">Total Price</p>
          <p className="text-title">
            {"$" + String(calculateTotalPrice(seats))}
          </p>
        </div>
        <div className="col-span-2">
          <Button
            variant={
              seats.length > 0 ? ButtonVariant.primary : ButtonVariant.secondary
            }
            label="Book Tickets"
            onClick={() => {
              setTotalPrice(String(calculateTotalPrice(seats)));
              setSeats(
                seats.map((seat) => {
                  return String(seat.num);
                })
              );
              navigate(`/movie/${movieId}/ticket`);
            }}
          />
        </div>
      </div>
    </Transition>
  );
}
