import { Screening } from "../components/MockData";

export function Home() {
  const data = new Screening();
  console.log(data.showings[0].isFull());

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
