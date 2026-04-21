import { useState, useEffect, useRef } from "react";

const tools = [
  // 🤖 大语言模型
  {
    name: "DeepSeek",
    desc: "深度求索大模型，推理能力强，适合复杂任务",
    url: "https://chat.deepseek.com",
    category: "大语言模型",
    color: "from-cyan-500 to-blue-500",
    icon: "🔍",
    isForeign: false,
  },
  {
    name: "Kimi",
    desc: "月之暗面长上下文 AI，支持超长文本处理",
    url: "https://kimi.moonshot.cn",
    category: "大语言模型",
    color: "from-violet-500 to-purple-500",
    icon: "🌙",
    isForeign: false,
  },
  {
    name: "豆包",
    desc: "字节跳动多功能 AI 助手，支持对话、写作、搜索",
    url: "https://www.doubao.com",
    category: "大语言模型",
    color: "from-orange-500 to-amber-500",
    icon: "🫛",
    isForeign: false,
  },
  {
    name: "元宝",
    desc: "腾讯混元大模型，深度集成微信生态",
    url: "https://yuanbao.tencent.com",
    category: "大语言模型",
    color: "from-yellow-500 to-orange-500",
    icon: "🪙",
    isForeign: false,
  },
  {
    name: "文心一言",
    desc: "百度大模型，支持对话、创作、知识问答",
    url: "https://yiyan.baidu.com",
    category: "大语言模型",
    color: "from-blue-500 to-cyan-500",
    icon: "📝",
    isForeign: false,
  },
  {
    name: "通义千问",
    desc: "阿里大模型，擅长中文理解与逻辑推理",
    url: "https://www.qianwen.com/?source=tongyigw",
    category: "大语言模型",
    color: "from-yellow-500 to-orange-500",
    icon: "💎",
    isForeign: false,
  },
  {
    name: "智谱清言",
    desc: "智谱 AI 大模型，支持多轮对话与代码生成",
    url: "https://www.zhipuai.cn",
    category: "大语言模型",
    color: "from-blue-600 to-cyan-500",
    icon: "⚡",
    isForeign: false,
  },
  {
    name: "讯飞星火",
    desc: "科大讯飞大模型，支持语音交互与知识问答",
    url: "https://xinghuo.xfyun.cn",
    category: "大语言模型",
    color: "from-blue-500 to-indigo-500",
    icon: "🔥",
    isForeign: false,
  },
  {
    name: "ChatGPT",
    desc: "OpenAI 大模型，对话、写作、编程全能选手 🪜",
    url: "https://chat.openai.com",
    category: "大语言模型",
    color: "from-green-600 to-emerald-500",
    icon: "🤖",
    isForeign: true,
  },
  {
    name: "Gemini",
    desc: "Google 大模型，支持多模态与联网搜索 🪜",
    url: "https://gemini.google.com",
    category: "大语言模型",
    color: "from-blue-400 to-cyan-400",
    icon: "✨",
    isForeign: true,
  },

  // 🎨 AI 绘画
  {
    name: "即梦",
    desc: "字节跳动 AI 绘画，支持中文生成，可做海报与创意图片",
    url: "https://jimeng.jianying.com",
    category: "AI 绘画",
    color: "from-pink-500 to-rose-500",
    icon: "🎨",
    isForeign: false,
  },
  {
    name: "可灵",
    desc: "快手可灵 AI 绘画，支持高质量图片生成与风格迁移",
    url: "https://klingai.kuaishou.com",
    category: "AI 绘画",
    color: "from-green-500 to-teal-500",
    icon: "🎬",
    isForeign: false,
  },
  {
    name: "海螺 AI",
    desc: "MiniMax AI 绘画，高质量图片生成",
    url: "https://hailuoai.com",
    category: "AI 绘画",
    color: "from-cyan-500 to-blue-500",
    icon: "🐚",
    isForeign: false,
  },
  {
    name: "Adobe Firefly",
    desc: "Adobe AI 绘画，深度集成 Photoshop 工作流",
    url: "https://firefly.adobe.com",
    category: "AI 绘画",
    color: "from-red-500 to-blue-500",
    icon: "🛠️",
    isForeign: false,
  },
  {
    name: "Canva",
    desc: "在线设计平台，支持 AI 生图、PPT、海报、社交媒体配图",
    url: "https://www.canva.com",
    category: "AI 绘画",
    color: "from-teal-400 to-cyan-500",
    icon: "✏️",
    isForeign: false,
  },
  {
    name: "Midjourney",
    desc: "最强 AI 绘画工具，生成艺术风格图片 🪜",
    url: "https://www.midjourney.com",
    category: "AI 绘画",
    color: "from-purple-500 to-pink-500",
    icon: "🖼️",
    isForeign: true,
  },
  {
    name: "Stable Diffusion",
    desc: "开源 AI 绘画模型，支持本地部署与自定义 🪜",
    url: "https://stability.ai",
    category: "AI 绘画",
    color: "from-red-600 to-orange-500",
    icon: "🌊",
    isForeign: true,
  },

  // 🎬 AI 视频
  {
    name: "即梦",
    desc: "字节跳动 AI 视频，支持文生视频、图生视频",
    url: "https://jimeng.jianying.com",
    category: "AI 视频",
    color: "from-pink-500 to-rose-500",
    icon: "🎨",
    isForeign: false,
  },
  {
    name: "可灵",
    desc: "快手可灵 AI 视频生成，支持文生视频、图生视频",
    url: "https://klingai.kuaishou.com",
    category: "AI 视频",
    color: "from-green-500 to-teal-500",
    icon: "🎬",
    isForeign: false,
  },
  {
    name: "海螺 AI",
    desc: "MiniMax AI 视频生成，文生视频能力强",
    url: "https://hailuoai.com",
    category: "AI 视频",
    color: "from-cyan-500 to-blue-500",
    icon: "🐚",
    isForeign: false,
  },
  {
    name: "Vidu",
    desc: "生数科技 AI 视频生成，支持风格化视频创作",
    url: "https://www.vidu.cn",
    category: "AI 视频",
    color: "from-teal-500 to-blue-500",
    icon: "📽️",
    isForeign: false,
  },
  {
    name: "Runway",
    desc: "AI 视频编辑与生成，支持视频风格迁移 🪜",
    url: "https://runwayml.com",
    category: "AI 视频",
    color: "from-indigo-500 to-purple-500",
    icon: "🎥",
    isForeign: true,
  },
  {
    name: "Pika",
    desc: "AI 视频生成工具，文字转视频操作简单 🪜",
    url: "https://pika.art",
    category: "AI 视频",
    color: "from-pink-500 to-rose-500",
    icon: "🎞️",
    isForeign: true,
  },

  // 🎵 AI 音乐
  {
    name: "Suno",
    desc: "AI 音乐生成，输入文字即可生成歌曲 🪜",
    url: "https://suno.com",
    category: "AI 音乐",
    color: "from-purple-500 to-pink-500",
    icon: "🎵",
    isForeign: true,
  },

  // 🎙️ AI 语音
  {
    name: "MiniMax",
    desc: "MiniMax 语音合成，支持多音色语音生成",
    url: "https://www.minimaxi.com",
    category: "AI 语音",
    color: "from-indigo-500 to-purple-500",
    icon: "🎙️",
    isForeign: false,
  },

  // 🖼️ 设计素材
  {
    name: "千库网",
    desc: "免扣素材库，海量 PNG 素材免费下载",
    url: "https://588ku.com",
    category: "设计素材",
    color: "from-orange-500 to-red-500",
    icon: "📦",
    isForeign: false,
  },
  {
    name: "包图网",
    desc: "原创商用设计素材，PPT、视频、配乐一应俱全",
    url: "https://ibaotu.com",
    category: "设计素材",
    color: "from-yellow-500 to-orange-500",
    icon: "🎁",
    isForeign: false,
  },
  {
    name: "千图网",
    desc: "专注免费设计素材下载的网站",
    url: "https://www.58pic.com",
    category: "设计素材",
    color: "from-blue-500 to-cyan-500",
    icon: "🎨",
    isForeign: false,
  },
  {
    name: "图怪兽",
    desc: "在线图片编辑器，一键生成海报、封面",
    url: "https://818ps.com",
    category: "设计素材",
    color: "from-pink-500 to-rose-500",
    icon: "🦄",
    isForeign: false,
  },
  {
    name: "创客贴",
    desc: "在线设计平台，海量模板一键套用",
    url: "https://www.chuangkit.com",
    category: "设计素材",
    color: "from-green-500 to-teal-500",
    icon: "✨",
    isForeign: false,
  },
  {
    name: "花瓣网",
    desc: "设计师灵感采集平台，收集设计灵感",
    url: "https://huaban.com",
    category: "设计素材",
    color: "from-orange-500 to-amber-500",
    icon: "🌸",
    isForeign: false,
  },

  // 💼 AI 办公
  {
    name: "WPS AI",
    desc: "金山办公 AI，支持 AI 写文案、PPT、数据分析",
    url: "https://ai.wps.cn",
    category: "AI 办公",
    color: "from-blue-600 to-indigo-600",
    icon: "📊",
    isForeign: false,
  },
  {
    name: "腾讯文档",
    desc: "腾讯在线文档，集成 AI 写作、润色、内容生成",
    url: "https://docs.qq.com",
    category: "AI 办公",
    color: "from-blue-500 to-blue-700",
    icon: "📝",
    isForeign: false,
  },
  {
    name: "百度文库",
    desc: "百度 AI 办公，支持智能文档生成与内容创作",
    url: "https://wenku.baidu.com",
    category: "AI 办公",
    color: "from-red-500 to-blue-600",
    icon: "📚",
    isForeign: false,
  },
  {
    name: "iSlide",
    desc: "AI 辅助 PPT 制作，智能排版、一键换肤、素材库",
    url: "https://www.islide.cc",
    category: "AI 办公",
    color: "from-orange-500 to-red-500",
    icon: "📽️",
    isForeign: false,
  },
  {
    name: "讯飞智文",
    desc: "科大讯飞 AI 写作，支持 PPT 大纲、文案生成",
    url: "https://zhiwen.xfyun.cn",
    category: "AI 办公",
    color: "from-blue-400 to-indigo-500",
    icon: "📋",
    isForeign: false,
  },
  {
    name: "IMA 知识库",
    desc: "腾讯 AI 知识库，支持智能问答、文档总结与检索",
    url: "https://ima.qq.com",
    category: "AI 办公",
    color: "from-purple-500 to-blue-500",
    icon: "🔖",
    isForeign: false,
  },
  {
    name: "通义智文",
    desc: "阿里 AI 阅读助手，支持文档摘要、翻译与问答",
    url: "https://tongyi.aliyun.com/qianwen",
    category: "AI 办公",
    color: "from-yellow-500 to-orange-500",
    icon: "📖",
    isForeign: false,
  },
  {
    name: "Notion AI",
    desc: "Notion 智能助手，支持写作、总结、翻译 🪜",
    url: "https://notion.so",
    category: "AI 办公",
    color: "from-gray-600 to-gray-800",
    icon: "📓",
    isForeign: true,
  },

  // 🛠️ 开发工具
  {
    name: "扣子 Coze",
    desc: "字节跳动 AI 应用开发平台，拖拽式搭建 AI Bot",
    url: "https://coze.cn",
    category: "开发工具",
    color: "from-orange-500 to-red-500",
    icon: "🔧",
    isForeign: false,
  },
  {
    name: "Claude AI",
    desc: "Anthropic 大模型，擅长长文本与代码 🪜",
    url: "https://claude.ai",
    category: "开发工具",
    color: "from-orange-400 to-amber-500",
    icon: "🤖",
    isForeign: true,
  },
  {
    name: "Vercel",
    desc: "前端部署平台，支持一键部署与边缘函数 🪜",
    url: "https://vercel.com",
    category: "开发工具",
    color: "from-gray-600 to-gray-800",
    icon: "▲",
    isForeign: true,
  },
  {
    name: "Dify",
    desc: "开源 LLM 应用开发平台，支持快速构建 AI 应用 🪜",
    url: "https://dify.ai",
    category: "开发工具",
    color: "from-blue-600 to-purple-600",
    icon: "🔌",
    isForeign: true,
  },
  {
    name: "Cursor",
    desc: "AI 代码编辑器，深度集成大模型，支持智能补全 🪜",
    url: "https://cursor.com",
    category: "开发工具",
    color: "from-purple-600 to-indigo-600",
    icon: "💻",
    isForeign: true,
  },
  {
    name: "Windsurf",
    desc: "AI 代码开发助手，Flow Copilot 增强编程体验 🪜",
    url: "https://codeium.com/windsurf",
    category: "开发工具",
    color: "from-teal-500 to-blue-500",
    icon: "🌊",
    isForeign: true,
  },
  {
    name: "GitHub Copilot",
    desc: "微软 AI 编程助手，代码补全、调试、代码审查 🪜",
    url: "https://github.com/features/copilot",
    category: "开发工具",
    color: "from-gray-600 to-gray-800",
    icon: "🦑",
    isForeign: true,
  },

  // 🔱 OpenClaw 专区
  {
    name: "QClaw",
    desc: "OpenClaw 客户端，AI 个人助手，支持多渠道对话",
    url: "https://qclaw.qq.com",
    category: "OpenClaw 专区",
    color: "from-blue-500 to-purple-500",
    icon: "🕹️",
    isForeign: false,
  },
  {
    name: "SkillHub",
    desc: "OpenClaw 技能市场，搜索安装 AI 能力扩展包",
    url: "https://www.skillhub.cn/",
    category: "OpenClaw 专区",
    color: "from-green-500 to-teal-500",
    icon: "🧩",
    isForeign: false,
  },
  {
    name: "ClawHub",
    desc: "OpenClaw 插件中心，浏览和安装社区贡献的插件",
    url: "https://clawhub.com",
    category: "OpenClaw 专区",
    color: "from-cyan-500 to-blue-500",
    icon: "🪟",
    isForeign: false,
  },
  {
    name: "腾讯云",
    desc: "腾讯云平台，提供 AI、大模型、云服务等企业级能力",
    url: "https://cloud.tencent.com",
    category: "OpenClaw 专区",
    color: "from-blue-600 to-blue-800",
    icon: "☁️",
    isForeign: false,
  },
  {
    name: "OpenClaw 官网",
    desc: "OpenClaw 官方网站，了解项目与社区动态 🪜",
    url: "https://openclaw.com",
    category: "OpenClaw 专区",
    color: "from-indigo-500 to-purple-500",
    icon: "🦷",
    isForeign: true,
  },
  {
    name: "OpenClaw 安装教程",
    desc: "腾讯云图文教程，快速上手 OpenClaw",
    url: "https://cloud.tencent.com/developer/article/2624973",
    category: "OpenClaw 专区",
    color: "from-violet-500 to-purple-600",
    icon: "📦",
    isForeign: false,
  },
];

