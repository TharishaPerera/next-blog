import Link from "next/link";
import Table from "../components/Table";

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
        <Link
          href="/admin/new"
          className="bg-black text-white text-sm font-medium hover:bg-gray-700 rounded-lg px-7 py-2 dark:bg-white dark:hover:bg-gray-300 dark:text-black "
        >
          New Post
        </Link>
      </div>
      <div>
        <Table data={data} />
      </div>
    </>
  );
};

export default Posts;
