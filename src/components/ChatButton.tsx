"use client";

import { FaRegCommentDots } from "react-icons/fa";

type Props = {
  onClick: () => void;
};

export const ChatButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-blue-500"
      aria-label="Chat">
      <FaRegCommentDots className="text-2xl text-gray-700" />
    </button>
  );
};
