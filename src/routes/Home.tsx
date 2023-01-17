import { SelectButton } from "../components/SelectButton";
import { NavigationBar } from "../components/NavigationBar";
export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <NavigationBar />
      <SelectButton variant={"selected"} label={"selected"} />
      <SelectButton variant={"disabled"} label={"cannot"} />
    </div>
  );
}
