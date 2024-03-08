/** @format */
import { loginIsRequiredServer } from "@util/auth";

export default async function Access() {
  await loginIsRequiredServer();

  return (
    <section className="layout">
      <h1>Access Page</h1>
    </section>
  );
}
