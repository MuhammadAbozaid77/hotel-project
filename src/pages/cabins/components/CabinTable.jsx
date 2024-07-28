import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../../data/apiCabins";
import SpinnerLoading from "../../../components/ui/SpinnerLoading";
import TableRow from "./TableRow";
import ErrorMessage from "../../../components/ui/ErrorMessage";
import NoDataToDisplay from "../../../components/ui/NoDataToDisplay";

export default function CabinTable() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  if (isLoading) {
    return <SpinnerLoading />;
  }
  if (error) {
    return (
      <>
        <ErrorMessage ErrorMessage={error?.message} />
      </>
    );
  }

  if (cabins?.length === 0) {
    return <NoDataToDisplay />;
  }

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
            {cabins?.map((el, index) => (
              <TableRow item={el} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
