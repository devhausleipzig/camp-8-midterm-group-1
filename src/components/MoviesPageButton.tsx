import clsx from "clsx";

type InputProps = {
  inputNumber: number;
  setInputNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default function MoviesPageButton({
  inputNumber,
  setInputNumber,
}: InputProps) {
  function movies(iconNumber: number) {
    return (
      <button
        className={clsx(
          "w-8 h-8 rounded-sm text-dark",

          inputNumber == iconNumber ? " bg-yellow" : " bg-white-dimmed"
        )}
        onClick={() => {
          setInputNumber(iconNumber);
        }}
      >
        {String(iconNumber + 1)}
      </button>
    );
  }
  return (
    <>
      <div className="flex w-screen justify-around">
        {movies(0)}
        {movies(1)}
        {movies(2)}
        {movies(3)}
        {movies(4)}
      </div>
    </>
  );
}
