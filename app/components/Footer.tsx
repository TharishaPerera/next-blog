import Link from "next/link";
import React from "react";
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsInstagram, BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  const year = new Date();
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content mt-8 py-7 border-t-2 border-gray-400 dark:border-gray-500 gap-y-4">
      <aside>
        <p>Copyright © {year.getFullYear()} - All right reserved by <Link href='https://tharishaperera.com' className="font-medium underline underline-offset-2"> Tharisha Perera</Link></p>
      </aside>
      <ul className="flex ">
        <li>
          <Link className="" href="#"><AiOutlineLinkedin className="w-6 h-6 rounded-lg hover:-translate-y-1 duration-300" /></Link>
        </li>
        <li>
          <Link className="" href="#"><BsGithub className="w-5 h-5 rounded-md hover:-translate-y-1 mx-2 duration-300" /></Link>
        </li>
        <li>
          <Link className="" href="#"><FaUserAlt className="w-5 h-5 rounded-md hover:-translate-y-1 mx-2 duration-300" /></Link>
        </li>
        <li>
          <Link className="" href="#"><BsFacebook className="w-5 h-5 rounded-md hover:-translate-y-1 mx-2 duration-300" /></Link>
        </li>
        <li>
          <Link className="" href="#"><BsInstagram className="w-5 h-5 rounded-md hover:-translate-y-1 duration-300" /></Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
