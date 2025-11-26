import { Features } from "./MainComponents/Features";
import Organize from "./MainComponents/Organize";
import { Newsletter } from "./MainComponents/Newsletter";
export const Main = () => {
  return (
    <div className="flex flex-col">
      <Features />
      <Organize />
      <Newsletter />
    </div>
  );
};
