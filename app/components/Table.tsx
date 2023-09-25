import Link from "next/link";
import { Post } from "../lib/interface";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const tableHeaders = ["NAME", "ACTION"];
let sanityLink = "https://blog-tharisha.sanity.studio/desk/post;";

const Table = ({ data }: { data: Post[] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th></th>
            {tableHeaders.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((post, index) => (
            <tr key={post._id}>
              <th>{index + 1}</th>
              <td>{post.title}</td>
              <td className="flex justify-start gap-3">
                <div>
                  <Link
                    href={sanityLink + post._id}
                    className="btn btn-circle border-none hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    <AiOutlineEdit className="w-5 h-5 " />
                  </Link>
                </div>
                <div>
                  <Link
                    href={sanityLink + post._id}
                    className="btn btn-circle border-none hover:bg-red-200 dark:hover:bg-red-700"
                  >
                    <AiOutlineDelete className="w-5 h-5 " />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
