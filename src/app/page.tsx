import { getServerSession } from "next-auth";
import { authOptions } from "./utils/authOptions";
import { redirect } from "next/navigation";
import Sidebar from "./components/Sidebar";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/api/auth/signin");
  } else {
    redirect("/chat");
  }

  return <></>;
}
