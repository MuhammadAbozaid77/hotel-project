import style from "./SpinnerLoading.module.css";
export default function SpinnerLoading() {
  return (
    <div className="w-[100%] flex justify-center flex-col items-center bg-white h-[300px]">
      <span className={`${style.loader}`}> </span>
      <span className="font-semibold mt-2"> Loading.... </span>
    </div>
  );
}
