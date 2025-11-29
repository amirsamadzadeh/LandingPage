import { ButtonTryFree } from "../ButtonTryFree";

ButtonTryFree;
export const Testimonials = () => {
  return (
    <div className="w-[90%] mx-auto pt-2.5 px-7">
      {/* Wrapper */}
      <div className="flex flex-col justify-center items-center py-25">
        <h2 className="text-firstText font-Graphik text-5xl mb-20">
          Testimonials
        </h2>
        {/* icon and caption */}
        <div className="flex flex-col gap-y-11 justify-center items-center text-center py-4 mb-20">
          <img src="/icons/ibm.svg" alt="IBM" className="max-w-full" />
          <p className="font-RobotoBold font-bold md:font-normal text-sm sm:text-md md:text-2xl lg:text-3xl lg:p-2.5 w-[280px] sm:w-full text-center  tracking-tight text-secondText p-[9px] ">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>

          {/* profile section */}
          <div className="flex items-center justify-center gap-x-2.5">
            <div>
              <img
                src="/photos/designer.png"
                alt="Designer Profile"
                className="w-10 h-10 lg:hidden"
              />
              <img
                src="/photos/designer2.png"
                alt="Designer Profile"
                className="hidden lg:inline w-12.5 h-12.5 "
              />
            </div>
            {/* titles */}
            <div className="flex flex-col">
              <span className="text-secondText font-RobotoBold font-extrabold sm:font-normal text-[10px] sm:text-[16px]">
                Organize across
              </span>
              <p className="text-xs lg:text-[15px] text-firstText font-RobotoBold">
                Ui designer
              </p>
            </div>
          </div>
        </div>
        {/* button */}
        <span
          className="
        bg-Primary font-Graphik font-bold text-nowrap text-md xs:text-xl
        py-4 px-12 xs:px-12 md:px-17 lg:px-18 xl:px-20 
        rounded-[35px] max-w-full text-white 
        cursor-pointer 
      "
        >
          More Testimonials
        </span>
      </div>
    </div>
  );
};
