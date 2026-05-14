import {
  chatGptLogo,
  claudeLogo,
  deepseek,
  gemini,
  grokLogo,
} from "../assets";

export const tools = [
  {
    title: "ChatGPT",
    description:
      "A conversational AI that helps with writing, coding, research, and problem-solving.",
    creator: "OpenAI",
    image: chatGptLogo,
    link: "https://chatgpt.com/",
    tags: ["Writing", "Coding", "Problem Solving"],
    bestFor: ["Text Generation", "General Assistance", "Coding"],
    reviews: [
      { user: "Alice", comment: "Incredible tool for daily tasks!", rating: 5 },
      { user: "Bob", comment: "Helps me write code much faster.", rating: 4 },
    ],
  },
  {
    title: "Claude",
    description:
      "A safety-focused AI assistant designed for thoughtful, detailed reasoning and long-form tasks.",
    creator: "Anthropic",
    image: claudeLogo,
    link: "https://claude.ai/",
    tags: ["Coding", "Problem Solving", "Deep Thinking"],
    bestFor: ["Long-form Content", "Detailed Analysis", "Refactoring"],
    reviews: [
      { user: "Charlie", comment: "Best for understanding large codebases.", rating: 5 },
      { user: "Dave", comment: "Very natural conversational style.", rating: 5 },
    ],
  },
  {
    title: "DeepSeek",
    description:
      "A high-performance, open-weight AI model focused on strong reasoning, coding, and cost-efficient performance.",
    creator: "DeepSeek",
    image: deepseek,
    tags: ["Research", "Coding"],
    link: "https://www.deepseek.com/",
    bestFor: ["Research", "Complex Logic", "Mathematical Problems"],
    reviews: [
      { user: "Eve", comment: "Incredible reasoning capabilities.", rating: 4 },
      { user: "Frank", comment: "Great open-source alternative.", rating: 5 },
    ],
  },
  {
    title: "Grok AI",
    description:
      "A real-time, edgy AI assistant integrated with X (Twitter) for up-to-date insights and commentary.",
    creator: "xAI",
    image: grokLogo,
    tags: ["Coding", "Problem Solving", "Deep Thinking"],
    link: "https://grok.com/",
    bestFor: ["Real-time Information", "Creative Writing", "Humor"],
    reviews: [
      { user: "Grace", comment: "Love the witty responses!", rating: 4 },
      { user: "Heidi", comment: "Great for staying up to date.", rating: 4 },
    ],
  },
  {
    title: "Gemini",
    description:
      "Google’s multimodal AI that handles text, images, and code with deep integration into its ecosystem.",
    creator: "Google",
    image: gemini,
    tags: ["Coding", "Problem Solving", "Image Generation"],
    link: "https://gemini.google.com/",
    bestFor: ["Multimodal Tasks", "Google Ecosystem Integration", "Data Analysis"],
    reviews: [
      { user: "Ivan", comment: "Seamless integration with Docs and Sheets.", rating: 5 },
      { user: "Judy", comment: "Very fast and responsive.", rating: 4 },
    ],
  },
];
