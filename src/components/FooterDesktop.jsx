import { LeftDesktopFooter } from "./LeftDesktopFooter";
import { MiddleDesktopFooter } from "./MiddleDesktopFooter";
import { RightDesktopFooter } from "./RightDesktopFooter";

export const FooterDesktop = () => {
  return (
    <footer className="footer border-t-2 border-t-[#212121] py-[60px] bg-black px-[40px] hidden md:flex justify-between">
      <LeftDesktopFooter />
      <MiddleDesktopFooter />
      <RightDesktopFooter />
    </footer>
  );
};