// 快捷访问
const quickTools = [
  tools.find(t => t.name === "即梦" && t.category === "AI 绘画"),
  tools.find(t => t.name === "DeepSeek"),
  tools.find(t => t.name === "IMA 知识库"),
  tools.find(t => t.name === "豆包"),
];

const categories = ["全部", "大语言模型", "AI 绘画", "AI 视频", "AI 音乐", "AI 语音", "设计素材", "AI 办公", "开发工具", "OpenClaw 专区"];

const categoryEmoji = {
  "全部":          "🚀",
  "大语言模型":    "🤖",
  "AI 绘画":      "🎨",
  "AI 视频":      "🎬",
  "AI 音乐":      "🎵",
  "AI 语音":      "🎙️",
  "设计素材":     "🖼️",
  "AI 办公":      "💼",
  "开发工具":     "🛠️",
  "OpenClaw 专区": "🔱",
};

// 对单个分类的工具进行排序：国内在前，外国在后，中间插分隔线标记
function sortToolsForCategory(ts) {
  const domestic = ts.filter(t => !t.isForeign);
  const foreign = ts.filter(t => t.isForeign);
  const items = [];
  domestic.forEach(t => items.push({ type: "tool", tool: t }));
  if (foreign.length > 0) {
    items.push({ type: "divider" });
    foreign.forEach(t => items.push({ type: "tool", tool: t }));
  }
  return items;
}

