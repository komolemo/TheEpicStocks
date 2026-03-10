// PrismaClientをインポート
const { PrismaClient } = require('@prisma/client');
// PrismaClientのインスタンスを作成
const prisma = new PrismaClient();

// Prismaを使ってユーザーを作成
async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  });
  console.log({ user });
}

// main関数を呼び出し、エラーハンドリングと接続の終了を行う
main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    // 最後にPrismaの接続を切断
    await prisma.$disconnect();
  });
