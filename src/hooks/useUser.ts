import { useContext, useEffect } from "react";
import { UserContext } from "@/context";

export function useUser() {
  const { userName, setUserName } = useContext(UserContext);

  useEffect(() => {
    const cookieUserName = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userName="))
      ?.split("=")[1];

    if (cookieUserName) {
      if (userName === cookieUserName) return;
      setUserName(decodeURIComponent(cookieUserName));
      localStorage.setItem("userName", decodeURIComponent(cookieUserName));
    } else {
      localStorage.removeItem("userName");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
