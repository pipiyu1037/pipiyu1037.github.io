export const siteConfig = {
  name: "pipiyu",
  title: "pipiyu · 个人网站",
  description: "记录技术、思考与持续探索。",
  intro: "你好，我是 pipiyu，一名软件工程师，图形学爱好者。这里是我的个人空间，用来记录正在学习、构建和思考的事。",
  role: "开发者 · 终身学习者 · 图形渲染工程师",
  location: "China",
  email: "pipiyu1011",
  // 将头像放入 public/images/avatar.jpg，再填写 "/images/avatar.jpg"。
  avatar: "" as string,
  socials: {
    github: "https://github.com/pipiyu1037",
    x: "",
    linkedin: "",
  },
  about: [
    "华为终端图形算法工程师，热爱图形学，拥抱AI。",
    "INTJ，吉他爱好者，Apex Legends玩家。",
    "我喜欢把复杂的问题拆开，理解它们如何运作，再把过程写成清晰、可复用的记录。",
  ],
} as const;

export const resume = {
  name: "余锦琪",
  education: [
    {
      institution: "香港科技大学",
      degree: "大数据技术 · 硕士",
      period: "2024.09 — 2025.10",
      location: "香港",
    },
    {
      institution: "华中科技大学",
      degree: "软件工程 · 本科",
      period: "2020.09 — 2024.07",
      location: "武汉",
    },
  ],
  experience: [
    {
      organization: "华为香港研究所 鸿蒙图形性能架构实验室",
      role: "终端图形算法工程师",
      period: "2025.10 — 至今",
      location: "香港",
    },
    {
      organization: "华为香港研究所 鸿蒙图形性能架构实验室",
      role: "终端图形算法实习",
      period: "2025.03 — 2025.10",
      location: "香港",
    },
    {
      organization: "Bond Trust",
      role: "深度学习实习生",
      period: "2024.11 — 2025.03",
      location: "香港",
    },
    {
      organization: "腾讯 IEG",
      role: "游戏引擎技术实习生",
      period: "2024.01 — 2024.05",
      location: "深圳",
    },
  ],
} as const;
