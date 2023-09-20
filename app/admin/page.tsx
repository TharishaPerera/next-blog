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
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-semibold leading-9 tracking-widest text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          All Posts
        </h1>
      </div>
      <div>
        <Table data={data} />
      </div>
    </>
  );
};

export default Posts;
