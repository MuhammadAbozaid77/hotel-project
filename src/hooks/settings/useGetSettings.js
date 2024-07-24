import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../data/apiSettings";

//
export default function useGetSettings() {
  const { mutate: mutateGetSettings, isLoading: isCreating } = useQuery({
    queryFn: getSettings,
    queryKey: "",
  });

  return { isCreating, mutateGetSettings };
}
