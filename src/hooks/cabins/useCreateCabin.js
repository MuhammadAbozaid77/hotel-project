import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNewCabin } from "../../data/apiCabins";
import toast from "react-hot-toast";

export default function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: mutateCreatingCabin, isLoading: isCreating } = useMutation({
    mutationFn: createNewCabin,
    onSuccess: () => {
      toast.success("New Cabin Created Successfuly");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err?.message),
  });

  return { isCreating, mutateCreatingCabin };
}
