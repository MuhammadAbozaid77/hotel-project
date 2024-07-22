//

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins } from "../data/apiCabins";
import toast from "react-hot-toast";

export default function useDeleteCabin() {
  const queryClient = useQueryClient();

  const {
    mutate: mutateDeleteCabin,
    isLoading: isDeleting,
    data,
  } = useMutation({
    mutationFn: deleteCabins,
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
