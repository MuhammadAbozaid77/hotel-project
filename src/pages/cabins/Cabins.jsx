import { useState } from "react";
import CabinTable from "./components/CabinTable";
import CreateCabinModal from "./components/modal/CreateCabinModal";

export default function Cabins() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center bg-white py-[20px] px-5 shadow border-t-[5px] border-gray-500">
        <h1 className="font-semibold text-[20px]"> Cabins </h1>
        <div className="">
          <span
            className="mx-1 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={() => setShowAddModal(true)}
          >
            Add New Cabin
          </span>
          <span
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setShowFilterModal(true)}
          >
            Filter-Sort
          </span>
        </div>
      </div>
      <div className="p-5">
        <CabinTable />
      </div>

      {showAddModal && (
        <CreateCabinModal onClose={() => setShowAddModal(false)} />
      )}
      {showFilterModal && (
        // <CreateCabinModal onClose={() => setShowAddModal(false)} />
        <>"Hello"</>
      )}
    </>
  );
}
