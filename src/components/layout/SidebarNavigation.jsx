import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiCalendar, FiSettings, FiUser } from "react-icons/fi";
import { RiHomeSmileLine } from "react-icons/ri";

export default function SidebarNavigation() {
  return (
    <>
      <nav>
        <ul className="navLinks">
          <li className="border-b text-[18px] hover:bg-gray-200 duration-150 font-semibold">
            <NavLink to={"/dashbord"}>
              <FiHome size={22} />
              <span className="ms-2"> Home</span>
            </NavLink>
          </li>
          <li className="border-b text-[18px] hover:bg-gray-200 duration-150 font-semibold">
            <NavLink to={"/bookings"}>
              <FiCalendar size={22} />
              <span className="ms-2"> Bookings</span>
            </NavLink>
          </li>
          <li className="border-b text-[18px] hover:bg-gray-200 duration-150 font-semibold">
            <NavLink to={"/cabins"}>
              <RiHomeSmileLine size={22} />
              <span className="ms-2"> Cabins</span>
            </NavLink>
          </li>
          <li className="border-b text-[18px] hover:bg-gray-200 duration-150 font-semibold">
            <NavLink to={"/users"}>
              <FiUser size={22} />
              <span className="ms-2"> Users</span>
            </NavLink>
          </li>
          <li className="border-b text-[18px] hover:bg-gray-200 duration-150 font-semibold">
            <NavLink to={"/settings"}>
              <FiSettings size={22} />
              <span className="ms-2"> Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
//
