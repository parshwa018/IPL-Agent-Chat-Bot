# IPL-Agent-Chat-Bot
The project is a browser-native AI sports analyst — no backend, no database. It wires together a carefully engineered prompt, a fast open-source LLM (LLaMA via Groq), and a polished React UI to give cricket fans an expert companion for predictions, fantasy picks, squad building, and historical deep-dives.

# 🏏 IPL Intelligence Agent

An AI-powered IPL cricket analyst built with React + Groq (LLaMA 3.1). Ask anything about 
IPL teams, players, stats, and history across all seasons 2008–2025.

---

## ✨ Features

- **AI Chat Interface** — Conversational analyst with full multi-turn memory
- **All 10 Franchises** — MI, CSK, RCB, KKR, DC, RR, PBKS, SRH, GT, LSG
- **One-Click Team Analysis** — Playing XI, bowlers, match-winners, weaknesses
- **Quick Prompts** — 8 curated cricket questions to get started instantly
- **Custom SVG Badges** — Hand-crafted team badges with official brand colors
- **Stadium UI** — Dark glassmorphism design with team-color theming

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (JSX), CSS-in-JS |
| AI Model | LLaMA 3.1-8B-Instant via Groq API |
| Styling | Inline styles, SVG, CSS keyframes |
| Build Tool | Vite or Create React App |

---

## 🚀 Getting Started

**1. Clone the repo**
```bash
git clone https://github.com/your-username/ipl-intelligence-agent
cd ipl-intelligence-agent
```

**2. Install dependencies**
```bash
npm install
```

**3. Add your Groq API key**

Create a `.env` file in the root:

Get a free API key at [console.groq.com](https://console.groq.com)

**4. Run the app**
```bash
npm run dev
```

---

## 💡 Example Queries

- "Who are the best powerplay openers in IPL history by strike rate?"
- "Build the ideal Playing XI for MI in IPL 2025"
- "CSK vs MI complete head-to-head record"
- "Most impactful all-rounders in IPL — batting + bowling combined"
- "Which team has the best record chasing targets and why?"

---

## 🏗️ Project Structure

ipl-agent.jsx
├── IPL_TEAMS[]         — Team data, colors, SVG badge generators
├── QUICK_PROMPTS[]     — 8 curated starter prompts
├── SYSTEM_PROMPT       — Elite analyst persona injected into every API call
├── IPLAgent()          — Main component
│   ├── sendMessage()   — Groq API call with conversation history
│   ├── analyseTeam()   — One-click team analysis trigger
│   └── renderMsg()     — Markdown-style response renderer
└── UI Tabs
├── Chat Tab        — Full AI conversation interface
└── Teams Tab       — Visual franchise grid
