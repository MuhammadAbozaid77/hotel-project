import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formatCurrency } from "../../../utils/helpers";
import { deleteCabins } from "../../../data/apiCabins";
import SpinnerLoading from "../../../components/ui/SpinnerLoading";
import NoDataToDisplay from "../../../components/ui/NoDataToDisplay";
import toast from "react-hot-toast";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import { useState } from "react";
import EditCabinModal from "./modal/EditCabinModal";
import DeleteCabinModal from "./modal/DeleteCabinModal";
// import DeleteCabinModal from "./modal/DeleteCabinModal";

export default function TableRow({ item }) {
  const [showEditModal, setShowEditModal] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(null);

  // const queryClient = useQueryClient();

  // const {
  //   mutate,
  //   isLoading: isDeleting,
  //   data,
  // } = useMutation({
  //   mutationFn: deleteCabins,
  //   onSuccess: () => {
  //     toast.success("Cabin Deleted Successfuly");
  //     queryClient.invalidateQueries({
  //       queryKey: ["cabins"],
  //     });
  //   },
  //   onError: (err) => toast.error(err.message),
  // });

  // if (isDeleting)
  //   return (
  //     <tr>
  //       <td colSpan="6">
  //         <SpinnerLoading />;
  //       </td>
  //     </tr>
  //   );
  // if (data?.length === 0)
  //   return (
  //     <tr>
  //       <td colSpan="6">
  //         <NoDataToDisplay />;
  //       </td>
  //     </tr>
  //   );

  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="">
          <img src={item?.image} alt="" className="" />
        </td>
        <td className="text-center  border-gray-200 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {item?.name}
        </td>
        <td className="text-center  border-gray-200 px-6 py-4">
          {formatCurrency(item?.maxCapacity)}
        </td>
        <td className="text-center  border-gray-200 px-6 py-4">
          {formatCurrency(item?.regularPrice)}
        </td>
        <td className="text-center  border-gray-200 px-6 py-4">
          {formatCurrency(item?.discount)}
        </td>
        <td className="text-center  border-gray-200 px-6 py-4">
          <button
            onClick={() => {
              setShowEditModal(true);
            }}
            className="shadow w-auto  p-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-150 text-white font-semibold"
          >
            <FaUserEdit size={15} />
          </button>
        </td>
        <td className="text-center  border-gray-200 px-6 py-4">
          <button
            onClick={() => setShowDeleteModal(item?.id)}
            className="shadow w-auto  p-2 rounded-md bg-red-500 hover:bg-red-600 duration-150 text-white font-semibold"
          >
            <FaTrashAlt size={15} />
          </button>
        </td>
      </tr>

      {showEditModal && (
        <EditCabinModal onClose={() => setShowEditModal(false)} item={item} />
      )}

      {showDeleteModal && (
        <DeleteCabinModal
          onClose={() => setShowDeleteModal(false)}
          id={showDeleteModal}
        />
      )}
    </>
  );
}
