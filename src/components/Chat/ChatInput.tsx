"use client";

import { useState, useContext } from "react";
import { ChatContext, RoomContext, UserContext } from "../../context";
import { Textarea } from "./Textarea";
import { AiOutlineSend } from "react-icons/ai";

export const ChatInput: React.FC = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useContext(ChatContext);
  const { userId } = useContext(UserContext);
  const { roomId } = useContext(RoomContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(message, roomId, userId);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
      <Textarea
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className="w-full p-3 pl-4 pr-10 rounded-tl-lg rounded-tr-lg border border-gray-300"
      />
      <button
        type="submit"
        className="absolute right-0 bottom-2 p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600">
        <AiOutlineSend size={20} />
      </button>
    </form>
  );
};
