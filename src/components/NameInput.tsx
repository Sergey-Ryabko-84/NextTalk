"use client";

import { useContext } from "react";
import { UserContext } from "../context";

export const NameInput = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  const { userName, setUserName } = useContext(UserContext);

  return (
    <input
      placeholder="Enter your name"
      type="text"
      className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-500"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      {...props}
    />
  );
};
