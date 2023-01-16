import { MockData } from "../components/MockData";

export function Home() {
  console.log(MockData.availableDays());

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
