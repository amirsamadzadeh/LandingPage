export const Footer = () => {
  return (
    <div className="bg-firstText w-full ">
      <div className="flex flex-col lg:flex-row lg:justify-between w-[90%] py-[107px] md:py-22 lg:py-[150px] lg:px-18 xl:px-25 mx-auto">
        {/* names and link */}
        <div className="flex flex-col md:flex-row md:justify-around gap-[73px]   md:px-10 ">
          {/* link 1 */}
          <div className="flex flex-col">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-xl text-white  font-GraphikBold text-center md:text-start  mb-[15px] py-2.5">
              Pages
            </h3>
            {/* links */}
            <div className="flex flex-col items-center gap-4 md:items-start">
              <span className="text-[15px] xs:text-md sm:text-lg md:text-sm font-Graphik text-white cursor-pointer">
                Home
              </span>
              <span className="text-[15px] xs:text-md sm:text-lg md:text-sm font-Graphik text-white cursor-pointer">
                Product
              </span>
              <span className="text-[15px] xs:text-md sm:text-lg md:text-sm font-Graphik text-white cursor-pointer">
                Pricing
              </span>
              <span className="text-[15px] xs:text-md sm:text-lg md:text-sm font-Graphik text-white cursor-pointer">
                About
              </span>
              <span className="text-[15px] xs:text-md sm:text-lg md:text-sm font-Graphik text-white cursor-pointer">
                Contact
              </span>
            </div>
          </div>
          {/* link 2 */}
          <div className="flex flex-col">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-xl text-white  font-GraphikBold text-center md:text-start mb-[15px] py-2.5">
              Tomothy
            </h3>
            {/* links */}
            <div className="flex flex-col items-center gap-4 md:items-start ">
              <span className="text-[15px] xs:text-md sm:text-lg md:text-sm font-Graphik text-white cursor-pointer">
                Eleanor Edwards
              </span>
              <span className="text-[15px] xs:text-md sm:text-lg md:text-sm font-Graphik text-white cursor-pointer">
                Julie Henry
              </span>
              <span className="text-[15px] xs:text-md sm:text-lg md:text-sm font-Graphik text-white cursor-pointer">
                Johnny Murphy
              </span>
              <span className="text-[15px] xs:text-md sm:text-lg md:text-sm font-Graphik text-white cursor-pointer">
                Gregory Mccoy
              </span>
              <span className="text-[15px] xs:text-md sm:text-lg md:text-sm font-Graphik text-white cursor-pointer">
                Marvin Mckinney
              </span>
            </div>
          </div>
          {/* link 3 */}
          <div className="flex flex-col">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-xl text-white  font-GraphikBold text-center md:text-start  mb-[15px] py-2.5">
              Jane Black
            </h3>
            {/* links */}
            <div className="flex flex-col items-center gap-4 md:items-start">
              <span className="text-[15px] xs:text-md sm:text-lg md:text-sm font-Graphik text-white cursor-pointer">
                Jennie Cooper
              </span>
              <span className="text-[15px] xs:text-md sm:text-lg md:text-sm font-Graphik text-white cursor-pointer">
                Julie Henry
              </span>
              <span className="text-[15px] xs:text-md sm:text-lg md:text-sm font-Graphik text-white cursor-pointer">
                Johnny Murphy
              </span>
              <span className="text-[15px] xs:text-md sm:text-lg md:text-sm font-Graphik text-white cursor-pointer">
                Gregory Mccoy
              </span>
              <span className="text-[15px] xs:text-md sm:text-lg md:text-sm font-Graphik text-white cursor-pointer">
                Marvin Mckinney
              </span>
            </div>
          </div>
        </div>
        {/* adress  and social media icons */}
        <div>
          <div className="flex flex-col  items-start lg:items-start mt-[76px] lg:mt-0  xs:mt-10 ">
            {/* adresses */}
            <div className="flex flex-col gap-2.5 xs:hidden lg:flex">
              {/* adress  */}
              <div className="flex items-center  gap-2.5">
                <img
                  src="/icons/footer/location.svg"
                  alt="Location"
                  className="size-10"
                />
                <span className="text-whitw font-Graphik text-sm  text-white cursor-pointer text-wrap">
                  7480 Mockingbird Hill undefined
                </span>
              </div>
              {/* numbers */}
              <div className="flex items-center gap-2.5 ">
                <img
                  src="/icons/footer/phone.svg"
                  alt="Phone"
                  className="size-10 "
                />

                <span className="font-Graphik text-sm  text-white cursor-pointer">
                  (239) 555-0108
                </span>
              </div>
            </div>
            {/* social media icons */}
            <div className="flex w-full justify-center items-center gap-6 mt-2.5 py-5   lg:mb-0 cursor-pointer">
              <img src="/icons/footer/tweeter.svg" alt="Tweeter" />
              <img src="/icons/footer/facebook.svg" alt="FaceBook" />
              <img src="/icons/footer/linkedin.svg" alt="Linkedin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
