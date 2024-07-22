import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins } from "../../../../data/apiCabins";
import toast from "react-hot-toast";

export default function DeleteCabinModal({ onClose }) {

    const queryClient = useQueryClient();

    const {
      mutate,
      isLoading: isDeleting,
      data,
    } = useMutation({
      mutationFn: deleteCabins,
      onSuccess: () => {
        toast.success("Cabin Deleted Successfuly");
        queryClient.invalidateQueries({
          queryKey: ["cabins"],
        });
      },
      onError: (err) => toast.error(err.message),
    });

  return (
    <>
      <div
        className="fixed inset-0 z-10 w-screen overflow-y-auto bg-gray-700/90 flex justify-center items-center"
        onClick={() => onClose()}
      >
        <div
          className="border w-[400px] p-5  bg-white rounded-lg shadow dark:bg-gray-700"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              //   disabled={isCreating}
              data-modal-hide="default-modal"
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </button>
            <button
              data-modal-hide="default-modal"
              type="reset"
              className="ms-3 text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
