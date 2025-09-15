import { Navigate, useParams } from "react-router";

const ProtectedRoute = ({ children }) => {
  const { token } = useParams();

  // Validasi token sederhana
  if (!token || token !== "haha") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
