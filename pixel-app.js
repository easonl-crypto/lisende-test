const modelTypes = {
  llm: {
    code: "LLM-BOT",
    title: "嘴替参谋型",
    subtitle:
      "适合把想法说清楚、把内容写出来。你脑子里常常有思路，但需要一个工具帮你组织语言、压缩重点、润色表达。聊天、写作、总结、改文案、头脑风暴，都是你的高频 AI 场景。",
    traits: ["聊天", "写作", "总结", "改文案", "头脑风暴"],
    models: ["ChatGPT", "豆包", "Claude", "Gemini", "Kimi", "DeepSeek"],
    prompt: "推荐用法：把你的原始想法直接丢进去，再要求它帮你整理成清楚、有重点、有语气的版本。",
    colors: ["#5b3a8f", "#d8c8f3"],
    rarity: "出现率约 18%｜常见打工人",
  },
  code: {
    code: "CODE-X",
    title: "代码救火型",
    subtitle:
      "适合和 AI 一起修问题、搭项目、读代码。报错看不懂、逻辑卡住、仓库太大、需求太赶，都可以让代码模型参与进来。它不只是帮你写代码，更像一个能一起排查问题的工程助手。",
    traits: ["写代码", "修 Bug", "读仓库", "工程协作", "快速搭原型"],
    models: ["Codex", "Claude Code", "Cursor", "GitHub Copilot", "Gemini Code Assist"],
    prompt: "推荐用法：先让模型读上下文，再要求它给出最小修改方案、风险点和验证步骤。",
    colors: ["#164a7a", "#bdd4ee"],
    rarity: "出现率约 12%｜典型程序猿",
  },
  video: {
    code: "VID-EO",
    title: "脑洞成片型",
    subtitle:
      "适合把脑子里的画面变成视频。短视频、广告片、MV、动态海报、产品展示，只要你能描述出风格和感觉，视频模型就能帮你快速生成一个可看的版本。",
    traits: ["短视频", "广告片", "MV", "动态海报", "产品视频", "创意分镜"],
    models: ["Seedance", "Sora", "可灵 Kling", "Runway", "Pika", "Veo"],
    prompt: "推荐用法：写清主体、动作、镜头、场景、风格和时长，别只说“高级一点”。",
    colors: ["#2e6b38", "#cfe2c4"],
    rarity: "出现率约 9%｜脑洞少数派",
  },
  audio: {
    code: "AUD-IO",
    title: "声音氛围型",
    subtitle:
      "适合用声音做情绪、节奏和陪伴感。配音、播客、音乐草稿、角色语音、语音陪伴，都适合用音频模型来完成。你关注的不只是“说什么”，还有语气、节奏和氛围。",
    traits: ["配音", "播客", "音乐草稿", "语音陪伴", "音频内容"],
    models: ["ChatGPT Voice", "豆包语音", "ElevenLabs", "Suno", "Udio", "MiniMax Audio"],
    prompt: "推荐用法：把语速、情绪、音色、停顿、场景写清楚，声音模型会更像你想要的那种氛围。",
    colors: ["#c25712", "#f5cf97"],
    rarity: "出现率约 8%｜氛围感少数派",
  },
  image: {
    code: "IMG-GEN",
    title: "灵感成图型",
    subtitle:
      "适合把抽象想法变成具体画面。海报、头像、产品图、视觉概念、表情包、社媒配图，只要有一个大概方向，图像模型就能帮你快速试风格、出方案、找灵感。",
    traits: ["海报", "头像", "视觉概念", "产品图", "表情包", "社媒配图"],
    models: ["Midjourney", "即梦", "豆包图像", "DALL·E", "Flux", "Stable Diffusion"],
    prompt: "推荐用法：先描述用途和画面，再补充主体、构图、材质、色彩、比例和参考风格。",
    colors: ["#b24568", "#f0c1ce"],
    rarity: "出现率约 13%｜灵感捕手",
  },
  multimodal: {
    code: "OMNI",
    title: "全能拆解型",
    subtitle:
      "适合处理图片、文件、截图、表格这些复杂材料。当信息不只是一段文字，而是混在 PDF、图片、截图、表格里时，多模态模型可以帮你看懂、拆解、归纳，再整理成清楚的结果。",
    traits: ["看图问答", "文件理解", "截图分析", "表格整理", "跨格式总结"],
    models: ["GPT-4o / o 系列", "Gemini", "Claude", "豆包", "Qwen-VL", "通义千问"],
    prompt: "推荐用法：把文件、截图和目标一起给它，并说明你要提取重点、找问题还是整理成表格。",
    colors: ["#0f7180", "#bfe4e8"],
    rarity: "出现率约 10%｜全能玩家",
  },
  agent: {
    code: "AGENT",
    title: "自动开工型",
    subtitle:
      "适合让 AI 不只回答，还能真的执行任务。查资料、点网页、整理文件、批量处理、推进项目，这类任务不适合只停留在聊天框里。Agent 更像一个能接任务、跑流程、交结果的执行助手。",
    traits: ["自动化任务", "网页操作", "资料整理", "批量处理", "项目执行", "工作流搭建"],
    models: ["Codex", "Manus", "ChatGPT Agent", "Claude Computer Use", "Gemini Deep Research"],
    prompt: "推荐用法：把目标、边界、权限和验收标准写清楚，让它按步骤执行并汇报结果。",
    colors: ["#ba8a08", "#ecd27a"],
    rarity: "出现率约 6%｜万里挑一",
  },
  search: {
    code: "RAG-G",
    title: "资料雷达型",
    subtitle:
      "适合更快找到靠谱信息、整理依据和出处。追热点、找资料、做调研、查来源、写报告、看竞品，这类任务最怕信息乱、来源虚。检索增强类工具能帮你更快找到线索，形成更有依据的判断。",
    traits: ["找资料", "做调研", "追热点", "写报告", "查出处", "竞品分析"],
    models: ["Perplexity", "Gemini Deep Research", "Kimi", "秘塔 AI", "ChatGPT Search", "豆包"],
    prompt: "推荐用法：要求它给出处、日期和依据，再让它区分事实、推测和不确定信息。",
    colors: ["#8a5c28", "#e4c9ac"],
    rarity: "出现率约 11%｜证据控人群",
  },
};

