# Day 9 - Mongoose 修改／刪除

[HackMD 連結](https://hackmd.io/of0rfPj7Tguwq2PUHPoBIg)

### 1. 尋找一筆 document 並將 `ice` 改為 `去冰`，`sugar` 改為 `半糖`

```shell
Drink.updateOne(
  {
    product: "鮮奶茶"
  },
  {
    ice: "去冰"
    sugar: "半糖"
  }
)

Drink.findOneAndUpdate(
  { 
    name: "鮮奶茶"
  }, 
  {
    ice: "去冰",
    sugar: "半糖"
  }
)
```

### 2. 以 ID 尋找一筆 document 並將其刪除

```shell
Drink.findByIdAndDelete("621e45063ff3c8af575a7498")
```

### 3. 刪除全部 documents

```shell
Drink.deleteMany({})
```