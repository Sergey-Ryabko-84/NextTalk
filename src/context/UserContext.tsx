"use client";

import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";

type Props = {
  children: React.ReactNode;
};

interface UserValue {
  userId: string;
  userName: string;
  setUserName: (userName: string) => void;
}

export const UserContext = createContext<UserValue>({
  userId: "",
  userName: "",
  setUserName: () => {},
});

export const UserProvider = ({ children }: Props) => {
  const [userId, setUserId] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const storedUserName = localStorage.getItem("userName");

    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      setUserId(uuidV4());
    }

    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userName", userName);
  }, [userName]);

  useEffect(() => {
    localStorage.setItem("userId", userId);
  }, [userId]);

  return (
    <UserContext.Provider value={{ userId, userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};