const questions = [
  {
    text: "你打开 AI 的第一句话通常是？",
    options: [
      ["帮我把这段话说清楚一点，别太像官方通报", "llm"],
      ["看一下这个报错，别安慰我，直接救我", "code"],
      ["我脑子里有个画面，你帮我变成分镜", "video"],
      ["这段声音能不能更有情绪一点", "audio"],
    ],
  },
  {
    text: "朋友说“我想做个内容”，你最先想到：",
    options: [
      ["先把核心表达写出来，不然全是散装灵感", "llm"],
      ["封面和画面风格先定，不然没人点", "image"],
      ["短视频要有钩子、节奏和转场", "video"],
      ["声音很重要，语气和 BGM 先定生死", "audio"],
    ],
  },
  {
    text: "面对一堆截图、PDF、表格和聊天记录，你会：",
    options: [
      ["全丢给多模态模型，让它先拆明白", "multimodal"],
      ["先查来源和时间，别让我吃二手谣言", "search"],
      ["让模型把截图、表格和文字一起拆成清楚结论", "multimodal"],
      ["让它顺手生成一张清楚的说明图", "image"],
    ],
  },
  {
    text: "老板说“这个需求很简单”，你最想召唤：",
    options: [
      ["Codex 或 Claude Code，先把仓库读一遍", "code"],
      ["Agent，帮我拆任务、跑流程、留结果", "agent"],
      ["检索工具，查清楚有没有人在坑我", "search"],
      ["多模态模型，先把截图、文档和需求一起看明白", "multimodal"],
    ],
  },
  {
    text: "你最受不了哪种提示词？",
    options: [
      ["生成一个爆款视频，细节你自己想", "video"],
      ["做张高级感图片，越高级越好", "image"],
      ["随便写点，显得专业", "llm"],
      ["把这个项目优化一下，哪里都可以动", "code"],
    ],
  },
  {
    text: "你的收藏夹更像什么？",
    options: [
      ["模型测评、资料、价格表，像情报站", "search"],
      ["海报、头像、配色、参考图，像灵感墙", "image"],
      ["脚本、Prompt、自动化流程，像工具箱", "agent"],
      ["音色、播客、歌单、配音片段，像耳朵的衣柜", "audio"],
    ],
  },
  {
    text: "你让 AI 帮忙时，最在意它：",
    options: [
      ["能不能把话说到点上，别像说明书成精", "llm"],
      ["能不能真的跑起来，别只会写伪代码", "code"],
      ["能不能看懂图、表格、截图混在一起的现场", "multimodal"],
      ["能不能自己查资料，还把出处交出来", "search"],
    ],
  },
  {
    text: "半夜灵感来了，你会先：",
    options: [
      ["写成脚本大纲，明天就能拍", "video"],
      ["录一段语音，语气比内容更完整", "audio"],
      ["打开项目，让代码模型先搭个能跑的原型", "code"],
      ["建个任务清单，连验收标准都写了", "agent"],
    ],
  },
  {
    text: "如果 AI 回答错了，你第一反应是：",
    options: [
      ["给它补截图、补文件、补上下文，再审一次", "multimodal"],
      ["要求它引用来源，不然当场撤回信任", "search"],
      ["把提示词改到像甲方需求文档", "agent"],
      ["检查是不是我问题问得太抽象", "llm"],
    ],
  },
  {
    text: "你最想拥有的 AI 超能力是？",
    options: [
      ["任何想法秒变片子，转场都替我想好", "video"],
      ["一句话生成能发的图，不再熬夜抠细节", "image"],
      ["开口就有好听声音，连道歉都像电台", "audio"],
      ["给它一个目标，它自己把活干完", "agent"],
    ],
  },
];

