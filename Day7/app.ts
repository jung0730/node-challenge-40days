// Day 7 - Model、Mongoose 新增／查詢

// https://hackmd.io/Fm3L9TMVRsqCZywxwdhBqQ

import { Schema, model, connect } from "mongoose";

connect("mongodb://127.0.0.1:27017/drink")
  .then(() => {
    console.log("connection successful");
  })
  .catch((error) => {
    console.log("connection failed");
  });

const drinkSchema = new Schema({
  product: {
    type: String,
    required: [true, "產品名稱未填寫"]
  },
  price: {
    type: Number,
    required: [true, "價錢未填寫"]
  },
  ice: {
    type: String,
    default: "正常冰"
  },
  sugar: {
    type: String,
    default: "全糖"
  },
  toppings: [{ type: String }]
});

const Drink = model("Drink", drinkSchema);

// 使用model新增document
Drink.create({
  product: "鮮奶茶",
  price: 55,
  sugar: "微糖"
})

// or
const milkTea = new Drink({
  product: "鮮奶茶",
  price: 55,
  sugar: "微糖"
})

milkTea.save()
  .then(() => console.log("data saved successfully"))
  .catch(error => console.log(error));