import {MongoClient} from "mongodb";
import mongoose from "mongoose";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient>;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: {conn: mongoose.Connection | null, promise: Promise }
}
