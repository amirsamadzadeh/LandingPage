export const ContactUs = () => {
  return (
    <div className="pt-25">
      {/* wrapper */}
      <div className="">
        {/* mobile version */}
        <div className="flex flex-col lg: w-[90%] mx-auto pt-[50px] pb-[52px] mb-[99px] lg:hidden">
          {/* head */}
          <div className="flex flex-col items-center text-center">
            <h2 className="p-2.5 font-Graphik text-5xl text-firstText mb-[7px]">
              Contact Us
            </h2>
            <h4 className="font-Graphik text-[28px] text-secondText p-2.5">
              Most calendars are designed for teams.{" "}
            </h4>
          </div>
          {/* social media icons */}
          <div className="flex my-[50px] gap-8 justify-center">
            <img
              src="/icons/contactUs/tweeter.svg"
              alt="tweeter"
              className="p-1"
            />
            <img
              src="/icons/contactUs/facebook.svg"
              alt="facebook"
              className="p-1"
            />
            <img
              src="/icons/contactUs/linkedin.svg"
              alt="linkedin"
              className="p-1"
            />
          </div>
          {/* adress  number and email*/}
          <div className="flex flex-col py-[18px] px-[4.5px] xs:px-1.5 sm:px-3 md:px-5 mb-[50px]">
            {/* address */}
            <div className="flex gap-2.5">
              <img src="/icons/contactUs/location.svg" alt="Location" />
              <h5 className="p-2.5 text-secondText font-Graphik xs:tracking-tighter ">
                6386 Spring St undefined Anchorage, Georgia 12473 United States
              </h5>
            </div>
            {/* number */}
            <div className="flex gap-2.5">
              <img src="/icons/contactUs/phone.svg" alt="phone" />
              <h5 className="p-2.5 text-secondText font-Graphik xs:tracking-tighter">
                (843) 555-0130
              </h5>
            </div>
            {/* email */}
            <div className="flex gap-2.5">
              <img src="/icons/contactUs/email.svg" alt="email" />
              <h5 className="p-2.5 text-secondText font-Graphik xs:tracking-tighter">
                willie.jennings@example.com
              </h5>
            </div>
          </div>
          {/* form section */}
          <div className="flex flex-col shadow-xl justify-center items-center border border-stroke rounded-[20px] py-[52px] sm:mx-3 ">
            <h3 className="text-firstText font-GraphikBold text-xl sm:2xl md:3xl">
              Contact Us
            </h3>
            {/* form section */}
            <form
              action="#"
              className="flex flex-col justify-start items-start gap-[45px] mt-[45px] w-full px-[25px] "
            >
              <input
                type="text"
                placeholder="Your Name"
                className="outline-none bg-[#F5F5F5] text-black border-[#E8E8E8] rounded-[39px] py-[19px] pl-5 w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="outline-none bg-[#F5F5F5] text-black border-[#E8E8E8] rounded-[39px] py-[19px] pl-5 w-full"
              />
              <textarea
                placeholder="Your Message"
                className="outline-none py-[23px] px-5  bg-[#F5F5F5] w-full min-h-50 textarea-fixed text-black border-[#E8E8E8] "
              />
              <button className="inline will-change-contents bg-Primary text-white items-start rounded-[35px] py-[18px] px-12 cursor-pointer  ">
                Send
              </button>
            </form>
          </div>
        </div>
        {/* desktop */}
        <div className="hidden lg:flex lg:flex-col w-[90%] mx-auto mb-[52px]">
          {/* head */}
          <div className="flex flex-col items-center text-center">
            <h2 className="p-2.5 font-Graphik text-5xl text-firstText mb-[7px]">
              Contact Us
            </h2>
            <h4 className="font-Graphik text-[28px] text-secondText p-2.5">
              Most calendars are designed for teams.{" "}
            </h4>
          </div>
          {/* form section/address/location/social medias */}
          <div className="flex gap-12.5 mt-12.5 pb-12.5">
            {/* form section */}
            <div className="flex w-[40%] flex-col shadow-2xl justify-center items-center border border-stroke rounded-[20px] py-20 px-12.5 ">
              <h3 className="text-firstText font-GraphikBold text-xl sm:2xl md:3xl">
                Contact Us
              </h3>
              {/* form section */}
              <form
                action="#"
                className="flex flex-col justify-start items-start gap-[45px] mt-[45px] w-full  "
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="outline-none bg-[#F5F5F5] text-black border-[#E8E8E8] rounded-[39px] py-[19px] pl-5 w-full"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="outline-none bg-[#F5F5F5] text-black border-[#E8E8E8] rounded-[39px] py-[19px] pl-5 w-full"
                />
                <textarea
                  placeholder="Your Message"
                  className="outline-none py-[23px] px-5  bg-[#F5F5F5] w-full min-h-50 textarea-fixed text-black border-[#E8E8E8] "
                />
                <button className="inline will-change-contents bg-Primary text-white items-start rounded-[35px] py-[18px] px-12 cursor-pointer  ">
                  Send
                </button>
              </form>
            </div>
            {/* address location social media*/}
            <div className="flex justify-between flex-col w-[60%] ">
              {/* address top section */}
              <div className="flex gap-[15px]">
                {/* address */}
                <div className="flex flex-col items-center text-wrap  gap-2.5">
                  <img
                    src="/icons/contactUs/location.svg"
                    alt="Location"
                    className="w-8 h-8"
                  />
                  <h5 className="p-2.5 text-secondText font-Graphik tracking-tightest text-center ">
                    6386 Spring St undefined Anchorage, Georgia 12473 United
                    States
                  </h5>
                </div>
                {/* number */}
                <div className="flex flex-col items-center  gap-2.5">
                  <img
                    src="/icons/contactUs/phone.svg"
                    alt="phone"
                    className="w-8 h-8"
                  />
                  <h5 className="p-2.5 text-secondText font-Graphik  text-nowrap">
                    (843) 555-0130
                  </h5>
                </div>
                {/* email */}
                <div className="flex flex-col items-center  tracking-tight gap-2.5">
                  <img
                    src="/icons/contactUs/email.svg"
                    alt="email"
                    className="w-8 h-8"
                  />
                  <h5 className="p-2.5 text-secondText font-Graphik xs:tracking-tighter">
                    willie.jennings@example.com
                  </h5>
                </div>
              </div>
              {/* location on map */}
              <div className=" mx-auto ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1227.0636223631407!2d9.898689363236464!3d50.71922222179114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a344ffdd458f0f%3A0xde4c6bba72e381fb!2sRasdorf%20Marktplatz!5e0!3m2!1sfa!2s!4v1764857953382!5m2!1sfa!2s"
                  width="600"
                  height="400"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="mx-auto"
                ></iframe>
              </div>
              {/* social media icons */}
              <div className="flex my-[50px] gap-8 justify-start items-end">
                <img
                  src="/icons/contactUs/tweeter.svg"
                  alt="tweeter"
                  className="p-1 w-8 h-8"
                />
                <img
                  src="/icons/contactUs/facebook.svg"
                  alt="facebook"
                  className="p-1 w-8 h-8"
                />
                <img
                  src="/icons/contactUs/linkedin.svg"
                  alt="linkedin"
                  className="p-1 w-8 h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
