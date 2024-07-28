//

import { useSearchParams } from "react-router-dom";

const options = [
  { value: "name-asc", label: "Sort By Name A-Z" },
  { value: "name-desc", label: "Sort By Name Z-A" },
  { value: "regularPrice-asc", label: "Sort By Low Price" },
  { value: "regularPrice-desc", label: "Sort By High Price" },
  { value: "maxCapacity-asc", label: "Sort By Max Capacity" },
  { value: "maxCapacity-desc", label: "Sort By Max Capacity" },
];
export default function SortByCabins() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handelSortedByClick = (arg) => {
    searchParams.set("sortedBy", arg);
    setSearchParams(searchParams);
  };

  return (
    <>
      {/* <form action=""></form> */}
      <select
        onChange={(e) => handelSortedByClick(e?.target?.value)}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {options.map((el, index) => (
          <option value={`${el.value}`} key={index}>
            {el.label}
          </option>
        ))}
      </select>
    </>
  );
}
