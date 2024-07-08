import logo from "./../../assets/logo.png";
import SidebarNavigation from "./SidebarNavigation";
export default function Sidebar() {
  return (
    <>
      <aside className="bg-white border-r  col-span-1">
        <div className="flex justify-center items-center p-5">
          <img className="w-[90%]" src={logo} alt="" />
        </div>
        <div className="mt-[20px]">
          <SidebarNavigation />
        </div>
      </aside>
    </>
  );
}
