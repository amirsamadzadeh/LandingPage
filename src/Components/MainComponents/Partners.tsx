import { ButtonTryFree } from "../ButtonTryFree";
export const Partners = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[90%] mx-auto py-[50px]">
      {/* Head Tittles */}
      <div className="flex flex-col text-center">
        <h2 className="text-firstText text-5xl font-Graphik p-2.5">Partners</h2>
        <p className="text-secondText text-[28px] font-Graphik py-2.5">
          Most calendars are designed for teams. Slate is designed for
          freelancers
        </p>
      </div>
      {/* client section */}
      <div className="py-[50px] px-10  md:p-0 xs:px-7">
        {/* wrapper partners */}
        <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-4 md:grid-rows-2 py-[18px]  gap-y-[30px] md:gap-0  mb-20 md:mt-14">
          {/* partner 1 */}
          <div className="flex flex-col md:grid-rows-4 max-w-full justify-center items-center border border-[#D8D8D8] py-6 px-5 xs:px-14">
            <span className="text-[16px] text-secondText font-Graphik mb-[15px]">
              Client Name
            </span>
            <img src="/icons/partnerSection/google.svg" alt="Google" />
          </div>
          {/* partner 2 */}
          <div className="flex flex-col md:grid-rows-4 max-w-full justify-center items-center border border-[#D8D8D8] py-6 px-5 xs:px-14">
            <span className="text-[16px] text-secondText font-Graphik mb-[15px]">
              Client Name
            </span>
            <img src="/icons/partnerSection/amazon.svg" alt="Google" />
          </div>
          {/* partner 3 */}
          <div className="flex flex-col md:grid-rows-4 max-w-full justify-center items-center border border-[#D8D8D8] py-6 px-5 xs:px-14">
            <span className="text-[16px] text-secondText font-Graphik mb-[15px]">
              Client Name
            </span>
            <img src="/icons/partnerSection/microsoft.svg" alt="Google" />
          </div>
          {/* partner 4 */}
          <div className="hidden md:flex flex-col md:grid-rows-4 max-w-full justify-center items-center border border-[#D8D8D8] py-6 px-5 md:px-14">
            <span className="text-[16px] text-secondText font-Graphik mb-[15px]">
              Client Name
            </span>
            <img src="/icons/partnerSection/uber.svg" alt="Google" />
          </div>
          {/* partner 5 */}
          <div className="hidden md:flex flex-col md:grid-rows-4 max-w-full justify-center items-center border border-[#D8D8D8] py-6 px-5 md:px-14">
            <span className="text-[16px] text-secondText font-Graphik mb-[15px]">
              Client Name
            </span>
            <img src="/icons/partnerSection/dropBox.svg" alt="Google" />
          </div>
          {/* partner 6 */}
          <div className="hidden md:flex flex-col md:grid-rows-4 max-w-full justify-center items-center border border-[#D8D8D8] py-6 px-5 md:px-14">
            <span className="text-[16px] text-secondText font-Graphik mb-[15px]">
              Client Name
            </span>
            <img src="/icons/partnerSection/google.svg" alt="Google" />
          </div>
          {/* partner 7 */}
          <div className="hidden lg:flex flex-col max-w-full justify-center items-center border border-[#D8D8D8] py-6 px-14">
            <span className="text-[16px] text-secondText font-Graphik mb-[15px]">
              Client Name
            </span>
            <img src="/icons/partnerSection/uber.svg" alt="Google" />
          </div>
          {/* partner 8 */}
          <div className="hidden lg:flex flex-col max-w-full justify-center items-center border border-[#D8D8D8] py-6 px-14">
            <span className="text-[16px] text-secondText font-Graphik mb-[15px]">
              Client Name
            </span>
            <img src="/icons/partnerSection/amazon.svg" alt="Google" />
          </div>
        </div>
      </div>
      {/* button */}
      <ButtonTryFree />
    </div>
  );
};
