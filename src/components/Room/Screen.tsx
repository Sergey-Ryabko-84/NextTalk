import { VideoPlayer } from "@/components";
import { RoomContext, UserContext } from "@/context";
import { PeerState } from "@/reducers";
import { useContext } from "react";

type Props = {
  peersToShow: PeerState;
};

export const Screen = ({ peersToShow }: Props) => {
  const { userName, userId } = useContext(UserContext);
  const { screenStream, peers, stream, screenSharingId } = useContext(RoomContext);

  const screenSharingVideo =
    screenSharingId === userId ? screenStream : peers[screenSharingId]?.stream;

  return (
    <>
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
          {Object.values(peersToShow)
            .filter((peer) => !!peer.stream)
            .map((peer, index) => (
              <div className="relative" key={index}>
                <VideoPlayer stream={peer.stream} userName={peer.userName} />
              </div>
            ))}
        </div>
      )}
    </>
  );
};
