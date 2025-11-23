export const Header = () => {
  return (
    <div className="w-full ">
      <img
        src="./photos/backgroundMobile.png"
        alt="background"
        className="object-cover w-full z-1 absolute z-"
      />
      {/* navbar */}
      <div className="relative flex justify-between w-[90%] z-2 mx-auto p-[17px]">
        <img src="./photos/logo.svg" alt="Logo" />
        <img src="./photos/megaMenu.svg" alt="Menu" />
      </div>
      {/* main */}
      <div className="w-[90%] mx-auto relative flex flex-col z-2 mt-2.5 pt-[50px] items-center justify-center">
        <h2 className="text-white text-5xl font-Graphik mb-[17px] text-center flex-wrap">
          The best products start with Figma
        </h2>
        <h4 className="text-white mb-[60px] text-[28px] font-Graphik text-center max-w-[270px] flex-wrap">
          Most calendars are designed for teams.{" "}
        </h4>
        <span className="bg-Primary font-Graphik text-xl py-4 px-16 rounded-[35px] max-w-full text-white cursor-pointer">
          Try For Free
        </span>
      </div>
    </div>
  );
};
