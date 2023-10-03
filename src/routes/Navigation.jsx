import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import BlogList from "../pages/blog/BlogList";
import Protected from "./Protected";

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/blog/list"
          element={
            <Protected>
              <BlogList />
            </Protected>
          }
        />
      </Routes>
    </>
  );
};

export default Navigation;
