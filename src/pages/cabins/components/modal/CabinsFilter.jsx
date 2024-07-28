import { useSearchParams } from "react-router-dom";

const options = [
  { filterField: "all", label: "All" },
  { filterField: "noDiscount", label: "No Discount" },
  { filterField: "withDiscount", label: "With Discount" },
];

export default function CabinsFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handelFilterClick = (arg) => {
    searchParams.set("discount", arg);
    setSearchParams(searchParams);
  };
  return (
    <>
      <div className="flex  justify-between items-center gap-2">
        {options.map((el, index) => (
          <button
            key={index}
            className=" px-3 py-1 font-semibold hover:bg-gray-300 duration-150 rounded-md"
            onClick={() => handelFilterClick(el.filterField)}
          >
            {el.label}
          </button>
        ))}
      </div>
    </>
  );
}
