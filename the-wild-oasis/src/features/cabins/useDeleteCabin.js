import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabnApi } from "../../services/apiCabins";

export default function useDeleteCabin() {
  const queryCLient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabnApi,
    onSuccess: () => {
      toast.success("Cabin deleted successfully");
      queryCLient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.err(err);
    },
  });

  return { isDeleting, deleteCabin };
}
