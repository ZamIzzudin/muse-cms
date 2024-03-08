/** @format */

import { loginIsRequiredServer } from "@util/auth";
import Button from "@comp/button";
import { getServerSession } from "next-auth";
import { authConfig } from "@util/auth";

export default async function Home() {
  const session = await getServerSession(authConfig);

  await loginIsRequiredServer();
  return (
    <section className="layout">
      <h1>Hello {session?.user?.email}</h1>
      <Button />
    </section>
  );
}
