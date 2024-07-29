import TableRow from "./TableRow";
import { useSearchParams } from "react-router-dom";

export default function CabinTable({ cabins }) {
  console.log(cabins);
  const [searchParams] = useSearchParams();
  //  ---------------------------------- Filtered --------------------------------
  const filterValue = searchParams.get("discount") || "all";
  let filterCabinsData;
  // Discount Value
  if (filterValue === "all") filterCabinsData = cabins;
  if (filterValue === "noDiscount")
    filterCabinsData = cabins?.filter((el) => el.discount == 1);
  if (filterValue === "withDiscount")
    filterCabinsData = cabins?.filter((el) => el.discount > 1);
  //  ---------------------------------- Sorted By --------------------------------
  const sortedByValue = searchParams.get("sortedBy") || "";
  // console.log("sortedByValue", sortedByValue);
  const [field, direction] = sortedByValue.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  let sortedCabinsData = filterCabinsData?.sort(
    (a, b) => a[field] - b[field] * modifier
  );

  //
  return (
    <>
      <div className="relative overflow-x-auto rounded-[5px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className=" text-gray-600 uppercase bg-white border-b h-[100px] ">
            <tr className="">
              <th scope="col" className="px-6 py-3 text-center">
                img
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Cabin
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Capacity
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Discount
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Edit
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {filterCabinsData?.map((el, index) => (
              <TableRow item={el} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
