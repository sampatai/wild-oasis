import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isPending: isPendingUpdating } = useMutation({
    mutationFn: updateSettingApi,

    onSuccess: () => {
      toast.success("setting Updated successfully");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => {
      toast.err(err);
    },
  });

  return { updateSetting, isPendingUpdating };
}
