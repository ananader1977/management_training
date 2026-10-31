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
  },
  {
    "id": "fin-008",
    "title": "Cost-Based vs Value-Based Pricing",
    "department": "Finance",
    "topic": "Pricing",
    "level": "Executive",
    "source": "Training Academy",
    "channel": "Mastering Up",
    "publishDate": "2026-10-26",
    "duration": "13:49",
    "embedUrl": "https://www.youtube.com/embed/loszBKRYylY",
    "isNew": true,
    "summary": "Compares setting prices from your own costs with setting them from the value customers perceive, using cross-industry examples and guidance on choosing the right model.",
    "takeaways": [
      "Cost-plus pricing protects margin but ignores what the client is willing to pay",
      "Value-based pricing needs a clear view of the outcomes the client actually values",
      "Pick the pricing model that fits the business model and competitive position"
    ],
    "applyIt": "When pricing MEP maintenance and snagging bids, start from the full cost build-up, then test the price against the value delivered to the client (uptime, compliance, handover speed) before submitting."
  },
  {
    "id": "lead-009",
    "title": "Why Long Meetings Drain Productivity and How to Fix Them",
    "department": "Leadership",
    "topic": "Running Meetings",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "CBS Mornings (Steven Rogelberg)",
    "publishDate": "2026-10-26",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/D-x8iJieHjI",
    "isNew": true,
    "summary": "Meetings researcher Steven Rogelberg discusses research on the \"meeting hangover\" effect of poor meetings and practical ways managers can make meetings shorter and more useful.",
    "takeaways": [
      "Badly run meetings cost productivity long after they end",
      "Keep meetings short, with a clear purpose and only the people who need to be there",
      "Treat running meetings as a leadership skill you can improve"
    ],
    "applyIt": "Keep daily site coordination meetings to a fixed short slot with a set agenda (safety, priority work orders, blockers) and send actions through Zoho Creator instead of extending the meeting."
  },
  {
    "id": "proc-007",
    "title": "What Is Category Management and Why It Matters",
    "department": "Procurement",
    "topic": "Category Management",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Procurement Insights with Poonam",
    "publishDate": "2026-10-26",
    "duration": "4:46",
    "embedUrl": "https://www.youtube.com/embed/0WyKUbZgx1Q",
    "isNew": true,
    "summary": "Explains how category management moves procurement from order-by-order buying to managing each spend area like a business unit through a cycle of analysis, strategy, execution and review.",
    "takeaways": [
      "Group spend into categories instead of buying order by order",
      "Run each category through analysis, strategy, execution and feedback",
      "Focus effort on categories with high spend or high supply risk"
    ],
    "applyIt": "Set up categories such as HVAC spares, electrical consumables and specialist subcontractors, and give each one an owner who agrees annual frame agreements instead of ad-hoc site purchases."
  },
  {
    "id": "hr-008",
    "title": "Strategic Workforce Planning 101",
    "department": "HR",
    "topic": "Workforce Planning",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Random Walks In HR",
    "publishDate": "2026-10-26",
    "duration": "9:36",
    "embedUrl": "https://www.youtube.com/embed/rNQ1V4DRYIw",
    "isNew": true,
    "summary": "Introduces the core building blocks of strategic workforce planning, including internal supply, demand forecasting, scenario planning and closing skills gaps.",
    "takeaways": [
      "Compare the workforce you have with the workforce the strategy needs",
      "Use scenarios to plan for different growth or contract outcomes",
      "Close skills gaps through a mix of hiring, training and redeployment"
    ],
    "applyIt": "Before bidding on large new FM contracts, model technician and supervisor headcount by trade under win/lose scenarios so recruitment and training can start ahead of mobilisation."
  },
  {
    "id": "qhse-008",
    "title": "What Is CAPA? Corrective vs Preventive Action Explained",
    "department": "Quality & HSE",
    "topic": "CAPA",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "QT9 Software",
    "publishDate": "2026-10-26",
    "duration": "4:20",
    "embedUrl": "https://www.youtube.com/embed/Bi90TJ8lf0c",
    "isNew": true,
    "summary": "Walks through the CAPA process from identifying a problem to verifying effectiveness, and explains how a quick correction differs from a true corrective action under standards like ISO 9001.",
    "takeaways": [
      "A correction fixes the symptom; a corrective action removes the cause",
      "Preventive action addresses risks before they become problems",
      "Close every CAPA only after checking that it actually worked"
    ],
    "applyIt": "For repeat client complaints or audit findings, log a CAPA in the CAFM/Zoho system with root cause, owner and an effectiveness check date rather than closing it once the immediate fix is done."
  },
  {
    "id": "bd-009",
    "title": "How to Present a Business Proposal to a Client",
    "department": "Business Development",
    "topic": "Presenting to Clients",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Angelique Rewers",
    "publishDate": "2026-10-26",
    "duration": "16:53",
    "embedUrl": "https://www.youtube.com/embed/MesVZNLoSQ0",
    "isNew": true,
    "summary": "Sets out a five-step approach to presenting a proposal to a client, covering preparation, slides, logistics and how to open and close the meeting with confidence.",
    "takeaways": [
      "Prepare the room, materials and attendees before the meeting",
      "Open by confirming the client's goals before showing your solution",
      "Close with clear, agreed next steps"
    ],
    "applyIt": "When presenting FM or snagging proposals to developers and government clients, open by restating their handover and compliance goals, then show how the scope and SLAs deliver them."
  },
  {
    "id": "it-007",
    "title": "Leading Digital Transformation",
    "department": "IT",
    "topic": "Digital Transformation",
    "level": "Executive",
    "source": "Training Academy",
    "channel": "MIT Sloan School of Management (George Westerman)",
    "publishDate": "2026-10-26",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/3OTu5KB7qNU",
    "isNew": true,
    "summary": "MIT researcher George Westerman explains why leadership, not technology alone, determines whether a company's digital transformation succeeds.",
    "takeaways": [
      "Digital transformation is a leadership challenge, not just an IT project",
      "Senior leaders must set a clear digital vision and drive it",
      "Technology delivers value only when processes and people change with it"
    ],
    "applyIt": "Treat the CAFM and Zoho Creator roll-out as a management-led change, with senior owners for each process so site teams actually change how they log and close work."
  },
  {
    "id": "fm-013",
    "title": "Top 3 Maintenance KPIs Explained: MTBF, MTTF and MTTR",
    "department": "Facilities Management",
    "topic": "Maintenance KPIs",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "eMaint",
    "publishDate": "2026-10-26",
    "duration": "3:24",
    "embedUrl": "https://www.youtube.com/embed/D64pb8-RDsU",
    "isNew": true,
    "summary": "Defines three core reliability metrics (MTBF, MTTF and MTTR) and shows how tracking them supports better preventive maintenance, spares planning and repair-or-replace decisions.",
    "takeaways": [
      "MTBF shows how long a repairable asset runs between failures",
      "MTTR shows how quickly your team restores an asset",
      "Use the trends to adjust PPM frequencies and spare-parts stock"
    ],
    "applyIt": "Report MTBF and MTTR for critical assets such as chillers, pumps and AHUs from CAFM work-order data each month and use them in client performance reviews."
  },
  {
    "id": "pv-014",
    "title": "Using Thermal Imaging to Find Plumbing Leaks",
    "department": "Property Inspection & Valuation",
    "topic": "Thermal Imaging",
    "level": "Practitioner",
    "format": "On-the-job",
    "source": "Industry Expert",
    "channel": "Hammer Home Inspections",
    "publishDate": "2026-10-26",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/SyEWK8be3zk",
    "isNew": true,
    "summary": "A working home inspector shows how he uses a thermal camera during real inspections to locate hidden plumbing leaks and spot moisture intrusion and other defects.",
    "takeaways": [
      "Thermal images reveal temperature patterns that point to hidden moisture",
      "Confirm suspected leaks with a moisture meter before reporting them",
      "Include annotated thermal images in the inspection report as evidence"
    ],
    "applyIt": "On villa and apartment snagging inspections, scan wet areas and ceilings below bathrooms with a thermal camera and confirm any anomalies with a moisture meter before adding them to the snag report."
  },
  {
    "id": "fin-009",
    "title": "The UAE Tax Landscape: VAT, Corporate Tax and More",
    "department": "Finance",
    "topic": "UAE Tax Basics",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Business Boutique FZCO",
    "publishDate": "2026-10-27",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/KqT2Sm4ca6c",
    "isNew": true,
    "summary": "An overview of how the UAE tax system works today, covering VAT, the newer corporate tax regime, customs duties and local fees, and what recent changes mean for businesses.",
    "takeaways": [
      "VAT and corporate tax are now both core compliance obligations for UAE businesses",
      "Know which taxes and fees apply to your company before pricing or quoting",
      "Recent rule changes mean tax assumptions should be reviewed regularly"
    ],
    "applyIt": "When preparing MEP maintenance quotations and contract budgets, managers should confirm VAT treatment and the corporate tax impact with finance so margins are calculated on the right basis."
  },
  {
    "id": "lead-010",
    "title": "The GROW Model for Coaching: Origins and Application",
    "department": "Leadership",
    "topic": "Coaching",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Performance Consultants International (Sir John Whitmore)",
    "publishDate": "2026-10-27",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/f2M1GuhilR0",
    "isNew": true,
    "summary": "Sir John Whitmore, co-creator of the GROW model, explains where the framework came from and how its four steps (Goal, Reality, Options, Will) structure coaching conversations that improve performance.",
    "takeaways": [
      "Start every coaching conversation by agreeing a clear goal",
      "Ask questions to explore the current reality before suggesting solutions",
      "Finish with a committed next step the person owns"
    ],
    "applyIt": "Supervisors can use GROW in short one-to-ones with technicians to solve recurring site problems, such as repeat call-outs, instead of simply giving instructions."
  },
  {
    "id": "proc-008",
    "title": "The Kraljic Matrix Explained with Example",
    "department": "Procurement",
    "topic": "Sourcing Strategy",
    "level": "Executive",
    "source": "Training Academy",
    "channel": "EPM",
    "publishDate": "2026-10-27",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/67gQEUtbjSE",
    "isNew": true,
    "summary": "Explains the Kraljic Matrix for segmenting purchases by profit impact and supply risk, works through a real company example, and discusses the strengths and limits of the model.",
    "takeaways": [
      "Classify spend into strategic, leverage, bottleneck and non-critical items",
      "Match the sourcing approach to each quadrant rather than treating all suppliers alike",
      "Revisit the matrix as supply risk and business priorities change"
    ],
    "applyIt": "Map Al Bonian FM spend (chiller spares, specialist subcontractors, consumables, manpower supply) onto the Kraljic quadrants to decide where to build partnerships and where to tender aggressively."
  },
  {
    "id": "hr-009",
    "title": "What Is Employee Relations?",
    "department": "HR",
    "topic": "Employee Relations",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "GreggU",
    "publishDate": "2026-10-27",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/qqMCcWXfSSI",
    "isNew": true,
    "summary": "Introduces employee relations as the way an organisation manages its relationship with staff, including engagement, resolving conflict, workplace investigations and fair, consistent discipline.",
    "takeaways": [
      "Good employee relations rests on treating everyone fairly and consistently",
      "Deal with conflict and complaints early, before they escalate",
      "Document investigations and disciplinary steps clearly"
    ],
    "applyIt": "Site managers should log grievances and disciplinary actions for technicians in a consistent way in Zoho Creator so HR can apply the same standards across every site."
  },
  {
    "id": "qhse-009",
    "title": "Incident Investigation: Identifying Root Causes and Implementing Corrective Actions",
    "department": "Quality & HSE",
    "topic": "Incident Investigation",
    "level": "Practitioner",
    "source": "Training Academy",
    "channel": "Atlantic Training Online Safety Training",
    "publishDate": "2026-10-27",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/faVpisJCX9w",
    "isNew": true,
    "summary": "A safety training course on investigating near-misses, property damage and injuries without blame, finding root causes, setting corrective actions and communicating lessons learned.",
    "takeaways": [
      "Investigate near-misses as seriously as injuries",
      "Focus on root causes and system failures, not on blaming individuals",
      "Track corrective actions to closure and share the lessons"
    ],
    "applyIt": "After any site incident or near-miss, such as a fall from a ladder or an electrical flash, the HSE team should run a blame-free investigation and record corrective actions in the CAFM system until closed."
  },
  {
    "id": "bd-010",
    "title": "Customer Retention Strategy: Making Loyalty the New Growth Engine",
    "department": "Business Development",
    "topic": "Client Retention",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "ContentStrategies (David T. Roberts, SugarCRM)",
    "publishDate": "2026-10-27",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/jrW6bXixH3I",
    "isNew": true,
    "summary": "SugarCRM CEO David T. Roberts makes the case that customer loyalty drives B2B growth and explains how curiosity, process and data, including NPS feedback, turn customer focus into retention.",
    "takeaways": [
      "Retaining existing B2B clients is a growth strategy, not just a service task",
      "Turn client feedback scores into specific follow-up actions",
      "Use CRM data to give account teams context about each client"
    ],
    "applyIt": "Review client satisfaction feedback for each FM contract quarterly and assign named actions to account managers well before renewal dates."
  },
  {
    "id": "it-008",
    "title": "How to Spot a Phishing Email",
    "department": "IT",
    "topic": "Phishing Awareness",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Keeper Security",
    "publishDate": "2026-10-27",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/iHetr8xTWIU",
    "isNew": true,
    "summary": "A quick awareness video showing the common warning signs of phishing emails, such as urgency and pressure, suspicious sender addresses and unexpected links, plus simple steps to stay protected.",
    "takeaways": [
      "Be suspicious of urgent requests to pay, log in or share details",
      "Check the real sender address and hover over links before clicking",
      "Report suspected phishing instead of deleting it quietly"
    ],
    "applyIt": "Share this with office and site staff who handle supplier invoices and client emails, and require that any request to change bank details is confirmed by phone."
  },
  {
    "id": "fm-014",
    "title": "Best Practices Webinar: Maintenance Planning and Scheduling",
    "department": "Facilities Management",
    "topic": "Planning & Scheduling",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "eMaint (Roy Rothwell)",
    "publishDate": "2026-10-27",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/hT_UHv2Jyvk",
    "isNew": true,
    "summary": "An eMaint webinar on why maintenance should be planned and scheduled, covering core planning principles, the tools and prerequisites needed, and practical steps to cut backlog and overtime.",
    "takeaways": [
      "Plan jobs fully (parts, tools, permits) before scheduling them",
      "Schedule against available labour hours to protect productivity",
      "Measure backlog and schedule compliance to improve over time"
    ],
    "applyIt": "Planners should prepare weekly PPM and corrective work packs in the CAFM system, with spares and permits ready, before allocating technicians across sites."
  },
  {
    "id": "pv-015",
    "title": "The Residual Land Value Method",
    "department": "Property Inspection & Valuation",
    "topic": "Residual Valuation",
    "level": "Executive",
    "format": "Process",
    "source": "Industry Expert",
    "channel": "Chad Griffiths",
    "publishDate": "2026-10-27",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/J9ldMWeQ3GA",
    "isNew": true,
    "summary": "Explains how residual land value is found by taking the completed project value and deducting construction, financing and developer profit, and why the result is highly sensitive to key assumptions.",
    "takeaways": [
      "Residual value equals completed value minus all development costs and required profit",
      "Small changes in rents, yields or build costs swing the land value sharply",
      "Always run sensitivity tests before relying on the figure"
    ],
    "applyIt": "When advising developer clients in Dubai on land or redevelopment sites, present residual valuations with clear sensitivity ranges for sale prices, yields and construction costs."
  },
  {
    "id": "fin-010",
    "title": "What Is Variance Analysis? Budget vs Actual Explained",
    "department": "Finance",
    "topic": "Cost Control",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Ryan O'Connell, CFA, FRM",
    "publishDate": "2026-10-28",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/4Qd97lqDdb0",
    "isNew": true,
    "summary": "Shows how to compare actual results with the budget and break the profit gap into volume, price and cost effects using a flexible budget and a profit bridge.",
    "takeaways": [
      "Use a flexible budget so you compare like with like at actual activity levels",
      "Split each gap into volume, price and cost effects before reacting",
      "A variance tells you where to look — confirm the root cause with evidence"
    ],
    "applyIt": "Run a monthly budget-vs-actual review for each MEP maintenance contract and separate labour, materials and subcontractor cost variances before deciding on corrective action."
  },
  {
    "id": "lead-011",
    "title": "How Leaders Make Good Decisions in a Crisis — Gary Klein",
    "department": "Leadership",
    "topic": "Decision-Making",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Lootok (Gary Klein)",
    "publishDate": "2026-10-28",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/DzErY5ynXXg",
    "isNew": true,
    "summary": "Psychologist Gary Klein explains how experienced decision-makers such as firefighters act fast under pressure by recognising patterns from past experience, and what leaders can learn from it.",
    "takeaways": [
      "Under time pressure experts match cues to past patterns rather than compare options",
      "Build experience deliberately so your team has patterns to draw on",
      "Mentally simulate a chosen action quickly to spot what could go wrong"
    ],
    "applyIt": "Use short scenario drills and post-incident debriefs with site supervisors so they build the experience to make fast, sound calls during critical breakdowns at client sites."
  },
  {
    "id": "proc-009",
    "title": "Reorder Point and Safety Stock in Inventory Management",
    "department": "Procurement",
    "topic": "Inventory & Stores",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "Farhat Lectures",
    "publishDate": "2026-10-28",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/LLKG2bs-HlA",
    "isNew": true,
    "summary": "Explains what reorder points and safety stock are, how to calculate each, and how combining them prevents stock-outs without tying up cash in excess inventory.",
    "takeaways": [
      "Reorder point = demand during lead time plus safety stock",
      "Safety stock buffers against demand spikes and late deliveries",
      "Too much stock ties up cash; too little stops the work"
    ],
    "applyIt": "Set reorder points and safety stock in the CAFM/stores system for critical MEP spares such as filters, belts and pump seals so site teams are never waiting on parts."
  },
  {
    "id": "hr-010",
    "title": "Introduction to Total Rewards and Compensation",
    "department": "HR",
    "topic": "Compensation",
    "level": "Practitioner",
    "source": "Training Academy",
    "channel": "GreggU",
    "publishDate": "2026-10-28",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/JmAvA_8Ftvc",
    "isNew": true,
    "summary": "Introduces the parts of a compensation system — base pay, incentive pay and benefits — and why fair, competitive pay matters for attracting and keeping staff while controlling a major cost.",
    "takeaways": [
      "Total rewards combine base pay, incentives and benefits",
      "Pay fairness strongly drives job satisfaction and retention",
      "Compensation is a large cost, so monitor it against the market"
    ],
    "applyIt": "Review technician and supervisor pay bands against the Dubai FM market and link incentives to measurable outcomes such as PPM compliance and first-time fix."
  },
  {
    "id": "qhse-010",
    "title": "Five Lean Transformation Tips for Leaders",
    "department": "Quality & HSE",
    "topic": "Continuous Improvement",
    "level": "Executive",
    "source": "Training Academy",
    "channel": "Gemba Academy",
    "publishDate": "2026-10-28",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/0nXY_g4TXZg",
    "isNew": true,
    "summary": "Gives leaders five practical tips for a lean transformation, from a blame-free culture and teaching people to solve problems to small PDCA improvements and daily stand-ups.",
    "takeaways": [
      "Model respect and build a blame-free environment",
      "Teach teams to spot waste and solve their own problems",
      "Make small, frequent PDCA improvements linked to goals through daily stand-ups"
    ],
    "applyIt": "Introduce short daily stand-ups on major sites where teams flag waste and safety issues, then track small improvements through the CAPA log in Zoho Creator."
  },
  {
    "id": "bd-011",
    "title": "Why Your B2B Pricing Strategy Is Hurting Your Margins",
    "department": "Business Development",
    "topic": "Pricing Strategy",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "ValueSellingAssoc",
    "publishDate": "2026-10-28",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/adtX8ifRdWs",
    "isNew": true,
    "summary": "A pricing executive discusses why B2B firms rely on reactive discounts and flat annual increases, and how a value-based, data-driven pricing approach protects margin.",
    "takeaways": [
      "Reactive discounting and blanket increases erode margin",
      "Price on the value delivered to each customer segment",
      "Pilot pricing changes in one market before rolling out widely"
    ],
    "applyIt": "When pricing FM tenders and renewals, build prices from the value delivered (uptime, compliance, response times) rather than discounting to match competitors."
  },
  {
    "id": "it-009",
    "title": "Power BI: Building a Basic KPI Dashboard with Filters",
    "department": "IT",
    "topic": "Data & Dashboards",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Abhishek Agarrwal",
    "publishDate": "2026-10-28",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/s_BzbDSVjxI",
    "isNew": true,
    "summary": "A hands-on Power BI walkthrough that builds a KPI dashboard with KPI cards, line and bar charts, slicers, and bookmarks with buttons to switch views.",
    "takeaways": [
      "Start with a few clear KPI cards before adding charts",
      "Use slicers so managers can filter by period or category",
      "Bookmarks and buttons let users switch between saved views"
    ],
    "applyIt": "Build a Power BI dashboard on CAFM and Zoho Creator data showing PPM compliance, open work orders and SLA performance per contract, filterable by site."
  },
  {
    "id": "fm-015",
    "title": "Life Cycle Costing (LCC) with the International Construction Measurement Standard (ICMS)",
    "department": "Facilities Management",
    "topic": "Lifecycle Costing",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Dermot Kehily",
    "publishDate": "2026-10-28",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/4tqsN9m7DrI",
    "isNew": true,
    "summary": "Works through an example of applying life cycle costing within the ICMS framework, showing how construction, operation and maintenance costs can be structured and compared over an asset’s life.",
    "takeaways": [
      "Judge assets on whole-life cost, not purchase price alone",
      "A common standard (ICMS) makes cost comparisons consistent",
      "Use LCC to support capex replacement and refurbishment decisions"
    ],
    "applyIt": "Use life cycle costing when advising clients on chiller or AHU replacement versus repair, presenting whole-life cost comparisons in capex planning reports."
  },
  {
    "id": "pv-016",
    "title": "Surveying Secrets: Master Your Moisture Meter",
    "department": "Property Inspection & Valuation",
    "topic": "Damp Investigation",
    "level": "Foundation",
    "format": "On-the-job",
    "source": "Industry Expert",
    "channel": "Residential Surveyor Academy (Geoff Hunt)",
    "publishDate": "2026-10-28",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/ggMuKVknsPw",
    "isNew": true,
    "summary": "Surveyor Geoff Hunt demonstrates how damp meters work, how to read them properly and what they cannot reliably tell you during a property inspection.",
    "takeaways": [
      "Moisture meters give relative readings, not absolute moisture content",
      "Readings can be misleading on salts, foil or dense materials",
      "Confirm suspected damp with other evidence before reporting"
    ],
    "applyIt": "Train snagging and inspection staff to use moisture meters correctly on bathroom walls, ceilings below wet areas and around AC drains, and to back up readings with photos and thermal images in reports."
  },
  {
    "id": "fin-011",
    "title": "What is NPV? Net Present Value Explained",
    "department": "Finance",
    "topic": "Investment Appraisal",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Ryan O'Connell, CFA, FRM",
    "publishDate": "2026-10-29",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/NJ2ajp9Nu4o",
    "isNew": true,
    "summary": "A CFA charterholder explains how net present value discounts future cash flows to today and uses a worked example to show how to judge whether an investment creates value.",
    "takeaways": [
      "Money received later is worth less than money today, so discount future cash flows",
      "A positive NPV at the right discount rate means the investment adds value",
      "NPV is only as good as the cash-flow and discount-rate assumptions behind it"
    ],
    "applyIt": "Use NPV when deciding on capex such as new CAFM modules, tools or vehicles, or when comparing multi-year MEP contract bids, and stress-test the cash-flow assumptions before approval."
  },
  {
    "id": "lead-012",
    "title": "Daniel Goleman Introduces Emotional Intelligence",
    "department": "Leadership",
    "topic": "Emotional Intelligence",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Big Think (Daniel Goleman)",
    "publishDate": "2026-10-29",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/Y7m9eNoB3NU",
    "isNew": true,
    "summary": "Psychologist Daniel Goleman outlines the core abilities that make up emotional intelligence and why they matter for how people work and lead.",
    "takeaways": [
      "Emotional intelligence rests on self-awareness, self-management, empathy and social skill",
      "Managing your own reactions under pressure is a learnable skill",
      "Empathy helps you read your team and respond to what they need"
    ],
    "applyIt": "Supervisors handling tense client complaints or overstretched site teams can pause, name their own reaction and listen first before deciding how to respond."
  },
  {
    "id": "proc-010",
    "title": "7 KPIs for Effective Supplier Relationship Management",
    "department": "Procurement",
    "topic": "Supplier Evaluation",
    "level": "Practitioner",
    "source": "Training Academy",
    "channel": "Procurement Tactics",
    "publishDate": "2026-10-29",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/8ppXU0hZ3xI",
    "isNew": true,
    "summary": "Procurement Tactics walks through seven practical KPIs, from lead time and defect rate to on-time delivery and procurement ROI, for measuring and improving supplier performance.",
    "takeaways": [
      "Track lead time, on-time delivery, defect rate and compliance for each key supplier",
      "Agree the KPIs with suppliers up front so expectations are clear",
      "Link supplier metrics to goals like cost savings and risk reduction"
    ],
    "applyIt": "Build a simple supplier scorecard in Zoho Creator for spare-parts suppliers and MEP subcontractors, reviewing on-time delivery and defects quarterly before renewing agreements."
  },
  {
    "id": "hr-011",
    "title": "HR Business Partner (HRBP) Model Explained - Strategic HR",
    "department": "HR",
    "topic": "HR Strategy",
    "level": "Executive",
    "source": "Training Academy",
    "channel": "CodeLucky",
    "publishDate": "2026-10-29",
    "duration": "4:54",
    "embedUrl": "https://www.youtube.com/embed/8EdhaeDUddA",
    "isNew": true,
    "summary": "The video explains Dave Ulrich's HR business partner model and how HR moves from personnel administration to a strategic role supporting business goals.",
    "takeaways": [
      "Ulrich describes four HR roles: strategic partner, change agent, employee champion and administrative expert",
      "An HR business partner works alongside line leaders on business priorities",
      "Strategic HR needs business, data and influencing skills, not just policy knowledge"
    ],
    "applyIt": "Assign HR to sit in monthly operations reviews so workforce, training and retention plans are tied directly to contract mobilisations and client SLAs."
  },
  {
    "id": "qhse-011",
    "title": "Mastering Permit to Work: Your Complete Introduction",
    "department": "Quality & HSE",
    "topic": "Permit to Work",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Will On Safety",
    "publishDate": "2026-10-29",
    "duration": "24:20",
    "embedUrl": "https://www.youtube.com/embed/qiXdQ2M82iw",
    "isNew": true,
    "summary": "A safety practitioner introduces permit-to-work systems, when they are needed and how to run them properly for high-risk tasks such as hot work, confined spaces and electrical isolation.",
    "takeaways": [
      "Use a permit to work for high-risk, non-routine jobs such as hot work, confined spaces and isolations",
      "A permit is only effective if hazards, controls and isolations are checked on site",
      "Permits must be formally handed back and closed before equipment returns to service"
    ],
    "applyIt": "Make sure every hot work, electrical isolation and confined-space job on client sites, including subcontractor work, runs on a formal permit logged in the CAFM system and closed out on completion."
  },
  {
    "id": "bd-012",
    "title": "What is Consultative Selling?",
    "department": "Business Development",
    "topic": "Consultative Selling",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Business Skills (Lawrence M. Miller)",
    "publishDate": "2026-10-29",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/uZ2wL8PxEP4",
    "isNew": true,
    "summary": "Management consultant Lawrence M. Miller explains consultative selling as a trust-based approach in which the seller helps the client solve their problem rather than pushing a product.",
    "takeaways": [
      "Start with the client's problems and goals, not your service list",
      "Ask questions and listen to build trust before proposing a solution",
      "Position yourself as a partner in solving the problem"
    ],
    "applyIt": "In meetings with developers and property owners, ask about their asset issues, complaints and budget pressures before proposing a tailored maintenance or snagging package."
  },
  {
    "id": "it-010",
    "title": "What is IT Governance?",
    "department": "IT",
    "topic": "IT Governance & Risk",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Vaseem Nasiruddeen Mohamed",
    "publishDate": "2026-10-29",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/zpZs06f_dak",
    "isNew": true,
    "summary": "The video introduces IT governance and the COBIT framework, then outlines steps to tailor a governance system, find gaps and build an improvement roadmap.",
    "takeaways": [
      "IT governance aligns IT objectives, policies and processes with business goals",
      "COBIT provides a structured set of governance and management processes",
      "Assess gaps, build a roadmap and keep measuring maturity over time"
    ],
    "applyIt": "Set a simple governance routine for Zoho Creator apps, the CAFM system and Microsoft 365 that covers ownership, access approvals, change control and a yearly risk review."
  },
  {
    "id": "fm-016",
    "title": "Legionnaires' Disease: Hot Water Pipes Demonstration",
    "department": "Facilities Management",
    "topic": "Water Hygiene",
    "level": "Foundation",
    "source": "Regulator",
    "channel": "Health and Safety Executive",
    "publishDate": "2026-10-29",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/ZTTgeMBbR-w",
    "isNew": true,
    "summary": "A short UK HSE demonstration video on hot water pipework, showing why keeping water systems clean is central to controlling legionella risk.",
    "takeaways": [
      "Clean water systems are a basic legionella control",
      "Hot water pipework needs regular inspection and maintenance",
      "Legionella control needs routine checks, not one-off fixes"
    ],
    "applyIt": "Include temperature checks, flushing of little-used outlets and tank cleaning in PPM schedules for client buildings, with results recorded in the CAFM system as statutory compliance evidence."
  },
  {
    "id": "pv-017",
    "title": "Introduction to IPMS (International Property Measurement Standards)",
    "department": "Property Inspection & Valuation",
    "topic": "Measurement Standards",
    "level": "Practitioner",
    "format": "Process",
    "source": "Training Academy",
    "channel": "APC Expert Webinars",
    "publishDate": "2026-10-29",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/CTNjS3asb10",
    "isNew": true,
    "summary": "An APC training webinar introducing the International Property Measurement Standards and why consistent measurement matters for surveyors and valuers.",
    "takeaways": [
      "IPMS sets out a consistent, international way to measure buildings",
      "Always state which measurement basis was used in a report",
      "Consistent measurement makes comparisons and valuations more reliable"
    ],
    "applyIt": "State the measurement basis on every inspection and valuation report, and check developer-quoted areas against site measurements before relying on them."
  },
  {
    "id": "fin-012",
    "title": "How to Do a Profitability Analysis",
    "department": "Finance",
    "topic": "Contract Profitability",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "I Hate Numbers",
    "publishDate": "2026-10-31",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/nR88ZrP0AUw",
    "isNew": true,
    "summary": "A business finance coach shows how to analyse where a business really makes money by working out profit margins and the lifetime value of customers.",
    "takeaways": [
      "Calculate margin per customer or contract, not just for the business as a whole",
      "Customer lifetime value shows which clients are worth investing in",
      "Good, up-to-date accounting data makes profitability reviews quick and repeatable"
    ],
    "applyIt": "Run a quarterly margin review of each MEP maintenance contract and client, using CAFM labour and material costs, to spot loss-making sites before renewal."
  },
  {
    "id": "lead-013",
    "title": "Managing Conflict in Teams — Lindred Greer",
    "department": "Leadership",
    "topic": "Managing Conflict",
    "level": "Executive",
    "source": "Training Academy",
    "channel": "Stanford Graduate School of Business",
    "publishDate": "2026-10-31",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/YVWpipM-Rnw",
    "isNew": true,
    "summary": "Stanford professor Lindred Greer explains why unmanaged team conflict spreads and hurts productivity and retention, and how leaders can contain and resolve it.",
    "takeaways": [
      "Unaddressed conflict spreads across a team and drives turnover",
      "Step in early and separate task disagreements from personal friction",
      "Leaders set the norms for how disagreement is raised and resolved"
    ],
    "applyIt": "Set a clear escalation route for disputes between site teams, supervisors and subcontractors so conflicts are resolved within days rather than left to affect service delivery."
  },
  {
    "id": "proc-011",
    "title": "How to Select a Supplier: The Supplier Onboarding Process",
    "department": "Procurement",
    "topic": "Supplier Onboarding",
    "level": "Foundation",
    "source": "Training Academy",
    "channel": "Procurement Academy",
    "publishDate": "2026-10-31",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/DE_V-KluZc8",
    "isNew": true,
    "summary": "An introduction to the main factors buyers should weigh when selecting and onboarding a supplier for goods, works or services.",
    "takeaways": [
      "Define selection criteria before inviting suppliers",
      "Check capability, compliance and financial stability, not only price",
      "A structured onboarding step reduces risk once orders start"
    ],
    "applyIt": "Use a standard onboarding checklist (trade licence, insurance, HSE record, references) before any new MEP supplier or subcontractor is added to the approved vendor list."
  },
  {
    "id": "hr-012",
    "title": "UAE Labour Law Updates and Implications for Employers (CIPD Webinar)",
    "department": "HR",
    "topic": "UAE Labour Law",
    "level": "Practitioner",
    "source": "Professional Body",
    "channel": "CIPD Middle East",
    "publishDate": "2026-10-31",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/dCwcOhscDlY",
    "isNew": true,
    "summary": "CIPD Middle East and law firm Clyde & Co walk employers through the federal UAE labour law reforms, covering fixed-term contracts, new work models, leave and working-hours rules.",
    "takeaways": [
      "All employment contracts must now be fixed-term under the federal law",
      "New work models (part-time, flexible, temporary) are formally recognised",
      "Leave entitlements and working-hour rules need to be reflected in contracts and policies"
    ],
    "applyIt": "Review Al Bonian FM offer letters, shift patterns and leave policies for site technicians against the federal labour law requirements covered here."
  },
  {
    "id": "qhse-012",
    "title": "What Is an Environmental Aspects and Impacts Register? (ISO 14001)",
    "department": "Quality & HSE",
    "topic": "ISO 14001",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Spire Safety Consultants",
    "publishDate": "2026-10-31",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/uomX1R6Gpu8",
    "isNew": true,
    "summary": "Explains how an ISO 14001 aspects and impacts register maps an organisation’s interactions with the environment and helps decide which risks need controls.",
    "takeaways": [
      "List activities such as waste, emissions and resource use as environmental aspects",
      "Rate the significance of each impact to prioritise action",
      "Significant aspects drive objectives, controls and monitoring in the EMS"
    ],
    "applyIt": "Build an aspects register for FM operations (refrigerant handling, chemical use, waste oil, water and energy use) to steer environmental priorities and client reporting."
  },
  {
    "id": "bd-013",
    "title": "How to Sell B2B Services",
    "department": "Business Development",
    "topic": "B2B Services Selling",
    "level": "Foundation",
    "source": "Industry Expert",
    "channel": "Angelique Rewers",
    "publishDate": "2026-10-31",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/AavIFMk5EKU",
    "isNew": true,
    "summary": "Explains how selling services to businesses depends on understanding what the buyer values, creating urgency and balancing logic with emotion in the decision.",
    "takeaways": [
      "Lead with the client’s business problem, not your list of services",
      "Create genuine urgency by linking your service to the client’s priorities",
      "B2B buyers decide on both logic and emotion, so address risk and trust"
    ],
    "applyIt": "Frame FM proposals to property owners around their pain points (downtime, tenant complaints, compliance risk) rather than a generic list of MEP services."
  },
  {
    "id": "it-011",
    "title": "Low-Code/No-Code with Zoho Creator",
    "department": "IT",
    "topic": "Low-Code Platforms",
    "level": "Practitioner",
    "source": "Industry Expert",
    "channel": "Zoho",
    "publishDate": "2026-10-31",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/F2TlSzmPmlc",
    "isNew": true,
    "summary": "Zoho introduces how Creator’s drag-and-drop builders, templates, code snippets and integrations let teams build custom business apps quickly.",
    "takeaways": [
      "Visual builders and templates speed up form and report creation",
      "Pre-built snippets and integrations reduce custom coding",
      "AI, analytics and process automation can be layered onto apps"
    ],
    "applyIt": "Identify one manual paper or spreadsheet process (e.g. site inspection checklists) and rebuild it as a Zoho Creator app linked to existing company data."
  },
  {
    "id": "fm-017",
    "title": "Using SLAs and KPIs for Effective Vendor Performance Management",
    "department": "Facilities Management",
    "topic": "SLA & Contract Management",
    "level": "Executive",
    "source": "Industry Expert",
    "channel": "Venminder",
    "publishDate": "2026-10-31",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/O_kJ6wtQDm4",
    "isNew": true,
    "summary": "A webinar on turning service expectations into formal SLAs and KPIs, reviewing vendor performance regularly and acting early when it slips.",
    "takeaways": [
      "Translate expectations into measurable SLAs and supporting KPIs",
      "Set a regular review rhythm proportionate to contract risk",
      "Watch for early signs of decline and act before failures escalate"
    ],
    "applyIt": "Align each client contract’s SLAs (response times, PPM compliance) with CAFM-reported KPIs and apply the same discipline to subcontractor performance reviews."
  },
  {
    "id": "pv-018",
    "title": "Due Diligence in Commercial Real Estate: Step-by-Step Guide",
    "department": "Property Inspection & Valuation",
    "topic": "Due Diligence",
    "level": "Foundation",
    "format": "Process",
    "source": "Industry Expert",
    "channel": "North Star Commercial Real Estate Advisors",
    "publishDate": "2026-10-31",
    "duration": "",
    "embedUrl": "https://www.youtube.com/embed/K03UTr5R_PU",
    "isNew": true,
    "summary": "Walks through the main stages of buying commercial property, including financing checks, environmental studies, physical inspections and document review.",
    "takeaways": [
      "Due diligence combines financial, legal, environmental and physical checks",
      "Physical inspections uncover costs that affect price and negotiation",
      "Organise document reviews against a checklist and timeline"
    ],
    "applyIt": "Package Al Bonian FM inspection and condition reports as the physical due-diligence component for investors and developers buying buildings in Dubai."
  }
];
