"use client";

import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";
import { GrNewWindow } from "react-icons/gr";
import { useEffect, useState } from "react";
import CategoriesTable from "@/app/components/CategoriesTable";
import Loader from "@/app/components/Loader";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const Categories = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const { name } = formData;

      const response = await fetch(`${API_URL}/categories`, {
        method: "POST",
        body: JSON.stringify({
          name,
        }),
        headers: {
          "content-type": "application/json",
        },
      })

      if(response.ok) {
        setFormData({
          name: ''
        })
      }

      // to fetch data again
      fetch(`${API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loader />
  if (!data) return <p>No profile data</p>

  return (
    <>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 flex justify-between items-center align-middle">
        <h1 className="text-3xl font-semibold leading-9 tracking-widest text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          CATEGORIES
        </h1>
        <div className="flex gap-x-2">
          <Link
            href="/admin"
            className="bg-black text-white text-sm font-medium hover:bg-gray-700 rounded-lg px-2 py-2 dark:bg-white dark:hover:bg-gray-300 dark:text-black "
          >
            <MdArrowBackIosNew className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mb-20">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 w-full items-center justify-center"
        >
          <input
            type="text"
            name="name"
            placeholder="CATEGORY NAME"
            className="input input-bordered w-full"
            value={formData.name}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-black text-white text-md font-medium tracking-widest hover:bg-gray-700 rounded-lg px-7 py-3 dark:bg-white dark:hover:bg-gray-300 dark:text-black "
          >
            {isLoading ? "LOADING" : "CREATE"}
          </button>
        </form>
      </div>
      <div>
        <CategoriesTable data={data} />
      </div>
    </>
  );
};

export default Categories;
