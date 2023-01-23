export function SeatsLegends() {
  return (
    <>
      <div className="flex gap-6 ">
        <div className="flex items-center gap-1">
          <div className=" w-4 h-4 bg- bg-dark-light rounded-full "></div>
          <p className="text-description">Available</p>
        </div>
        <div className="flex items-center gap-3">
          <div className=" w-4 h-4 bg-white rounded-full"></div>
          <p className="text-description  ">Reserved</p>
        </div>
        <div className="flex items-center gap-3">
          <div className=" w-4 h-4 bg-yellow rounded-full "></div>
          <p className="text-description  ">Selected</p>
        </div>
      </div>
    </>
  );
}
