import Link from "next/link";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const tableHeaders = ["NAME", "ACTION"];

const CategoriesTable = ({ data }: { data: any }) => {
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
          {data.categories.length > 0 &&
            data.categories.map((category: any, index: number) => (
              <tr key={category.id}>
                <th>{index + 1}</th>
                <td className="w-[75%]">{category.name}</td>
                <td className="flex justify-start gap-3">
                  <div>
                    <Link
                      href={"#"}
                      className="btn btn-circle border-none hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      <AiOutlineEdit className="w-5 h-5 " />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={"#"}
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
      {data.categories.length <= 0 && (
        <div className="w-full flex items-center justify-center py-5 underline underline-offset-4 uppercase font-medium">
          No Data
        </div>
      )}
    </div>
  );
};

export default CategoriesTable;
