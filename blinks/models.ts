import { Schema, model } from "mongoose";

const option = {
  timestamps: true,
};

const schema = new Schema<any>(
  {
    walletAddress: {
      type: String,
      required: true,
      unique: true,
    },

    deleted: {
      type: Boolean,
      default: false,
    },
  },
  option
);

export const userModel = model("Users", schema);
