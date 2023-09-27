import Link from "next/link";
import { BiCategory } from "react-icons/bi"
import { HiSquaresPlus } from "react-icons/hi2"

import PostsTable from "../components/PostsTable";
import { Post } from "../lib/interface";
import { client } from "../lib/sanity";

async function getData() {
  const query = "*[_type == 'post']";
  const data = await client.fetch(query);
  return data;
}

const Posts = async () => {
  const data = (await getData()) as Post[];

  return (
    <>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 flex justify-between items-center align-middle">
        <h1 className="text-3xl font-semibold leading-9 tracking-widest text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          ALL POSTS
        </h1>
        <div className="flex gap-x-2">
          <Link
            href="/admin/new"
            className="bg-black text-white text-sm font-medium hover:bg-gray-700 rounded-lg px-2 py-2 dark:bg-white dark:hover:bg-gray-300 dark:text-black "
          >
            <HiSquaresPlus className="w-5 h-5 " />
          </Link>
          <Link
            href="/admin/categories"
            className="bg-black text-white text-sm font-medium hover:bg-gray-700 rounded-lg px-2 py-2 dark:bg-white dark:hover:bg-gray-300 dark:text-black "
          >
            <BiCategory className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <div>
        <PostsTable data={data} />
      </div>
    </>
  );
};

export default Posts;
