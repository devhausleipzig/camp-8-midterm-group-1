import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type EmojiLib =
  | "Romance"
  | "Crime"
  | "History"
  | "Action"
  | "Documentary"
  | "Horror"
  | "Adventure"
  | "Drama"
  | "Music"
  | "Animation"
  | "Family"
  | "Mystery"
  | "Comedy"
  | "Fantasy"
  | "Science Fiction"
  | "Thriller"
  | "Unknown";
type Emoji = {
  name: string;
  icon: string;
};
export const emojiIcons: Record<string, Emoji> = {
  "28": {
    name: "Action",
    icon: "🧨",
  },
  "12": {
    name: "Adventure",
    icon: "💎",
  },
  "16": {
    name: "Animation",
    icon: "🦁",
  },
  "35": {
    name: "Comedy",
    icon: "🤣",
  },
  "80": {
    name: "Crime",
    icon: "🚔",
  },
  "99": {
    name: "Documentary",
    icon: "🎥",
  },
  "18": {
    name: "Drama",
    icon: "🎭",
  },
  "10751": {
    name: "Family",
    icon: "👪",
  },
  "14": {
    name: "Fantasy",
    icon: "🦄",
  },
  "36": {
    name: "History",
    icon: "⏳",
  },
  "27": {
    name: "Horror",
    icon: "🔪",
  },
  "10402": {
    name: "Music",
    icon: "🎧",
  },
  "9648": {
    name: "Mystery",
    icon: "🔎",
  },
  "10749": {
    name: "Romance",
    icon: "😍",
  },
  "878": {
    name: "Science Fiction",
    icon: "👽",
  },
  "53": {
    name: "Thriller",
    icon: "😱",
  },
  "420": {
    name: "Unknown",
    icon: "❓",
  },
};

interface InputProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  num: number;
  selected: number[];
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
}
export function Emogi({ num, selected, setSelected, ...props }: InputProps) {
  function clickEm(num: number) {
    if (selected.includes(num)) {
      setSelected((x) => x.filter((y) => y !== num));
    } else {
      setSelected([...selected, num]);
    }
  }
  return (
    <div
      className="gap-2 flex flex-col justify-center w-14"
      onClick={() => clickEm(num)}
    >
      <p
        className={clsx(
          "text-3xl flex justify-center items-center w-14 h-14 rounded-xl",
          selected.includes(num) ? "bg-yellow" : "bg-dark-light"
        )}
      >
        {emojiIcons[num].icon}
      </p>
      <p className="text-white-dimmed text-secondary flex justify-center">
        {emojiIcons[num].name}
      </p>
    </div>
  );
}
