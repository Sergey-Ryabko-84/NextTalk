"use client";

// import { UserProvider } from "@/context";
import { useUser } from "@/hooks";

export const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  useUser();

  return <>{children}</>;
};
