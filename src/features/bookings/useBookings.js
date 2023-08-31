import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/config";

export default function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const filterValue = searchParams.get("status");

  // FILTER
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : {
          field: "status",
          value: filterValue,
        };

  //SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  const {
    isLoading,
    data: { data: bookings, count } = {},
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // PREFETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.fetchQuery({
      queryKey: ["bookings", filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });

  return { isLoading, bookings, error, count };
}
