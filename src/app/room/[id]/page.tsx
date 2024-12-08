import { ChatProvider } from "@/context";
import { Room } from "@/components";

const RoomPage = () => (
  <ChatProvider>
    <Room />
  </ChatProvider>
);

export default RoomPage;
