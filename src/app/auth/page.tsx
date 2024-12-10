"use client";

import { useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "@/context";
import { Button } from "@/components";

export default function AuthPage() {
  const { userName, setUserName } = useContext(UserContext);
  const [inputName, setInputName] = useState(userName || "");
  const router = useRouter();

  useEffect(() => {
    if (userName) router.push("/");
  }, [userName, router]);

  const handleLogin = () => {
    if (inputName.trim()) {
      document.cookie = `userName=${encodeURIComponent(inputName)}; path=/;`;
      setUserName(inputName);
      router.push("/");
    }
  };

  console.log("userName", userName);

  return (
    <div className="flex flex-col gap-4 items-center w-96 mx-auto mt-[35vh]">
      <input
        placeholder="Enter your name"
        type="text"
        className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-500"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />
      <Button onClick={handleLogin} disabled={!inputName.trim()}>
        Continue
      </Button>
    </div>
  );
}
