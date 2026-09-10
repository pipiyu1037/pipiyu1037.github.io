export const siteConfig = {
  name: "pipiyu",
  title: "pipiyu · 个人网站",
  description: "记录技术、思考与持续探索。",
  intro: "你好，我是 pipiyu。这里是我的个人空间，用来记录正在学习、构建和思考的事。",
  role: "开发者 · 终身学习者",
  location: "China",
  email: "",
  // 将头像放入 public/images/avatar.jpg，再填写 "/images/avatar.jpg"。
  avatar: "" as string,
  socials: {
    github: "https://github.com/pipiyu1037",
    x: "",
    linkedin: "",
  },
  about: [
    "这是一个留给未来内容的位置。你可以在 src/config.ts 中把它替换成自己的经历、研究方向和兴趣。",
    "我喜欢把复杂的问题拆开，理解它们如何运作，再把过程写成清晰、可复用的记录。",
  ],
} as const;
