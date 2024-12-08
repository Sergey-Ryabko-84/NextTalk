import { RoomProvider } from "@/context";
import React from "react";

export default function RoomLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RoomProvider>{children}</RoomProvider>;
}
