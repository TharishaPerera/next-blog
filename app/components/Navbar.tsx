import Link from "next/link";

import ThemeButton from "./ThemeButton";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <h1 className="text-2xl font-medium tracking-widest">
            BIT<span className="text-teal-500">S</span>BY<span className="text-teal-500">T</span>
            </h1>
          </Link>
        </div>
        <ThemeButton />
      </div>
    </div>
  );
};

export default Navbar;
