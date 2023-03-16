// Day 8 - Schema 補充

// [HackMD 連結](https://hackmd.io/DTyueaMiT8m7Dc9WRdJl2w)

const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
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
  toppings: [{ type: String }],
  // 加入 createdAt 欄位，並設定為隱藏欄位（不會顯示於前端）
  createdAt: {
    type: Date, 
    default: Date.now,
    select: false
  }
}, {
  versionKey: false // 隱藏 versionKey 欄位
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;