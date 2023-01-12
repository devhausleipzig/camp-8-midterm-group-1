type Input = {
  image: string;
  name: string;
  role: string;
};
export default function MoviesActionButton({ image, name, role }: Input) {
  return (
    <div className="flex items-center gap-[1.25rem]">
      <img src={image} alt="" />
      <div className="flex flex-col">
        <p className=" text-white">{name}</p>
        <p className=" text-white-dimmed text-description">{role}</p>
      </div>
    </div>
  );
}
