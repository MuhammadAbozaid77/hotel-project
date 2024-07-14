import { MdOutlineErrorOutline } from "react-icons/md";

export default function ErrorMessage({ ErrorMessage }) {
  return (
    <>
      <div
        className="bg-red-100 border-t-4 border-red-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
        role="alert"
      >
        <div className="flex gap-2 items-center">
          <div className="py-1 text-red-500">
            <MdOutlineErrorOutline size={50} />
          </div>
          <div>
            <p className="font-bold">something went wrong error </p>
            <p className="text-sm">{ErrorMessage}</p>
          </div>
        </div>
      </div>
    </>
  );
}
