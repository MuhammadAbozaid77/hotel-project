import { useState } from "react";
import useGetSettings from "../../hooks/settings/useGetSettings";
import SpinnerLoading from "./../../components/ui/SpinnerLoading";
import NoDataToDisplay from "./../../components/ui/NoDataToDisplay";
import UpdateSettingModal from "./components/modal/UpdateSettingModal";
import ErrorMessage from "../../components/ui/ErrorMessage";
import SettingsTable from "./components/SettingsTable";
export default function Settings() {
  const { isLoading, settings, error } = useGetSettings();
  // ------------------State------------------
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  // ------------------Return ------------------
  if (isLoading) return <SpinnerLoading />;
  if (error) return <ErrorMessage ErrorMessage={error} />;
  if (settings?.length === 0) return <NoDataToDisplay />;
  return (
    <>
      <div className="flex justify-between items-center bg-white py-[20px] px-5 shadow border-t-[5px] border-gray-500">
        <h1 className="font-semibold text-[20px]"> Settings </h1>
        <span
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          onClick={() => setShowUpdateModal(true)}
        >
          Update Settings
        </span>
      </div>
      <div className="p-5">
        <SettingsTable settings={settings} />
      </div>

      {showUpdateModal && (
        <UpdateSettingModal onClose={() => setShowUpdateModal(false)} />
      )}
    </>
  );
}