const state = {
  current: 0,
  scores: {},
  result: null,
};

const claimConfig = {
  keyword: "上船开造",
  accountName: "GMI Cloud 黑板报",
};

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn");
const copyBtn = document.querySelector("#copy-btn");
const claimBtn = document.querySelector("#claim-btn");
const qrModal = document.querySelector("#qr-modal");
const qrCloseBtn = document.querySelector("#qr-close-btn");
const questionTitle = document.querySelector("#question-title");
const optionsEl = document.querySelector("#options");
const progressText = document.querySelector("#progress-text");
const progressBar = document.querySelector("#progress-bar");

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach((item) => item.classList.remove("active"));
  screen.classList.add("active");
  document.querySelector(".app-shell").classList.toggle("compact-mode", screen !== startScreen);
}

function resetQuiz() {
  state.current = 0;
  state.scores = Object.fromEntries(Object.keys(modelTypes).map((key) => [key, 0]));
  state.result = null;
  renderQuestion();
  showScreen(quizScreen);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = questions[state.current];
  const progress = ((state.current + 1) / questions.length) * 100;
  progressText.textContent = `Question ${state.current + 1} / ${questions.length}`;
  progressBar.style.width = `${progress}%`;
  questionTitle.textContent = question.text;
  optionsEl.innerHTML = "";

  question.options.forEach(([text, type], index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.type = "button";
    button.innerHTML = `
      <span class="option-label">选项 ${String.fromCharCode(65 + index)}</span>
      <span class="option-text">${text}</span>
    `;
    button.addEventListener("click", () => chooseOption(type));
    optionsEl.appendChild(button);
  });
}

function chooseOption(type) {
  state.scores[type] += 1;
  if (state.current < questions.length - 1) {
    state.current += 1;
    renderQuestion();
    return;
  }
  renderResult();
}

function getWinner() {
  const entries = Object.entries(state.scores);
  entries.sort((a, b) => b[1] - a[1]);
  const topScore = entries[0][1];
  const tied = entries.filter(([, score]) => score === topScore).map(([key]) => key);
  const tieBreaker = ["agent", "code", "video", "multimodal", "search", "image", "audio", "llm"];
  return tieBreaker.find((key) => tied.includes(key));
}

