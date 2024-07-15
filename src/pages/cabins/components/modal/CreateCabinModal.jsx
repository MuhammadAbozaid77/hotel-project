import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { createCabin } from "../../../../data/apiCabins";
import toast from "react-hot-toast";

export default function CreateCabinModal({ onClose }) {
  const { register, handleSubmit, reset, getValues } = useForm();
  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("New Cabin Created Successfuly");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      onClose();
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const onSubmit = (data) => {
    mutate(data);
  };
  const onError = (errors) => {
    console.log(errors);
  };

  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className="fixed inset-0 z-10 w-screen overflow-y-auto bg-gray-700/70 flex justify-center items-center"
        onClick={() => onClose()}
      >
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="border w-[400px] p-5  bg-white rounded-lg shadow dark:bg-gray-700"
          onClick={handleModalContentClick}
        >
          <div className="flex items-center justify-between px-2 py-5 border-b rounded-t dark:border-gray-600 mb-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Add New Cabins
            </h3>
            <div
              onClick={() => onClose()}
              className="end-2.5  bg-red-400 duration-150  hover:bg-red-600 text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <IoMdClose size={25} />
            </div>
          </div>

          <div className="w-[100%] mb-3">
            <label
              htmlFor="cabinName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cabin Name
            </label>
            <input
              {...register("name", {
                required: "This Field Is Required",
              })}
              type="text"
              id="cabinName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div className="w-[100%] mb-3">
            <label
              htmlFor="maxCapacity"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Max Capacity
            </label>
            <input
              {...register("maxCapacity", {
                required: "This Field Is Required",
                min: {
                  value: 1,
                  message: "Value Should Be At Least 1",
                },
                // max: {
                //   value: 2,
                //   message: "Value Should Be At Least 2",
                // },
              })}
              type="number"
              id="maxCapacity"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div className="w-[100%] mb-3">
            <label
              htmlFor="regularPrice"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Regular Price
            </label>
            <input
              {...register("regularPrice", {
                required: "This Field Is Required",
                min: {
                  value: 1,
                  message: "Value Should Be At Least 1",
                },
              })}
              type="number"
              id="regularPrice"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div className="w-[100%] mb-3">
            <label
              htmlFor="regularPrice"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Discount
            </label>
            <input
              {...register("discount", {
                required: "This Field Is Required",
                min: {
                  value: 1,
                  message: "Value Should Be At Least 1",
                },
                validate: (value) =>
                  value <= getValues().regularPrice ||
                  "Discount Must Be Less Than regular Price",
              })}
              defaultValue={0}
              type="number"
              id="discount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>

          <div className="w-[100%] mb-3">
            <label
              htmlFor="regularPrice"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Descripition or Website
            </label>
            <textarea
              {...register("descripition")}
              defaultValue={""}
              name=""
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            ></textarea>
          </div>

          <div className="w-[100%] mb-3">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cabin Photo
            </label>

            <input
              {...register("image")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              id="image"
              type="file"
            />
          </div>

          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              disabled={isCreating}
              data-modal-hide="default-modal"
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Cabin
            </button>
            <button
              data-modal-hide="default-modal"
              type="reset"
              className="ms-3 text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
