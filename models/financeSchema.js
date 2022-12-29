"Use Strict";

const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const publicFinanceSchema = new Schema(
  {
    first_name: {
      type: String,
      trim: true,
      required: true,
    },
    last_name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      match:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      trim: true,
      unique: true,
    },
    city: {
      type: String,
      trim: true,
      required: true,
    },
    state: {
      type: String,
      trim: true,
      required: true,
    },
    zip_code: {
      type: Number,
      min: [10000, "Zip Code is Invalid."],
      max: 99999,
      trim: true,
      required: true,
    },
    gross_income: {
      type: Number,
      trim: true,
      required: true,
    },
    social_num: {
      type: Number,
      min: [1000, "Last 4 Digits of Social Security Number."],
      max: 9999,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const PublicFinanceApp = mongoose.model(
  "PublicFinanceApp",
  publicFinanceSchema
);
module.exports = PublicFinanceApp;

//Long hand above for better clarity below code does the same thing.
//  module.exports = mongoose.model("Transaction", transactionSchema);
