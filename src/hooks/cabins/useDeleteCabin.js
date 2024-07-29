//

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../data/apiCabins";
import toast from "react-hot-toast";

export default function useDeleteCabin() {
  const queryClient = useQueryClient();

  const {
    mutate: mutateDeleteCabin,
    isLoading: isDeleting,
    data,
  } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("Cabin Deleted Successfuly");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, mutateDeleteCabin };
}
