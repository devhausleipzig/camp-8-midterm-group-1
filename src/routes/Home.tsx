import { Images } from "../components/2by2Images";
import { NavigationBar } from "../components/NavigationBar";
export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Images number={2}></Images>
      <NavigationBar />
    </div>
  );
}