function renderResult() {
  const winner = getWinner();
  const result = modelTypes[winner];
  result.key = winner;
  state.result = result;

  document.querySelector("#result-code").textContent = result.code;
  document.querySelector("#result-title").textContent = result.title;
  document.querySelector("#result-rarity").textContent = result.rarity;
  document.querySelector("#result-subtitle").textContent = result.subtitle;
  document.querySelector("#result-prompt").textContent = result.prompt;

  const avatar = document.querySelector("#avatar");
  avatar.style.setProperty("--avatar-main", result.colors[0]);
  avatar.style.setProperty("--avatar-accent", result.colors[1]);
  avatar.dataset.type = winner;
  avatar.innerHTML = createAvatarSvg(winner, result);

  renderTags("#trait-list", result.traits, "trait");
  renderTags("#model-list", result.models, "model-pill");

  showScreen(resultScreen);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTags(selector, values, className) {
  const container = document.querySelector(selector);
  container.innerHTML = "";
  values.forEach((value) => {
    const tag = document.createElement("span");
    tag.className = className;
    tag.textContent = value;
    container.appendChild(tag);
  });
}

const personaImagePaths = {
  llm: "./assets/personas/llm.png",
  code: "./assets/personas/code.png",
  video: "./assets/personas/video.png",
  audio: "./assets/personas/audio.png",
  image: "./assets/personas/image.png",
  multimodal: "./assets/personas/multimodal.png",
  agent: "./assets/personas/agent.png",
  search: "./assets/personas/search.png",
};

const posterPersonaImagePaths = {
  llm: "./assets/personas/cutouts/llm.png",
  code: "./assets/personas/cutouts/code.png",
  video: "./assets/personas/cutouts/video.png",
  audio: "./assets/personas/cutouts/audio.png",
  image: "./assets/personas/cutouts/image.png",
  multimodal: "./assets/personas/cutouts/multimodal.png",
  agent: "./assets/personas/cutouts/agent.png",
  search: "./assets/personas/cutouts/search.png",
};

function getPersonaImagePath(type) {
  return personaImagePaths[type] || personaImagePaths.llm;
}

function getPosterPersonaImagePath(type) {
  return posterPersonaImagePaths[type] || posterPersonaImagePaths.llm;
}

function createAvatarSvg(type, result) {
  return `<img class="persona-card-img" src="${getPersonaImagePath(type)}" alt="${result.code} ${result.title}" />`;

  const config = avatarConfigs[type];
  const skin = config.skin || "#e7b77f";
  const shadow = config.shadow || "#8a5d3f";
  const main = result.colors[0];
  const accent = result.colors[1];

  return `
    <svg class="avatar-svg" viewBox="0 0 360 460" role="img" aria-label="${result.title}">
      <defs>
        <linearGradient id="bg-${type}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${accent}" stop-opacity="0.88" />
          <stop offset="1" stop-color="#ffffff" stop-opacity="0.92" />
        </linearGradient>
        <linearGradient id="cloth-${type}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="${lighten(main, 16)}" />
          <stop offset="0.52" stop-color="${main}" />
          <stop offset="1" stop-color="${darken(main, 18)}" />
        </linearGradient>
        <filter id="soft-shadow-${type}" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="8" dy="10" stdDeviation="0" flood-color="#161414" flood-opacity="0.24" />
        </filter>
      </defs>
      <rect width="360" height="460" fill="url(#bg-${type})" />
      <polygon points="0,0 122,0 58,178 0,238" fill="#ffffff" opacity="0.5" />
      <polygon points="210,0 360,0 320,128 186,88" fill="#ffffff" opacity="0.35" />
      <polygon points="0,360 118,302 202,460 0,460" fill="${accent}" opacity="0.32" />
      <polygon points="286,298 360,260 360,460 236,460" fill="#ffffff" opacity="0.38" />
      ${config.background(main, accent)}
      <g filter="url(#soft-shadow-${type})">
        <polygon points="127,278 233,278 282,460 78,460" fill="url(#cloth-${type})" />
        <polygon points="143,286 178,336 120,460 78,460" fill="${darken(main, 12)}" opacity="0.72" />
        <polygon points="215,286 238,348 282,460 221,460" fill="${lighten(main, 10)}" opacity="0.68" />
        <polygon points="162,246 203,246 210,298 154,298" fill="${shadow}" />
        <polygon points="168,240 202,240 204,286 158,286" fill="${skin}" />
        <polygon points="111,298 154,318 142,444 82,410" fill="${lighten(main, 8)}" />
        <polygon points="246,306 288,328 250,430 211,402" fill="${darken(main, 6)}" />
        <polygon points="133,128 194,94 250,132 240,218 194,264 130,240 104,172" fill="${skin}" />
        <polygon points="196,94 250,132 236,184 198,164" fill="${lighten(skin, 12)}" opacity="0.56" />
        <polygon points="129,190 162,178 158,230 128,240" fill="${darken(skin, 14)}" opacity="0.48" />
        ${config.hair(main)}
        <circle cx="158" cy="178" r="5" fill="#161414" />
        <circle cx="207" cy="181" r="5" fill="#161414" />
        ${config.face || ""}
        <path d="M181 184 L174 215 L191 213" fill="none" stroke="${darken(skin, 36)}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M164 230 Q184 242 207 229" fill="none" stroke="#76382f" stroke-width="4" stroke-linecap="round" />
        ${config.props(main, accent)}
      </g>
    </svg>
  `;
}

function lighten(hex, amount) {
  return adjustColor(hex, amount);
}

function darken(hex, amount) {
  return adjustColor(hex, -amount);
}

function adjustColor(hex, amount) {
  const value = hex.replace("#", "");
  const parts = [0, 2, 4].map((start) => parseInt(value.slice(start, start + 2), 16));
  const adjusted = parts.map((part) => Math.max(0, Math.min(255, part + amount)));
  return `#${adjusted.map((part) => part.toString(16).padStart(2, "0")).join("")}`;
}

const avatarConfigs = {
  llm: {
    skin: "#e7b67f",
    shadow: "#b87c52",
    hair: (main) => `
      <polygon points="104,178 126,112 188,76 248,118 260,170 236,146 200,116 150,132 132,210" fill="${darken(main, 10)}" />
      <polygon points="104,178 82,294 128,260 132,210" fill="${main}" opacity="0.88" />
      <polygon points="224,126 270,272 232,240 236,146" fill="${lighten(main, 8)}" opacity="0.92" />
      <polygon points="150,132 188,76 212,118" fill="${lighten(main, 18)}" opacity="0.45" />
    `,
    background: (main) => `
      <g opacity="0.4">
        <rect x="258" y="80" width="54" height="44" fill="${main}" />
        <polygon points="274,124 292,124 274,146" fill="${main}" />
        <circle cx="284" cy="184" r="22" fill="${main}" opacity="0.55" />
      </g>
    `,
    props: (main, accent) => `
      <polygon points="74,350 206,364 194,432 56,416" fill="#f7f1fb" stroke="${darken(main, 8)}" stroke-width="6" />
      <rect x="96" y="382" width="76" height="8" fill="${main}" />
      <rect x="96" y="400" width="52" height="8" fill="${lighten(main, 20)}" />
      <polygon points="246,300 318,310 332,382 256,374" fill="${accent}" opacity="0.72" />
      <path d="M132 330 Q158 304 180 296" fill="none" stroke="${darken(main, 12)}" stroke-width="13" stroke-linecap="round" />
    `,
  },
  code: {
    skin: "#e7b67f",
    shadow: "#a96c48",
    hair: (main) => `
      <polygon points="98,154 134,100 194,82 260,112 244,160 204,136 158,154 122,202" fill="${darken(main, 18)}" />
      <polygon points="134,100 190,68 214,112 160,130" fill="${lighten(main, 12)}" opacity="0.45" />
    `,
    face: () => `
      <rect x="143" y="164" width="30" height="22" fill="none" stroke="#142d44" stroke-width="5" />
      <rect x="194" y="166" width="30" height="22" fill="none" stroke="#142d44" stroke-width="5" />
      <path d="M173 176 L194 177" stroke="#142d44" stroke-width="5" />
    `,
    background: (main) => `
      <rect x="252" y="74" width="80" height="86" fill="${main}" opacity="0.42" />
      <rect x="268" y="94" width="48" height="6" fill="#fff" opacity="0.7" />
      <rect x="268" y="112" width="36" height="6" fill="#fff" opacity="0.5" />
      <rect x="268" y="130" width="56" height="6" fill="#fff" opacity="0.45" />
    `,
    props: (main) => `
      <polygon points="70,318 234,334 218,430 48,414" fill="${darken(main, 12)}" stroke="${darken(main, 24)}" stroke-width="6" />
      <text x="116" y="385" fill="#ffffff" font-size="38" font-weight="900">&lt;/&gt;</text>
      <path d="M256 316 L300 344 L260 404" fill="none" stroke="${lighten(main, 18)}" stroke-width="16" stroke-linecap="round" />
    `,
  },
  video: {
    skin: "#ecc188",
    shadow: "#bd7b4b",
    hair: (main) => `
      <polygon points="112,154 150,96 210,82 258,126 238,164 194,138 152,156 122,204" fill="${darken(main, 8)}" />
      <polygon points="150,96 220,68 236,126 180,120" fill="${lighten(main, 14)}" opacity="0.38" />
    `,
    background: (main) => `
      <polygon points="262,82 326,112 262,142" fill="${main}" opacity="0.45" />
      <rect x="278" y="190" width="50" height="6" fill="${main}" opacity="0.45" />
      <rect x="302" y="170" width="6" height="110" fill="${main}" opacity="0.35" />
    `,
    props: (main) => `
      <rect x="235" y="190" width="82" height="64" fill="${darken(main, 16)}" stroke="${darken(main, 28)}" stroke-width="6" />
      <circle cx="276" cy="222" r="24" fill="#223127" stroke="#0f1712" stroke-width="8" />
      <circle cx="276" cy="222" r="10" fill="#758a75" />
      <polygon points="54,300 204,292 214,352 70,368" fill="#f8f5ed" stroke="${darken(main, 14)}" stroke-width="6" />
      <path d="M72 314 L96 346 M112 310 L138 342 M154 306 L180 338" stroke="${main}" stroke-width="7" />
      <line x1="276" y1="256" x2="248" y2="430" stroke="${darken(main, 20)}" stroke-width="7" />
      <line x1="276" y1="256" x2="312" y2="430" stroke="${darken(main, 20)}" stroke-width="7" />
    `,
  },
  audio: {
    skin: "#e8af78",
    shadow: "#b77446",
    hair: (main) => `
      <polygon points="112,158 142,98 202,76 262,120 248,176 212,142 160,134 126,206" fill="${darken(main, 20)}" />
      <polygon points="218,98 278,190 248,176 232,126" fill="${main}" opacity="0.78" />
    `,
    background: (main) => `
      <path d="M58 188 C80 168 102 210 124 190 C146 170 168 212 190 190" fill="none" stroke="${main}" stroke-width="8" opacity="0.45" />
      <rect x="280" y="70" width="48" height="48" fill="${main}" opacity="0.45" />
      <text x="292" y="105" font-size="32" fill="#fff">♪</text>
    `,
    props: (main) => `
      <path d="M126 156 C118 96 246 96 238 158" fill="none" stroke="${darken(main, 24)}" stroke-width="14" />
      <rect x="110" y="154" width="26" height="58" rx="12" fill="${main}" />
      <rect x="230" y="154" width="26" height="58" rx="12" fill="${main}" />
      <rect x="68" y="260" width="48" height="104" rx="22" fill="#32302e" stroke="${darken(main, 20)}" stroke-width="6" />
      <line x1="92" y1="364" x2="92" y2="424" stroke="#32302e" stroke-width="8" />
      <path d="M222 310 Q248 274 284 258" fill="none" stroke="${main}" stroke-width="16" stroke-linecap="round" />
    `,
  },
  image: {
    skin: "#efbd8a",
    shadow: "#bd7c54",
    hair: (main) => `
      <polygon points="104,168 130,106 188,78 252,116 268,176 236,154 200,132 150,144 122,220" fill="${darken(main, 12)}" />
      <polygon points="102,180 72,318 126,272 122,220" fill="${main}" opacity="0.84" />
      <polygon points="224,126 274,304 238,248 236,154" fill="${lighten(main, 10)}" opacity="0.88" />
    `,
    background: (main) => `
      <rect x="250" y="92" width="74" height="58" fill="none" stroke="${main}" stroke-width="8" opacity="0.38" />
      <circle cx="302" cy="112" r="8" fill="${main}" opacity="0.5" />
      <polygon points="260,142 282,120 300,150" fill="${main}" opacity="0.35" />
    `,
    props: (main) => `
      <polygon points="76,328 238,344 220,434 56,416" fill="#3b3340" stroke="${darken(main, 18)}" stroke-width="6" />
      <path d="M104 320 L158 276" stroke="#f7f1fb" stroke-width="10" stroke-linecap="round" />
      <circle cx="160" cy="274" r="9" fill="${main}" />
      <path d="M242 310 Q272 294 296 300" fill="none" stroke="${main}" stroke-width="14" stroke-linecap="round" />
    `,
  },
  multimodal: {
    skin: "#e8b77d",
    shadow: "#a96d4c",
    hair: (main) => `
      <polygon points="102,158 136,100 198,78 260,118 238,164 202,138 156,152 124,206" fill="${darken(main, 10)}" />
      <polygon points="136,100 204,64 224,116 168,124" fill="${lighten(main, 12)}" opacity="0.42" />
    `,
    face: () => `
      <rect x="143" y="164" width="30" height="22" fill="none" stroke="#144a50" stroke-width="5" />
      <rect x="194" y="166" width="30" height="22" fill="none" stroke="#144a50" stroke-width="5" />
      <path d="M173 176 L194 177" stroke="#144a50" stroke-width="5" />
    `,
    background: (main) => `
      <rect x="260" y="86" width="54" height="44" fill="${main}" opacity="0.38" />
      <polygon points="272,122 288,104 306,130" fill="#fff" opacity="0.5" />
      <rect x="274" y="164" width="42" height="68" fill="${main}" opacity="0.26" />
      <rect x="286" y="256" width="46" height="46" fill="${main}" opacity="0.26" />
    `,
    props: (main) => `
      <polygon points="196,318 306,334 286,412 178,398" fill="#535b62" stroke="${darken(main, 12)}" stroke-width="6" />
      <path d="M246 300 Q268 282 292 286" fill="none" stroke="${main}" stroke-width="14" stroke-linecap="round" />
      <path d="M122 302 Q146 278 172 270" fill="none" stroke="${lighten(main, 12)}" stroke-width="13" stroke-linecap="round" />
    `,
  },
  agent: {
    skin: "#eabe82",
    shadow: "#b27947",
    hair: (main) => `
      <polygon points="110,154 148,98 206,82 258,124 238,166 200,142 156,156 124,206" fill="${darken(main, 22)}" />
      <polygon points="148,98 212,70 228,124 176,124" fill="${lighten(main, 12)}" opacity="0.4" />
    `,
    background: (main) => `
      <rect x="270" y="74" width="46" height="46" fill="${main}" opacity="0.5" />
      <path d="M282 96 L292 106 L306 86" fill="none" stroke="#fff" stroke-width="6" />
      <line x1="294" y1="120" x2="294" y2="174" stroke="${main}" stroke-width="6" opacity="0.5" />
      <rect x="244" y="174" width="34" height="34" fill="${main}" opacity="0.42" />
      <rect x="310" y="174" width="34" height="34" fill="${main}" opacity="0.42" />
    `,
    props: (main) => `
      <polygon points="214,296 306,318 278,402 190,380" fill="#4d4a43" stroke="${darken(main, 18)}" stroke-width="6" />
      <path d="M128 318 Q166 284 204 294" fill="none" stroke="${lighten(main, 8)}" stroke-width="15" stroke-linecap="round" />
      <path d="M248 306 Q276 284 306 292" fill="none" stroke="${darken(main, 8)}" stroke-width="13" stroke-linecap="round" />
    `,
  },
  search: {
    skin: "#e6b27d",
    shadow: "#a96f4d",
    hair: (main) => `
      <polygon points="98,146 154,86 232,88 274,140 230,156 176,136 126,168" fill="${darken(main, 20)}" />
      <polygon points="132,104 212,66 252,112 176,136" fill="${lighten(main, 12)}" opacity="0.32" />
    `,
    background: (main) => `
      <circle cx="294" cy="104" r="48" fill="none" stroke="${main}" stroke-width="6" opacity="0.32" />
      <line x1="246" y1="104" x2="342" y2="104" stroke="${main}" stroke-width="5" opacity="0.32" />
      <line x1="294" y1="56" x2="294" y2="152" stroke="${main}" stroke-width="5" opacity="0.32" />
      <rect x="278" y="210" width="48" height="64" fill="none" stroke="${main}" stroke-width="6" opacity="0.28" />
    `,
    props: (main) => `
      <circle cx="94" cy="266" r="40" fill="none" stroke="${darken(main, 18)}" stroke-width="12" />
      <line x1="122" y1="296" x2="166" y2="348" stroke="${darken(main, 18)}" stroke-width="13" stroke-linecap="round" />
      <polygon points="136,330 294,350 274,436 116,414" fill="#d9bd94" stroke="${darken(main, 8)}" stroke-width="6" />
      <path d="M228 318 Q256 292 288 300" fill="none" stroke="${main}" stroke-width="14" stroke-linecap="round" />
    `,
  },
};

async function copyResult() {
  if (!state.result) return;
  const text = [
    `我的 AITI 结果：${state.result.code}｜${state.result.title}`,
    `娱乐估算：${state.result.rarity}`,
    state.result.subtitle,
    `适合场景：${state.result.traits.join("、")}`,
    `常见模型：${state.result.models.join("、")}`,
  ].join("\n");
  try {
    await navigator.clipboard.writeText(text);
    showToast("结果已复制，适合发给朋友审判");
  } catch {
    showToast("复制失败，但人格已经生成");
  }
}

async function claimToken() {
  await copyText(claimConfig.keyword);
  qrModal.hidden = false;
  showToast(`已复制【${claimConfig.keyword}】，扫码关注后回复领取`);
}

function closeQrModal() {
  qrModal.hidden = true;
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall back for embedded browsers that block clipboard permissions.
    }
  }
  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

