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

- 所有文案：`src/i18n/content.ts`（`zh` 与 `en` 两份）。内容依据第四届胡杨论坛 JUNA 报告与已发表论文整理。
- 初步结果：`content.ts` 顶部的 `SHOW_PRELIMINARY`。12C(α,γ)16O 第二轮数据与 Super-JUNA 指标仍属初步或在评审中，默认不显示；合作组同意公开后改为 `true`。
- 图片：照片在 `src/assets/photos/`，示意图在 `src/assets/figures/`。构建时自动压缩为多尺寸 WebP；替换同名文件即可更新。
- 标识：`public/brand/` 里是 JUNA logo 与横版 banner 的 SVG，`-dark` 用于深色背景（文字反白），`-light` 用于浅色背景。均由合作组 banner PDF 的矢量路径转出；PDF 中的中文标题未嵌入字体，按原位置、字号和字距用思源黑体 Bold 轮廓补齐。`public/favicon.svg` 是不带文字的图形标。
- 配色与字体：`src/styles/global.css` 顶部的变量。字体随站点打包（Inter、IBM Plex Mono），中文使用系统字体，不依赖 Google Fonts。
- 各分段：`src/components/`，页面顺序见 `src/components/Page.astro`。

## 部署

推送到 `main` 后，`.github/workflows/deploy.yml` 自动构建并发布到 GitHub Pages
（需在仓库 Settings → Pages 中把 Source 设为 GitHub Actions）。
