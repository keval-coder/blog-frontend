import { Navigate } from "react-router-dom";

const Protected = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const access_token = localStorage.getItem("authToken");
  if (!access_token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Protected;
