import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

export default function AppLayout() {
  return (
    <>
      <div className="grid h-[100vh] grid-cols-5">
        <Sidebar />
        <div className="col-span-4 overflow-auto">
          <Header />
          <main className="bg-stone-100 min-h-[100vh] p-5">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}

/* 
  <div>
    <main className="flex justify-between">
      <div className="w-[300px] h-[100vh] bg-slate-200">
        <Sidebar />
      </div>
      <div className="w-[100%] overflow-y-auto">
        <Header />
        <Outlet />
      </div>
    </main>
  </div> 
*/
