import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { options } from "../auth/[...nextauth]";
import prisma from "@/lib/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, options);

  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string,
    },
  });

  if (req.method === "POST") {
    const { title, content } = req.body;
    const document = await prisma.document.create({
      data: {
        title,
        content,
        author: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    res.status(200).json(document);
  }
}
