import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettings } from "../../data/apiSettings";
import toast from "react-hot-toast";

export default function useUpdateSettings() {
  const queryClient = useQueryClient();
  const { mutate: mutateUpdateSettings, isPending: isUpdating } = useMutation({
    mutationFn: updateSettings,
    onSuccess: () => {
      toast.success("Settings Updated Successfuly");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => toast.error(err?.message),
  });
  return { isUpdating, mutateUpdateSettings };
}
