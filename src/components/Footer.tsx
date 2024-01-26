import { Link } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="flex h-[60px] w-full items-center justify-around bg-secondary">
      <Link to="home" smooth={true} duration={400}>
        <AiOutlineArrowUp
          className="cursor-pointer rounded-md border-2 border-highlight text-text duration-300 hover:bg-highlight"
          size={30}
        />
      </Link>
    </footer>
  );
}
