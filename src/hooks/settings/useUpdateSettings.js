import { useQuery } from "@tanstack/react-query";
import { updateSettings } from "../../data/apiSettings";

export default function useUpdateSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: "settings",
    queryFn: updateSettings,
  });
  return { isLoading, error, settings };
}
