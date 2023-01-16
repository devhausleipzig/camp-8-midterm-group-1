import { Days } from "../components/MockData";

export function Home() {
  const data = new Days();
  console.log(data.days);
  console.log(data.days.map((day) => day.isFull()));

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
