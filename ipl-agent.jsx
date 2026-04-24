import { useState, useRef, useEffect } from "react";

const IPL_TEAMS = [
  {
    name: "Mumbai Indians", short: "MI",
    primary: "#004BA0", secondary: "#FFFFFF", accent: "#D4AF37",
    bg: "linear-gradient(145deg,#004BA0,#001F5B)",
    shadow: "rgba(0,75,160,0.65)",
    titles: 5, founded: 2008,
    badge: (sz=56) => (
      <svg viewBox="0 0 80 80" width={sz} height={sz}>
        <defs>
          <radialGradient id="mi-g" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#0062CC"/>
            <stop offset="100%" stopColor="#001F5B"/>
          </radialGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#mi-g)" stroke="#D4AF37" strokeWidth="3"/>
        <circle cx="40" cy="40" r="33" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="1"/>
        <text x="40" y="46" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="900" fontFamily="Georgia,serif" letterSpacing="1">MI</text>
        <path d="M18 56 Q40 66 62 56" stroke="#D4AF37" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="40" cy="14" r="4" fill="#D4AF37"/>
      </svg>
    ),
  },
  {
    name: "Chennai Super Kings", short: "CSK",
    primary: "#F9CD05", secondary: "#0D1117", accent: "#F9CD05",
    bg: "linear-gradient(145deg,#F9CD05,#C9A000)",
    shadow: "rgba(249,205,5,0.55)",
    titles: 5, founded: 2008,
    badge: (sz=56) => (
      <svg viewBox="0 0 80 80" width={sz} height={sz}>
        <defs>
          <radialGradient id="csk-g" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FFD700"/>
            <stop offset="100%" stopColor="#C9A000"/>
          </radialGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#csk-g)" stroke="#0D1117" strokeWidth="3"/>
        <circle cx="40" cy="40" r="33" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1"/>
        <text x="40" y="46" textAnchor="middle" fill="#0D1117" fontSize="18" fontWeight="900" fontFamily="Georgia,serif" letterSpacing="1">CSK</text>
        <path d="M18 56 Q40 66 62 56" stroke="#0D1117" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="40" cy="14" r="4" fill="#0D1117"/>
      </svg>
    ),
  },
  {
    name: "Royal Challengers Bengaluru", short: "RCB",
    primary: "#CC0000", secondary: "#000000", accent: "#C8A951",
    bg: "linear-gradient(145deg,#CC0000,#7A0000)",
    shadow: "rgba(204,0,0,0.65)",
    titles: 0, founded: 2008,
    badge: (sz=56) => (
      <svg viewBox="0 0 80 80" width={sz} height={sz}>
        <defs>
          <radialGradient id="rcb-g" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#EE1111"/>
            <stop offset="100%" stopColor="#7A0000"/>
          </radialGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#rcb-g)" stroke="#C8A951" strokeWidth="3"/>
        <circle cx="40" cy="40" r="33" fill="none" stroke="rgba(200,169,81,0.35)" strokeWidth="1"/>
        <text x="40" y="46" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="Georgia,serif" letterSpacing="1">RCB</text>
        <path d="M18 56 Q40 66 62 56" stroke="#C8A951" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="40" cy="14" r="4" fill="#C8A951"/>
      </svg>
    ),
  },
  {
    name: "Kolkata Knight Riders", short: "KKR",
    primary: "#3A225D", secondary: "#F9CD05", accent: "#F9CD05",
    bg: "linear-gradient(145deg,#3A225D,#1A0A2E)",
    shadow: "rgba(58,34,93,0.7)",
    titles: 3, founded: 2008,
    badge: (sz=56) => (
      <svg viewBox="0 0 80 80" width={sz} height={sz}>
        <defs>
          <radialGradient id="kkr-g" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#4A2E7A"/>
            <stop offset="100%" stopColor="#1A0A2E"/>
          </radialGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#kkr-g)" stroke="#F9CD05" strokeWidth="3"/>
        <circle cx="40" cy="40" r="33" fill="none" stroke="rgba(249,205,5,0.3)" strokeWidth="1"/>
        <text x="40" y="46" textAnchor="middle" fill="#F9CD05" fontSize="18" fontWeight="900" fontFamily="Georgia,serif" letterSpacing="1">KKR</text>
        <path d="M18 56 Q40 66 62 56" stroke="#F9CD05" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="40" cy="14" r="4" fill="#F9CD05"/>
      </svg>
    ),
  },
  {
    name: "Delhi Capitals", short: "DC",
    primary: "#0078BC", secondary: "#EF1C25", accent: "#FFFFFF",
    bg: "linear-gradient(145deg,#0078BC,#003F6B)",
    shadow: "rgba(0,120,188,0.65)",
    titles: 0, founded: 2008,
    badge: (sz=56) => (
      <svg viewBox="0 0 80 80" width={sz} height={sz}>
        <defs>
          <radialGradient id="dc-g" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#0090D8"/>
            <stop offset="100%" stopColor="#003F6B"/>
          </radialGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#dc-g)" stroke="#EF1C25" strokeWidth="3"/>
        <circle cx="40" cy="40" r="33" fill="none" stroke="rgba(239,28,37,0.35)" strokeWidth="1"/>
        <text x="40" y="46" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="900" fontFamily="Georgia,serif" letterSpacing="1">DC</text>
        <path d="M18 56 Q40 66 62 56" stroke="#EF1C25" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="40" cy="14" r="4" fill="#EF1C25"/>
      </svg>
    ),
  },
  {
    name: "Rajasthan Royals", short: "RR",
    primary: "#2D4FA1", secondary: "#E8185D", accent: "#E8185D",
    bg: "linear-gradient(145deg,#2D4FA1,#E8185D)",
    shadow: "rgba(232,24,93,0.5)",
    titles: 2, founded: 2008,
    badge: (sz=56) => (
      <svg viewBox="0 0 80 80" width={sz} height={sz}>
        <defs>
          <linearGradient id="rr-g" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D4FA1"/>
            <stop offset="100%" stopColor="#E8185D"/>
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#rr-g)" stroke="#FFFFFF" strokeWidth="2"/>
        <circle cx="40" cy="40" r="33" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <text x="40" y="46" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="900" fontFamily="Georgia,serif" letterSpacing="1">RR</text>
        <path d="M18 56 Q40 66 62 56" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="40" cy="14" r="4" fill="#FFFFFF"/>
      </svg>
    ),
  },
  {
    name: "Punjab Kings", short: "PBKS",
    primary: "#DD1F2D", secondary: "#84754E", accent: "#84754E",
    bg: "linear-gradient(145deg,#DD1F2D,#8B0000)",
    shadow: "rgba(221,31,45,0.65)",
    titles: 0, founded: 2008,
    badge: (sz=56) => (
      <svg viewBox="0 0 80 80" width={sz} height={sz}>
        <defs>
          <radialGradient id="pbks-g" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#EE2233"/>
            <stop offset="100%" stopColor="#8B0000"/>
          </radialGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#pbks-g)" stroke="#84754E" strokeWidth="3"/>
        <circle cx="40" cy="40" r="33" fill="none" stroke="rgba(132,117,78,0.35)" strokeWidth="1"/>
        <text x="40" y="46" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="Georgia,serif" letterSpacing="0.5">PBKS</text>
        <path d="M18 56 Q40 66 62 56" stroke="#84754E" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="40" cy="14" r="4" fill="#84754E"/>
      </svg>
    ),
  },
  {
    name: "Sunrisers Hyderabad", short: "SRH",
    primary: "#F26522", secondary: "#1A1A1A", accent: "#F26522",
    bg: "linear-gradient(145deg,#F26522,#A83D10)",
    shadow: "rgba(242,101,34,0.65)",
    titles: 1, founded: 2013,
    badge: (sz=56) => (
      <svg viewBox="0 0 80 80" width={sz} height={sz}>
        <defs>
          <radialGradient id="srh-g" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#FF7733"/>
            <stop offset="100%" stopColor="#A83D10"/>
          </radialGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#srh-g)" stroke="#1A1A1A" strokeWidth="3"/>
        <circle cx="40" cy="40" r="33" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="1"/>
        <text x="40" y="46" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="Georgia,serif" letterSpacing="1">SRH</text>
        <path d="M18 56 Q40 66 62 56" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="40" cy="14" r="4" fill="#1A1A1A"/>
        {/* sun rays */}
        {[0,45,90,135,180,225,270,315].map((deg,i)=>{
          const rad=deg*Math.PI/180;
          const x1=40+16*Math.cos(rad), y1=14+6*Math.sin(rad);
          const x2=40+22*Math.cos(rad), y2=14+8*Math.sin(rad);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round"/>;
        })}
      </svg>
    ),
  },
  {
    name: "Gujarat Titans", short: "GT",
    primary: "#1C1C6E", secondary: "#C8A951", accent: "#C8A951",
    bg: "linear-gradient(145deg,#1C1C6E,#0A0A3C)",
    shadow: "rgba(28,28,110,0.7)",
    titles: 1, founded: 2022,
    badge: (sz=56) => (
      <svg viewBox="0 0 80 80" width={sz} height={sz}>
        <defs>
          <radialGradient id="gt-g" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#2828AA"/>
            <stop offset="100%" stopColor="#0A0A3C"/>
          </radialGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#gt-g)" stroke="#C8A951" strokeWidth="3"/>
        <circle cx="40" cy="40" r="33" fill="none" stroke="rgba(200,169,81,0.35)" strokeWidth="1"/>
        <text x="40" y="46" textAnchor="middle" fill="#C8A951" fontSize="22" fontWeight="900" fontFamily="Georgia,serif" letterSpacing="1">GT</text>
        <path d="M18 56 Q40 66 62 56" stroke="#C8A951" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="40" cy="14" r="4" fill="#C8A951"/>
      </svg>
    ),
  },
  {
    name: "Lucknow Super Giants", short: "LSG",
    primary: "#00B4D8", secondary: "#A8DADC", accent: "#A8DADC",
    bg: "linear-gradient(145deg,#00B4D8,#005F7A)",
    shadow: "rgba(0,180,216,0.55)",
    titles: 0, founded: 2022,
    badge: (sz=56) => (
      <svg viewBox="0 0 80 80" width={sz} height={sz}>
        <defs>
          <radialGradient id="lsg-g" cx="40%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#11CCEE"/>
            <stop offset="100%" stopColor="#005F7A"/>
          </radialGradient>
        </defs>
        <circle cx="40" cy="40" r="38" fill="url(#lsg-g)" stroke="#A8DADC" strokeWidth="3"/>
        <circle cx="40" cy="40" r="33" fill="none" stroke="rgba(168,218,220,0.35)" strokeWidth="1"/>
        <text x="40" y="46" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="Georgia,serif" letterSpacing="1">LSG</text>
        <path d="M18 56 Q40 66 62 56" stroke="#A8DADC" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <circle cx="40" cy="14" r="4" fill="#A8DADC"/>
      </svg>
    ),
  },
];

