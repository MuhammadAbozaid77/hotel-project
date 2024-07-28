export default function BookingsTableRow({ item }) {
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="flex justify-center items-center p-2">{item?.status}</td>
        <td className="text-center  border-gray-200 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {item?.name}
        </td>
        <td className="text-center  border-gray-200 px-6 py-4">
          {item?.startDate} : {item?.endDate}
        </td>
        <td className="text-center  border-gray-200 px-6 py-4">
          {item?.status}
        </td>
        <td className="text-center  border-gray-200 px-6 py-4">
          {item?.totalPrice}
        </td>
      </tr>
    </>
  );
}
