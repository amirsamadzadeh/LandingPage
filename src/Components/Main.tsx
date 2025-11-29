import { Features } from "./MainComponents/Features";
import Organize from "./MainComponents/Organize";
import { Newsletter } from "./MainComponents/Newsletter";
import { Partners } from "./MainComponents/Partners";
import { Testimonials } from "./MainComponents/Testimonials";

export const Main = () => {
  return (
    <div className="flex flex-col">
      <Features />
      <Organize />
      <Newsletter />
      <Partners />
      <Testimonials />
    </div>
  );
};
