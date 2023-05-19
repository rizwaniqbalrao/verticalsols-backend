import { model, Schema, Document } from "mongoose";

const OrdersSchema = new Schema(
  {
    fullName: String,
    emailAddress: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    planname: String,
    planprice: String,
    writeMessage: String,
    orderNumber: String,
  },
  { timestamps: { createdAt: "created_at" } }
);

const Orders = model("orders", OrdersSchema);

export default Orders;
