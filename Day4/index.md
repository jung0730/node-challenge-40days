# Day 4 - MongoDB 基本操作：修改、刪除

[HackMD 連結](https://hackmd.io/QJXymF93QpKxPATRkdwKxw)

### 1. 指定其中一個 _id ，並將該筆 document 的 group 改為 D

```shell
db.students.updateOne(
  { _id : ObjectId("641267de32cd76e42a057273") },
  { $set: {
      group: "D"
  }}
)

db.students.find({ _id : ObjectId("641267de32cd76e42a057273") })
```

### 2. 將 group 為 B 的多筆 document 的 isPaid 改為 true

```shell
db.students.updateMany(
  {
    group: "B"
  },
  {
    $set: {
      isPaid: true
    }
  }
)
```

### 3. 將 studentName 包含關鍵字 Brennan 的 document 刪除

```shell
db.students.deleteOne(
  {
    studentName: /Brennan/
  }
)
```

### 4. 將 isPaid 為 true 的多筆 document 刪除

```shell
db.students.deleteMany(
  {
    isPaid: true
  }
)
```