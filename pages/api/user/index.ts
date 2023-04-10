// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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

  //get user from db
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email as string,
    },
    include: {
      documents: true,
    },
  });

  res.status(200).json(user);
}
