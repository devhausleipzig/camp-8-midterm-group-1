type Input = {
  image: string;
  name: string;
  role: string;
};
export default function MoviesActionButton({ image, name, role }: Input) {
  return (
    <div className="flex items-center gap-5">
      <img
        src={image}
        alt=""
        className="h-16 aspect-square object-cover"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src =
            "https://media.istockphoto.com/id/662195074/vector/anonymous-user-icon.jpg?s=612x612&w=0&k=20&c=ZWgmBwLeR2uMBOSbZJ8NC7YDusHjw7YqZQW26LbkYo8=";
        }}
      />
      <div className="flex flex-col">
        <p className=" text-white">{name}</p>
        <p className=" text-white-dimmed text-description">{role}</p>
      </div>
    </div>
  );
}
