import {model, Model, models, Schema} from "mongoose";

export interface UserInterface {
  _id: string;
  email: string;
  password: string;
  username: string;
  motherMaidenName: string;
}

const userSchema = new Schema<UserInterface, Model<UserInterface>>({
  email: {type: String},
  password: {type: String},
  username: {type: String},
  motherMaidenName: {type: String},
});
export default (models.User as Model<UserInterface>) ||
  model<UserInterface>("User", userSchema);
