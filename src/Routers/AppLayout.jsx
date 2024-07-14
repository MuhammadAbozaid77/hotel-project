import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

export default function AppLayout() {
  return (
    <>
      <div className="grid h-[100vh] grid-cols-6">
        <Sidebar />
        <div className="col-span-5 overflow-auto">
          <Header />
          <main className="bg-stone-100 min-h-[100vh] p-5 my-0 mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
