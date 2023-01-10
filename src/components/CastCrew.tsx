import clsx from "clsx";

type input = {
  input:string
}
export function CastCrew({input}:input) {
  return (
    <div className="flex justify-between">
      <p className={clsx("w-40 h-6 text-body border-2 rounded-md flex justify-center items-center", input=="Cast" ? "text-white border-white bg-white-dimmed" : "text-white-dimmed bg-dark-light border-dark-light")}>
        Cast
      </p>
      <p className={clsx("w-40 h-6 text-body border-2 rounded-md flex justify-center items-center", input==)}>
        Crew
      </p>
    </div>
  );
}
