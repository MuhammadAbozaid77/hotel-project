import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashbord from "../pages/dashbord/Dashbord";
import Bookings from "../pages/bookings/Bookings";
import Users from "../pages/users/Users";
import Settings from "../pages/settings/Settings";
import Account from "../pages/account/Account";
import PageNotFound from "../pages/pageNotFound/PageNotFound";
import Login from "../pages/login/Login";
import Cabins from "../pages/cabins/Cabins";
import AppLayout from "./AppLayout";

export default function Navigations() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ----------------- Layouts Routes ------------  */}
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to={"dashbord"} />} />
            <Route path="dashbord" element={<Dashbord />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>
          {/* ----------------- Another Routes ------------  */}
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
