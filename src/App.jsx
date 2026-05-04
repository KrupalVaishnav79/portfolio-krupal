import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Download,
  FileCheck2,
  FileInput,
  Globe2,
  Layers3,
  Menu,
  MessageCircle,
  Send,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TimerReset,
  X,
  Zap
} from "lucide-react";

const phone = "919979031263";
const whatsappText = encodeURIComponent(
  "Hi Krupal, I saw your portfolio and want to discuss a project / opportunity."
);
const whatsappUrl = `https://wa.me/${phone}?text=${whatsappText}`;
const resumePath = `${import.meta.env.BASE_URL}Krupa_vaishnav_dotnet_final_with_projects.docx`;

const stats = [
  ["~3 Years", "Professional experience"],
  ["5", "Detailed project case studies"],
  [".NET + React", "Primary delivery stack"],
  ["Job + Freelance", "Available for opportunities"]
];

const profileFacts = [
  ["Current Role", "Senior Software Developer"],
  ["Location", "Gandhinagar / Ahmedabad"],
  ["Core Stack", "ASP.NET Core, MVC, React, SQL Server"],
  ["Work Type", "Business apps, APIs, dashboards, admin panels"]
];

const expertise = [
  {
    icon: <ServerCog />,
    title: ".NET Application Development",
    text: "ASP.NET Core, MVC, Web API, C#, authentication, role-based access, IIS deployment, and production issue fixing."
  },
  {
    icon: <Code2 />,
    title: "React Frontend Engineering",
    text: "React, TypeScript, JavaScript, dashboard UI, data-heavy forms, Kendo UI, Tailwind, Bootstrap, and responsive layouts."
  },
  {
    icon: <Database />,
    title: "Database & Reporting",
    text: "SQL Server, stored procedures, Dapper, Entity Framework, PDF/Excel reports, import/export, and operational data workflows."
  },
  {
    icon: <Sparkles />,
    title: "AI-Assisted Delivery",
    text: "Uses modern AI coding tools for planning, scaffolding, debugging, SQL help, refactoring, documentation, and faster delivery."
  }
];

