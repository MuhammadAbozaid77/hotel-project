import React from "react";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import FormInput from "../../../../components/ui/inputs/FormInput";
import useUpdateSettings from "../../../../hooks/settings/useUpdateSettings";

export default function UpdateSettingModal({ onClose }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { isUpdating, mutateUpdateSettings } = useUpdateSettings();
  const onSubmit = (formObject) => {
    console.log("Hello", formObject);
    mutateUpdateSettings();
  };
  return (
    <>
      <div
        className="fixed inset-0 z-10 w-screen overflow-y-auto bg-gray-700/90 flex justify-center items-center"
        onClick={() => onClose()}
      >
        <form
          className="border w-[400px] p-5  bg-white rounded-lg shadow dark:bg-gray-700"
          onSubmit={handleSubmit(onSubmit)}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex items-center justify-between px-2 py-5 border-b rounded-t dark:border-gray-600 mb-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Update Setting
            </h3>
            <div
              onClick={() => onClose()}
              className="end-2.5  bg-red-400 duration-150  hover:bg-red-600 text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <IoMdClose size={25} />
            </div>
          </div>

          <FormInput
            label={"Minimun Nights Bookings"}
            error={errors?.regularPrice?.message}
          >
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
              // defaultValue={item?.regularPrice}
              //   disabled={isCreating}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </FormInput>

          <FormInput
            label={"Maximum Nights Bookings"}
            error={errors?.regularPrice?.message}
          >
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
              // defaultValue={item?.regularPrice}
              //   disabled={isCreating}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </FormInput>

          <FormInput
            label={"Maximum Guests Bookings"}
            error={errors?.regularPrice?.message}
          >
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
              // defaultValue={item?.regularPrice}
              //   disabled={isCreating}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </FormInput>

          <FormInput
            label={"BreakFast Price"}
            error={errors?.regularPrice?.message}
          >
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
              // defaultValue={item?.regularPrice}
              //   disabled={isCreating}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </FormInput>

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
        </form>
      </div>
    </>
  );
}
