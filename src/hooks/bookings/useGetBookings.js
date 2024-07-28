import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../data/apiBookings";

export default function useGetBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { isLoading, data: bookings, error };
}
