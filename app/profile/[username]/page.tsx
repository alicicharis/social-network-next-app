import Home from "@/components/home/Home";
import React from "react";

const ProfilePage = ({
  params: { username },
}: {
  params: { username: string };
}) => {
  return <Home />;
};

export default ProfilePage;