function showToast(text) {
  const oldToast = document.querySelector(".toast");
  if (oldToast) oldToast.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = text;
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 2200);
}

async function claimTokenOnly() {
  await copyText(claimConfig.keyword);
  showToast(`已复制【${claimConfig.keyword}】，去公众号回复即可领取`);
}

function closePosterModal() {
  const posterModal = document.querySelector("#poster-modal");
  if (posterModal) posterModal.hidden = true;
}

async function generatePoster() {
  if (!state.result) return;

  const posterModal = document.querySelector("#poster-modal");
  const posterPreview = document.querySelector("#poster-preview");
  const posterDownload = document.querySelector("#poster-download");
  if (!posterModal || !posterPreview || !posterDownload) return;

  showToast("正在生成你的个性海报");
  const dataUrl = await createPosterImage(state.result);
  posterPreview.src = dataUrl;
  posterDownload.href = dataUrl;
  posterModal.hidden = false;
}

async function createPosterImage(result) {
  const canvas = document.createElement("canvas");
  canvas.width = 900;
  canvas.height = 1400;
  const ctx = canvas.getContext("2d");
  const colors = result.colors || ["#6b36ec", "#d8c8f3"];

  drawPosterBackground(ctx, canvas.width, canvas.height);
  drawPosterPanel(ctx, 54, 54, 792, 1292, colors);
  drawPosterText(ctx, result);
  await drawPosterPersonaImage(ctx, result);
  await drawPosterQr(ctx);

  return canvas.toDataURL("image/png");
}

