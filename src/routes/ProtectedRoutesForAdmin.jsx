import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoutesForAdmin = ({ children }) => {
  const Navigate = useNavigate();
  const admin = JSON.parse(localStorage.getItem("user"));
  const adminEmail = "admin@gmail.com";

  useEffect(() => {
    if (admin?.user?.email !== adminEmail) {
      Navigate("/login");
    }
  }, [admin, Navigate]);
  return children;
};
