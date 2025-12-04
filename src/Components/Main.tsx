import { Features } from "./MainComponents/Features";
import Organize from "./MainComponents/Organize";
import { Newsletter } from "./MainComponents/Newsletter";
import { Partners } from "./MainComponents/Partners";
import { Testimonials } from "./MainComponents/Testimonials";
import { Pricing } from "./MainComponents/Pricing";
import { ContactUs } from "./MainComponents/ContactUs";
export const Main = () => {
  return (
    <div className="flex flex-col">
      <Features />
      <Organize />
      <Newsletter />
      <Partners />
      <Testimonials />
      <Pricing />
      <ContactUs />
    </div>
  );
};
