"use client";

import { useContext } from "react";
import { ChatContext } from "../../context";
import { IMessage } from "../../types/chat";
import { ChatBubble } from "./ChatBubble";
import { ChatInput } from "./ChatInput";

export const Chat: React.FC = () => {
  const { chat } = useContext(ChatContext);

  return (
    <div className="flex flex-col justify-between h-full bg-white" data-testid="chat">
      <div className="overflow-y-auto flex-grow">
        {chat.messages.map((message: IMessage) => (
          <ChatBubble
            message={message}
            key={message.timestamp + (message?.author || "anonymous")}
          />
        ))}
      </div>
      <ChatInput />
    </div>
  );
};
