"use client";

import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ws } from "@/lib";
import { ChatContext, RoomContext, UserContext } from "@/context";
import { PeerState } from "@/reducers";
import {
  CallEndButton,
  Chat,
  ChatButton,
  RoomHeader,
  Screen,
  ShareScreenButton,
  ToggleAudioButton,
  ToggleVideoButton,
} from "@/components";

export const Room = () => {
  const { id } = useParams<{ id: string }>();
  const [numberOfParticipants, setNumberOfParticipants] = useState(1);

  const {
    stream,
    peers,
    shareScreen,
    screenSharingId,
    setRoomId,
    handleCameraToggle,
    handleAudioToggle,
    isCameraOn,
    isAudioOn,
  } = useContext(RoomContext);

  const { userName, userId } = useContext(UserContext);
  const { toggleChat } = useContext(ChatContext);

  useEffect(() => {
    if (stream && id) ws.emit("join-room", { roomId: id, peerId: userId, userName });
  }, [id, userId, stream, userName]);

  useEffect(() => {
    setRoomId(id || "");
  }, [id, setRoomId]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [screenSharingId]: sharing, ...peersToShow } = peers;

  useEffect(() => {
    setNumberOfParticipants(
      Object.values(peersToShow as PeerState).filter((peer) => !!peer.stream)?.length + 1
    );
  }, [peersToShow]);

  return (
    <div className="flex flex-col min-h-screen ">
      <RoomHeader id={id} numberOfParticipants={numberOfParticipants} />

      <div className="flex flex-grow gap-4 m-1">
        <Screen peersToShow={peersToShow} />
        <Chat />
      </div>

      <div className="fixed bottom-0 w-full flex items-center justify-center gap-2 py-2 bg-white border-t-2 border-gray-300">
        <ToggleVideoButton onClick={handleCameraToggle} isCameraOn={isCameraOn} />
        <ToggleAudioButton onClick={handleAudioToggle} isAudioOn={isAudioOn} />
        <ShareScreenButton onClick={shareScreen} />
        <ChatButton onClick={toggleChat} />
        <CallEndButton />
      </div>
    </div>
  );
};
