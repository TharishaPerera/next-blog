import Breadcrumb from "@/app/components/Breadcrumb";
import FormatDate from "@/app/lib/dateFormatter";
import { Post } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";
import { urlFor } from "@/app/lib/sanityImageUrl";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 1;

async function getData(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
  const data = await client.fetch(query);
  return data;
}

const SlugPage = async ({ params }: { params: { slug: string } }) => {
  const data = (await getData(params.slug)) as Post;
  const PortableTextComponent = {
    types: {
      image: ({ value }: { value: any }) => (
        <div>
          <Image
            src={urlFor(value).url()}
            alt="Image"
            className="object-cover mx-auto block rounded-lg w-full h-[200px] xs:h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] "
            width={800}
            height={800}
          />
        </div>
      ),
    },
  };

  return (
    <div className="divide-y divide-gray-700 dark:divide-gray-200">
      {/* <Breadcrumb title={data.title} /> */}
      <header className="pt-6 xl:pb-6">
        <div className="space-y-1 text-center">
          <div>
            <h1 className="text-3xl font-bold leading-9 tracking-wide text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {data.title}
            </h1>
          </div>
          <div className="space-y-10">
            <div className="flex flex-row justify-between items-center mt-6 mb-3">
              <p className="text-base font-medium leading-6 text-teal-500 badge badge-ghost rounded-md px-4 py-3">
                {FormatDate(new Date(data._createdAt))}
              </p>
              <p className="text-sm font-medium leading-6 text-teal-500 badge badge-ghost rounded-md px-4 py-3">
                {data.read}
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
            <PortableText
              value={data.content}
              components={PortableTextComponent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugPage;
