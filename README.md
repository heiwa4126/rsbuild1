# rsbuild1

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

## 感想メモ

- build するとデフォルトで minify する。良い。
- license が別ファイルになる。良い。
- index.html がどこから来るのかわからん。
