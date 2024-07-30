import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { editCabin } from "../../data/apiCabins";

export default function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: mutateEditing, isLoading: isEditing } = useMutation({
    mutationFn: editCabin,
    onSuccess: () => {
      toast.success("Cabin Updated Successfuly");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err?.message),
  });

  return { isEditing, mutateEditing };
}