function ToolCard({ tool, index }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 card-animate"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300`}>
        {tool.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">{tool.name}</h3>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">{tool.desc}</p>
      </div>
      <div className="text-gray-600 group-hover:text-blue-400 transition-colors self-center text-lg">
        ↗
      </div>
    </a>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-3 py-1">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <span className="text-xs text-gray-600 flex items-center gap-1">
        <span>🌐</span> 国外工具 · 需自备梯子
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState("全部");
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  // 搜索时自动切换到全部分类
  useEffect(() => {
    if (searchQuery.trim()) {
      setActiveCategory("全部");
    }
  }, [searchQuery]);

  // 按 / 聚焦搜索框，ESC 清空
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "/" && document.activeElement !== searchInputRef.current) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setSearchQuery("");
        searchInputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getCategoryCount = (cat) =>
    cat === "全部" ? tools.length : tools.filter(t => t.category === cat).length;

  // 搜索过滤
  const filterTools = (ts) => {
    if (!searchQuery.trim()) return ts;
    const q = searchQuery.toLowerCase();
    return ts.filter(t => 
      t.name.toLowerCase().includes(q) || 
      t.desc.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
    );
  };

  // 构建全部视图的分块数据：按分类分组，每个分类内排序
  const allItems = () => {
    // 如果有搜索词，直接返回所有匹配的工具（不分块）
    if (searchQuery.trim()) {
      const matched = filterTools(tools);
      return sortToolsForCategory(matched);
    }
    
    // 无搜索时按分类分块
    const items = [];
    categories.slice(1).forEach((cat) => {
      const catTools = tools.filter(t => t.category === cat);
      if (catTools.length === 0) return;
      
      const sorted = sortToolsForCategory(catTools);
      if (items.length > 0) items.push({ type: "gap" });
      items.push({ type: "sectionHeader", label: cat, emoji: categoryEmoji[cat], count: catTools.length });
      sorted.forEach(s => items.push(s));
    });
    return items;
  };

  // 单分类视图
  const categoryItems = () => {
    const catTools = filterTools(tools.filter(t => t.category === activeCategory));
    return sortToolsForCategory(catTools);
  };

  // 统计
  const totalTools = tools.length;
  const totalCategories = categories.length - 1;
  const filteredCount = filterTools(tools).length;

  return (
    <div className="min-h-screen px-4 py-12 relative">
      {/* 背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-8 pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-5">
            <span>✨</span>
            <span>AI 工具导航 · 内部版</span>
          </div>
          <h1 className="text-4xl font-bold mb-3">
            <span className="gradient-text">AI 工具集</span>
          </h1>
          <p className="text-gray-400 text-base mb-4">让团队每个人都能轻松使用 AI</p>
          
          {/* 统计栏 */}
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span>共收录 <span className="text-white font-medium">{totalTools}</span> 款工具</span>
            <span className="text-gray-700">·</span>
            <span><span className="text-white font-medium">{totalCategories}</span> 个分类</span>
          </div>
        </div>

        {/* 搜索框 */}
        <div className="relative mb-6">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索工具名称、描述、分类... (按 / 快速聚焦)"
            className="w-full pl-12 pr-20 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
            <kbd className="px-2 py-1 text-xs text-gray-500 bg-white/5 rounded border border-white/10">/</kbd>
          </div>
        </div>

        {/* 快捷访问 */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-5 mb-8">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">快捷访问</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {quickTools.map((t) => (
              <a
                key={`${t.name}-${t.category}`}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all text-sm"
              >
                <span className="text-base">{t.icon}</span>
                <span className="text-white font-medium">{t.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* 分类切换 */}
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          {categories.map((cat) => {
            const count = cat === "全部" 
              ? (searchQuery ? filteredCount : totalTools)
              : filterTools(tools.filter(t => t.category === cat)).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-blue-500/20 border border-blue-500/40 text-blue-300"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{categoryEmoji[cat]}</span>
                <span>{cat}</span>
                <span className="text-xs opacity-60">({count})</span>
              </button>
            );
          })}
        </div>

        {/* 搜索结果提示 */}
        {searchQuery && (
          <div className="mb-4 text-sm text-gray-400">
            找到 <span className="text-white font-medium">{filteredCount}</span> 个匹配「<span className="text-blue-400">{searchQuery}</span>」的工具
          </div>
        )}

        {/* 工具列表 */}
        <div className="grid gap-3 sm:grid-cols-2 mb-12">
          {searchQuery.trim()
            ? allItems().map((item, i) => {
                if (item.type === "divider") return <div key={`d-${i}`} className="col-span-2"><Divider /></div>;
                return <ToolCard key={`${item.tool.name}-${item.tool.category}`} tool={item.tool} index={i} />;
              })
            : activeCategory === "全部"
              ? allItems().map((item, i) => {
                  if (item.type === "gap") {
                    return <div key={`gap-${i}`} className="col-span-2 h-2" />;
                  }
                  if (item.type === "sectionHeader") {
                    return (
                      <div key={`header-${item.label}`} className="col-span-2">
                        <div className="flex items-center gap-2 mb-2 mt-2">
                          <span className="text-base">{item.emoji}</span>
                          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{item.label}</h3>
                          <span className="text-xs text-gray-600">({item.count})</span>
                        </div>
                      </div>
                    );
                  }
                  if (item.type === "divider") {
                    return <div key={`divider-${i}`} className="col-span-2"><Divider /></div>;
                  }
                  return (
                    <ToolCard key={`${item.tool.name}-${item.tool.category}`} tool={item.tool} index={i} />
                  );
                })
              : categoryItems().map((item, i) => {
                  if (item.type === "divider") return <div key={`d-${i}`} className="col-span-2"><Divider /></div>;
                  return <ToolCard key={`${item.tool.name}-${item.tool.category}`} tool={item.tool} index={i} />;
                })
          }

          {/* 无结果提示 */}
          {(activeCategory === "全部" ? allItems() : categoryItems()).length === 0 && (
            <div className="col-span-2 text-center py-12 text-gray-500">
              <div className="text-4xl mb-3">🔍</div>
              <p>没有找到匹配的工具</p>
              <p className="text-sm mt-1">试试其他关键词？</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm">
          <p>持续更新中 · 点击直接跳转使用</p>
        </div>
      </div>
    </div>
  );
}

export default App;
