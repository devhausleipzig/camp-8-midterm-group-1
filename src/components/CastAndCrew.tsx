import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cast, Credits } from "../types/api";
import { API } from "./API";
import { CastCrew } from "./CastCrew";

export async function castLoader() {
  return API.castAndCrew(500);
}
export function CastAndCrew() {
  const data = useLoaderData() as Credits;
  console.log(data);

  const [selected, setSelected] = useState("cast");
  return (
    <div className="bg-dark h-screen">
      <CastCrew input={selected} setInput={setSelected} />
    </div>
  );
}
