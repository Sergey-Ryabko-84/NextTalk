import { Join } from "@/components";
import { UserProvider } from "@/context";

export default function Home() {
  return (
    <UserProvider>
      <Join />
    </UserProvider>
  );
}