const projects = [
  {
    id: "01",
    icon: <BriefcaseBusiness />,
    title: "BulkoMatrix",
    category: "B2B ERP / Commerce Platform",
    summary:
      "A business platform for B2B/B2B2C commerce, supplier operations, product catalogue, quotation flow, orders, inventory, accounts, and reporting.",
    stack: ["ASP.NET Web Forms", "C#", ".NET Framework", "SQL Server", "Stored Procedures", "Razorpay", "EPPlus", "iTextSharp"],
    responsibilities: [
      "Worked on client-facing product, quote cart, checkout, wishlist, order tracking, and account-related screens.",
      "Handled admin ERP modules for catalogue, clients, suppliers, purchase, sales, inventory, accounts, and reports.",
      "Integrated SQL Server stored procedures through business-layer code and Web Forms code-behind.",
      "Supported Excel import/export, PDF invoice/report generation, Razorpay payment flow, and media uploads."
    ],
    value: [
      "Centralized daily business operations into one ERP-style platform.",
      "Reduced manual work through structured imports, reports, and workflow-based screens.",
      "Improved visibility for products, orders, suppliers, accounts, and internal reporting."
    ]
  },
  {
    id: "02",
    icon: <Layers3 />,
    title: "Makana",
    category: "React + TypeScript Migration",
    summary:
      "Modernized existing enterprise UI pages by rebuilding them in React and TypeScript while keeping API behavior, validation flow, and user permissions stable.",
    stack: ["React", "TypeScript", "ASP.NET Core APIs", "Azure SSO", "RBAC", "Kendo UI", "REST APIs"],
    responsibilities: [
      "Converted existing Angular UI pages into React + TypeScript screens with cleaner component structure.",
      "Connected React screens with ASP.NET Core APIs, request/response handling, validation, and error states.",
      "Built data grids, filters, editable forms, and user actions using Kendo UI components.",
      "Worked with Azure SSO and RBAC-aware screens so users only see and perform allowed actions."
    ],
    value: [
      "Helped move the frontend toward a modern React-based stack.",
      "Improved maintainability by splitting UI behavior into reusable components.",
      "Protected existing business rules while improving the user interface layer."
    ]
  },
  {
    id: "03",
    icon: <Smartphone />,
    title: "FitPro Gym",
    category: "Gym Web, Mobile & Admin System",
    summary:
      "A full-stack gym platform with admin dashboard, member portal, mobile app screens, subscription flow, workout plans, payment integration, and notifications.",
    stack: ["React", "Expo React Native", "Node.js", "Express", "MongoDB", "JWT", "Razorpay", "Twilio", "Gemini API"],
    responsibilities: [
      "Built admin dashboard, web portal, Expo mobile screens, and backend APIs for gym operations.",
      "Implemented OTP login, JWT authentication, member subscriptions, workout plan flow, and media/gallery uploads.",
      "Integrated Razorpay payments, Twilio messaging, cron jobs, and Gemini-based AI plan generation.",
      "Prepared project structure and handoff flow for hosting, mobile build, and future feature expansion."
    ],
    value: [
      "Created one connected system for gym admin, members, plans, and subscriptions.",
      "Added automation for notifications and AI-assisted workout planning.",
      "Supported both web and mobile usage for a more complete product experience."
    ]
  },
  {
    id: "04",
    icon: <Globe2 />,
    title: "Buildzy Property Management",
    category: "Real Estate Admin & Listing Platform",
    summary:
      "A property management platform for property listings, admin operations, appointments, users, image handling, reports, OTP login, and AI-supported property analysis.",
    stack: ["React", "Vite", "Node.js", "Express", "MongoDB", "ImageKit", "Nodemailer", "ExcelJS", "Azure AI", "Firecrawl"],
    responsibilities: [
      "Built admin screens for property add/list/update, appointments, users, dashboard stats, forms, and protected routes.",
      "Created backend APIs for properties, users, appointments, forms, news, admin stats, and authentication flow.",
      "Supported image upload, Excel import/export, OTP login, appointment status updates, and mail notifications.",
      "Added Azure AI and Firecrawl-based property analysis, data enrichment, and location trend support."
    ],
    value: [
      "Helped manage property data, leads, appointments, and users from a single admin system.",
      "Improved property operations with imports, exports, media handling, and dashboard statistics.",
      "Added AI-driven research support for smarter property insights."
    ]
  },
  {
    id: "05",
    icon: <TimerReset />,
    title: "TaskTracking",
    category: ".NET 8 Task & Approval System",
    summary:
      "A business task tracking system for users, roles, clients, financial years, task entry, approvals, live notifications, active timers, and PDF/Excel reporting.",
    stack: ["ASP.NET Core MVC", ".NET 8", "C#", "SQL Server", "Dapper", "SignalR", "Cookie Auth", "ClosedXML", "iText7"],
    responsibilities: [
      "Built modules for login, password change, clients, users, roles, years, task master, task entry, approvals, and reports.",
      "Implemented cookie authentication, session handling, force password change, and role-based access control.",
      "Added SignalR notification groups for users and SuperAdmin to support live task communication.",
      "Created PDF/Excel reports and active task timer service for better tracking and management."
    ],
    value: [
      "Made task allocation, approval, reporting, and monitoring easier for internal teams.",
      "Improved accountability with timers, notifications, roles, and structured reports.",
      "Used .NET 8 and SQL Server to keep the system maintainable and business-ready."
    ]
  }
];

const services = [
  "ASP.NET Core / MVC web applications",
  "React admin panels and dashboards",
  "ERP, CRM, task, inventory, and property systems",
  "SQL Server reports, stored procedures, and data workflows",
  "REST API integration and backend development",
  "Production bug fixing and feature enhancement",
  "Freelance web application development",
  "AI-assisted development support with manual review"
];

const processSteps = [
  {
    id: "01",
    icon: <FileInput />,
    title: "Document Intake",
    text: "PDFs, scans, forms, invoices, and uploaded files enter a structured processing queue."
  },
  {
    id: "02",
    icon: <Bot />,
    title: "AI Classification",
    text: "AI identifies document type, priority, source, and the extraction rules needed for the file."
  },
  {
    id: "03",
    icon: <BrainCircuit />,
    title: "Smart Extraction",
    text: "Key fields are extracted from documents using OCR, AI prompts, and business validation logic."
  },
  {
    id: "04",
    icon: <FileCheck2 />,
    title: "Human Validation",
    text: "Users review low-confidence fields, correct data, and approve the final document output."
  },
  {
    id: "05",
    icon: <Database />,
    title: "System Export",
    text: "Approved data moves into ERP, CRM, reports, databases, APIs, or downstream workflows."
  }
];

