import Button from "../../ui/Button";
import useCheckout from "./useCheckingOut";

function CheckoutButton({ bookingId }) {
  const { isCheckingOut, checkout } = useCheckout();

  return (
    <Button
      variation="secondary"
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
