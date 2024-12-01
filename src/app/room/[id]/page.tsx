import { ChatProvider, RoomProvider, UserProvider } from "@/context";
import { Room } from "@/components";

const RoomPage = () => (
  <UserProvider>
    <RoomProvider>
      <ChatProvider>
        <Room />
      </ChatProvider>
    </RoomProvider>
  </UserProvider>
);

export default RoomPage;
