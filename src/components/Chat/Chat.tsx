"use client";

import { useContext } from "react";
import { ChatContext } from "../../context";
import { IMessage } from "../../types/chat";
import { ChatBubble } from "./ChatBubble";
import { ChatInput } from "./ChatInput";

export const Chat: React.FC = () => {
  const { chat } = useContext(ChatContext);

  if (!chat.isChatOpen) return;

  return (
    <section className="max-w-[20vw] mb-16 ">
      <div
        className="flex flex-col justify-between h-full rounded-l overflow-hidden"
        data-testid="chat">
        <div className="overflow-y-auto flex-grow px-2">
          {chat.messages.map((message: IMessage) => (
            <ChatBubble
              message={message}
              key={message.timestamp + (message?.author || "anonymous")}
            />
          ))}
        </div>
        <ChatInput />
      </div>
    </section>
  );
};