const aiGroups = [
  {
    title: "Coding & IDE Assistants",
    tools: ["OpenAI Codex", "Cursor", "Claude Code", "GitHub Copilot", "Windsurf", "Cline", "Roo Code", "Continue.dev"]
  },
  {
    title: "Reasoning & Research",
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity AI", "Google Antigravity"]
  },
  {
    title: "Local & UI Tools",
    tools: ["Ollama", "LM Studio", "v0"]
  }
];

const experience = [
  ["Dec 2024 - Present", "Senior Software Developer", "Betanet Consultancy Pvt Ltd, Gandhinagar"],
  ["Oct 2023 - Dec 2024", "Full Stack Developer", "ALPS Logic Infotech, Gandhinagar"],
  ["May 2023 - Oct 2023", "Web Developer", "Tech Terminologie, Ahmedabad"]
];

const quickQuestions = [
  { label: "Profile", hint: "Role, stack, experience", prompt: "Tell me about Krupal" },
  { label: "Projects", hint: "Case studies and work", prompt: "Show main projects" },
  { label: "AI Tools", hint: "AI workflow and tools", prompt: "What AI tools he uses?" },
  { label: "Contact", hint: "WhatsApp and hiring", prompt: "How can I contact?" }
];

function getBotAnswer(input) {
  const text = input.toLowerCase();

  if (text.includes("contact") || text.includes("whatsapp") || text.includes("hire")) {
    return "You can contact Krupal directly on WhatsApp at +91 99790 31263. He is open for .NET, React, API, dashboard, ERP/CRM, and freelance web-app work.";
  }

  if (text.includes("project") || text.includes("work") || text.includes("portfolio")) {
    return "Main projects: BulkoMatrix, Makana React migration, FitPro Gym, Buildzy Property Management, and TaskTracking. Each project includes stack, responsibility, and business value.";
  }

  if (text.includes("ai") || text.includes("tool") || text.includes("codex") || text.includes("claude")) {
    return "AI tools used: Codex, ChatGPT, Claude, Claude Code, Cursor, GitHub Copilot, Gemini, Google Antigravity, Windsurf, Ollama, LM Studio, Continue.dev, Cline, Roo Code, Perplexity AI, and v0.";
  }

  if (text.includes("skill") || text.includes("tech") || text.includes("stack")) {
    return "Core skills: ASP.NET Core, MVC, Web API, C#, SQL Server, Dapper, Entity Framework, React, TypeScript, Node.js, Express, MongoDB, IIS, reports, and API integrations.";
  }

  if (text.includes("experience") || text.includes("year")) {
    return "Krupal has approximately 3 years of professional experience from May 2023 to May 2026 across .NET, React, APIs, SQL Server, admin panels, ERP/CRM, and full-stack development.";
  }

  return "Krupal is a .NET and React developer focused on business web applications, APIs, dashboards, ERP/CRM modules, SQL workflows, and AI-assisted delivery. Ask about projects, skills, AI tools, experience, or contact.";
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Work", "#work"],
    ["Process", "#process"],
    ["Expertise", "#expertise"],
    ["AI Tools", "#ai"],
    ["Experience", "#experience"],
    ["Contact", "#contact"]
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Krupal Vaishnav home">
        <span>KV</span>
        <div>
          <strong>Krupal Vaishnav</strong>
          <small>.NET / React Developer</small>
        </div>
      </a>

      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="resume-link" href={resumePath} download>
          <Download size={16} />
          Resume
        </a>
        <a className="whatsapp-nav" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle size={17} />
          WhatsApp
        </a>
        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function ProfilePanel() {
  return (
    <aside className="profile-panel" aria-label="Krupal Vaishnav profile summary">
      <div className="profile-top">
        <span className="avatar">KV</span>
        <div>
          <strong>Krupal Vaishnav</strong>
          <p>ASP.NET / .NET Core Developer</p>
        </div>
      </div>

      <div className="profile-rows">
        {profileFacts.map(([label, value]) => (
          <div className="profile-row" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className="stack-ribbon" aria-label="Core technology stack">
        {["ASP.NET Core", "MVC", "Web API", "React", "TypeScript", "SQL Server", "Dapper", "MongoDB"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <p className="panel-note">
        Focused on practical business software: clean screens, reliable APIs, secure access, useful reports, and faster
        delivery with AI-assisted development.
      </p>
    </aside>
  );
}

function ProjectCase({ project }) {
  return (
    <article className="case-card">
      <div className="case-index">
        <span>{project.id}</span>
        {project.icon}
      </div>

      <div className="case-main">
        <span className="case-kicker">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tag-row">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="case-detail">
        <h4>Work handled</h4>
        <ul>
          {project.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h4>Business value</h4>
        <ul>
          {project.value.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ProcessFlow() {
  return (
    <div className="process-showcase">
      <article className="process-card diagram-card diagram-wide">
        <DiagramChrome eyebrow="IDP Flow" title="Intelligent document processing pipeline" meta="Capture to export">
          <IDPFlowSvg />
        </DiagramChrome>
      </article>

      <article className="process-card diagram-card">
        <DiagramChrome eyebrow="Architecture" title=".NET + React delivery map" meta="Frontend, API, data, integrations">
          <ArchitectureSvg />
        </DiagramChrome>
      </article>

      <article className="process-card diagram-card">
        <DiagramChrome eyebrow="AI Workflow" title="AI-assisted build loop" meta="Prompt, code, review, ship">
          <AIBuildLoopSvg />
        </DiagramChrome>
      </article>
    </div>
  );
}

function DiagramChrome({ eyebrow, title, meta, children }) {
  return (
    <>
      <div className="process-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="diagram-header">
        <div>
          <span className="mini-kicker">{eyebrow}</span>
          <h3>{title}</h3>
        </div>
        <div className="process-status">
          <i />
          {meta}
        </div>
      </div>

      <div className="svg-stage">
        {children}
      </div>
    </>
  );
}

function IDPFlowSvg() {
  return (
    <svg className="process-svg idp-svg" viewBox="0 0 1120 430" role="img" aria-label="IDP document flow diagram">
      <defs>
        <linearGradient id="idpFlowGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#4285f4" />
          <stop offset="32%" stopColor="#34a853" />
          <stop offset="66%" stopColor="#fbbc05" />
          <stop offset="100%" stopColor="#ea4335" />
        </linearGradient>
        <filter id="idpGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect className="svg-bg" x="18" y="18" width="1084" height="394" rx="34" />
      <path className="svg-grid-line" d="M90 88 H1030 M90 342 H1030 M150 60 V370 M970 60 V370" />
      <path
        className="svg-flow-line"
        d="M170 220 C250 130 310 130 390 220 S550 310 630 220 S790 130 870 220 S950 290 1000 220"
      />
      <circle className="svg-runner runner-blue" r="8" filter="url(#idpGlow)">
        <animateMotion dur="7.4s" repeatCount="indefinite" path="M170 220 C250 130 310 130 390 220 S550 310 630 220 S790 130 870 220 S950 290 1000 220" />
      </circle>
      <circle className="svg-runner runner-green" r="6" filter="url(#idpGlow)">
        <animateMotion begin="-2.4s" dur="7.4s" repeatCount="indefinite" path="M170 220 C250 130 310 130 390 220 S550 310 630 220 S790 130 870 220 S950 290 1000 220" />
      </circle>
      <circle className="svg-runner runner-yellow" r="5" filter="url(#idpGlow)">
        <animateMotion begin="-4.8s" dur="7.4s" repeatCount="indefinite" path="M170 220 C250 130 310 130 390 220 S550 310 630 220 S790 130 870 220 S950 290 1000 220" />
      </circle>

      <g className="svg-node-card idp-node node-a">
        <rect x="70" y="128" width="150" height="170" rx="24" />
        <path className="doc-sheet" d="M111 164 h56 l24 24 v62 h-80 z" />
        <path className="doc-fold" d="M167 164 v25 h24" />
        <path className="doc-line" d="M126 210 h48 M126 230 h36 M126 250 h52" />
        <text x="145" y="333" textAnchor="middle">Document Intake</text>
      </g>

      <g className="svg-node-card idp-node node-b">
        <rect x="285" y="82" width="150" height="170" rx="24" />
        <circle className="node-core" cx="360" cy="152" r="34" />
        <path className="spark-path" d="M360 118 v68 M326 152 h68 M336 128 l48 48 M384 128 l-48 48" />
        <text x="360" y="287" textAnchor="middle">AI Classification</text>
      </g>

      <g className="svg-node-card idp-node node-c">
        <rect x="500" y="166" width="150" height="170" rx="24" />
        <rect className="field-box" x="532" y="210" width="86" height="18" rx="5" />
        <rect className="field-box delay-1" x="532" y="240" width="58" height="18" rx="5" />
        <rect className="field-box delay-2" x="532" y="270" width="72" height="18" rx="5" />
        <path className="scan-line" d="M522 198 H628" />
        <text x="575" y="371" textAnchor="middle">Smart Extraction</text>
      </g>

      <g className="svg-node-card idp-node node-d">
        <rect x="715" y="82" width="150" height="170" rx="24" />
        <circle className="check-ring" cx="790" cy="158" r="42" />
        <path className="check-mark" d="M767 158 l16 16 l35 -42" />
        <text x="790" y="287" textAnchor="middle">Human Validation</text>
      </g>

      <g className="svg-node-card idp-node node-e">
        <rect x="930" y="128" width="150" height="170" rx="24" />
        <ellipse className="db-top" cx="1005" cy="172" rx="45" ry="16" />
        <path className="db-body" d="M960 172 v70 c0 9 20 16 45 16 s45 -7 45 -16 v-70" />
        <path className="db-line" d="M960 208 c0 9 20 16 45 16 s45 -7 45 -16" />
        <text x="1005" y="333" textAnchor="middle">ERP / CRM Export</text>
      </g>
    </svg>
  );
}

function ArchitectureSvg() {
  return (
    <svg className="process-svg architecture-svg" viewBox="0 0 1120 430" role="img" aria-label=".NET React architecture diagram">
      <defs>
        <linearGradient id="archGradient" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#64e5bd" />
          <stop offset="48%" stopColor="#4285f4" />
          <stop offset="100%" stopColor="#d7a14f" />
        </linearGradient>
      </defs>

      <rect className="svg-bg" x="18" y="18" width="1084" height="394" rx="34" />
      <circle className="arch-orbit orbit-one" cx="560" cy="214" r="144" />
      <circle className="arch-orbit orbit-two" cx="560" cy="214" r="210" />

      <path className="arch-line" d="M288 152 C390 124 450 136 515 185" />
      <path className="arch-line delay-1" d="M288 282 C398 314 464 288 520 242" />
      <path className="arch-line delay-2" d="M604 184 C690 112 770 112 868 154" />
      <path className="arch-line delay-3" d="M608 246 C704 318 778 314 872 274" />
      <path className="arch-line delay-4" d="M560 134 C560 94 560 78 560 58" />

      <g className="arch-center">
        <circle cx="560" cy="214" r="78" />
        <text x="560" y="204" textAnchor="middle">.NET API</text>
        <text x="560" y="232" textAnchor="middle">Business Core</text>
      </g>

      <g className="arch-box arch-react">
        <rect x="92" y="94" width="196" height="118" rx="22" />
        <text x="190" y="143" textAnchor="middle">React Dashboard</text>
        <text x="190" y="171" textAnchor="middle">Admin UI / Forms</text>
      </g>

      <g className="arch-box arch-mobile">
        <rect x="92" y="236" width="196" height="118" rx="22" />
        <text x="190" y="285" textAnchor="middle">Client Portal</text>
        <text x="190" y="313" textAnchor="middle">Mobile Ready</text>
      </g>

      <g className="arch-box arch-data">
        <rect x="832" y="94" width="196" height="118" rx="22" />
        <text x="930" y="143" textAnchor="middle">SQL / MongoDB</text>
        <text x="930" y="171" textAnchor="middle">Reports + Data</text>
      </g>

      <g className="arch-box arch-integrations">
        <rect x="832" y="236" width="196" height="118" rx="22" />
        <text x="930" y="285" textAnchor="middle">Integrations</text>
        <text x="930" y="313" textAnchor="middle">Razorpay / AI / APIs</text>
      </g>

      <g className="arch-cloud">
        <rect x="454" y="36" width="212" height="58" rx="20" />
        <text x="560" y="72" textAnchor="middle">Deploy + Monitoring</text>
      </g>

      <circle className="arch-pulse pulse-a" cx="344" cy="139" r="7" />
      <circle className="arch-pulse pulse-b" cx="738" cy="136" r="7" />
      <circle className="arch-pulse pulse-c" cx="738" cy="294" r="7" />
    </svg>
  );
}

function AIBuildLoopSvg() {
  return (
    <svg className="process-svg ai-loop-svg ai-board-svg" viewBox="0 0 1120 430" role="img" aria-label="AI assisted development delivery board">
      <defs>
        <linearGradient id="aiLoopGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#4285f4" />
          <stop offset="35%" stopColor="#34a853" />
          <stop offset="70%" stopColor="#fbbc05" />
          <stop offset="100%" stopColor="#ea4335" />
        </linearGradient>
        <radialGradient id="aiEngineGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#64e5bd" stopOpacity="0.34" />
          <stop offset="58%" stopColor="#4285f4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#070b0a" stopOpacity="0" />
        </radialGradient>
        <filter id="aiGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect className="svg-bg" x="18" y="18" width="1084" height="394" rx="34" />
      <path className="ai-board-grid" d="M90 78 H1030 M90 352 H1030 M210 58 V372 M910 58 V372" />
      <ellipse className="ai-engine-halo" cx="560" cy="214" rx="238" ry="168" />

      <path className="ai-stream stream-one" d="M244 126 C318 126 346 174 410 174" />
      <path className="ai-stream stream-two" d="M244 304 C318 304 346 254 410 254" />
      <path className="ai-stream stream-three" d="M710 174 C776 174 806 126 876 126" />
      <path className="ai-stream stream-four" d="M710 254 C776 254 806 304 876 304" />

      <circle className="ai-runner runner-blue" r="7" filter="url(#aiGlow)">
        <animateMotion dur="5.8s" repeatCount="indefinite" path="M244 126 C318 126 346 174 410 174" />
      </circle>
      <circle className="ai-runner runner-green" r="6" filter="url(#aiGlow)">
        <animateMotion begin="-1.4s" dur="5.8s" repeatCount="indefinite" path="M244 304 C318 304 346 254 410 254" />
      </circle>
      <circle className="ai-runner runner-yellow" r="6" filter="url(#aiGlow)">
        <animateMotion begin="-2.8s" dur="5.8s" repeatCount="indefinite" path="M710 174 C776 174 806 126 876 126" />
      </circle>
      <circle className="ai-runner runner-red" r="7" filter="url(#aiGlow)">
        <animateMotion begin="-4.2s" dur="5.8s" repeatCount="indefinite" path="M710 254 C776 254 806 304 876 304" />
      </circle>

      <g className="ai-board-card input-one">
        <rect x="72" y="76" width="172" height="100" rx="24" />
        <text x="158" y="118" textAnchor="middle">Requirement</text>
        <text className="sub" x="158" y="145" textAnchor="middle">scope, risks, modules</text>
      </g>

      <g className="ai-board-card input-two">
        <rect x="72" y="254" width="172" height="100" rx="24" />
        <text x="158" y="296" textAnchor="middle">Codebase</text>
        <text className="sub" x="158" y="323" textAnchor="middle">existing app + data</text>
      </g>

      <g className="ai-engine-core">
        <rect x="410" y="96" width="300" height="236" rx="38" />
        <circle className="engine-ring ring-a" cx="560" cy="190" r="58" />
        <circle className="engine-ring ring-b" cx="560" cy="190" r="86" />
        <text x="560" y="180" textAnchor="middle">AI Delivery Engine</text>
        <text className="sub" x="560" y="208" textAnchor="middle">Codex + Claude + Cursor</text>
        <g className="engine-bars">
          <rect x="474" y="260" width="172" height="8" rx="4" />
          <rect x="474" y="280" width="124" height="8" rx="4" />
          <rect x="474" y="300" width="152" height="8" rx="4" />
        </g>
      </g>

      <g className="ai-board-card output-one">
        <rect x="876" y="76" width="172" height="100" rx="24" />
        <text x="962" y="118" textAnchor="middle">Clean Feature</text>
        <text className="sub" x="962" y="145" textAnchor="middle">React + .NET + SQL</text>
      </g>

      <g className="ai-board-card output-two">
        <rect x="876" y="254" width="172" height="100" rx="24" />
        <text x="962" y="296" textAnchor="middle">Production</text>
        <text className="sub" x="962" y="323" textAnchor="middle">test, deploy, handoff</text>
      </g>

      <g className="review-gate">
        <rect x="468" y="34" width="184" height="54" rx="18" />
        <path d="M506 61 l15 15 l34 -40" />
        <text x="585" y="68" textAnchor="middle">Developer Review</text>
      </g>

      <g className="tool-chip chip-one">
        <rect x="320" y="360" width="92" height="34" rx="14" />
        <text x="366" y="382" textAnchor="middle">Codex</text>
      </g>
      <g className="tool-chip chip-two">
        <rect x="430" y="360" width="92" height="34" rx="14" />
        <text x="476" y="382" textAnchor="middle">Claude</text>
      </g>
      <g className="tool-chip chip-three">
        <rect x="540" y="360" width="92" height="34" rx="14" />
        <text x="586" y="382" textAnchor="middle">Cursor</text>
      </g>
      <g className="tool-chip chip-four">
        <rect x="650" y="360" width="92" height="34" rx="14" />
        <text x="696" y="382" textAnchor="middle">Copilot</text>
      </g>
    </svg>
  );
}

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi, I am Krupal's portfolio assistant. Ask me about his projects, skills, experience, AI tools, or contact details."
    }
  ]);
  const endRef = useRef(null);
  const typingTimerRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, isTyping]);

  useEffect(() => {
    return () => window.clearTimeout(typingTimerRef.current);
  }, []);

  function sendMessage(value = input) {
    const clean = value.trim();
    if (!clean) return;

    window.clearTimeout(typingTimerRef.current);
    setOpen(true);
    setIsTyping(true);
    setMessages((current) => [
      ...current,
      { role: "user", text: clean }
    ]);
    setInput("");

    typingTimerRef.current = window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { role: "bot", text: getBotAnswer(clean) }
      ]);
      setIsTyping(false);
    }, 520);
  }

  return (
    <div className="chatbot">
      {open && (
        <section className="chat-panel" aria-label="Portfolio chatbot">
          <div className="chat-top">
            <div className="assistant-title">
              <span className="assistant-mark">
                <Bot size={16} />
              </span>
              <div>
                <strong>Krupal Assistant</strong>
                <span>
                  <i />
                  Online portfolio helper
                </span>
              </div>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chatbot">
              <X size={18} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`message-row ${message.role}`}>
                {message.role === "bot" && (
                  <span className="message-avatar">
                    <Bot size={13} />
                  </span>
                )}
                <div className="message-content">
                  <p>{message.text}</p>
                  <small>{message.role === "bot" ? "Assistant" : "You"}</small>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message-row bot">
                <span className="message-avatar">
                  <Bot size={13} />
                </span>
                <div className="message-content">
                  <p className="typing-bubble">
                    <i />
                    <i />
                    <i />
                  </p>
                </div>
              </div>
            )}
            <span ref={endRef} />
          </div>

          {messages.length === 1 && !isTyping && (
            <div className="suggestion-grid" aria-label="Suggested chatbot questions">
              {quickQuestions.map((question) => (
                <button key={question.label} type="button" onClick={() => sendMessage(question.prompt)}>
                  <strong>{question.label}</strong>
                  <span>{question.hint}</span>
                </button>
              ))}
            </div>
          )}

          <form
            className="chat-input"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about projects, skills..."
            />
            <button type="submit" aria-label="Send message">
              <Send size={17} />
            </button>
          </form>
        </section>
      )}

      <button className="chat-fab" type="button" onClick={() => setOpen((value) => !value)} aria-label="Open chatbot">
        {open ? <X /> : <Bot />}
        {!open && <span>Ask AI</span>}
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="app" id="top">
      <div className="ambient-bg" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Header />

      <main>
        <section className="hero-shell">
          <div className="hero-copy">
            <span className="status-pill">
              <Zap size={15} />
              Available for job opportunities and freelance projects
            </span>
            <h1>Professional .NET and React developer for practical business software.</h1>
            <p>
              I build admin panels, ERP/CRM modules, APIs, dashboards, reports, and full-stack web applications that are
              clean, secure, maintainable, and ready for real business use.
            </p>
            <div className="hero-actions">
              <a className="primary-btn" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={18} />
                Discuss on WhatsApp
              </a>
              <a className="secondary-btn" href="#work">
                View Case Studies
                <ArrowUpRight size={18} />
              </a>
              <a className="ghost-btn" href={resumePath} download>
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </div>

          <ProfilePanel />
        </section>

        <section className="stats-strip" aria-label="Portfolio highlights">
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="section-block intro-section">
          <div className="section-heading">
            <span className="kicker">Professional Profile</span>
            <h2>Built for companies that need dependable software, not just attractive screens.</h2>
          </div>

          <div className="intro-grid">
            <div>
              <ShieldCheck />
              <h3>Business-first development</h3>
              <p>Focus on workflows, permissions, reports, data accuracy, and day-to-day usability.</p>
            </div>
            <div>
              <ServerCog />
              <h3>Backend confidence</h3>
              <p>Comfortable with APIs, authentication, SQL logic, imports, exports, and server-side debugging.</p>
            </div>
            <div>
              <Code2 />
              <h3>Frontend execution</h3>
              <p>Builds clear, responsive React screens for admin users, clients, teams, and internal operations.</p>
            </div>
          </div>
        </section>

        <section className="process-section section-block" id="process">
          <div className="section-heading split">
            <div>
              <span className="kicker">Process Flow</span>
              <h2>Three custom SVG diagrams for process, architecture, and AI delivery.</h2>
            </div>
            <p>
              Big animated visuals designed for the portfolio, not pasted from a template: document processing,
              full-stack architecture, and AI-assisted development workflow.
            </p>
          </div>

          <ProcessFlow />
        </section>

        <section className="section-block" id="expertise">
          <div className="section-heading split">
            <div>
              <span className="kicker">Expertise</span>
              <h2>Core engineering strengths</h2>
            </div>
            <p>
              Strongest fit for .NET business applications, React dashboards, SQL-heavy workflows, API integrations, and
              AI-assisted delivery.
            </p>
          </div>

          <div className="expertise-grid">
            {expertise.map((item) => (
              <article className="expertise-card" key={item.title}>
                <span>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="work">
          <div className="section-heading split">
            <div>
              <span className="kicker">Selected Work</span>
              <h2>Project case studies</h2>
            </div>
            <p>
              Each project is separated by responsibility, stack, and business value so HR, clients, and technical teams
              can scan it quickly.
            </p>
          </div>

          <div className="case-list">
            {projects.map((project) => (
              <ProjectCase key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="section-block" id="services">
          <div className="section-heading split">
            <div>
              <span className="kicker">Services</span>
              <h2>Work I can support</h2>
            </div>
            <p>Useful for freelance clients, startups, and companies that need delivery support on existing systems.</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <div key={service}>
                <CheckCircle2 size={19} />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="ai-section" id="ai">
          <div className="ai-copy">
            <span className="kicker">AI Workflow</span>
            <h2>AI tools are used as a delivery accelerator, not as blind copy-paste.</h2>
            <p>
              I use AI for requirement breakdown, architecture ideas, code scaffolding, SQL troubleshooting, debugging,
              documentation, test ideas, and refactoring. Final implementation is still reviewed, adjusted, and validated
              manually.
            </p>
          </div>

          <div className="ai-groups">
            {aiGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <div className="tool-list">
                  {group.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block" id="experience">
          <div className="section-heading">
            <span className="kicker">Experience</span>
            <h2>Professional journey</h2>
          </div>

          <div className="timeline">
            {experience.map(([date, role, company]) => (
              <article key={`${date}-${role}`}>
                <span>{date}</span>
                <h3>{role}</h3>
                <p>{company}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <span className="kicker">Contact</span>
            <h2>Need a developer for .NET, React, APIs, dashboards, reports, or freelance web work?</h2>
            <p>No contact form. Direct WhatsApp only, so discussion starts fast and simple.</p>
          </div>
          <a className="primary-btn" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
            Message on WhatsApp
          </a>
        </section>
      </main>

      <footer>
        <span>Krupal Vaishnav</span>
        <a href="https://linkedin.com/in/krupal-vaishnav" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={resumePath} download>
          Resume
        </a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </footer>

      <ChatBot />
    </div>
  );
}
