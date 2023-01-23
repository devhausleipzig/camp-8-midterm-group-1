import { SeatsLocationPrice } from "../components/SeatsLocationPrice";

export function Home() {
  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
      <SeatsLocationPrice type={"Front"} number={0}></SeatsLocationPrice>
    </>
  );
}
