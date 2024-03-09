/** @format */

import { loginIsRequiredServer } from "@util/auth";

export default async function Publish() {
  await loginIsRequiredServer();

  return (
    <main>
      <section className="layout">
        <h1>Publish Page</h1>
      </section>
    </main>
  );
}
