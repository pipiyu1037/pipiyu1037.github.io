# pipiyu 的个人网站

一个基于 Astro 的静态个人网站，可直接部署到 GitHub Pages。

## 本地预览

```bash
npm install
npm run dev
```

## 修改个人资料

网站名称、简介、邮箱和社交链接都集中在 `src/config.ts`。只需修改这一处，首页、关于页和页脚会同步更新。

## 写一篇博客

1. 复制 `src/content/blog/_template.md.example`，重命名为例如 `my-first-post.md`。
2. 填写文件开头的标题、摘要、日期和标签。
3. 使用标准 Markdown 写正文。
4. 运行 `npm run dev` 预览。
5. 提交并推送到 `master`，GitHub Actions 会自动构建和部署。

### 在文章中加入图片或 GIF

最省心的方式是为文章建一个同名文件夹：

```text
src/content/blog/my-first-post/
├─ index.md
├─ diagram.png
└─ demo.gif
```

然后在 `index.md` 中使用相对路径：

```md
![示意图](./diagram.png)
![动态演示](./demo.gif)
```

## 发布设置

首次发布前，在 GitHub 仓库的 `Settings → Pages → Build and deployment` 中将 Source 设置为 **GitHub Actions**。之后每次推送到 `master` 都会自动更新网站。
