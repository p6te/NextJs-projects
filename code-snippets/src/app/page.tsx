import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const first = snippets[1];
  return (
    <div>
      Home Page
      <div>{first.title}</div>
    </div>
  );
}
