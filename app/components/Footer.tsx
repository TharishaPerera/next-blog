import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date();
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-8 py-7 border-t-2 border-gray-400 dark:border-gray-500">
      <aside>
        <p>Copyright © {year.getFullYear()} - All right reserved by <Link href='https://tharishaperera.com' className="font-medium underline underline-offset-2"> Tharisha Perera</Link></p>
      </aside>
    </footer>
  );
};

export default Footer;
