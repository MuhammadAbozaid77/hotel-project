import { useState } from "react";
import CabinTable from "./components/CabinTable";
import CreateCabinModal from "./components/modal/CreateCabinModal";

export default function Cabins() {
  const [showAddModal, setShowAddModal] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center mb-[20px] bg-white py-[20px] px-5">
        <h1 className="font-semibold text-[20px]"> Cabins </h1>
        <span
          className=" p-2 rounded-md shadow bg-emerald-500 text-white font-semibold"
          onClick={() => setShowAddModal(true)}
        >
          Add New Cabin
        </span>
      </div>
      <CabinTable />

      {showAddModal && <CreateCabinModal />}
    </>
  );
}