const QUICK_PROMPTS = [
  { icon: "⚡", label: "Powerplay Kings", text: "Who are the best powerplay openers in IPL history by strike rate?" },
  { icon: "👑", label: "Kohli vs Rohit", text: "Compare Virat Kohli and Rohit Sharma complete IPL career stats head to head" },
  { icon: "🎯", label: "Death Bowlers", text: "Top 5 death-over bowlers in IPL history ranked by economy rate" },
  { icon: "🤝", label: "Dream Pairs", text: "Best batting partnerships ever in IPL history with run totals" },
  { icon: "🧠", label: "Best XI: RCB", text: "Build the ideal Playing XI for RCB in IPL 2025 with batting order" },
  { icon: "⚔️", label: "CSK vs MI", text: "CSK vs MI complete head-to-head record across all IPL seasons" },
  { icon: "🌪️", label: "All-rounders", text: "Most impactful all-rounders in IPL history — batting + bowling combined" },
  { icon: "📊", label: "Chase Masters", text: "Which IPL team has the best record chasing targets and why?" },
];

const SYSTEM_PROMPT = `You are an elite IPL (Indian Premier League) cricket analyst AI with encyclopedic knowledge covering all IPL seasons 2008–2025.

You know in depth:
- Every team's full squad, history, win/loss record, and franchise culture: MI, CSK, RCB, KKR, DC, RR, PBKS, SRH, GT, LSG
- Detailed player stats: batting avg, S/R, centuries, fifties, boundary%, powerplay S/R, death-over S/R, economy, wickets, bowling avg
- Head-to-head records, venue-specific performance, toss impact, home vs away splits
- Optimal team combinations, batting orders, bowling attack balance, match-ups
- Auction history, retained players, player valuations, team strategies
- Record holders, milestone moments, memorable matches

Response style:
- Be sharp, confident, and opinionated — fans want expert takes
- Use real statistics; never make up numbers
- For team analysis: give best XI with batting order and bowling roles, top 3 match-winners, one key weakness
- Use **Bold Headers** to structure longer answers
- Keep responses focused and punchy — quality over length
- Use cricket terms: dot-ball, yorker, boundary%, economy, S/R, avg, powerplay, death overs, middle overs`;

