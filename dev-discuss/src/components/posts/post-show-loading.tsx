import { Skeleton } from "@nextui-org/react";
import React from "react";

export default function PostShowLoading() {
  return (
    <div className="m-4">
      <div className="my-2">
        <Skeleton className="h-8 w-48 rounded" />
      </div>
      <div className="p-4 border rounded space-y-2">
        <Skeleton className="h-6 w-44 rounded" />
        <Skeleton className="h-6 w-24 rounded" />
        <Skeleton className="h-6 w-77 rounded" />
      </div>
    </div>
  );
}
