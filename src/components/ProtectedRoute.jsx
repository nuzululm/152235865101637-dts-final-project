import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, loginOnly = true }) => {
  const [user, isLoading] = useAuthState(auth);

  if (!user && loginOnly) {
    return <Navigate to="/login" />;
  }

  if (user && !loginOnly) {
    return <Navigate to="/" />;
  }

  return isLoading ? "" : children;
};

export default ProtectedRoute;
