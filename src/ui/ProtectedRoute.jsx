import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { styled } from "styled-components";
import { useEffect } from "react";

const StyledSpinner = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const { isLoading, user, isAuthenticated } = useUser();

  // 3. if there is NO autenticated user, redirect to the login form
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // 2. while loading show a spinner
  if (isLoading)
    return (
      <StyledSpinner>
        <Spinner />
      </StyledSpinner>
    );

  // if (!user) navigate("/login");
  // 4. if there IS  user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
