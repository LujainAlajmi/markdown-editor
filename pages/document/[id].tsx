import { useTitle } from "@/TitleContext";
import Editor from "@/components/Editor";
import { useDocument } from "@/hooks/Documents";
import prisma from "@/lib/prisma";
import { Document } from "@prisma/client";
import { useRouter } from "next/router";
import React from "react";

export default function DocPage() {
  const router = useRouter();
  const { data, isLoading, error } = useDocument(router.query.id as string);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Editor />
    </div>
  );
}

// export async function getServerSideProps({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const { id } = params;
//   const document = await fetch(`http://localhost:3000/api/document/${id}`, {
//     method: "GET",
//   }).then((res) => res.json());

//   if (!document) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       document,
//     }, // will be passed to the page component as props
//   };
// }
