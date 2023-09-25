"use client";

import { useState } from "react";

const NewPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    overview: "",
    content: "",
    read: "",
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
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 flex justify-between items-center align-middle">
        <h1 className="text-3xl font-semibold leading-9 tracking-widest text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          NEW POST
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center mb-20">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 w-full items-center justify-center"
        >
          <input
            type="text"
            name="title"
            placeholder="TITLE"
            className="input input-bordered w-full"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="overview"
            placeholder="OVERVIEW"
            className="input input-bordered w-full"
            value={formData.overview}
            onChange={handleChange}
          />
          <input
            type="text"
            name="slug"
            placeholder="SLUG"
            className="input input-bordered w-full"
            value={formData.slug}
            onChange={handleChange}
          />
          <input
            type="text"
            name="read"
            placeholder="READ"
            className="input input-bordered w-full"
            value={formData.read}
            onChange={handleChange}
          />
          <textarea
            name="content"
            className="textarea textarea-bordered w-full"
            placeholder="CONTENT"
            value={formData.content}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-black text-white text-sm font-medium tracking-widest hover:bg-gray-700 rounded-lg px-7 py-2 dark:bg-white dark:hover:bg-gray-300 dark:text-black "
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPost;
