import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../data/apiSettings";

//
export default function useGetSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return { isLoading, settings, error };
}
