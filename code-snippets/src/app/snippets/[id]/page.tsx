import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as actions from "@/actions";

interface SnippetShowPageProps {
  params: {
    id: string;
  };
}
export default async function SnippetShowPage(props: SnippetShowPageProps) {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve("Snippet");
    }, 2000)
  );

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div className="flex m-4 justify-between items-center">
      <h1 className="text-xl font-bold"> {snippet.title}</h1>
      <div className="flex gap-4">
        <Link
          className="p-2 border rounded"
          href={`/snippets/${snippet.id}/edit`}
        >
          Edit
        </Link>
        <form action={deleteSnippetAction}>
          <button className="p-2 border rounded">Delete</button>
        </form>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
