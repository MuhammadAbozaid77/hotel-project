import style from "./SpinnerLoading.module.css";
export default function SmallSpinner() {
  return (
    <div className="w-[100%] flex justify-center flex-col items-center bg-white mb-5 rounded">
      <span className={`${style.loader2}`}> </span>
      <span className="font-semibold"> Loading.... </span>
    </div>
  );
}
