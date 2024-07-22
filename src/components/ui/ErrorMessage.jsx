import { MdOutlineErrorOutline } from "react-icons/md";

export default function ErrorMessage({ ErrorMessage }) {
  return (
    <>
      <div
        className="bg-white border-t-4 border-red-500 rounded-b text-teal-900 px-4 py-3 shadow-md h-[200px] flex justify-center  items-center "
        role="alert"
      >
        <div className="flex gap-2 items-center flex-col">
          <div className="py-1 text-red-500">
            <MdOutlineErrorOutline size={70} />
          </div>
          <div>
            <p className="font-bold capitalize">
              something went wrong , Error Founded
            </p>
            <p className="text-sm">{ErrorMessage}</p>
          </div>
        </div>
      </div>
    </>
  );
}
