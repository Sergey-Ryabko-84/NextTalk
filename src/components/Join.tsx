"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ws } from "@/lib";
import { Button } from "@/components";

export const Join = () => {
  const [roomId, setRoomId] = useState<string>("");
  const { push } = useRouter();

  const createRoom = () => {
    ws.emit("create-room");
  };

  const joinRoom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push(`/room/${roomId}`);
  };

  return (
    <div className="flex flex-col gap-4 items-center w-96 mx-auto mt-[35vh]">
      {/* <NameInput /> */}
      <Button onClick={createRoom}>Start new meeting</Button>
      <p className="text-gray-500">or</p>
      <form className="w-full flex gap-2 items-center" onSubmit={(e) => joinRoom(e)}>
        <input
          type="text"
          placeholder="room ID"
          onChange={(e) => setRoomId(e.target.value)}
          className="flex-1 p-2  border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-500"
        />
        <Button>Join</Button>
      </form>
    </div>
  );
};
