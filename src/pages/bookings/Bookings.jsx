import { useState } from "react";
import CreateBookings from "./components/modal/CreateBookings";
import BookingsTable from "./components/BookingsTable";

export default function Bookings() {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center bg-white py-[20px] px-5 shadow border-t-[5px] border-gray-500">
        <h1 className="font-semibold text-[20px]"> Bookings </h1>
        <span
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          onClick={() => setShowAddModal(true)}
        >
          Add New Booking
        </span>
      </div>
      <div className="p-5">
        <BookingsTable />
      </div>

      {showAddModal && (
        <CreateBookings onClose={() => setShowAddModal(false)} />
      )}
    </>
  );
}
