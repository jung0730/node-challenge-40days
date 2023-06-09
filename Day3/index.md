# Day 3 - MongoDB 基本操作：新增、查詢

[HackMD 連結](https://hackmd.io/4VXGklw9QY-23le04ymxQQ?view)

### 0. Create a "students" collection.

```shell
use students
```

### 1. Insert one document.

```shell
db.students.insertOne({
  studentName: "Riley Parker",
  group: "A",
  score: 83,
  isPaid: false,
});
```

### 2. Insert many documents.

```shell
db.students.insertMany([
  {
    studentName: "Brennan Miles",
    group: "C",
    score: 72,
    isPaid: false,
  },
  {
    studentName: "Mia Diaz",
    group: "B",
    score: 98,
    isPaid: true,
  },
  {
    studentName: "Caroline morris",
    group: "B",
    score: 55,
    isPaid: false,
  },
  {
    studentName: "Beverly Stewart",
    group: "B",
    score: 60,
    isPaid: false,
  },
]);
```

### 3. Query "students" collections.

```shell
db.students.find();
```

### 4. Query data from the "students" collection where the "group" field contains "B".

```shell
db.students.find({ group: "B" });
```

### 5. Query data from the "students" collection where the "score" field is greater than 60.

```shell
db.students.find({ score: { $gt: 60 } });
```

### 6. Query data from the "students" collection where the "score" field is greater than 60 or the "group" field contains "B".

```shell
db.students.find({
  $or: [ { score: { $gt: 60 } }, { group: "B" } ],
});
```