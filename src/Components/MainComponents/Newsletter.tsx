export const Newsletter = () => {
  return (
    <div className="">
      {/* Mobile section */}
      <div className="flex flex-col justify-center  w-[90%] mx-auto py-20 lg:hidden">
        {/* mobile Tittles */}
        <div className=" flex flex-col justify-center items-center text-center py-[7px]">
          <h3 className="text-xl text-firstText font-GraphikBold font-bold">
            At your fingertips
          </h3>
          <h2 className="text-firstText font-Graphik text-5xl sm:text-6xl lg:text-5xl ">
            Newsletter
          </h2>
          <h4 className="text-secondText font-Graphik text-[28px] ">
            Most calendars are designed for teams. Slate is designed for
            freelancers
          </h4>
        </div>
        {/* image MObile */}
        <div className="mx-auto max-w-full p-5 mt-[59px] mb-[59px]">
          <img
            src="/photos/newsMobile.png"
            alt="Photo"
            className="object-contain"
          />
        </div>
        {/* subscribe section */}
        <div className="flex flex-col justify-center text-center">
          {/* header */}
          <h3 className="text-firstText font-Graphik text-xl md:text-2xl font-bold mb-2.5">
            Subscribe to our Newsletter
          </h3>
          {/* title */}
          <span className="text-secondText font-Graphik font-medium text-lg  md:text-xl">
            Available exclusivery on Figmaland
          </span>
        </div>
        {/* input email and button */}
        <div className="flex flex-col justify-center w-full py-6 text-center gap-3">
          <input
            type="email"
            className="bg-[#F4F4F4] border border-[#E8E8E8] rounded-4xl text py-5 pl-[35px] w-full outline-0"
            placeholder="Your Email . . ."
          />
          <span className="bg-Primary font-Graphik text-xl py-4 px-16 md:px-17 lg:px-18 xl:px-20 rounded-[35px] max-w-full text-white cursor-pointer ">
            Subscribe
          </span>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex w-[90%] justify-center mx-auto gap-x-[50px]">
        <div className="flex justify-center items-center">
          <img src="/photos/newsDesktop.png" alt="news" />
        </div>
        {/* right side */}
        <div className="flex flex-col justify-center">
          {/* head section */}
          <div className="flex flex-col items-start gap-y-[17px] mb-3.5">
            <span className="text-firstText text-xl font-GraphikBold font-bold">
              At your fingertips
            </span>
            <h2 className="text-5xl text-firstText font-Graphik py-2">
              Lightning fast <br />
              prototyping
            </h2>
          </div>
          {/* main and email box */}
          <div className="flex flex-col gap-x-3 justify-center">
            <h3 className="text-firstText text-xl font-GraphikBold font-bold leading-7">
              Subscribe to our Newsletter
            </h3>
            <p className="text-lg text-secondText font-Graphik ">
              Available exclusivery on Figmaland
            </p>
            {/* input email and button */}
            <div className="flex justify-center w-full py-6 text-center gap-3">
              <input
                type="email"
                className="bg-[#F4F4F4] border border-[#E8E8E8] rounded-4xl text py-5 pl-[35px] w-full outline-0"
                placeholder="Your Email . . ."
              />
              <span className="bg-Primary w-1/2 font-Graphik text-xl py-[19px] px-[38px] rounded-[35px] text-white cursor-pointer ">
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
