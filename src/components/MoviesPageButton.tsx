import clsx from "clsx";

type InputProps = {
  inputNumber: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default function MoviesPageButton({
  inputNumber,
  setNumber,
}: InputProps) {
  function Movies(iconNumber: number) {
    return (
      <button
        className={clsx(
          "w-8 h-8 rounded-sm text-dark",

          inputNumber == iconNumber ? " bg-yellow" : " bg-white-dimmed"
        )}
        onClick={() => {
          setNumber(iconNumber);
        }}
      >
        {String(iconNumber + 1)}
      </button>
    );
  }
  return (
    <>
      <div className="flex w-screen justify-around">
        {Movies(0)}
        {Movies(1)}
        {Movies(2)}
        {Movies(3)}
        {Movies(4)}
      </div>
    </>
  );
}