export default function IPLAgent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("chat");
  const [hoveredTeam, setHoveredTeam] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;
    setInput("");
    const next = [...messages, { role: "user", content: msg }];
    setMessages(next);
    setLoading(true);
    try {
      const apiKey =
        (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_GROQ_API_KEY) ||
        (typeof process !== "undefined" && process.env && process.env.REACT_APP_GROQ_API_KEY) ||
        "";

      if (!apiKey) {
        throw new Error("Missing Groq API key. Set VITE_GROQ_API_KEY (Vite) or REACT_APP_GROQ_API_KEY (CRA).");
      }

      const groqMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...next.map((m) => ({ role: m.role, content: m.content })),
      ];

      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: groqMessages,
          max_tokens: 1000,
          temperature: 0.6,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        const apiError = data?.error?.message || "Unknown API error";
        throw new Error(`Groq request failed (${res.status}): ${apiError}`);
      }
      const reply = data.choices?.[0]?.message?.content || "No response.";
      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", content: err?.message || "Connection error. Please retry." }]);
    }
    setLoading(false);
  };

  const analyseTeam = (t) => {
    setActiveTab("chat");
    sendMessage(`Give me a complete expert analysis of ${t.name} (${t.short}): best Playing XI with batting order, bowling lineup, top 3 match-winners, tactical strengths, key weakness, and IPL 2025 outlook.`);
  };

  const renderMsg = (text) => {
    return text.split("\n").map((line, i) => {
      if (!line.trim()) return <div key={i} style={{ height: 5 }} />;
      if (line.startsWith("## ")) return <p key={i} style={{ color: "#FFD060", fontWeight: 800, fontSize: 15, margin: "14px 0 4px", letterSpacing: ".04em", borderBottom: "1px solid rgba(255,208,96,0.2)", paddingBottom: 4 }}>{line.slice(3)}</p>;
      if (line.startsWith("### ")) return <p key={i} style={{ color: "#FF9040", fontWeight: 700, fontSize: 12.5, margin: "10px 0 2px", textTransform: "uppercase", letterSpacing: ".1em" }}>{line.slice(4)}</p>;
      if (line.match(/^[-•]\s/)) return <p key={i} style={{ color: "#C0C0C0", fontSize: 13.5, margin: "3px 0 3px 10px", lineHeight: 1.65, display: "flex", gap: 7 }}><span style={{ color: "#FF8030", flexShrink: 0 }}>›</span>{line.replace(/^[-•]\s/, "")}</p>;
      if (line.match(/^\d+\.\s/)) return <p key={i} style={{ color: "#C0C0C0", fontSize: 13.5, margin: "3px 0 3px 10px", lineHeight: 1.65 }}>{line}</p>;
      const parts = line.split(/\*\*(.*?)\*\*/g);
      return (
        <p key={i} style={{ color: "#BEBEBE", fontSize: 14, margin: "3px 0", lineHeight: 1.72 }}>
          {parts.map((p, j) => j % 2 === 1 ? <strong key={j} style={{ color: "#FFFFFF", fontWeight: 700 }}>{p}</strong> : p)}
        </p>
      );
    });
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#07090F",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#E8E8E8",
      display: "flex", flexDirection: "column",
      position: "relative",
    }}>
      {/* Deep stadium atmosphere */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse 80% 40% at 50% 0%, rgba(255,140,0,0.07) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(20,60,20,0.15) 0%, transparent 70%)",
      }} />

      {/* ─── HEADER ─── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 200,
        background: "rgba(5,7,14,0.94)",
        backdropFilter: "blur(24px)",
        boxShadow: "0 1px 0 rgba(255,140,0,0.4), 0 4px 40px rgba(0,0,0,0.6)",
      }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "11px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
            <div style={{ position: "relative" }}>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "linear-gradient(135deg,#FF6B00 0%,#FFD700 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, boxShadow: "0 0 22px rgba(255,140,0,0.55)",
              }}>🏏</div>
              <div style={{ position: "absolute", bottom: 0, right: 0, width: 14, height: 14, borderRadius: "50%", background: "#22C55E", border: "2px solid #07090F", boxShadow: "0 0 6px #22C55E" }} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 7 }}>
                <span style={{ fontSize: 21, fontWeight: 900, color: "#FFFFFF", letterSpacing: "-.01em" }}>IPL</span>
                <span style={{ fontSize: 21, fontWeight: 900, background: "linear-gradient(90deg,#FF6B00,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>ANALYST</span>
                <span style={{ fontSize: 10, background: "rgba(255,150,0,0.14)", color: "#FF9500", padding: "2px 8px", borderRadius: 20, border: "1px solid rgba(255,150,0,0.28)", fontFamily: "monospace", letterSpacing: ".12em", fontWeight: 700 }}>AI</span>
              </div>
              <div style={{ fontSize: 10, color: "#3A4055", letterSpacing: ".2em", textTransform: "uppercase", marginTop: 1 }}>Cricket Intelligence · All Seasons 2008–2025</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 3, background: "rgba(255,255,255,0.03)", borderRadius: 11, padding: 4, border: "1px solid rgba(255,255,255,0.06)" }}>
            {[{ id: "chat", icon: "🤖", label: "AI Analyst" }, { id: "teams", icon: "🏟️", label: "All Teams" }].map(t => (
              <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
                padding: "8px 18px", borderRadius: 8, border: "none", cursor: "pointer",
                background: activeTab === t.id ? "linear-gradient(135deg,#FF6B00,#FF9500)" : "transparent",
                color: activeTab === t.id ? "#FFF" : "#445",
                fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: ".04em",
                boxShadow: activeTab === t.id ? "0 2px 14px rgba(255,107,0,.45)" : "none",
                transition: "all .2s",
              }}>{t.icon} {t.label}</button>
            ))}
          </div>
        </div>
      </header>

      {/* ─── MAIN ─── */}
      <main style={{ flex: 1, maxWidth: 1140, margin: "0 auto", width: "100%", padding: "0 16px", position: "relative", zIndex: 1, display: "flex", flexDirection: "column" }}>

        {/* ══ TEAMS TAB ══ */}
        {activeTab === "teams" && (
          <div style={{ padding: "28px 0 36px" }}>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ fontSize: 11, letterSpacing: ".25em", textTransform: "uppercase", color: "#FF9500", marginBottom: 7 }}>IPL 2025 · 10 Franchises</div>
              <h2 style={{ margin: 0, fontSize: 26, fontWeight: 900, color: "#FFF" }}>Choose Your Franchise</h2>
              <p style={{ margin: "7px 0 0", fontSize: 13, color: "#3A4055" }}>Tap any team for instant AI-powered squad & combination analysis</p>
            </div>

            {/* Champions row */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 26 }}>
              {IPL_TEAMS.filter(t => t.titles > 0).sort((a,b)=>b.titles-a.titles).map(t => (
                <div key={t.short} onClick={() => analyseTeam(t)} style={{
                  display: "flex", alignItems: "center", gap: 8, cursor: "pointer",
                  background: `linear-gradient(90deg,${t.primary}22,${t.primary}11)`,
                  border: `1px solid ${t.primary}44`,
                  borderRadius: 24, padding: "6px 14px 6px 8px",
                  transition: "all .2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = `linear-gradient(90deg,${t.primary}44,${t.primary}22)`; e.currentTarget.style.transform = "scale(1.04)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = `linear-gradient(90deg,${t.primary}22,${t.primary}11)`; e.currentTarget.style.transform = ""; }}>
                  <div>{t.badge(22)}</div>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#DDD" }}>{t.short}</span>
                  <span style={{ fontSize: 12, color: "#FFD700" }}>{"🏆".repeat(t.titles)}</span>
                </div>
              ))}
            </div>

            {/* Team grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(195px,1fr))", gap: 14 }}>
              {IPL_TEAMS.map((team) => {
                const hov = hoveredTeam === team.short;
                const lightText = team.primary === "#F9CD05" ? "#0D1117" : "#FFFFFF";
                return (
                  <button key={team.short}
                    onClick={() => analyseTeam(team)}
                    onMouseEnter={() => setHoveredTeam(team.short)}
                    onMouseLeave={() => setHoveredTeam(null)}
                    style={{
                      background: hov
                        ? `linear-gradient(155deg,${team.primary}55 0%,rgba(7,9,15,0.97) 100%)`
                        : `linear-gradient(155deg,${team.primary}1A 0%,rgba(7,9,15,0.98) 100%)`,
                      border: `1.5px solid ${hov ? team.primary + "BB" : team.primary + "33"}`,
                      borderRadius: 18, padding: "22px 14px 18px",
                      cursor: "pointer", textAlign: "center", fontFamily: "inherit",
                      transform: hov ? "translateY(-6px) scale(1.025)" : "none",
                      boxShadow: hov ? `0 18px 48px ${team.shadow}, 0 0 0 1px ${team.primary}33` : "0 4px 20px rgba(0,0,0,0.5)",
                      transition: "all .28s cubic-bezier(.34,1.56,.64,1)",
                      position: "relative", overflow: "hidden",
                    }}>
                    {/* Top shimmer */}
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 60, background: `linear-gradient(180deg,${team.primary}18,transparent)`, borderRadius: "18px 18px 0 0", pointerEvents: "none" }} />

                    {/* Badge */}
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 11, filter: hov ? `drop-shadow(0 6px 18px ${team.shadow})` : "drop-shadow(0 2px 8px rgba(0,0,0,0.5))", transition: "filter .3s" }}>
                      {team.badge(54)}
                    </div>

                    <div style={{ fontSize: 19, fontWeight: 900, color: hov ? (team.primary === "#F9CD05" ? "#FFD700" : team.primary) : "#EFEFEF", letterSpacing: ".04em", marginBottom: 3, transition: "color .2s" }}>{team.short}</div>
                    <div style={{ fontSize: 10.5, color: "#3A4055", lineHeight: 1.4, marginBottom: 10, minHeight: 27, padding: "0 4px" }}>{team.name}</div>

                    <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 13, fontSize: 11 }}>
                      <span style={{ color: "#FFD700" }}>🏆 {team.titles}</span>
                      <span style={{ color: "#2E3450" }}>·</span>
                      <span style={{ color: "#3A4055" }}>Est. {team.founded}</span>
                    </div>

                    <div style={{
                      padding: "7px 14px", borderRadius: 22,
                      background: hov ? `linear-gradient(90deg,${team.primary},${team.accent === team.primary ? team.primary + "CC" : team.accent})` : "rgba(255,255,255,0.04)",
                      color: hov ? (team.primary === "#F9CD05" ? "#000" : "#FFF") : "#2E3450",
                      fontSize: 11, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase",
                      transition: "all .22s",
                    }}>
                      {hov ? "Analyse Squad →" : "View Analysis"}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ══ CHAT TAB ══ */}
        {activeTab === "chat" && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column", paddingTop: 24, paddingBottom: 16 }}>

            {/* Welcome screen */}
            {messages.length === 0 && (
              <div style={{ marginBottom: 22 }}>
                <div style={{ textAlign: "center", padding: "20px 0 24px" }}>
                  {/* Trophy icon with glow */}
                  <div style={{ position: "relative", display: "inline-block", marginBottom: 14 }}>
                    <div style={{ fontSize: 54, filter: "drop-shadow(0 0 24px rgba(255,165,0,0.6))", lineHeight: 1 }}>🏏</div>
                    <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle,rgba(255,165,0,0.15),transparent)", borderRadius: "50%", pointerEvents: "none" }} />
                  </div>
                  <h1 style={{ margin: 0, fontSize: 24, fontWeight: 900, color: "#FFF", letterSpacing: "-.02em" }}>IPL Intelligence Agent</h1>
                  <p style={{ margin: "7px 0 16px", color: "#3A4055", fontSize: 13.5 }}>Teams · Players · Stats · Combinations · History — All IPL seasons 2008–2025</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 20, padding: "5px 16px" }}>
                    <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22C55E", boxShadow: "0 0 8px #22C55E", animation: "pulse 2s infinite" }} />
                    <span style={{ fontSize: 11, color: "#22C55E", letterSpacing: ".12em", fontFamily: "monospace", fontWeight: 700 }}>ANALYST ONLINE</span>
                  </div>
                </div>

                {/* Team mini-badges row */}
                <div style={{ display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap", marginBottom: 22 }}>
                  {IPL_TEAMS.map(t => (
                    <div key={t.short} onClick={() => analyseTeam(t)} title={t.name} style={{ cursor: "pointer", transition: "transform .2s", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.18)"}
                      onMouseLeave={e => e.currentTarget.style.transform = ""}>
                      {t.badge(32)}
                    </div>
                  ))}
                </div>

                {/* Quick prompts */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(235px,1fr))", gap: 9 }}>
                  {QUICK_PROMPTS.map((p, i) => (
                    <button key={i} onClick={() => sendMessage(p.text)} style={{
                      background: "linear-gradient(135deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))",
                      border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12,
                      padding: "12px 14px", cursor: "pointer", textAlign: "left",
                      color: "#667", fontSize: 13, fontFamily: "inherit", lineHeight: 1.5,
                      display: "flex", alignItems: "center", gap: 10, transition: "all .18s",
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,140,0,0.35)"; e.currentTarget.style.color = "#EEE"; e.currentTarget.style.background = "linear-gradient(135deg,rgba(255,140,0,0.07),rgba(255,80,0,0.04))"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "#667"; e.currentTarget.style.background = "linear-gradient(135deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))"; }}>
                      <span style={{ fontSize: 18, flexShrink: 0 }}>{p.icon}</span>
                      <div>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "#FF9040", marginBottom: 2 }}>{p.label}</div>
                        <div>{p.text}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            <div style={{ flex: 1, overflowY: "auto", marginBottom: 12 }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", marginBottom: 18, gap: 10, alignItems: "flex-start" }}>
                  {msg.role === "assistant" && (
                    <div style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, background: "linear-gradient(135deg,#FF6B00,#FFD700)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, boxShadow: "0 2px 14px rgba(255,140,0,.4)", marginTop: 2 }}>🏏</div>
                  )}
                  <div style={{
                    maxWidth: "76%",
                    background: msg.role === "user"
                      ? "linear-gradient(135deg,#FF6B00,#D44000)"
                      : "linear-gradient(150deg,rgba(18,22,36,0.98),rgba(11,14,24,0.98))",
                    border: msg.role === "user" ? "1px solid rgba(255,150,50,0.4)" : "1px solid rgba(255,255,255,0.06)",
                    borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "4px 18px 18px 18px",
                    padding: "13px 16px",
                    boxShadow: msg.role === "user" ? "0 4px 22px rgba(255,107,0,.32)" : "0 4px 20px rgba(0,0,0,.45)",
                  }}>
                    {msg.role === "user"
                      ? <p style={{ margin: 0, color: "#FFF", fontSize: 14, lineHeight: 1.65 }}>{msg.content}</p>
                      : <div>{renderMsg(msg.content)}</div>
                    }
                  </div>
                  {msg.role === "user" && (
                    <div style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, background: "linear-gradient(135deg,#1A2236,#252F48)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, border: "1.5px solid rgba(255,107,0,0.25)", marginTop: 2 }}>👤</div>
                  )}
                </div>
              ))}

              {loading && (
                <div style={{ display: "flex", gap: 10, marginBottom: 18, alignItems: "flex-start" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, background: "linear-gradient(135deg,#FF6B00,#FFD700)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🏏</div>
                  <div style={{ background: "linear-gradient(150deg,rgba(18,22,36,0.98),rgba(11,14,24,0.98))", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "4px 18px 18px 18px", padding: "16px 20px", display: "flex", gap: 7, alignItems: "center" }}>
                    {[0,1,2].map(j => (
                      <div key={j} style={{ width: 9, height: 9, borderRadius: "50%", background: "linear-gradient(135deg,#FF6B00,#FFD700)", animation: "dotBounce 1.3s ease-in-out infinite", animationDelay: `${j*.18}s` }} />
                    ))}
                    <span style={{ marginLeft: 10, color: "#2E3450", fontSize: 12, fontFamily: "monospace" }}>Analysing…</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div style={{
              background: "linear-gradient(150deg,rgba(16,20,34,0.98),rgba(10,12,22,0.98))",
              border: "1.5px solid rgba(255,140,0,0.18)",
              borderRadius: 16, padding: "5px 5px 5px 16px",
              display: "flex", alignItems: "center", gap: 8,
              boxShadow: "0 0 40px rgba(255,107,0,0.07), inset 0 1px 0 rgba(255,255,255,0.03)",
              transition: "border-color .2s",
            }}>
              <span style={{ fontSize: 17, opacity: 0.45 }}>🏏</span>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
                placeholder="Ask about any IPL team, player, stat, or combination…"
                style={{ flex: 1, background: "none", border: "none", outline: "none", color: "#E0E0E0", fontSize: 14, fontFamily: "inherit", padding: "11px 0" }}
              />
              <button onClick={() => sendMessage()} disabled={loading || !input.trim()} style={{
                background: loading || !input.trim() ? "rgba(255,255,255,0.04)" : "linear-gradient(135deg,#FF6B00,#FF9500)",
                border: "none", borderRadius: 12, padding: "11px 22px",
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                color: loading || !input.trim() ? "#2E3450" : "#FFF",
                fontSize: 13, fontWeight: 800, fontFamily: "inherit", letterSpacing: ".05em",
                boxShadow: loading || !input.trim() ? "none" : "0 4px 18px rgba(255,107,0,.38)",
                transition: "all .2s",
              }}>
                {loading ? "…" : "Ask →"}
              </button>
            </div>
            <p style={{ textAlign: "center", fontSize: 11, color: "#1E2435", margin: "7px 0 0", letterSpacing: ".05em" }}>
              Powered by Groq AI · IPL 2008–2025 · All 10 franchises
            </p>
          </div>
        )}
      </main>

      <style>{`
        @keyframes dotBounce { 0%,80%,100%{transform:scale(.5);opacity:.25} 40%{transform:scale(1);opacity:1} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.35} }
        *{box-sizing:border-box}
        ::selection{background:rgba(255,107,0,.3)}
        ::-webkit-scrollbar{width:4px}
        ::-webkit-scrollbar-track{background:#07090F}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#FF6B00,#FF9500);border-radius:4px}
      `}</style>
    </div>
  );
}
