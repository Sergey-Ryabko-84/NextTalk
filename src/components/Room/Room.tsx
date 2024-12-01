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
  ShareScreenButton,
  ToggleAudioButton,
  ToggleVideoButton,
  VideoPlayer,
} from "@/components";

export const Room = () => {
  const { id } = useParams<{ id: string }>();
  const [numberOfParticipants, setNumberOfParticipants] = useState(1);

  const {
    stream,
    screenStream,
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
  const { toggleChat, chat } = useContext(ChatContext);

  useEffect(() => {
    if (stream && id) ws.emit("join-room", { roomId: id, peerId: userId, userName });
  }, [id, userId, stream, userName]);

  useEffect(() => {
    setRoomId(id || "");
  }, [id, setRoomId]);

  const screenSharingVideo =
    screenSharingId === userId ? screenStream : peers[screenSharingId]?.stream;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [screenSharingId]: sharing, ...peersToShow } = peers;

  useEffect(() => {
    setNumberOfParticipants(
      Object.values(peersToShow as PeerState).filter((peer) => !!peer.stream)?.length + 1
    );
  }, [peersToShow]);

  return (
    <div className="flex flex-col min-h-screen gap-4">
      <div className="bg-blue-700 text-white p-4 flex items-center gap-4">
        <span>Room id: {id}</span>
        <button
          onClick={() => navigator.clipboard.writeText(`${id}`)}
          className="text-white font-semibold">
          Copy ID
        </button>
        <span>Number of participants: {numberOfParticipants}</span>
      </div>

      <div className="flex flex-grow">
        {screenSharingVideo ? (
          <div className="w-full">
            <VideoPlayer stream={screenSharingVideo} />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-center w-full">
            {screenSharingId !== userId && (
              <div className="relative">
                <VideoPlayer stream={stream} muted userName={userName} />
              </div>
            )}
            {Object.values(peersToShow as PeerState)
              .filter((peer) => !!peer.stream)
              .map((peer, index) => (
                <div className="relative" key={index}>
                  <VideoPlayer stream={peer.stream} userName={peer.userName} />
                </div>
              ))}
          </div>
        )}

        {chat.isChatOpen && (
          <div className="max-w-[20vw] pl-2 z-10">
            <Chat />
          </div>
        )}
      </div>

      <div className="fixed bottom-0 w-full flex items-center justify-center py-2 bg-white border-t-2 border-gray-300">
        <ToggleVideoButton onClick={handleCameraToggle} isCameraOn={isCameraOn} />
        <ToggleAudioButton onClick={handleAudioToggle} isAudioOn={isAudioOn} />
        <ShareScreenButton onClick={shareScreen} />
        <ChatButton onClick={toggleChat} />
        <CallEndButton />
      </div>
    </div>
  );
};
