import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const currentPath = useLocation().pathname;
  const isSignInPage = currentPath === "/signin";

  if (!isAuthenticated && !isSignInPage) {
    return <Navigate to="/signin" replace />;
  }

  if (isAuthenticated && isSignInPage) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
