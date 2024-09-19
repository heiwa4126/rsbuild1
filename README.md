# rsbuild1

(2024-09) Rsbuild の練習。

[Quick start - Rspack](https://rspack.dev/guide/start/quick-start#create-a-new-project)
をちょっとやってみた。

React, TypeScript, Bun, Biome の組み合わせ。
Vite に慣れてればそのまま使えるし、Vite より軽いよ。

## Setup

Install the dependencies:

```bash
bun install
```

biome.json と run-scripts の biome まわりは追加した。.vscode/ も。

## Get Started

Start the dev server:

```bash
bun dev
```

Build the app for production:

```bash
bun run build
```

Preview the production build locally:

```bash
bun preview
```

## メモ

- build するとデフォルトで minify する。良い。
- license が別ファイルになる。良い。
- index.html がどこから来るのかわからん。title を書き換えたいときはどうする?
  - [HtmlRspackPlugin - Rspack](https://rspack.dev/plugins/rspack/html-rspack-plugin)を使うらしいのだが...
  - ↑ 間違い。[Create React App - Rsbuild](https://rsbuild.dev/guide/migration/cra) にヒントがあった。
- favicon は `curl https://assets.rspack.dev/rspack/favicon-128x128.png -LO` で本家から持ってきた。Rsbuild の方がよかったかも。
- ロゴ画像も ↑ と同様。
- build するときの chunks の管理は? <https://rspack.dev/config/optimization>見るとそこそこデフォルト値でいい感じ。
- TODO: GitHub Pages
