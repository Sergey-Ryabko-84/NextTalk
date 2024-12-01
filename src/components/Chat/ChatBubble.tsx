"use client";

import { useContext } from "react";
import { RoomContext, UserContext } from "../../context";
import { IMessage } from "../../types/chat";

export const ChatBubble: React.FC<{ message: IMessage }> = ({ message }) => {
  const { peers } = useContext(RoomContext);
  const { userId } = useContext(UserContext);

  const author = message.author && (peers[message.author].userName || "unidentified");
  const userName = author || "Anonymous";
  const isSelf = message.author === userId;
  const time = new Date(message.timestamp).toLocaleTimeString();

  return (
    <div className={`flex ${isSelf ? "justify-end" : "justify-start"} mb-2`}>
      <div className={`bg-${isSelf ? "blue" : "gray"}-100 p-3 rounded-lg`}>
        <p>{message.content}</p>
        <div className="text-xs text-gray-500 text-right">{time}</div>
      </div>
      <div className="text-xs text-gray-700 mt-1 text-right">{isSelf ? "You" : userName}</div>
    </div>
  );
};
