"use client";

import { MdVideocam, MdVideocamOff } from "react-icons/md";

type Props = {
  onClick: () => void;
  isCameraOn?: boolean;
};

export const ToggleVideoButton = ({ onClick, isCameraOn = false }: Props) => {
  return (
    <button
      onClick={onClick}
      className="p-2 text-2xl rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
      {isCameraOn ? <MdVideocam /> : <MdVideocamOff />}
    </button>
  );
};
