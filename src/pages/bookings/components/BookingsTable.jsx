import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../../data/apiCabins";
import SpinnerLoading from "../../../components/ui/SpinnerLoading";
import ErrorMessage from "../../../components/ui/ErrorMessage";
import BookingsTableRow from "./BookingsTableRow";

export default function BookingsTable() {
  // const {
  //   isLoading,
  //   data: cabins,
  //   error,
  // } = useQuery({
  //   queryKey: ["cabins"],
  //   queryFn: getCabins,
  // });
  const error = true;
  // if (isLoading) {
  //   return <SpinnerLoading />;
  // }
  if (error) {
    return (
      <>
        <ErrorMessage ErrorMessage={error?.message} />
      </>
    );
  }

  return (
    <>
      {/* <div className="relative overflow-x-auto rounded-[5px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className=" text-gray-600 uppercase bg-gray-300">
            <tr>
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
              <BookingsTableRow item={el} key={index} />
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
}
