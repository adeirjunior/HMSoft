import mongoose, { Schema, model, models } from "mongoose";
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    name: String,
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      unique: true,
    },
    website: String,
    cnpj: String,
    businessCreatedAt: Date,
    enabled: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = model("user", userSchema);

export default models.user || userModel;
