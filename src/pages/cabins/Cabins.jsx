import { useState } from "react";
import CabinTable from "./components/CabinTable";
import CreateCabinModal from "./components/modal/CreateCabinModal";
import CabinsFilter from "./components/modal/CabinsFilter";
import { FaArrowDownZA } from "react-icons/fa6";
import SortByCabins from "./components/modal/SortByCabins";
import useGetCabins from "../../hooks/cabins/useGetCabins";
import SpinnerLoading from "../../components/ui/SpinnerLoading";
import ErrorMessage from "../../components/ui/ErrorMessage";
import NoDataToDisplay from "../../components/ui/NoDataToDisplay";

export default function Cabins() {
  const [showAddModal, setShowAddModal] = useState(false);

  const { isLoading, cabins, error } = useGetCabins();

  //  ---------------------------------- Return --------------------------------
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

  return (
    <>
      <div className="flex justify-between items-center bg-white shadow border-t border-gray-200 px-[10px] mx-auto lg:px-[20px] py-[30px]">
        <h1 className="font-semibold text-[20px]"> Cabins </h1>
        <div className="flex justify-center items-center  gap-3">
          <span className="flex items-center gap-2">
            <FaArrowDownZA size={25} />
            <SortByCabins />
          </span>
          <span className="border font-medium rounded-md text-sm px-2 py-2 text-center">
            <CabinsFilter />
          </span>

          <span
            className=" text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            onClick={() => setShowAddModal(true)}
          >
            Add New Cabin
          </span>
        </div>
      </div>

      <div className="">
        <CabinTable cabins={cabins} />
      </div>

      {showAddModal && (
        <CreateCabinModal onClose={() => setShowAddModal(false)} />
      )}
    </>
  );
}
