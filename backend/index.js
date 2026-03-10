// expressモジュールをインポート
const express = require('express');
// PrismaClientをインポート
const { PrismaClient } = require('@prisma/client');

// expressアプリケーションを作成
const app = express();

// JSON形式のリクエストボディを解析するミドルウェアを使用
app.use(express.json());

// PrismaClientのインスタンスを作成
const prisma = new PrismaClient();

// Prismaを使ってユーザー情報を取得し、JSON形式で返す
app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// サーバーがリッスンするポートを設定
const PORT = process.env.PORT || 3000;
// サーバーを起動して、指定したポートでリクエストを受け付ける
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});