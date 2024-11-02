import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const Auth = () => {
  const [isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const login = localStorage.getItem("status");
    if (token && login) {
      setIsAuth(true);
      return;
    }
    setIsAuth(false);
  }, [isAuth, setIsAuth]);
  if (isAuth === null) {
    return <div className="">loading....</div>;
  }
  if (isAuth) {
    return <Outlet />;
  } else {
    window.location.href = "/login";
  }
};
