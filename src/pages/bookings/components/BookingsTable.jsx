import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../../data/apiCabins";
import SpinnerLoading from "../../../components/ui/SpinnerLoading";
import ErrorMessage from "../../../components/ui/ErrorMessage";
import BookingsTableRow from "./BookingsTableRow";

export default function BookingsTable({ bookings }) {
  return (
    <>
      <div className="relative overflow-x-auto rounded-[5px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className=" text-gray-600 uppercase bg-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Cabin
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Guest
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((el, index) => (
              <BookingsTableRow item={el} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
