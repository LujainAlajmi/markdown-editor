import prisma from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      //get user id from email
      const { id } = req.query;

      //find all documents for user
      const documents = await prisma.document.findMany({
        where: {
          id: id as string,
        },
      });

      // Return the document
      res.status(200).json(documents);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }

  try {
    if (req.method === "PUT") {
      const { id } = req.query;
      const { title, content } = req.body;

      const document = await prisma.document.update({
        where: {
          id: id as string,
        },
        data: {
          title,
          content,
        },
      });

      res.status(200).json(document);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }

  try {
    if (req.method === "DELETE") {
      const { id } = req.query;

      const document = await prisma.document.delete({
        where: {
          id: id as string,
        },
      });

      res.status(200).json(document);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
