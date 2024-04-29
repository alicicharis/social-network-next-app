import { getSSRSession } from "@/lib/get-server-session";
import { redirect } from "next/navigation";

import SignIn from "@/components/SignIn";

const Signin = async () => {
  const { user } = await getSSRSession();

  if (user) redirect("/profile/1");

  return (
    <section className="flex flex-col justify-center items-center h-screen px-4">
      <SignIn />
    </section>
  );
};

export default Signin;
