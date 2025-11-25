export const Features = () => {
  return (
    <div className="h-screen flex flex-col text-center w-[90%] mx-auto">
      {/* top section */}
      <div className="w-full flex flex-col mx-auto pt-22 px-[66px] mb-[50px]">
        <h2 className="text-5xl font-Graphik text-firstText mb-4 p-2.5">
          Features
        </h2>
        <p className="text-2xl font-Graphik text-secondText ">
          Most calendars are designed for teams.
        </p>
      </div>
      {/* video player and feature sections */}
      <div className="flex flex-col md:flex-col-reverse">
        {/* videoPlayer Mobile*/}
        <div className="relative w-full rounded-4xl shadow-3xl block md:hidden">
          <img
            src="photos/screenMobile.png"
            alt="video player"
            className=" w-full h-full object-cover rounded-4xl "
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-Primary p-6 rounded-full w-15 h-15">
            <img src="/icons/playerMobile.svg" alt="Icon" />
          </div>
        </div>
        {/* videoPlayer Desktop */}
        <div className="relative w-full rounded-3xl shadow-2xl mt-35 hidden md:block">
          <img
            src="/photos/screenDesktop.png"
            alt="Video"
            className="object-contain w-full z-0"
          />

          <div className="absolute flex justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-Primary p-6 rounded-full w-33 h-33">
            <img src="/icons/playerDesktop.svg" alt="icon" />
          </div>
        </div>
        {/* main section */}
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-around lg:justify-between md:gap-x-8 text-center items-center mx-auto mt-[68px] gap-y-[75px]">
          {/* section 1 */}
          <div className="flex flex-col justify-center items-center text-center gap-y-2.5">
            <img src="/icons/feature1.svg" alt="icon" />
            <h4 className="font-Graphik font-bold text-xl text-firstText xs:text-2xl  sm:text-3xl max-w-52 sm:max-w-2xs">
              OpenType features Variable fonts
            </h4>
            <span className="text-secondText font-Graphik text-lg xs:text-xl sm:text-2xl font-light max-w-3xs ">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </span>
          </div>
          {/* section 2 */}
          <div className="flex flex-col justify-center items-center text-center gap-y-2.5">
            <img src="/icons/feature2.svg" alt="icon" />
            <h4 className="font-Graphik font-bold text-xl xs:text-2xl sm:text-3xl text-firstText">
              Design with real data
            </h4>
            <span className="text-secondText font-Graphik text-lg xs:text-xl sm:text-2xl font-light max-w-3xs ">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </span>
          </div>
          {/* section 3 */}
          <div className="flex flex-col justify-center items-center text-center gap-y-2.5">
            <img src="/icons/feature3.svg" alt="icon" />
            <h4 className="font-Graphik font-bold text-xl xs:text-2xl sm:text-3xl text-firstText max-w-44 sm:max-w-48">
              Fastest way to take action
            </h4>
            <span className="text-secondText font-Graphik text-lg  xs:text-xl sm:text-2xl font-light max-w-3xs">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
