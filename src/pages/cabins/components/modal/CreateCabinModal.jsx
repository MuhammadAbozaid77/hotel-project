import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
export default function CreateCabinModal({ onClose }) {
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <>
      <div
        className="fixed inset-0 z-10 w-screen overflow-y-auto bg-gray-700/70 flex justify-center items-center"
        onClick={() => onClose()}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
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
              {...register("name")}
              type="text"
              // name="cabinName"
              id="cabinName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name"
              required
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
              {...register("maxCapacity")}
              type="number"
              // name="maxCapacity"
              id="maxCapacity"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name"
              required
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
              {...register("regularPrice")}
              type="number"
              // name="regularPrice"
              id="regularPrice"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name"
              required
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
              {...register("discount")}
              defaultValue={0}
              type="number"
              // name="discount"
              id="discount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name"
              required
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
              data-modal-hide="default-modal"
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
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
