type SeatsLocationPriceProps = {
  primary: boolean;
  Location: string;
  Price: number;
};
export type Seats = "Front" | "Middle" | "Back";
type InputParams = {
  type: Seats;
  number: number;
};
const prices: Record<Seats, number> = {
  Front: 12.95,
  Middle: 14.95,
  Back: 16.95,
};
export function SeatsLocationPrice({ type, number }: InputParams) {
  return (
    <div className="flex gap-36 justify-between w-full">
      <div className="flex gap-4">
        <p className="text-description">{number} x</p>
        <p className="text-description text-white">Seat - {type}</p>
      </div>
      <div className="flex gap-1 text-description ">
        <p className="text-white">${prices[type]}</p>
        <p className="">/each</p>
      </div>
    </div>
  );
}
