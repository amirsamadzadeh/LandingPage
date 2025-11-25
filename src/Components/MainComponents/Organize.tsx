import { ButtonTryFree } from "../ButtonTryFree";

const Organize = () => {
  return (
    <div className="flex flex-col w-[90%] mx-auto lg:py-[226px] lg:flex-row lg:justify-between items-center justify-center text-center py-12.5 px-2.5 mt-20 ">
      {/* titles */}

      <div className="flex flex-col text-center items-center justify-center lg:items-start lg:text-start lg:justify-start lg:w-1/2 mb-15 lg:mb-0">
        <h2 className="font-Graphik text-5xl sm:text-6xl lg:text-5xl text-firstText w-[355px]  mb-8  text-center lg:text-start">
          Fastest way to organize
        </h2>
        <span className="font-Graphik text-secondText w-64 mb-20 text-[28px] sm:text-3xl max-w-[285px] lg:hidden">
          Most calendars are designed for teams.
        </span>
        <span className="hidden lg:block font-Graphik text-secondText max-w-[532px] mb-15 text-[28px]">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </span>
        <ButtonTryFree />
      </div>
      {/* laptop image */}
      <img src="/photos/mcbookDesktop.png" alt="Laptop" className="lg:w1/2" />
    </div>
  );
};

export default Organize;
