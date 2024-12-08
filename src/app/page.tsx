import { Join } from "@/components";
import { RoomProvider } from "@/context";

export default function Home() {
  return (
    <RoomProvider>
      <Join />
    </RoomProvider>
  );
}
