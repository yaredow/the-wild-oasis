import { QueryClient, useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useCheckingOut() {
  const navigate = useNavigate();
  const { isLoading: isCheckingOut, mutate: checkout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} has successfuly checked out`);
      QueryClient.invalidateQueries({ active: true });
      navigate("/");
    },
    onError: (data) =>
      toast.error(`There was an error checking out booking #${data.id}`),
  });
  return { checkout, isCheckingOut };
}
