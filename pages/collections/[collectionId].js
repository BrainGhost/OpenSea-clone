import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Collection = () => {
  const router = useRouter();
  return (
    <div>
      <Link href="/">
        <h1>
          Hello collections: <span>{router.query.collectionId}</span>{" "}
        </h1>
      </Link>
    </div>
  );
};

export default Collection;
