/** @format */

import { loginIsRequiredServer } from "@util/auth";

export default async function Translate() {
  await loginIsRequiredServer();

  return (
    <section>
      <h1>Translate Page</h1>
    </section>
  );
}
