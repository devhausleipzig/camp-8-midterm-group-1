import { Transition } from "@headlessui/react";
import { Button, ButtonVariant } from "./Button";
type PTags = {
  type: string;
  number: number;
  price: number;
};
type InputProps = {
  prices: PTags[];
};
export function CheckoutPanel({ prices }: InputProps) {
  return (
    <Transition
      show={true}
      className="py-6 px-5 flex flex-col gap-4 bg-dark-light rounded-t-3xl"
    >
      <div className="flex flex-col gap-2">
        <p>1x Front-Row this is a price</p>
        <p>1x Front-Row this is a price</p>
        <p>1x Front-Row this is a price</p>
      </div>
      <hr className="mb-4 text-white-dimmed-heavy" />
      <div className="grid grid-cols-3">
        <div>
          <p className="text-description">Total Price</p>
          <p className="text-title">54$ 64$</p>
        </div>
        <div className="col-span-2">
          <Button variant={ButtonVariant.primary} label="Book Tickets" />
        </div>
      </div>
    </Transition>
  );
}
