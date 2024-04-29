import Home from "@/components/home/Home";

import { getSSRSession } from "@/lib/get-server-session";
import { redirect } from "next/navigation";

const ProfilePage = async ({
  params: { username },
}: {
  params: { username: string };
}) => {
  const { user } = await getSSRSession();

  if (!user) redirect("/signin");

  return <Home />;
};

export default ProfilePage;
