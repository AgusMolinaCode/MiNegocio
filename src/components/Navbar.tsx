import React from "react";
import { GiArtificialHive } from "react-icons/gi";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex px-2 md:px-20 justify-between items-center pt-5">
      <div>
        <Link href="/">
          <GiArtificialHive
            className="text-[#f7ebc3] hover:rotate-90 duration-500"
            size={60}
          />
        </Link>
      </div>

      <div className="flex gap-3 md:gap-8">
        <Link
          href="https://github.com/AgusMolinaCode"
          target="_blank"
          className="hover:underline underline-offset-2 underline-thickness-2 hover:text-white duration-300"
        >
          <h1 className="text-gray-200 hover:text-white hover:scale-110 duration-300 text-xl">
            GitHub
          </h1>
        </Link>
        <Link
          href="https://www.linkedin.com/in/agustin-molina-/"
          target="_blank"
          className="hover:underline underline-offset-2 underline-thickness-2 hover:text-white duration-300"
        >
          <h1 className="text-gray-200 hover:text-white hover:scale-110 duration-300 text-xl">
            Linkedin
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
