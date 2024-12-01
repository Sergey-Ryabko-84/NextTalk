"use client";

import { useEffect, useRef } from "react";

type Props = {
  stream?: MediaStream;
  muted?: boolean;
  userName?: string;
};

export const VideoPlayer = ({ stream, muted = false, userName = "" }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="relative w-full pt-[75%]">
      <div className="absolute inset-0">
        <video ref={videoRef} autoPlay muted={muted} className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 p-2 bg-black bg-opacity-50 text-white text-sm rounded">
          {userName}
        </div>
      </div>
    </div>
  );
};
