import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabin, isPending: isPendingEdit } = useMutation({
    mutationFn: ({ newData, id }) => createEditCabin(newData, id),

    onSuccess: () => {
      toast.success("Cabin Updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => {
      toast.err(err);
    },
  });

  return { updateCabin, isPendingEdit };
}
