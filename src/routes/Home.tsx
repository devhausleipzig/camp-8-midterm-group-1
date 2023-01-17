import { BookingLabel } from "../components/BookingLabel";
import { NavigationBar } from "../components/NavigationBar";
export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <NavigationBar />
      <BookingLabel type={"selected"} label={"selected"} />
      <BookingLabel type={"unselected"} label={"can "} />
      <BookingLabel type={"disabled"} label={"cannot"} />
    </div>
  );
}
