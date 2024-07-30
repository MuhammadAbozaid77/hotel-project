import { BsDatabaseAdd } from "react-icons/bs";
import Container from "./Container";

export default function NoDataToDisplay({ handelClick, title }) {
  return (
    <Container>
      <div className="w-[100%] flex justify-center items-center flex-col gap-5 bg-white h-[400px] rounded shadow">
        <span className="text-gray-700">
          <BsDatabaseAdd size={100} />
        </span>
        <h1 className="text-[20px] font-semibold  text-gray-700">
          No Data To Display. Try To Add New Item
        </h1>

        <button
          onClick={handelClick}
          className="text-white capitalize bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          {title}
        </button>
      </div>
    </Container>
  );
}
