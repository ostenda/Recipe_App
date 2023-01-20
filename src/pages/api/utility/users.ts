import {NextApiRequest, NextApiResponse} from "next";

import Users from "../../../../models/Users";

export default async function createUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const user = await Users.create(req.body);
    if (user) {
      await user.save();
      res.status(200).redirect("/");
    } else {
      res.status(500).json({error: "Something went wrong"});
    }
  } catch (e) {
    res.status(500).json({"Something went wrong": e});
  }
}