function drawPosterBackground(ctx, width, height) {
  ctx.fillStyle = "#210653";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#5f17e6";
  ctx.fillRect(0, 0, width, height * 0.78);
  ctx.strokeStyle = "rgba(255,255,255,0.10)";
  ctx.lineWidth = 2;
  for (let x = 0; x <= width; x += 30) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y <= height; y += 30) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.fillStyle = "#ffd943";
  drawPixelStar(ctx, 94, 110, 34);
  drawPixelStar(ctx, 782, 180, 24);
  drawPixelStar(ctx, 136, 1180, 18);
}

function drawPosterPanel(ctx, x, y, width, height, colors) {
  ctx.fillStyle = "#07030f";
  ctx.fillRect(x + 12, y + 12, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(x, y, width, height);
  ctx.fillStyle = colors[1];
  ctx.fillRect(x + 18, y + 18, width - 36, height - 36);
  ctx.fillStyle = "#ffffff";
  ctx.globalAlpha = 0.62;
  ctx.beginPath();
  ctx.moveTo(x + 18, y + 18);
  ctx.lineTo(x + 290, y + 18);
  ctx.lineTo(x + 150, y + 380);
  ctx.lineTo(x + 18, y + 520);
  ctx.closePath();
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.strokeStyle = "#07030f";
  ctx.lineWidth = 10;
  ctx.strokeRect(x, y, width, height);
}

function drawPosterText(ctx, result) {
  ctx.textAlign = "center";
  ctx.fillStyle = "#ffd943";
  ctx.strokeStyle = "#07030f";
  ctx.lineWidth = 14;
  ctx.font = "900 120px Arial, Microsoft YaHei";
  ctx.strokeText("AITI", 450, 185);
  ctx.fillText("AITI", 450, 185);

  ctx.fillStyle = "#07030f";
  ctx.font = "900 34px Arial, Microsoft YaHei";
  ctx.fillText("模型倾向测试生成报告", 450, 242);

  ctx.fillStyle = "#c8ff2e";
  ctx.strokeStyle = "#07030f";
  ctx.lineWidth = 8;
  roundRect(ctx, 250, 278, 400, 76, 0, true, true);
  ctx.fillStyle = "#07030f";
  ctx.font = "900 46px Arial, Microsoft YaHei";
  ctx.fillText(result.code, 450, 330);

  ctx.fillStyle = "#07030f";
  ctx.font = "900 72px Arial, Microsoft YaHei";
  wrapCanvasText(ctx, result.title, 450, 430, 720, 82);

  ctx.font = "900 30px Arial, Microsoft YaHei";
  ctx.fillStyle = "#5b19d8";
  ctx.fillText(result.rarity, 450, 480);

  ctx.fillStyle = "#07030f";
  ctx.font = "900 28px Arial, Microsoft YaHei";
  ctx.textAlign = "left";
  ctx.fillText("常见模型", 118, 1032);
  drawPosterPills(ctx, result.models.slice(0, 6), 118, 1058, 455);

  ctx.fillStyle = "#ffd943";
  ctx.strokeStyle = "#07030f";
  ctx.lineWidth = 8;
  roundRect(ctx, 92, 1232, 716, 82, 0, true, true);
  ctx.fillStyle = "#07030f";
  ctx.font = "900 27px Arial, Microsoft YaHei";
  ctx.textAlign = "left";
  ctx.fillText("回复【上船开造】领取 Token 试用额度", 122, 1284);
}

function drawPosterPills(ctx, items, x, y, maxWidth) {
  let cursorX = x;
  let cursorY = y;
  ctx.font = "900 22px Arial, Microsoft YaHei";
  items.forEach((item) => {
    const width = Math.min(maxWidth, ctx.measureText(item).width + 28);
    if (cursorX + width > x + maxWidth) {
      cursorX = x;
      cursorY += 43;
    }
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#07030f";
    ctx.lineWidth = 5;
    roundRect(ctx, cursorX, cursorY, width, 32, 0, true, true);
    ctx.fillStyle = "#07030f";
    ctx.fillText(item, cursorX + 14, cursorY + 24);
    cursorX += width + 12;
  });
}

async function drawPosterQr(ctx) {
  const qr = await loadPosterImage("./assets/gmi-qrcode.jpg");
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#07030f";
  ctx.lineWidth = 7;
  ctx.fillRect(624, 1012, 164, 164);
  ctx.strokeRect(624, 1012, 164, 164);
  ctx.drawImage(qr, 637, 1025, 138, 138);
  ctx.fillStyle = "#07030f";
  ctx.textAlign = "center";
  ctx.font = "900 19px Arial, Microsoft YaHei";
  ctx.fillText("扫码关注公众号", 706, 1204);
  ctx.font = "900 18px Arial, Microsoft YaHei";
  ctx.fillText("GMI Cloud 黑板报", 706, 1226);
}

async function drawPosterPersonaImage(ctx, result) {
  const key = result.key || Object.keys(modelTypes).find((item) => modelTypes[item].code === result.code) || "llm";
  const image = await loadPosterImage(getPosterPersonaImagePath(key));
  ctx.save();
  ctx.globalAlpha = 0.22;
  ctx.fillStyle = "#07030f";
  roundRect(ctx, 218, 944, 464, 54, 0, true, false);
  ctx.restore();
  drawContainedImage(ctx, image, 110, 500, 680, 500);
}

function drawContainedImage(ctx, image, x, y, width, height) {
  const ratio = Math.min(width / image.width, height / image.height);
  const drawWidth = image.width * ratio;
  const drawHeight = image.height * ratio;
  const drawX = x + (width - drawWidth) / 2;
  const drawY = y + (height - drawHeight) / 2;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
  ctx.imageSmoothingEnabled = true;
}

function loadPosterImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function drawPixelStar(ctx, x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y - size);
  ctx.lineTo(x + size * 0.22, y - size * 0.22);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + size * 0.22, y + size * 0.22);
  ctx.lineTo(x, y + size);
  ctx.lineTo(x - size * 0.22, y + size * 0.22);
  ctx.lineTo(x - size, y);
  ctx.lineTo(x - size * 0.22, y - size * 0.22);
  ctx.closePath();
  ctx.fill();
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const chars = [...text];
  let line = "";
  let lineCount = 0;
  for (const char of chars) {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      y += lineHeight;
      line = char;
      lineCount += 1;
      if (lineCount >= maxLines - 1) break;
    } else {
      line = testLine;
    }
  }
  if (line) ctx.fillText(line, x, y);
}

startBtn.addEventListener("click", resetQuiz);
restartBtn.addEventListener("click", resetQuiz);
copyBtn.addEventListener("click", generatePoster);
claimBtn.addEventListener("click", claimTokenOnly);
qrCloseBtn.addEventListener("click", closeQrModal);
qrModal.addEventListener("click", (event) => {
  if (event.target === qrModal) closeQrModal();
});
document.querySelector("#poster-close-btn")?.addEventListener("click", closePosterModal);
document.querySelector("#poster-modal")?.addEventListener("click", (event) => {
  if (event.target === document.querySelector("#poster-modal")) closePosterModal();
});
document.querySelector("#poster-copy-tip")?.addEventListener("click", claimTokenOnly);
