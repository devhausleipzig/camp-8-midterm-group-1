import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutPanel, PTags } from "../components/CheckoutPanel";

export function SelectSeats() {

  const navigate = useNavigate();
  const [input, setInput] = useState<PTags[]>([]);
  const temporary: PTags = {
    type: "Front",
  };
  const temporary1: PTags = {
    type: "Middle",
  };
  function clickedMe() {
    if (input.length % 2 == 0) {
      setInput([...input, temporary]);
    } else {
      setInput([...input, temporary1]);
    }
  }
  return (
    <div className="text-white relative h-full">
      <div onClick={clickedMe}>Click me to increse</div>
      <h1>Select Seats</h1>
      <div className="absolute bottom-0">
        <CheckoutPanel seats={input} click={() => navigate("./ticket")} />
      </div>
    </div>
  );
}
