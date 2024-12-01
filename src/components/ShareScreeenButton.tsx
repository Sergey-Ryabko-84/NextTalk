"use client";

import { MdPresentToAll } from "react-icons/md";

type Props = {
  onClick: () => void;
};

export const ShareScreenButton = ({ onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="p-2 text-2xl rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <MdPresentToAll />
    </button>
  );
};
