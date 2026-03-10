FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Prismaのクライアントを生成
RUN npx prisma generate

# データベースのマイグレーション
RUN npx prisma migrate dev --name init

# コンテナがリッスンするポートを指定
EXPOSE 3001

# アプリケーションのエントリーポイントを指定
CMD ["node", "index.js"]