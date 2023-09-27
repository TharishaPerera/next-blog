"use client";

import Link from "next/link";
import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

const NewPost = () => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 flex justify-between items-center">
        <h1 className="text-3xl font-semibold leading-9 tracking-widest text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          NEW CATEGORY
        </h1>
        <Link
          href="/admin/categories"
          className="bg-black text-white text-sm font-medium hover:bg-gray-700 rounded-lg px-2 py-2 dark:bg-white dark:hover:bg-gray-300 dark:text-black "
        >
          <MdArrowBackIosNew className="w-4 h-4" />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center mb-20">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 w-full items-center justify-center"
        >
          <input
            type="text"
            name="name"
            placeholder="NAME"
            className="input input-bordered w-full"
            value={formData.name}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-black text-white text-md font-medium tracking-widest hover:bg-gray-700 rounded-lg px-7 py-3 dark:bg-white dark:hover:bg-gray-300 dark:text-black "
          >
            CREATE
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPost;
