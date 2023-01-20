import {NextApiRequest, NextApiResponse} from "next";
import Users from "../../../../models/Users";

export default async function findUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const dataUser = await Users.find({
      email: req.body.email,
      password: req.body.password,
    });
    if (dataUser) {
      console.log(dataUser);
      res.status(200).json({session: true});
    }
    res.status(403).json({error: "Bad imptu"});
  } catch (e) {
    res.status(500).json({error: e});
  }
}
