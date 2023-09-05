import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isLoading: isLoging, mutate: login } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user", user.user]);
      navigate("/dashboard", { replace: true });
    },

    onError: (err) => {
      console.error("ERROR", err);
      toast.error("The provided email or password are incorrect");
    },
  });

  return { isLoging, login };
}
