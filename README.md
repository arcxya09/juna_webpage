# JUNA 项目网站

锦屏深地核天体物理实验（JUNA）的项目网站，中英双语单页，基于 [Astro](https://astro.build)。

## 本地运行

```bash
npm install
npm run dev        # 开发预览 http://localhost:4321/juna_webpage/
npm run build      # 生成静态文件到 dist/
```

本地或自有域名部署时（站点位于根路径），用 `BASE_PATH=/ npm run build` 构建，然后把 `dist/` 放到任意静态服务器即可。

## 修改内容

- 所有文案：`src/i18n/content.ts`（`zh` 与 `en` 两份）。标有 `verify: true` 的条目来自公开资料，需要核对。
- 配色与字体：`src/styles/global.css` 顶部的变量。
- 各分段：`src/components/`。
- 图片：`public/images/`。目前是 `scripts/generate-placeholders.mjs` 生成的占位图，用同名文件替换为正式照片即可。

## 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 自动构建并发布到 GitHub Pages
（需在仓库 Settings → Pages 中把 Source 设为 GitHub Actions）。
