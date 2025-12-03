export const Pricing = () => {
  return (
    <div className="bg-[#252B42] pt-2.5 px-7 xsm:px-10 sm:px-28 md:px-38 xl:py-25 xl:px-0 xl:mx-0  mx-[13.5px]">
      {/* wrapper */}
      <div className="flex flex-col xl:w-[90%] mx-auto">
        {/* header and titles */}
        <div className="flex flex-col mx-auto text-center  mt-25 mb-20">
          {/* header */}
          <h2 className="p-2.5 mb-[7px] font-Graphik text-5xl text-white">
            Pricing
          </h2>
          <h4 className="p-2.5 font-Graphik text-[28px] text-white">
            Most calendars are designed for teams.{" "}
          </h4>
        </div>
        {/* cart sections */}
        <div
          className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:auto-rows-auto
                lg:justify-center xl:grid-cols-3 gap-[50px] py-[18px] xl:py-0 mb-25 w-full h-full"
        >
          {/* first cart */}
          <div className=" flex flex-col bg-white border border-stroke rounded-[10px] py-10  xl:min-h-[610px]">
            {/* head titles */}
            <div className="flex flex-col justify-center items-center text-center ">
              <h3 className="text-xl font-GraphikBold text-firstText">FREE</h3>
              <h5 className="font-Graphik text-secondText max-w-36">
                Organize across all apps by hand
              </h5>
            </div>
            {/* price */}
            <div className="flex justify-center items-center my-[30px]">
              <h1 className="text-[74px] font-GraphikBold text-firstText px-2.5">
                0
              </h1>
              <div className="flex flex-col items-start justify-center">
                <h3 className="text-xl font-GraphikBold font-bold text-firstText">
                  $
                </h3>
                <h5 className="font-Graphik text-secondText ">Per Month</h5>
              </div>
            </div>
            {/* links */}
            <div className="flex flex-col justify-center items-center mb-[30px]">
              <span className="p-2.5 text-firstText text-[15px] font-Graphik">
                Link
              </span>
              <span className="p-2.5 text-firstText text-[15px] font-Graphik">
                Link
              </span>
              <span className="p-2.5 text-firstText text-[15px] font-Graphik">
                Link
              </span>
              <span className="p-2.5 text-firstText text-[15px] font-Graphik">
                Link
              </span>
              <span className="p-2.5 text-firstText text-[15px] font-Graphik">
                Link
              </span>
            </div>
            {/* button */}
            <span className="flex justify-center items-center text-white bg-Primary font-Graphik text-md sm:text-lg lg:text-sm xl:text-lg rounded-[35px] py-[18px] px-[70px] xl:px-[75px] xl:w-[255px] mx-10 xl:mx-auto  cursor-pointer ">
              Order Now
            </span>
          </div>
          {/* second cart */}
          <div className=" flex flex-col bg-Primary border border-stroke rounded-[10px] py-10 xl:py-[83px] xl:min-h-[700px]">
            {/* head titles */}
            <div className="flex flex-col justify-center items-center text-center ">
              <h3 className="text-xl font-GraphikBold text-white">STANDARD</h3>
              <h5 className="font-Graphik text-white max-w-36">
                Organize across all apps by hand
              </h5>
            </div>
            {/* price */}
            <div className="flex justify-center items-center my-[30px]">
              <h1 className="text-[74px] font-GraphikBold text-white px-2.5">
                10
              </h1>
              <div className="flex flex-col items-start justify-center">
                <h3 className="text-xl font-GraphikBold font-bold text-white">
                  $
                </h3>
                <h5 className="font-Graphik text-white ">Per Month</h5>
              </div>
            </div>
            {/* links */}
            <div className="flex flex-col justify-center items-center mb-[30px]">
              <span className="p-2.5 text-white text-[15px] font-Graphik">
                Link
              </span>
              <span className="p-2.5 text-white text-[15px] font-Graphik">
                Link
              </span>
              <span className="p-2.5 text-white text-[15px] font-Graphik">
                Link
              </span>
              <span className="p-2.5 text-white text-[15px] font-Graphik">
                Link
              </span>
              <span className="p-2.5 text-white text-[15px] font-Graphik">
                Link
              </span>
            </div>
            {/* button */}
            <span className="flex justify-center items-center text-Primary bg-white font-Graphik text-md sm:text-lg lg:text-sm xl:text-lg rounded-[35px] py-[18px] px-[70px] xl:px-[75px] mx-10 xl:mx-auto xl:w-[255px]  cursor-pointer ">
              Order Now
            </span>
          </div>
          {/* third cart */}
          <div
            className=" flex flex-col lg:col-start-1 lg:col-end-3
 lg:justify-self-center xl:col-start-3 xl:col-end-4
 bg-white border border-stroke rounded-[10px] py-10 lg:w-auto xl:min-h-[610px] xl:w-full"
          >
            {/* head titles */}
            <div className="flex flex-col justify-center items-center text-center ">
              <h3 className="text-xl font-GraphikBold text-firstText">
                BUSINESS
              </h3>
              <h5 className="font-Graphik text-secondText max-w-36">
                Organize across all apps by hand
              </h5>
            </div>
            {/* price */}
            <div className="flex justify-center items-center my-[30px]">
              <h1 className="text-[74px] font-GraphikBold text-firstText px-2.5">
                99
              </h1>
              <div className="flex flex-col items-start justify-center">
                <h3 className="text-xl font-GraphikBold font-bold text-firstText">
                  $
                </h3>
                <h5 className="font-Graphik text-secondText ">Per Month</h5>
              </div>
            </div>
            {/* links */}
            <div className="flex flex-col justify-center items-center mb-[30px]">
              <span className="p-2.5 text-firstText text-[15px] font-Graphik">
                Link
              </span>
              <span className="p-2.5 text-firstText text-[15px] font-Graphik">
                Link
              </span>
              <span className="p-2.5 text-firstText text-[15px] font-Graphik">
                Link
              </span>
              <span className="p-2.5 text-firstText text-[15px] font-Graphik">
                Link
              </span>
              <span className="p-2.5 text-firstText text-[15px] font-Graphik">
                Link
              </span>
            </div>
            {/* button */}
            <span className="flex justify-center items-center text-white bg-Primary font-Graphik text-md sm:text-lg lg:text-sm xl:text-lg rounded-[35px] py-[18px] px-[70px] xl:px-[75px] mx-10 xl:mx-auto  cursor-pointer xl:w-[255px] ">
              Order Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
