// =====================================================================
// Al Bonian FM — Management Academy video library
// ---------------------------------------------------------------------
// index.html loads this file. Every entry below appears in the portal.
// To add a video, append a NEW entry at the end of the array with a
// unique id and these fields:
//   department : "Finance" | "Leadership" | "Procurement" | "HR"
//                | "Quality & HSE" | "Business Development" | "IT"
//                | "Facilities Management" | "Property Inspection & Valuation"
//   id prefix  : fin- | lead- | proc- | hr- | qhse- | bd- | it- | fm- | pv-
//   level      : "Foundation" | "Practitioner" | "Executive"
//   source     : "TED Talk" | "Professional Body" | "Training Academy"
//                | "Industry Expert" | "Regulator"
//   embedUrl   : "https://www.youtube.com/embed/<VIDEO_ID>"
//   publishDate: "YYYY-MM-DD" (date the video was posted to the portal)
//   duration   : "m:ss" or "" if unknown
//   takeaways  : exactly 3 short points
//   format     : optional — "Process" | "On-the-job" (used for Property Inspection & Valuation)
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
  },
  {
    "id": "fin-003",
    "title": "Budget vs Forecast: Financial Forecasting Explained",
    "department": "Finance",
    "topic": "Budgeting & Forecasting",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "CandiMentor",
    "publishDate": "2026-10-24",
    "duration": "6:43",
    "embedUrl": "https://www.youtube.com/embed/c2W2V-apWbQ",
    "isNew": true,
    "summary": "Shows how a budget sets fixed targets while a forecast is updated to reflect actual performance, covering rolling forecasts, assumptions, scenarios and variance review.",
    "takeaways": [
      "A budget is the plan; a forecast is the latest view of reality.",
      "Rolling forecasts keep planning current as the year moves.",
      "Variance review explains why results differ from plan."
    ],
    "applyIt": "Run a monthly budget-vs-actual review per contract and update the full-year forecast for any line off by more than 10%."
  },
  {
    "id": "fin-004",
    "title": "Cash Flow Forecasting: Short-Term, 13-Week and Long-Term",
    "department": "Finance",
    "topic": "Cash Flow",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "Corporate Finance Institute",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/dUEDS4w3p28",
    "isNew": true,
    "summary": "Explains how profit, EBITDA and cash differ, and how short-term, 13-week and long-range cash forecasts reveal timing gaps and funding needs before a liquidity crunch.",
    "takeaways": [
      "Profit and EBITDA are not cash in the bank.",
      "A 13-week forecast exposes near-term timing gaps.",
      "Long-range forecasts show future funding needs early."
    ],
    "applyIt": "Add a weekly cash line to the management meeting showing expected collections against payroll and supplier payments for the next 13 weeks."
  },
  {
    "id": "fin-005",
    "title": "Working Capital Management: Optimising Liquidity",
    "department": "Finance",
    "topic": "Working Capital",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "Corporate Finance Institute",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/Z2iSy4nnYZI",
    "isNew": true,
    "summary": "Covers the cash conversion cycle and practical working-capital strategies such as tighter receivable terms, centralised treasury and stress testing, with examples from large companies.",
    "takeaways": [
      "The cash conversion cycle shows how long cash is tied up.",
      "Faster collections free cash without new borrowing.",
      "Stress-test liquidity before it is needed."
    ],
    "applyIt": "Measure days sales outstanding per major client and agree a collection target for the three slowest payers."
  },
  {
    "id": "fin-006",
    "title": "Gross, Operating and Net Profit Margin",
    "department": "Finance",
    "topic": "Profitability",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "The Organic Chemistry Tutor",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/uYM2YnwO-20",
    "isNew": true,
    "summary": "Worked examples showing how to calculate gross, operating and net profit margins from an income statement.",
    "takeaways": [
      "Gross margin shows profit after direct costs.",
      "Operating margin adds overheads to the picture.",
      "Net margin is what is left after all costs and tax."
    ],
    "applyIt": "Compare gross margin by contract to spot which sites carry the company and which need repricing at renewal."
  },
  {
    "id": "lead-004",
    "title": "Everyday Leadership",
    "department": "Leadership",
    "topic": "Leadership Mindset",
    "level": "Foundation",
    "source": "TED Talk",
    "channel": "TED-Ed (Drew Dudley)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/uAy6EawKKME",
    "isNew": true,
    "summary": "Drew Dudley argues that leadership is found in small, everyday acts that change someone's day, not only in grand achievements.",
    "takeaways": [
      "Small acts of leadership happen every day.",
      "People often don't know the impact they had on others.",
      "Recognising others' impact builds a leadership culture."
    ],
    "applyIt": "Ask each supervisor to recognise one team member's specific contribution in the weekly site meeting."
  },
  {
    "id": "lead-005",
    "title": "Delegating: Why It Matters for Managers",
    "department": "Leadership",
    "topic": "Delegation",
    "level": "Foundation",
    "source": "Professional Body",
    "channel": "Harvard Business Impact",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/i41cFYIMQlw",
    "isNew": true,
    "summary": "Introduces why delegation is essential to management, and how to assess a task, match it to an employee's skills and support them to completion.",
    "takeaways": [
      "Delegation is a core management skill, not a favour.",
      "Match the task to the person's skills and growth goals.",
      "Stay available for support without taking the work back."
    ],
    "applyIt": "List three recurring tasks you still do yourself each week and hand one over to a direct report with a clear deadline."
  },
  {
    "id": "lead-006",
    "title": "How to Delegate When You Can't Let Go",
    "department": "Leadership",
    "topic": "Delegation",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "David Burkus",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/UkLyv5Juq68",
    "isNew": true,
    "summary": "Common delegation mistakes such as hovering or handing off tasks without ownership, and fixes like matching responsibility to readiness, setting checkpoints and sharing real authority.",
    "takeaways": [
      "Delegate ownership of outcomes, not just tasks.",
      "Set checkpoints instead of hovering.",
      "Give authority to make decisions along with the work."
    ],
    "applyIt": "When assigning a new site mobilisation, agree two checkpoints and let the site lead decide everything in between."
  },
  {
    "id": "lead-007",
    "title": "How to Give Feedback, Especially When You're Dreading It",
    "department": "Leadership",
    "topic": "Feedback",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "Harvard Business Review",
    "publishDate": "2026-10-24",
    "duration": "10:54",
    "embedUrl": "https://www.youtube.com/embed/jhtwqK3iOV8",
    "isNew": true,
    "summary": "HBR's guide to delivering critical feedback with empathy and clarity: common mistakes, a simple recipe, handling disagreement and practising difficult conversations.",
    "takeaways": [
      "Prepare the message; don't improvise hard feedback.",
      "Be specific about behaviour and its impact.",
      "Invite the other person's view and agree next steps."
    ],
    "applyIt": "Before your next performance conversation, write down one specific example and the impact it had on the client or team."
  },
  {
    "id": "proc-003",
    "title": "The Ultimate Guide to Spend Analysis",
    "department": "Procurement",
    "topic": "Spend Analysis",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Suplari",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/omCQr_HgCQ0",
    "isNew": true,
    "summary": "Explains spend analysis from collecting and cleaning purchase data to building a spend cube, common pitfalls like messy data and tail spend, and turning insight into savings.",
    "takeaways": [
      "Clean, categorised data is the foundation of spend analysis.",
      "Tail spend hides savings across many small purchases.",
      "Insights only matter when they lead to sourcing action."
    ],
    "applyIt": "Export last year's purchase orders, group them by category and supplier, and find the top 10 categories by spend."
  },
  {
    "id": "proc-004",
    "title": "Contract Negotiation Strategies for Procurement",
    "department": "Procurement",
    "topic": "Negotiation",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Master Contract Management",
    "publishDate": "2026-10-24",
    "duration": "4:46",
    "embedUrl": "https://www.youtube.com/embed/Ii2KC7P5IqY",
    "isNew": true,
    "summary": "How negotiation shapes what you actually pay under construction and procurement contracts, with focus on payment terms, retention and the tender as the starting point.",
    "takeaways": [
      "Negotiation is about clarity, not winning.",
      "Payment terms and retention matter as much as price.",
      "The tender sets the frame for the whole negotiation."
    ],
    "applyIt": "In the next subcontract award, negotiate payment milestones and retention explicitly instead of only the lump-sum price."
  },
  {
    "id": "proc-005",
    "title": "Procurement Contracting: Commercial, Legal and Risk",
    "department": "Procurement",
    "topic": "Contract Management",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Professor Simon Croom",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/3VorbAZu2cU",
    "isNew": true,
    "summary": "Covers the full contract lifecycle from pre-award and scope design to performance monitoring, disputes, amendments and close-out, balancing commercial and legal goals.",
    "takeaways": [
      "Contract value is won or lost in the scope of work.",
      "Monitor performance during the contract, not only at renewal.",
      "The contract manager coordinates procurement, legal, finance and operations."
    ],
    "applyIt": "Assign a named owner for each major subcontract and review their scope, KPIs and variations quarterly."
  },
  {
    "id": "hr-003",
    "title": "Structured Interviews Explained",
    "department": "HR",
    "topic": "Recruitment",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "GoodHiresOnly",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/1YwMfHXArPg",
    "isNew": true,
    "summary": "How structured interviews make hiring more consistent and less biased, with steps for standard questions, scoring rubrics and interviewer training.",
    "takeaways": [
      "Ask every candidate the same job-relevant questions.",
      "Score answers against a rubric agreed in advance.",
      "Train interviewers to reduce bias and gut-feel hiring."
    ],
    "applyIt": "Create a five-question interview guide with a scoring sheet for supervisor-level hires and use it for every candidate."
  },
  {
    "id": "hr-004",
    "title": "Employee Retention Strategies",
    "department": "HR",
    "topic": "Retention",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "HR Trends",
    "publishDate": "2026-10-24",
    "duration": "13:21",
    "embedUrl": "https://www.youtube.com/embed/tgX607r_jZs",
    "isNew": true,
    "summary": "Explains employee retention, how to calculate retention rates, the main causes of turnover and practical strategies to keep good people.",
    "takeaways": [
      "Track retention rate, not just headcount.",
      "Know why people leave before trying to fix it.",
      "Belonging, wellbeing and listening drive retention."
    ],
    "applyIt": "Calculate 12-month retention for each department and hold stay interviews with your top performers."
  },
  {
    "id": "hr-005",
    "title": "Training Needs Analysis Explained",
    "department": "HR",
    "topic": "Learning & Development",
    "level": "Practitioner",
    "source": "Training Academy",
    "channel": "CodeLucky",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/d0HPcpSnCyc",
    "isNew": true,
    "summary": "Introduces training needs analysis at organisational, task and individual levels, the TNA process, data-collection methods and common mistakes.",
    "takeaways": [
      "Analyse needs at organisation, job and individual level.",
      "Base training on evidence of skill gaps.",
      "Link every training plan to a business outcome."
    ],
    "applyIt": "Run a quick skills-gap survey for supervisors and use it to choose next quarter's training topics."
  },
  {
    "id": "hr-006",
    "title": "Performance Appraisals: A Guide for Managers and HR",
    "department": "HR",
    "topic": "Performance Management",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "CodeLucky",
    "publishDate": "2026-10-24",
    "duration": "3:58",
    "embedUrl": "https://www.youtube.com/embed/AbTza-1wn_A",
    "isNew": true,
    "summary": "What performance appraisals are for and how to run them well, including SMART goals, the SBI feedback model and avoiding recency and halo bias.",
    "takeaways": [
      "Set SMART goals at the start of the period.",
      "Use Situation–Behaviour–Impact to give feedback.",
      "Watch for recency and halo bias when rating."
    ],
    "applyIt": "Rewrite each direct report's annual objectives as SMART goals before the next review cycle."
  },
  {
    "id": "qhse-004",
    "title": "The 5 Whys: Root Cause Analysis",
    "department": "Quality & HSE",
    "topic": "Root Cause Analysis",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "EPM",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/t7FcK8jV2yA",
    "isNew": true,
    "summary": "How to use the 5 Whys technique to find the root cause of a problem, its strengths and limits, and how to apply countermeasures.",
    "takeaways": [
      "Keep asking why until you reach a process cause.",
      "Fix the root cause, not the symptom.",
      "Combine 5 Whys with data to avoid guesswork."
    ],
    "applyIt": "Use the 5 Whys on the next repeat breakdown or client complaint and record the countermeasure in the CAPA log."
  },
  {
    "id": "qhse-005",
    "title": "Fishbone Diagram for Root Cause Analysis",
    "department": "Quality & HSE",
    "topic": "Root Cause Analysis",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "The Business Analysis Doctor",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/AyJ9iEOH0ZY",
    "isNew": true,
    "summary": "Explains the fishbone (Ishikawa) diagram, its cause categories such as the 6Ms, and how to use it with the 5 Whys and brainstorming.",
    "takeaways": [
      "Group possible causes into categories like the 6Ms.",
      "Use the team's knowledge to fill in the diagram.",
      "Drill into the likeliest causes with the 5 Whys."
    ],
    "applyIt": "Run a fishbone session with the site team for the most frequent SLA breach on a key contract."
  },
  {
    "id": "qhse-006",
    "title": "The ISO 9001 Internal Audit Process",
    "department": "Quality & HSE",
    "topic": "Audits",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "PECB",
    "publishDate": "2026-10-24",
    "duration": "1:11:39",
    "embedUrl": "https://www.youtube.com/embed/18Fua7om8OA",
    "isNew": true,
    "summary": "A webinar on planning and carrying out ISO 9001 internal audits, why they matter and what an internal audit programme must include.",
    "takeaways": [
      "Internal audits test whether the system works in practice.",
      "Plan an audit programme based on risk and past results.",
      "Follow up findings until corrective actions are verified."
    ],
    "applyIt": "Set a risk-based internal audit plan for next year that covers every contract at least once."
  },
  {
    "id": "bd-003",
    "title": "How to Write a Winning Tender",
    "department": "Business Development",
    "topic": "Tenders & Proposals",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "The Bid Expert",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/MBBrEBWxdVk",
    "isNew": true,
    "summary": "A six-step approach to tender responses that stand out: understand the client, follow instructions, involve the team, show capability, review and submit on time.",
    "takeaways": [
      "Understand the client's real needs before writing.",
      "Follow the tender instructions exactly.",
      "Review the full submission before it goes out."
    ],
    "applyIt": "Introduce a bid/no-bid checklist and a final compliance review for every FM tender."
  },
  {
    "id": "bd-004",
    "title": "Introduction to Tender Writing",
    "department": "Business Development",
    "topic": "Tenders & Proposals",
    "level": "Practitioner",
    "source": "Regulator",
    "channel": "business.gov.au",
    "publishDate": "2026-10-24",
    "duration": "1:21:46",
    "embedUrl": "https://www.youtube.com/embed/9xT9F5_KSDQ",
    "isNew": true,
    "summary": "A government-run session on preparing tender submissions that are more likely to succeed, with tested methods to improve win rates.",
    "takeaways": [
      "Read evaluation criteria first and answer to them.",
      "Give evidence, not claims, for each capability.",
      "Learn from debriefs on lost bids."
    ],
    "applyIt": "Request a debrief on the last two lost tenders and log the lessons for the BD team."
  },
  {
    "id": "bd-005",
    "title": "Negotiate Better Deals Without Burning Bridges",
    "department": "Business Development",
    "topic": "Negotiation",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Behind the Brand (Chris Voss)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/7_VpQawHawo",
    "isNew": true,
    "summary": "Former FBI negotiator Chris Voss on collaborative negotiation, spotting when you are only being used for price comparison, and building lasting client relationships.",
    "takeaways": [
      "Treat negotiation as collaboration, not a fight.",
      "Ask the client why they chose to talk to you.",
      "Spot when you're only a benchmark quote."
    ],
    "applyIt": "Before pricing the next quotation, ask the client what made them invite Al Bonian and what success looks like to them."
  },
  {
    "id": "bd-006",
    "title": "The Four Components of Strategic Account Management",
    "department": "Business Development",
    "topic": "Key Account Management",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Drift (Greg Callahan, Bain & Company)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/Ec2UspaZHSg",
    "isNew": true,
    "summary": "A Bain partner outlines four keys to strategic account management: choosing focus accounts, setting a cadence, developing plays and keeping it simple.",
    "takeaways": [
      "Focus effort on the accounts with most potential.",
      "Set a regular cadence of contact and review.",
      "Develop repeatable plays to grow each account."
    ],
    "applyIt": "Pick your top five clients and agree a quarterly review meeting and growth plan for each."
  },
  {
    "id": "bd-007",
    "title": "How to Make Key Account Management Work",
    "department": "Business Development",
    "topic": "Key Account Management",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Account Management Secrets (AMplify)",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/wXOy82cSgcg",
    "isNew": true,
    "summary": "Why key account programmes fail when treated as ordinary sales, and how to study a client's strategy, segment accounts and reach senior decision-makers.",
    "takeaways": [
      "Key accounts need a long-term business plan, not a sales push.",
      "Understand the client's strategy and financial priorities.",
      "Secure executive sponsorship inside your own company."
    ],
    "applyIt": "Assign a senior executive sponsor to each of the top clients and meet their leadership at least twice a year."
  },
  {
    "id": "it-001",
    "title": "What Is ITIL? IT Service Management Explained",
    "department": "IT",
    "topic": "IT Service Management",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "The Knowledge Academy",
    "publishDate": "2026-10-24",
    "duration": "3:48",
    "embedUrl": "https://www.youtube.com/embed/Md0c86PnhXo",
    "isNew": true,
    "summary": "A beginner's introduction to ITIL, the framework for running IT services that meet business needs, covering the Service Value System and the Four Dimensions Model.",
    "takeaways": [
      "ITIL treats IT as a service delivered to the business.",
      "The Service Value System links IT activity to business value.",
      "Clear processes make IT support predictable and measurable."
    ],
    "applyIt": "Set up a simple IT ticket log with priority levels and target response times for head-office and site users."
  },
  {
    "id": "it-002",
    "title": "Zero Trust Security Explained",
    "department": "IT",
    "topic": "Cybersecurity",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "IBM Technology",
    "publishDate": "2026-10-24",
    "duration": "3:42",
    "embedUrl": "https://www.youtube.com/embed/yn6CPQ9RioA",
    "isNew": true,
    "summary": "IBM explains the zero trust model: treat every user, device and connection as untrusted and verify each one continuously, supported by integrated security tools.",
    "takeaways": [
      "Never trust by default; always verify.",
      "Grant users only the access they need.",
      "Integrated tools give a clearer view of threats."
    ],
    "applyIt": "Review who has admin access to email, finance and CAFM systems and remove any rights that aren't needed."
  },
  {
    "id": "it-003",
    "title": "What Is a CMMS?",
    "department": "IT",
    "topic": "FM Technology",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Facilio",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/GqNbuwfLkzc",
    "isNew": true,
    "summary": "A short explainer on computerised maintenance management systems: tracking work orders, assets and spare parts in one place, and using preventive schedules and building data to cut breakdowns.",
    "takeaways": [
      "A CMMS puts work orders, assets and spares in one system.",
      "Preventive schedules reduce reactive breakdowns.",
      "Connected data supports better maintenance decisions."
    ],
    "applyIt": "Check that every asset on your top contracts is registered in the system with a preventive maintenance schedule attached."
  },
  {
    "id": "it-004",
    "title": "How CAFM Software Transforms Facility Management",
    "department": "IT",
    "topic": "FM Technology",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "UpKeep",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/j7-maM24CmY",
    "isNew": true,
    "summary": "Introduces computer-aided facilities management software, its core modules such as space, asset and building administration, and how CAFM compares with CMMS and IWMS.",
    "takeaways": [
      "CAFM covers space, assets and building administration.",
      "CAFM, CMMS and IWMS solve different problems.",
      "Configure the system around your real workflows."
    ],
    "applyIt": "Map which FM workflows still run on paper or spreadsheets and rank them for moving into the CAFM/Zoho system."
  },
  {
    "id": "it-005",
    "title": "Introduction to AI for Leaders",
    "department": "IT",
    "topic": "Artificial Intelligence",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "HBS Online",
    "publishDate": "2026-10-24",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/9qkeU03QYjw",
    "isNew": true,
    "summary": "Harvard Business School Online on leading AI transformation responsibly and at scale: rethinking systems, empowering teams, setting an AI strategy and overcoming cultural barriers.",
    "takeaways": [
      "AI value comes from redesigning work, not just adding tools.",
      "Leaders set the strategy and the ethical guardrails.",
      "Culture and structure decide whether AI scales."
    ],
    "applyIt": "Pick one repetitive back-office process (e.g. report preparation or ticket triage) and pilot an AI tool on it for one month with clear success measures."
  },
  {
    "id": "fin-007",
    "title": "Margins Explained: EBITDA, EBIT and What They Really Tell You",
    "department": "Finance",
    "topic": "Financial KPIs",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "CNBC-TV18",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/1a2QxbHhTzk",
    "isNew": true,
    "summary": "Walks through the layers of profit margin, from gross margin to EBITDA, EBIT and net profit, and what each reveals about pricing power, cost control and efficiency.",
    "takeaways": [
      "Gross margin shows how well pricing covers direct costs",
      "EBITDA and EBIT separate operating performance from financing and accounting effects",
      "Track margin trends over time, not just one-off figures"
    ],
    "applyIt": "Report gross margin and EBITDA per maintenance contract monthly so managers can spot contracts where labour or subcontractor costs are eroding profit."
  },
  {
    "id": "lead-008",
    "title": "Kotter's 8 Steps for Leading Change",
    "department": "Leadership",
    "topic": "Change Management",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Kotter",
    "publishDate": "2026-10-25",
    "duration": "4:21",
    "embedUrl": "https://www.youtube.com/embed/SGYmPMcgDPg",
    "isNew": true,
    "summary": "Kotter's head of research explains John Kotter's eight-step model for leading organisational change and how it has evolved into a more agile set of accelerators.",
    "takeaways": [
      "Create a sense of urgency before launching change",
      "Build a guiding coalition to generate momentum",
      "Anchor new ways of working in the culture so they last"
    ],
    "applyIt": "Use the eight steps to plan a company-wide rollout such as a new CAFM workflow, starting with a clear case for urgency and a coalition of site and office leaders."
  },
  {
    "id": "proc-006",
    "title": "Request for Quotation (RFQ): Everything Procurement Teams Need to Know",
    "department": "Procurement",
    "topic": "Tendering & RFQs",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "PROKURIA",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/czc-w9ztcOQ",
    "isNew": true,
    "summary": "Explains what an RFQ is, how it differs from an RFP, the step-by-step process from preparation to evaluation, and common pitfalls to avoid.",
    "takeaways": [
      "Use an RFQ when requirements are clear and price is the main differentiator",
      "Send identical, well-defined specifications to every supplier",
      "Compare quotes on a like-for-like basis and document the decision"
    ],
    "applyIt": "Standardise RFQ templates for spare parts and subcontracted MEP works so every supplier quotes against the same scope and evaluation is transparent."
  },
  {
    "id": "hr-007",
    "title": "How to Create an Employee Onboarding Process that New Hires Don't Hate",
    "department": "HR",
    "topic": "Onboarding",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Jennifer Mitchell Earley",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/CVFcJKCFHb0",
    "isNew": true,
    "summary": "An HR consultant shows how to design an onboarding programme that gives new hires an engaging, well-organised start and supports retention.",
    "takeaways": [
      "Plan onboarding before day one, not on arrival",
      "Make the first weeks welcoming and personal, not just paperwork",
      "Treat onboarding as a retention tool with clear check-ins"
    ],
    "applyIt": "Build a structured first-30-days plan for new technicians and supervisors, covering site induction, safety, CAFM access and a named buddy."
  },
  {
    "id": "qhse-007",
    "title": "What Is ISO 45001 and How Does It Help Businesses?",
    "department": "Quality & HSE",
    "topic": "ISO 45001",
    "level": "Executive",
    "source": "Training Academy",
    "channel": "Citation ISO Certification",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/jzZuKptPUMo",
    "isNew": true,
    "summary": "An explainer on the aims of ISO 45001:2018 and the business benefits of adopting an occupational health and safety management system.",
    "takeaways": [
      "ISO 45001 gives a recognised framework for managing OH&S risk",
      "Top management leadership and worker participation are central to the standard",
      "Certification can strengthen tenders and client confidence"
    ],
    "applyIt": "Use ISO 45001 as the backbone of the HSE system so leadership commitments, risk controls and site performance can be evidenced to government and property clients."
  },
  {
    "id": "bd-008",
    "title": "Sales Pipeline Management",
    "department": "Business Development",
    "topic": "CRM Pipelines",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Zoho CRM",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/95inJDS5u0s",
    "isNew": true,
    "summary": "Defines a sales pipeline as the sequence of stages a deal moves through from first lead assessment to close, and explains how to set up and track those stages.",
    "takeaways": [
      "Define clear stages that match how your deals actually progress",
      "Track how many deals sit at each stage and how long they stay",
      "Use pipeline data to forecast revenue and focus effort"
    ],
    "applyIt": "Map Al Bonian FM tender and enquiry stages into a Zoho pipeline so BD can see every opportunity, from site visit to award, in one view."
  },
  {
    "id": "it-006",
    "title": "Disaster Recovery vs. Backup: What is the Difference?",
    "department": "IT",
    "topic": "Backup & Business Continuity",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "IBM Technology",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/07EHsPuKXc0",
    "isNew": true,
    "summary": "An IBM Cloud specialist compares backup and disaster recovery, explaining how they differ and how each supports a business continuity plan.",
    "takeaways": [
      "Backups protect data; disaster recovery restores whole services",
      "Set recovery time and recovery point objectives for key systems",
      "Test restores regularly rather than assuming they work"
    ],
    "applyIt": "Define recovery targets for the CAFM system and Zoho Creator apps and test a restore so work orders can continue if a system fails."
  },
  {
    "id": "fm-001",
    "title": "What Is SFG20?",
    "department": "Facilities Management",
    "topic": "SFG20",
    "level": "Foundation",
    "source": "Professional Body",
    "channel": "SFG20",
    "publishDate": "2026-10-25",
    "duration": "2:59",
    "embedUrl": "https://www.youtube.com/embed/KIQdwKkg2V0",
    "isNew": true,
    "summary": "Introduces SFG20, the maintenance standard that sets which building maintenance tasks are needed, the skills they require and how often they should be done.",
    "takeaways": [
      "SFG20 defines what to maintain, who does it and how often.",
      "Standard schedules help keep buildings compliant and safe.",
      "Right-sizing tasks avoids over- and under-maintenance."
    ],
    "applyIt": "Compare the PPM schedule of one major contract against SFG20 frequencies and flag any tasks done too often or not at all."
  },
  {
    "id": "fm-002",
    "title": "The SFG20 Colour Coding System",
    "department": "Facilities Management",
    "topic": "SFG20",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "SFG20",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/tA6CsoTc0a4",
    "isNew": true,
    "summary": "How SFG20's red, amber and green codes classify maintenance tasks, with red for statutory and critical work, and how to use them to prioritise and prove compliance.",
    "takeaways": [
      "Red tasks are statutory or safety-critical: never skip them.",
      "Amber and green tasks can be planned around budget and use.",
      "Colour codes make compliance easy to report to clients."
    ],
    "applyIt": "Tag every PPM task in the CAFM system with its SFG20 colour and report red-task completion to clients monthly."
  },
  {
    "id": "fm-003",
    "title": "SFG20: The Engine of Modern Facilities Management",
    "department": "Facilities Management",
    "topic": "SFG20",
    "level": "Executive",
    "source": "Professional Body",
    "channel": "SFG20",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/ol3bFkbWuFU",
    "isNew": true,
    "summary": "How SFG20 underpins planned preventive maintenance to cut costs, meet legislation and keep buildings safe, and how the Facilities-iQ platform delivers the schedules.",
    "takeaways": [
      "A recognised standard strengthens FM tenders and contracts.",
      "Standardised schedules make pricing and resourcing predictable.",
      "Compliance evidence protects both client and contractor."
    ],
    "applyIt": "Reference SFG20-aligned schedules in the next FM tender to show compliance and justify the PPM price."
  },
  {
    "id": "fm-004",
    "title": "Planned Preventive Maintenance (PPM) in Facilities Management",
    "department": "Facilities Management",
    "topic": "Planned Maintenance",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "My FM Guru",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/_dLeGqvfqL0",
    "isNew": true,
    "summary": "How facilities managers plan and carry out preventive maintenance: scheduling, recording and analysing maintenance data, and coordinating with other departments.",
    "takeaways": [
      "PPM prevents breakdowns instead of reacting to them.",
      "Good records turn maintenance history into decisions.",
      "Coordinate PPM windows with the client's operations."
    ],
    "applyIt": "Review last month's PPM completion rate per contract and agree a recovery plan for any site below 95%."
  },
  {
    "id": "fm-005",
    "title": "What Is Predictive Maintenance? Condition Monitoring Basics",
    "department": "Facilities Management",
    "topic": "Predictive Maintenance",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "Engineering Presentations",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/pocSio2ExNo",
    "isNew": true,
    "summary": "Introduces predictive or condition-based maintenance and condition monitoring, using vibration monitoring as the main example, as part of a CMRP-aligned reliability course.",
    "takeaways": [
      "Maintain based on condition, not just the calendar.",
      "Condition monitoring spots failure before it happens.",
      "Vibration trends are a key early warning on rotating plant."
    ],
    "applyIt": "Choose five critical assets (chillers, pumps, AHUs) and start recording a monthly condition reading for each."
  },
  {
    "id": "fm-006",
    "title": "Vibration Analysis for Predictive Maintenance",
    "department": "Facilities Management",
    "topic": "Predictive Maintenance",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "UpKeep",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/VfO3EvE3asc",
    "isNew": true,
    "summary": "How vibration sensors and analysis support predictive maintenance on rotating equipment such as bearings, motors, pumps, fans and compressors, with case studies.",
    "takeaways": [
      "Vibration reveals imbalance, misalignment and bearing wear.",
      "Trend data matters more than a single reading.",
      "Start with the assets whose failure costs most."
    ],
    "applyIt": "Pilot wireless vibration sensors on the chilled-water pumps of one large site and compare failures against last year."
  },
  {
    "id": "fm-007",
    "title": "RCM vs Preventive vs Predictive Maintenance",
    "department": "Facilities Management",
    "topic": "Maintenance Strategy",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Verdantis",
    "publishDate": "2026-10-25",
    "duration": "3:29",
    "embedUrl": "https://www.youtube.com/embed/S8l56GRFEi8",
    "isNew": true,
    "summary": "Compares scheduled preventive, condition-based predictive and reliability-centred maintenance on cost, complexity and risk, with a simple framework for choosing between them.",
    "takeaways": [
      "Not every asset needs the same strategy.",
      "RCM decides which strategy fits each asset.",
      "Match maintenance effort to the risk of failure."
    ],
    "applyIt": "Classify each contract's assets as run-to-fail, preventive or predictive based on criticality, and adjust the PPM plan."
  },
  {
    "id": "fm-008",
    "title": "Preventive vs Reliability-Centred Maintenance",
    "department": "Facilities Management",
    "topic": "Maintenance Strategy",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "UpKeep",
    "publishDate": "2026-10-25",
    "duration": "5:19",
    "embedUrl": "https://www.youtube.com/embed/EaXJF89TQqQ",
    "isNew": true,
    "summary": "Compares preventive and reliability-centred maintenance: definitions, implementation steps, costs, benefits, drawbacks and the resources each needs.",
    "takeaways": [
      "Preventive maintenance is simple but can over-maintain.",
      "RCM focuses effort on functions that matter most.",
      "RCM needs data, skills and management commitment."
    ],
    "applyIt": "Run an RCM-style review on the chiller plant of your largest contract and present the cost-risk trade-offs to the client."
  },
  {
    "id": "fm-009",
    "title": "What Is a BMS? Building Management Systems",
    "department": "Facilities Management",
    "topic": "Building Systems",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "eFIXX",
    "publishDate": "2026-10-25",
    "duration": "6:26",
    "embedUrl": "https://www.youtube.com/embed/8WWRJbhm5hU",
    "isNew": true,
    "summary": "Explains how a building management system monitors and controls temperature, lighting, airflow and energy, and its three levels: field devices, controllers and management software.",
    "takeaways": [
      "A BMS has field, automation and management levels.",
      "BMS data shows how plant is actually running.",
      "Alarms and trends support faster, smarter response."
    ],
    "applyIt": "Agree BMS alarm escalation rules with each client so critical alarms automatically raise a work order."
  },
  {
    "id": "fm-010",
    "title": "Maintenance Backlog Management",
    "department": "Facilities Management",
    "topic": "Operations Management",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "ManWinWin",
    "publishDate": "2026-10-25",
    "duration": "8:43",
    "embedUrl": "https://www.youtube.com/embed/jYnv9SV_H9Q",
    "isNew": true,
    "summary": "Treats a growing maintenance backlog as a sign of lost control and shows how to reduce it with KPIs, structured clean-up and better CMMS practice.",
    "takeaways": [
      "Backlog shows whether the team is in control.",
      "Measure backlog in weeks of work, not ticket count.",
      "Close or cancel outdated work orders regularly."
    ],
    "applyIt": "Report open reactive and PPM work orders per contract in weeks of labour at every monthly operations review."
  },
  {
    "id": "fm-011",
    "title": "Asset Lifecycle Management",
    "department": "Facilities Management",
    "topic": "Asset Management",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Limble",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/7cQlAWJuaCA",
    "isNew": true,
    "summary": "How tracking equipment usage and performance history guides maintenance decisions across an asset's life, from acquisition to disposal, to lower total cost of ownership.",
    "takeaways": [
      "Manage assets from purchase to disposal, not just repair.",
      "Performance history shows when to repair or replace.",
      "Lifecycle planning lowers total cost of ownership."
    ],
    "applyIt": "Build a 5-year replacement forecast for major plant on key contracts and share it with clients as a value-add."
  },
  {
    "id": "fm-012",
    "title": "ISO 55000 Explained: Asset Management",
    "department": "Facilities Management",
    "topic": "Asset Management",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "UpKeep",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/eFHq7HjU-Ew",
    "isNew": true,
    "summary": "Introduces the ISO 55000 asset management standards, the differences between 55000, 55001 and 55002, and how an asset management system and CMMS support compliance.",
    "takeaways": [
      "ISO 55000 links asset decisions to business goals.",
      "55001 sets the requirements for an asset management system.",
      "A CMMS provides the data the standard relies on."
    ],
    "applyIt": "Assess the company's asset register and maintenance data against ISO 55001 as a step toward stronger government tenders."
  },
  {
    "id": "pv-001",
    "title": "What a Building Condition Survey Involves",
    "department": "Property Inspection & Valuation",
    "topic": "Condition Surveys",
    "format": "Process",
    "level": "Foundation",
    "source": "Professional Body",
    "channel": "London Building Surveyors",
    "publishDate": "2026-10-25",
    "duration": "2:19",
    "embedUrl": "https://www.youtube.com/embed/y-o7DAH-uNo",
    "isNew": true,
    "summary": "A RICS chartered surveyor explains what a building condition inspection covers, so clients and new inspectors know what the process involves.",
    "takeaways": [
      "A condition survey records the state of each building element.",
      "Findings are rated by condition and urgency.",
      "The report guides repair budgets and priorities."
    ],
    "applyIt": "Use a standard condition-survey template (element, condition rating, action, cost) for every new FM contract mobilisation."
  },
  {
    "id": "pv-002",
    "title": "RICS Home Survey Levels Explained",
    "department": "Property Inspection & Valuation",
    "topic": "Survey Standards",
    "format": "Process",
    "level": "Foundation",
    "source": "Professional Body",
    "channel": "bValued (Arthur Bletchly)",
    "publishDate": "2026-10-25",
    "duration": "18:00",
    "embedUrl": "https://www.youtube.com/embed/kxOfw77EBeE",
    "isNew": true,
    "summary": "Explains the RICS Home Survey Standard, comparing the Level 1 Condition Report and Level 2 survey, with or without a valuation.",
    "takeaways": [
      "Survey level should match the client's need and risk.",
      "Each level sets what is and isn't inspected.",
      "Be clear on scope before quoting a survey."
    ],
    "applyIt": "Define three inspection service levels (basic, standard, detailed) with clear scope for Al Bonian's inspection clients."
  },
  {
    "id": "pv-003",
    "title": "Commercial Property Inspection: The Preliminary Walkthrough",
    "department": "Property Inspection & Valuation",
    "topic": "Inspection Process",
    "format": "Process",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "CCPIA",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/-JuAXaLQ4z4",
    "isNew": true,
    "summary": "Shows how to carry out the preliminary walkthrough, the first stage of a commercial property inspection, as a step-by-step process.",
    "takeaways": [
      "Start with a full walkthrough before detailed checks.",
      "Note access, hazards and areas needing specialists.",
      "The walkthrough shapes the inspection plan."
    ],
    "applyIt": "Add a 30-minute preliminary walkthrough step to every commercial inspection before the detailed MEP checks begin."
  },
  {
    "id": "pv-004",
    "title": "Real Estate Valuation Methods: Sales, Cost and Income",
    "department": "Property Inspection & Valuation",
    "topic": "Valuation Methods",
    "format": "Process",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "Dee Kumar Real Estate",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/h_zgUFPx22c",
    "isNew": true,
    "summary": "Covers the three main valuation methods (sales comparison, cost and income) with formulas and examples, plus types of depreciation and how to calculate cap rates.",
    "takeaways": [
      "Three core methods: comparison, cost and income.",
      "Depreciation can be physical, functional or external.",
      "Choose the method that fits the property type."
    ],
    "applyIt": "When advising a client on an asset, state which valuation method applies and why (e.g. income approach for a leased building)."
  },
  {
    "id": "pv-005",
    "title": "The Sales Comparison Approach",
    "department": "Property Inspection & Valuation",
    "topic": "Valuation Methods",
    "format": "Process",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "Tony Mesa Real Estate School",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/cXWZTxPRawg",
    "isNew": true,
    "summary": "Explains how recently sold, similar properties in the same area are used and adjusted to estimate the value of a subject property.",
    "takeaways": [
      "Pick truly comparable, recent sales nearby.",
      "Adjust comparables for differences, not the subject.",
      "More good comparables give a more reliable value."
    ],
    "applyIt": "Build a comparables sheet using DLD transaction data for each unit type you value in a community."
  },
  {
    "id": "pv-006",
    "title": "Cap Rate in Commercial Real Estate",
    "department": "Property Inspection & Valuation",
    "topic": "Income Valuation",
    "format": "Process",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Ryan O'Connell, CFA",
    "publishDate": "2026-10-25",
    "duration": "4:59",
    "embedUrl": "https://www.youtube.com/embed/CUjnjXzhdUQ",
    "isNew": true,
    "summary": "Defines the capitalisation rate, how to calculate net operating income and how cap rate links income to property value, with a worked example.",
    "takeaways": [
      "Value = net operating income ÷ cap rate.",
      "NOI excludes financing costs.",
      "Higher risk usually means a higher cap rate."
    ],
    "applyIt": "Show clients how lower FM operating costs raise NOI and therefore the capital value of their building."
  },
  {
    "id": "pv-007",
    "title": "RICS Red Book Valuation with a Savills Director",
    "department": "Property Inspection & Valuation",
    "topic": "Valuation Standards",
    "format": "Process",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Your Success Podcast (Ian Fowler, Savills)",
    "publishDate": "2026-10-25",
    "duration": "9:55",
    "embedUrl": "https://www.youtube.com/embed/HBvOQ-aznMg",
    "isNew": true,
    "summary": "A Savills director explains how a professional valuation is carried out under the RICS Red Book standard.",
    "takeaways": [
      "Red Book valuations follow strict RICS standards.",
      "Lenders and courts rely on them for consistency.",
      "Valuer independence and evidence are essential."
    ],
    "applyIt": "Reference RICS Red Book standards when partnering with valuers on client asset reports to strengthen credibility."
  },
  {
    "id": "pv-008",
    "title": "Preparing for a Dilapidations Survey",
    "department": "Property Inspection & Valuation",
    "topic": "Dilapidations",
    "format": "Process",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "Harrison Clarke Chartered Surveyors",
    "publishDate": "2026-10-25",
    "duration": "4:21",
    "embedUrl": "https://www.youtube.com/embed/kf2P7vVSOHE",
    "isNew": true,
    "summary": "Guides landlords through preparing for a dilapidations claim at lease end: reviewing lease obligations, appointing a surveyor and mitigating loss.",
    "takeaways": [
      "Read the lease repair obligations first.",
      "Record condition at lease start and end.",
      "Early communication speeds settlement."
    ],
    "applyIt": "Offer landlord clients a photographic condition record at tenant move-in and move-out as an FM service."
  },
  {
    "id": "pv-009",
    "title": "Snagging Inspection in Dubai: Professional Handover",
    "department": "Property Inspection & Valuation",
    "topic": "Snagging",
    "format": "On-the-job",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Nina Strenzel",
    "publishDate": "2026-10-25",
    "duration": "3:00",
    "embedUrl": "https://www.youtube.com/embed/JF5O7NcHxLk",
    "isNew": true,
    "summary": "A real pre-handover walkthrough of a new Dubai studio and the snagging report that logged over 40 defects, including hidden moisture, drainage and ventilation checks.",
    "takeaways": [
      "Switch on DEWA and AC before inspecting.",
      "Check hidden items: drainage, moisture, water heating.",
      "Photograph and log every defect for the developer."
    ],
    "applyIt": "Use this as the model for Al Bonian snagging visits and build a Dubai handover checklist in Zoho Creator."
  },
  {
    "id": "pv-010",
    "title": "Performing a Home Inspection (InterNACHI)",
    "department": "Property Inspection & Valuation",
    "topic": "Residential Inspection",
    "format": "On-the-job",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "InterNACHI (Jeremiah Wheelersburg, CPI)",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/IXsl0b2JZPQ",
    "isNew": true,
    "summary": "Follows a certified inspector through a real house inspection under InterNACHI standards, showing how defects are identified and what to do when found.",
    "takeaways": [
      "Follow a fixed sequence so nothing is missed.",
      "Inspect against a published standard of practice.",
      "Report defects clearly with recommended action."
    ],
    "applyIt": "Have new inspectors shadow a senior inspector on three villa inspections using the same room-by-room sequence."
  },
  {
    "id": "pv-011",
    "title": "Commercial Property Inspection Training",
    "department": "Property Inspection & Valuation",
    "topic": "Commercial Inspection",
    "format": "On-the-job",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "InterNACHI (Dillon Winiecki, CPI)",
    "publishDate": "2026-10-25",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/U6fJKaqjBMQ",
    "isNew": true,
    "summary": "A training class where a certified commercial inspector teaches how commercial property inspections are carried out in practice.",
    "takeaways": [
      "Commercial inspections cover more systems and specialists.",
      "Agree scope and access with the client first.",
      "Coordinate MEP, roof and life-safety checks."
    ],
    "applyIt": "Create a commercial inspection scope template covering MEP, fire, roof, façade and lifts for building-owner clients."
  },
  {
    "id": "pv-012",
    "title": "Infrared Cameras and Moisture Meters for Leak Detection",
    "department": "Property Inspection & Valuation",
    "topic": "Inspection Tools",
    "format": "On-the-job",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Ben Gromicko (Peter Hopkins, United Infrared)",
    "publishDate": "2026-10-25",
    "duration": "35:41",
    "embedUrl": "https://www.youtube.com/embed/sP5SkBhFCIs",
    "isNew": true,
    "summary": "A practical demonstration of using infrared cameras together with moisture meters to investigate moisture problems and find leaks.",
    "takeaways": [
      "Thermal images show patterns, not proof of moisture.",
      "Confirm suspected moisture with a moisture meter.",
      "Use both tools together for reliable findings."
    ],
    "applyIt": "Equip inspection teams with a thermal camera and moisture meter, and require meter confirmation for every reported leak."
  },
  {
    "id": "pv-013",
    "title": "Thermal Imaging During a Building Survey",
    "department": "Property Inspection & Valuation",
    "topic": "Inspection Tools",
    "format": "On-the-job",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Domestic Surveys Bristol",
    "publishDate": "2026-10-25",
    "duration": "1:32",
    "embedUrl": "https://www.youtube.com/embed/Zex2VNP-P2Q",
    "isNew": true,
    "summary": "Short on-site examples of a surveyor using thermal imaging to reveal moisture and insulation issues in different building types.",
    "takeaways": [
      "Thermal imaging reveals hidden moisture and heat loss.",
      "Results vary with construction type.",
      "Use it to target where to inspect more closely."
    ],
    "applyIt": "Add a thermal-imaging sweep of roofs and wet areas to villa inspections, especially before summer."
  }
];
