export const Header = () => {
  return (
    <div className="w-full h-screen aspect-1/5/2">
      {/* background Mobile */}

      <img
        src="./photos/backgroundMobile.png"
        alt="background"
        className="object-fill w-full h-screen z-1 absolute xs:hidden "
      />
      {/* background Desktop */}
      <img
        src="./photos/backgroundDesktop.png"
        alt="background"
        className="object-cover w-full z-1 h-screen absolute hidden xs:block overflow-visible"
      />
      {/* navbar Mobile */}
      <div className="relative flex justify-between w-[90%] z-2 mx-auto p-[17px] lg:hidden">
        <img src="./photos/logo.svg" alt="Logo" />
        <img src="./photos/megaMenu.svg" alt="Menu" />
      </div>
      {/* navbar Desktop */}
      <div className="relative z-2 justify-between w-[90%] mx-auto px-11 py-[50px] hidden lg:flex">
        {/* left side navbar  */}
        <div className="flex justify-around items-center gap-6 cursor-pointer">
          <span className="text-white">Home</span>
          <span className="text-white">Product</span>
          <span className="text-white">Pricing</span>
          <span className="text-white">About</span>
          <span className="text-white">Contact</span>
          {/* and logo */}
          <img src="/photos/LogoDesktop.svg" alt="Logo" />
        </div>
        {/* right side navbar --> social media icons */}
        <div className="flex justify-around items-center gap-6 cursor-pointer ">
          <img
            src="/icons/tweeter.svg"
            alt="tweeter"
            className="cursor-pointer"
          />
          <img
            src="/icons/facebook.svg"
            alt="facebook"
            className="cursor-pointer"
          />
          <img src="/icons/linkedin.svg" alt="linkedin" />
        </div>
      </div>
      {/* main */}
      <div className="w-[90%] mx-auto relative flex flex-col z-2  pt-[50px] items-center justify-center">
        <h1
          className="text-white text-5xl xs:max-w-[350px] sm:max-w-full md:text-5xl lg:text-6xl
         font-Graphik mb-[17px] text-center flex-wrap"
        >
          The best products start with Figma
        </h1>
        <h4 className="text-white mb-[60px] sm:mb-10 text-[28px] font-Graphik text-center max-w-[270px] sm:max-w-full  visible md:hidden flex-wrap">
          Most calendars are designed for teams.
        </h4>
        <h4 className="text-white hidden md:block text-[28px] font-Graphik text-center mb-10 leading-10 font-light">
          Most calendars are designed for teams. Slate is designed for
          freelancers .
        </h4>
        <span className="bg-Primary font-Graphik text-xl py-4 px-16 rounded-[35px] max-w-full text-white cursor-pointer">
          Try For Free
        </span>
      </div>
    </div>
  );
};
