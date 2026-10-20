# 付思源 · 个人作品集网站

基于更新后的简历与《小红书自动化发布系统》作品集搭建的单页网站。

## 线上地址

https://fuhh231.github.io/jagerr/

## 本地预览

```powershell
cd C:\Users\Administrator\.openclaw\workspace\portfolio-site
python -m http.server 8123 --bind 127.0.0.1
```

打开：http://127.0.0.1:8123/

## 文件结构

- `index.html` — 页面内容
- `styles.css` — 样式与响应式
- `script.js` — 滚动揭示、导航高亮、邮箱复制
- `assets/付思源-简历.pdf` — 更新版简历
- `assets/作品集-工作流专题.pdf` — 更新版作品集
- `assets/《六可乐》AI短片项目-作品集.pdf` — 《六可乐》AI 短片项目作品集（5 页，封面为实验室场景图）
- `assets/六可乐-封面.jpg` — 短片项目封面图（网页与 PDF 共用）
- `assets/workflow.svg` — 工作流全图
- `previews/` — 桌面端 / 移动端预览截图

## 重新生成《六可乐》PDF

PDF 源文件在 `_build/tarkov-print.html`（已加入 .gitignore，不参与部署）。用 Chrome 打开 `http://127.0.0.1:8123/_build/tarkov-print.html`，打印为 A4、无边距、勾选“背景图形”即可导出。注意：Chrome 的打印导出不会嵌入网页字体，所以排版统一使用系统字体（微软雅黑 / 宋体）。

## 部署

纯静态站，可直接部署到 GitHub Pages、Vercel、Netlify 或任意静态服务器。部署时保持目录结构不变即可。

如果部署到国内服务器，建议把 Google Fonts 的引用换成本地字体或国内 CDN；Windows 自带 `NotoSerifSC-VF`，缺失时会回退到系统衬线字体。
