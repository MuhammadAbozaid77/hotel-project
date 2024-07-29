import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import FormInput from "../../../../components/ui/inputs/FormInput";
import { useState } from "react";
import useUpdateCabin from "../../../../hooks/cabins/useUpdateCabin";

export default function EditCabinModal({ onClose, item }) {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: { ...item } });
  const [descripitionText, setDescripitionText] = useState(item?.descripition);

  const { isEditing, mutateEditing } = useUpdateCabin();
  const onSubmit = (data) => {
    mutateEditing({
      UpdatedCabinObject: {
        ...data,
        image: data?.image[0]?.name || data?.image,
        descripition: descripitionText,
      },
      id: item?.id,
    });

    onClose();
    reset();
  };
  const onError = (errors) => {
    // console.log(errors);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-10 w-screen overflow-y-auto bg-gray-700/90 flex justify-center items-center"
        onClick={() => onClose()}
      >
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="border w-[400px] p-5  bg-white rounded-lg shadow dark:bg-gray-700"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex items-center justify-between px-2 py-5 border-b rounded-t dark:border-gray-600 mb-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Edit Cabin
            </h3>
            <div
              onClick={() => onClose()}
              className="end-2.5  bg-red-400 duration-150  hover:bg-red-600 text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <IoMdClose size={25} />
            </div>
          </div>

          <FormInput label={"cabinName"} error={errors?.name?.message}>
            <input
              {...register("name", {
                required: "This Field Is Required",
              })}
              type="text"
              id="cabinName"
              // defaultValue={item?.name}
              //   disabled={isCreating}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </FormInput>

          <FormInput
            label={"Max Capacity"}
            error={errors?.maxCapacity?.message}
          >
            <input
              {...register("maxCapacity", {
                required: "This Field Is Required",
                min: {
                  value: 1,
                  message: "Value Should Be At Least 1",
                },
              })}
              type="number"
              id="maxCapacity"
              // defaultValue={item?.maxCapacity}
              //   disabled={isCreating}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </FormInput>

          <FormInput
            label={"Regular Price"}
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

          <FormInput label={"Discount"} error={errors?.discount?.message}>
            <input
              {...register("discount", {
                required: "This Field Is Required",
                min: {
                  value: 1,
                  message: "Value Should Be At Least 1",
                },
                validate: (value) => {
                  const regularPrice = getValues("regularPrice");
                  return (
                    value <= Number(regularPrice) ||
                    "Discount Must Be Less Than Regular Price"
                  );
                },
              })}
              //   disabled={isCreating}
              // defaultValue={item?.discount}
              type="number"
              id="discount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </FormInput>

          <FormInput
            label={"Descripition or Website"}
            error={errors?.descripition?.message}
          >
            <textarea
              {...register("descripition")}
              name=""
              id="descripition"
              // defaultValue={descripitionText}
              onChange={(e) => setDescripitionText(e.target.value)}
              //   disabled={isCreating}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            ></textarea>
          </FormInput>

          <FormInput label={"Cabin Photo"} error={errors?.image?.message}>
            <input
              {...register("image")}
              // type="file"
              id="image"
              //   disabled={isCreating}
              // defaultValue={item?.image}
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
