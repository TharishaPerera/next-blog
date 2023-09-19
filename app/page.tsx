import Link from "next/link";

import { Post } from "./lib/interface";
import { client } from "./lib/sanity";
import FormatDate from "./lib/dateFormatter";
import PaginationControls from "./components/Pagination";

export const revalidate = 1;

async function getData() {
  const query = "*[_type == 'post']";
  const data = await client.fetch(query);
  return data;
}

const HomePage = async ({ searchParams, } : { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const page = searchParams['page'] ?? '1'
  const per_page = searchParams['per_page'] ?? '7'

  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)

  const data = (await getData()) as Post[];

  // slice data for pagination
  const entries = data.slice(start, end)

  return (
    <div className="divide-y divide-gray-700 dark:divide-gray-200">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-semibold leading-9 tracking-widest text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          LATEST
        </h1>
      </div>

      <ul>
        {entries.map((post) => (
          <li key={post._id} className="py-4">
            <Link href={`/post/${post.slug.current}`} prefetch>
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 p-5 rounded-lg bg-neutral-50 dark:bg-gray-700 dark:shadow-gray-600 shadow-lg">
                <div className="flex flex-row xl:flex-col justify-between xl:h-full">
                  <p className="text-base font-semibold leading-6 text-teal-500">
                    {FormatDate(new Date(post._createdAt))}
                  </p>
                  <p className="text-sm font-medium leading-6 text-teal-500 badge badge-ghost rounded-md px-4 py-3 mb-2">
                    {post.read}
                  </p>
                </div>

                <div className="space-y-3 xl:col-span-3">
                  <div>
                    <h3 className="text-2xl font-semibold leading-8 tracking-wide text-gray-900 dark:text-gray-100">
                      {post.title}
                    </h3>
                  </div>
                  <p className="prose max-w-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    {post.overview}
                  </p>
                </div>
              </article>
            </Link>
          </li>
        ))}
      </ul>
      <PaginationControls hasNextPage={end < data.length} hasPrevPage={start > 0} />
    </div>
  );
};

export default HomePage;
