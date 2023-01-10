type EmojiLib =
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
  | "Thriller";

enum Emojis {
  Romance = "😍",
  Crime = "🚔",
  History = "⏳",
  Action = "🧨",
  Documentary = "🎥",
  Horror = "🔪",
  Adventure = "💎",
  Drama = "🎭",
  Music = "🎧",
  Animation = "🦁",
  Family = "👪",
  Mystery = "🔎",
  Comedy = "🤣",
  Fantasy = "🦄",
  "Science Fiction" = "👽",
  Thriller = "😱",
}

export function Emogi({ emojiName }: { emojiName: EmojiLib }) {
  const emoji = Emojis[emojiName];
  return (
    <div className="gap-2 flex flex-col justify-center w-14">
      <p className="text-3xl flex justify-center items-center w-14 h-14 bg-dark-light rounded-xl">
        {emoji}
      </p>
      <p className="text-white-dimmed text-secondary flex justify-center">
        {emojiName}
      </p>
    </div>
  );
}
