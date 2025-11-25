import { Features } from "./MainComponents/Features";
import Organize from "./MainComponents/Organize";

export const Main = () => {
  return (
    <div className="flex flex-col">
      <Features />
      <Organize />
    </div>
  );
};
