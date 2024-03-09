/** @format */

import { loginIsRequiredServer } from "@util/auth";

export default async function Translate() {
  await loginIsRequiredServer();

  return (
    <main>
      <section className="layout">
        <h1>Translate Page</h1>
      </section>
    </main>
  );
}
