// =====================================================================
// Al Bonian FM — Management Academy video library
// ---------------------------------------------------------------------
// index.html loads this file. Every entry below appears in the portal.
// To add a video, append a NEW entry at the end of the array with a
// unique id and these fields:
//   department : "Finance" | "Leadership" | "Procurement" | "HR"
//                | "Quality & HSE" | "Business Development"
//   id prefix  : fin- | lead- | proc- | hr- | qhse- | bd-
//   level      : "Foundation" | "Practitioner" | "Executive"
//   source     : "TED Talk" | "Professional Body" | "Training Academy"
//                | "Industry Expert" | "Regulator"
//   embedUrl   : "https://www.youtube.com/embed/<VIDEO_ID>"
//   publishDate: "YYYY-MM-DD" (date the video was posted to the portal)
//   duration   : "m:ss" or "" if unknown
//   takeaways  : exactly 3 short points
//   applyIt    : 1 sentence on applying the idea at Al Bonian FM
// Keep valid JavaScript: commas between entries, quotes around text.
// =====================================================================
window.ALBONIAN_MGMT_VIDEOS = [
  {
    "id": "fin-001",
    "title": "How to Read Financial Statements",
    "department": "Finance",
    "topic": "Financial Statements",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "BFrankCommunication",
    "publishDate": "2026-10-24",
    "duration": "4:24",
    "embedUrl": "https://www.youtube.com/embed/gZOhNZ4MAYw",
    "isNew": true,
    "summary": "A short, number-free introduction to the balance sheet and income statement, showing how the two connect and how managers can use them rather than just read them.",
    "takeaways": [
      "The balance sheet is a snapshot; the income statement covers a period.",
      "Profit on the income statement flows into equity on the balance sheet.",
      "Read statements to ask questions about the business, not just to report."
    ],
    "applyIt": "Review your contract P&L alongside the balance sheet position of receivables to see where profit is tied up."
  },
  {
    "id": "fin-002",
    "title": "Cash Flow Management: Strategy, Forecasting and Liquidity",
    "department": "Finance",
    "topic": "Cash Flow",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "Corporate Finance Institute",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/8ngZ0zS73lg",
    "isNew": true,
    "summary": "Explains why profit alone does not keep a company solvent, and how forecasting, working capital and scenario planning protect liquidity, using well-known company examples.",
    "takeaways": [
      "Profitable companies can still fail when cash runs out.",
      "Rolling cash forecasts and scenarios expose gaps before they hit.",
      "Working capital discipline (collections, payables, stock) funds growth."
    ],
    "applyIt": "Build a 13-week cash forecast that flags overdue client invoices against upcoming subcontractor and payroll payments."
  },
  {
    "id": "lead-001",
    "title": "How Great Leaders Inspire Action — The Golden Circle",
    "department": "Leadership",
    "topic": "Vision & Purpose",
    "level": "Foundation",
    "source": "TED Talk",
    "channel": "TED (Simon Sinek)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/qp0HIF3SfI4",
    "isNew": true,
    "summary": "Simon Sinek's model of why some leaders and organisations inspire people: start with why you do something, then how, then what.",
    "takeaways": [
      "People commit to the purpose behind a decision, not just the decision.",
      "Communicate why → how → what, not the other way round.",
      "A clear purpose makes priorities easier for teams to judge."
    ],
    "applyIt": "Open your next team briefing on a new contract by explaining why it matters to the company before assigning tasks."
  },
  {
    "id": "lead-002",
    "title": "Why Good Leaders Make You Feel Safe",
    "department": "Leadership",
    "topic": "Trust & Culture",
    "level": "Practitioner",
    "source": "TED Talk",
    "channel": "TED (Simon Sinek)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/lmyZMtPVodo",
    "isNew": true,
    "summary": "Sinek argues that great leaders create a circle of safety and trust, so people protect each other and the organisation instead of themselves.",
    "takeaways": [
      "Trust grows when people feel their leader has their back.",
      "Leaders eat last: they put the team's interests before their own.",
      "Safety inside the team frees energy for outside challenges."
    ],
    "applyIt": "When a site issue escalates, take the client conversation yourself and debrief the team privately to learn, not blame."
  },
  {
    "id": "lead-003",
    "title": "How to Turn a Group of Strangers into a Team",
    "department": "Leadership",
    "topic": "Teamwork",
    "level": "Executive",
    "source": "TED Talk",
    "channel": "TED (Amy Edmondson)",
    "publishDate": "2026-10-24",
    "duration": "13:07",
    "embedUrl": "https://www.youtube.com/embed/3boKz0Exros",
    "isNew": true,
    "summary": "Harvard professor Amy Edmondson explains how people who have never worked together can team up fast on urgent, unfamiliar problems, drawing on the 2010 Chilean mine rescue.",
    "takeaways": [
      "Teaming is a skill: situational humility, curiosity and fast learning.",
      "Psychological safety lets people speak up early with problems.",
      "Leaders frame the challenge and keep the group adaptive."
    ],
    "applyIt": "At mobilisation of a new site, run a short kick-off where every trade lead states one risk they see before work starts."
  },
  {
    "id": "proc-001",
    "title": "What is Procurement? Supply Chain Basics",
    "department": "Procurement",
    "topic": "Procurement Fundamentals",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "MVC Logistics Academy",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/bC4d7P0-sjA",
    "isNew": true,
    "summary": "Defines procurement as obtaining goods and services for the business and shows it covers the sourcing steps before a purchase, not only the purchase itself.",
    "takeaways": [
      "Purchasing is one step; procurement is the full sourcing process.",
      "Clear requirements come before supplier selection.",
      "Procurement decisions shape cost, quality and delivery risk."
    ],
    "applyIt": "Ask requesters to state specification, quantity and needed-by date on every material request before quotes are invited."
  },
  {
    "id": "proc-002",
    "title": "8 Supplier Relationship Management Tactics",
    "department": "Procurement",
    "topic": "Supplier Management",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Procurement Tactics",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/tKez1btVrPo",
    "isNew": true,
    "summary": "Eight practical SRM strategies, from segmenting suppliers with the Kraljic Matrix to contract standards, performance tracking, audits and knowing when to exit a supplier.",
    "takeaways": [
      "Segment suppliers so effort matches spend and risk.",
      "Track supplier performance against agreed measures.",
      "Plan audits and exit routes before a supplier fails."
    ],
    "applyIt": "Score your top subcontractors quarterly on response time, quality and cost, and review the bottom two with them."
  },
  {
    "id": "hr-001",
    "title": "Human Resource Management Explained",
    "department": "HR",
    "topic": "HR Fundamentals",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "AIHR - Academy to Innovate HR",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/aPEUKLxxh_k",
    "isNew": true,
    "summary": "An overview of what HRM is, how it developed, its core activities and how it contributes to business performance and future trends.",
    "takeaways": [
      "HRM covers the full employee cycle: hire, develop, retain, exit.",
      "Good HR practice links people decisions to business results.",
      "HR is shifting from administration to strategic partnership."
    ],
    "applyIt": "Map one department's employee journey from offer letter to first-90-day review and note where new hires drop off."
  },
  {
    "id": "hr-002",
    "title": "The Puzzle of Motivation",
    "department": "HR",
    "topic": "Motivation & Engagement",
    "level": "Practitioner",
    "source": "TED Talk",
    "channel": "TED (Dan Pink)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/rrkrvAUbU9Y",
    "isNew": true,
    "summary": "Dan Pink examines why traditional rewards often fail to motivate people for complex work, and proposes autonomy, mastery and purpose instead.",
    "takeaways": [
      "If-then rewards work for simple tasks but can hurt creative work.",
      "Autonomy, mastery and purpose drive lasting motivation.",
      "Design roles so people own outcomes, not just tasks."
    ],
    "applyIt": "Give supervisors ownership of a site KPI and let them choose how to improve it, then recognise the result publicly."
  },
  {
    "id": "qhse-001",
    "title": "What is ISO 9001? Explained in 5 Minutes",
    "department": "Quality & HSE",
    "topic": "Quality Management",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "The Knowledge Academy",
    "publishDate": "2026-10-24",
    "duration": "5:41",
    "embedUrl": "https://www.youtube.com/embed/kRvaXGWz4iY",
    "isNew": true,
    "summary": "Introduces ISO 9001 as the international quality management framework: its history, seven quality principles and the operational benefits for businesses that adopt it.",
    "takeaways": [
      "ISO 9001 rests on seven quality management principles.",
      "Customer focus and process approach sit at the core.",
      "Certification builds client trust and consistent operations."
    ],
    "applyIt": "Pick one recurring client complaint and trace it through your process map to find the step that needs a control."
  },
  {
    "id": "qhse-002",
    "title": "Health and Safety Risk Assessment and Management",
    "department": "Quality & HSE",
    "topic": "Risk Assessment",
    "level": "Foundation",
    "source": "Regulator",
    "channel": "Health and Safety Executive (UK)",
    "publishDate": "2026-10-24",
    "duration": "2:29",
    "embedUrl": "https://www.youtube.com/embed/xyANahuhGs0",
    "isNew": true,
    "summary": "An animated guide from the UK HSE on the steps employers take to protect workers: identify hazards, assess the risks and control them.",
    "takeaways": [
      "Identify hazards before deciding on controls.",
      "Assess who could be harmed and how badly.",
      "Record findings and review them when work changes."
    ],
    "applyIt": "Check that every high-risk activity on your sites (work at height, hot work, confined space) has a current, signed risk assessment."
  },
  {
    "id": "qhse-003",
    "title": "Safety Leadership and a Culture of Safety",
    "department": "Quality & HSE",
    "topic": "Safety Culture",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "HSEBox",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/QutvW0Uv7Wg",
    "isNew": true,
    "summary": "How leaders shape safety attitudes and behaviours, with practical ways to build a workplace culture that protects people's health and wellbeing.",
    "takeaways": [
      "Teams copy what leaders do, not what they say.",
      "Visible leadership walks build safety credibility.",
      "Recognise safe behaviour as well as correcting unsafe acts."
    ],
    "applyIt": "Schedule one unannounced safety walk per month on a live site and close out every finding within the week."
  },
  {
    "id": "bd-001",
    "title": "Sales Prospecting and Lead Generation for B2B",
    "department": "Business Development",
    "topic": "Prospecting",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Patrick Dang",
    "publishDate": "2026-10-24",
    "duration": "11:42",
    "embedUrl": "https://www.youtube.com/embed/bUY2xQg-rk8",
    "isNew": true,
    "summary": "A practical guide to finding prospects and generating leads in business-to-business sales and business development.",
    "takeaways": [
      "Define your ideal customer before building a list.",
      "Consistent outreach beats occasional big pushes.",
      "Track leads through clear pipeline stages."
    ],
    "applyIt": "Build a target list of 20 building owners or property managers in one Dubai community and track outreach weekly."
  },
  {
    "id": "bd-002",
    "title": "The Walk from \"No\" to \"Yes\" — Negotiation",
    "department": "Business Development",
    "topic": "Negotiation",
    "level": "Executive",
    "source": "TED Talk",
    "channel": "TED (William Ury)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/Hc6yi_FtoNo",
    "isNew": true,
    "summary": "William Ury, co-author of Getting to Yes, shares a simple but demanding approach to reaching agreement in even the most contentious situations.",
    "takeaways": [
      "Step back to see the wider context before reacting.",
      "Focus on underlying interests, not stated positions.",
      "Involve third parties to widen the options."
    ],
    "applyIt": "Before your next contract renewal or deduction dispute, write down the client's underlying interests, not just their demands."
  }
];
