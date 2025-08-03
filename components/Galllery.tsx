export default function MyBentoGrid() {
  return (
    <div className="flex flex-row gap-[1.5rem] mt-7">
      {/* Left Column */}
      <div className="flex flex-col gap-[1.5rem]">
        <div style={{padding:"0px", margin:"0px"}} className="shadow-sm  border border-gray-300 w-[12rem] h-[24rem] rounded-2xl overflow-hidden p-[0px] m-[0px] relative">
          <img
            src="https://images.pexels.com/photos/5505125/pexels-photo-5505125.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="shadow-sm border border-gray-300 w-[12rem] h-[9rem] rounded-2xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/5505124/pexels-photo-5505124.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="w-[24rem] h-[34.5rem] flex flex-col justify-between gap-5">
        <div className="h-[24rem] flex flex-col justify-between">
          <div className="flex flex-col h-full justify-between w-full">
            <div className="w-full h-[11.5rem] border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
              <img
                src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full h-[11.5rem] flex flex-row gap-[1.5rem]">
              <div className="w-[12rem] h-[9rem] border shadow-sm border-gray-300 rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/23775788/pexels-photo-23775788.jpeg"
                  alt=""
                  className=" h-full object-cover"
                />
              </div>

              <div className="w-full h-[9rem] border shadow-sm rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2323080/pexels-photo-2323080.jpeg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[9rem] border border-amber-100 shadow-md rounded-2xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/12453933/pexels-photo-12453933.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
