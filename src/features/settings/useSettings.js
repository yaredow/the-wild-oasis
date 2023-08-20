import { useQueries } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export default function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQueries({
    querykey: ["settings"],
    queryFn: getSettings,
  });
  return { isLoading, error, settings };
}
