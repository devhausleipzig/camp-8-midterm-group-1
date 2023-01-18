type Input = {
  name: string;
  image: string;
};

export function UserInfo({ name }: Input) {
  return (
    <>
      <div className="flex w-80 justify-between content-between">
        <div className="flex flex-col justify-between">
          <div className="flex items-start flex-row gap-2">
            <div className="text-secondary text-white-dimmed">
              Welcome {name}{" "}
            </div>
            <div>
              <p className="text-sm">👋</p>
            </div>
          </div>

          <div className="text-primary text-white">
            Let's relax and watch a movie!
          </div>
        </div>
        <div>
          <img
            className="w-10 h-10 border rounded-3xl"
            src="https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg"
          />
        </div>
      </div>
    </>
  );
}
