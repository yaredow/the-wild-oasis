import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";
import { toast } from "react-hot-toast";

export default function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: () => updateSettingApi(),
    onSuccess: () => {
      toast.success("Settings updated successfuly");
      queryClient.invalidateQueries({ queryKey: ["setttings"] });
    },
    onError: () => {
      toast.error("Settings could not be edited");
    },
  });
  return { isUpdating, updateSetting };
}
