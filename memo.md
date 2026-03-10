# 環境構築
* [Docker / React / Express / Prisma で簡単な Web アプリを作成](https://qiita.com/oizumi-yuta/items/4b8b14dbed90d4b39641)
* [【入門】VSCodeでDocker環境構築](https://qiita.com/tsuyotobi26/items/9d48fa676f4d55170b5e)
* [Docker と VS Code のマスター: 開発ワークフローを強化](https://www.docker.com/ja-jp/blog/master-docker-vs-code-supercharge-your-dev-workflow/)

# Markdown記法 チートシート
[Markdown記法 チートシート](https://qiita.com/Qiita/items/c686397e4a0f4f11683d)

# コンテナビルド & 起動
```
docker-compose build
docker-compose up -d
```

# コンテナ終了
| やりたいこと | コマンド |
|--------------|----------|
| 起動（バックグラウンド） | `docker-compose up -d` |
| 停止 | `docker-compose stop` |
| 再開 | `docker-compose start` |
| 再起動 | `docker-compose restart` |
| 停止＋削除 | `docker-compose down` |
| イメージ再ビルド | `docker-compose build` |