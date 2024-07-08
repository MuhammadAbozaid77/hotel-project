import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="border shadow-xl p-5 flex justify-center items-center flex-col rounded-lg w-[500px]">
        <h1 className="text-slate-400 font-semibold text-[100px]">404</h1>
        <h1 className="text-slate-400 font-semibold text-[30px]">
          Page Not Found
        </h1>
        <button
          className=" p-3 shadow rounded-lg bg-blue-500 text-white"
          onClick={() => navigate("/")}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
}
