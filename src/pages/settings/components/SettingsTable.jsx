import Container from "../../../components/ui/Container";
import SettingTableRow from "./SettingTableRow";

export default function SettingsTable({ settings }) {
    console.log(settings);
  return (
    <>
      <Container>
        <div className="relative overflow-x-auto rounded-[5px]">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className=" text-gray-600 uppercase bg-white border-b h-[100px] ">
              <tr className="">
                <th scope="col" className="px-6 py-3 text-center">
                  img
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Cabin
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Capacity
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Discount
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Edit
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {settings?.map((el, index) => (
                <SettingTableRow item={el} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}
