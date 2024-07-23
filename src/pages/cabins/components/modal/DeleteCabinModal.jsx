import useDeleteCabin from "../../../../hooks/cabins/useDeleteCabin";
export default function DeleteCabinModal({ onClose, id }) {
  const { isDeleting, mutateDeleteCabin } = useDeleteCabin();

  const handelDelete = () => {
    mutateDeleteCabin(id);
  };
  return (
    <>
      <div
        className="fixed inset-0 z-10 w-screen overflow-y-auto bg-gray-700/90 flex justify-center items-start pt-[50px]"
        onClick={() => onClose()}
      >
        <div
          className="border w-[400px] p-5  bg-white rounded-lg shadow dark:bg-gray-700 h-auto"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex flex-col gap-2 p-5 ">
            <h1 className="text-black text-[30px] font-semibold">
              Delete Cabin
            </h1>
            <h1 className="font-semibold ">
              Are You Sure You Want To Delete This Cabin
            </h1>
          </div>
          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              disabled={isDeleting}
              onClick={() => handelDelete()}
              data-modal-hide="default-modal"
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Delete
            </button>
            <button
              data-modal-hide="default-modal"
              type="reset"
              className="ms-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
