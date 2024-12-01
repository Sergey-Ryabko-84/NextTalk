"use client";

import { useRouter } from "next/navigation";
import { MdCallEnd } from "react-icons/md";

export const CallEndButton = () => {
  const { push } = useRouter();

  return (
    <button
      onClick={() => push("/")}
      className="p-3 rounded-full bg-red-600 hover:bg-red-700 text-white focus:ring-2 focus:ring-red-500"
      aria-label="End Call">
      <MdCallEnd className="text-2xl" />
    </button>
  );
};
