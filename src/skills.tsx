import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import {ArrowRight, BarChart3, CheckCircle2, FileText, GitBranch, Menu, ShieldCheck, Workflow, X} from "lucide-react";
import "./skills.css";

const skillGroups = [
  ["Healthcare Domain", ["US Healthcare RCM","Claims & Adjudication","Insurance AR","Denial Management","Medical Coding Workflows","Medicare / Medicaid / Commercial","Payer Policy & Reimbursement"]],
  ["Business Analysis", ["Requirements Elicitation","BRD / FRD","User Stories","Acceptance Criteria","Business Rules","Process Mapping","AS-IS / TO-BE","RTM / Traceability","Stakeholder Analysis","UAT Planning"]],
  ["Data & Analytics", ["SQL","Power BI","DAX / Measures Concepts","KPI Definition","Root Cause Analysis","Trend Analysis","Financial / Payment Analysis","Data Validation"]],
  ["Delivery & Collaboration", ["Jira","Scrum / Agile","Sprint Planning","Backlog & Prioritization","Cross-functional Collaboration","Quality Analysis","Defect / Issue Analysis","Corrective Action"]],
  ["Healthcare Technology", ["X12 837 / 835 Concepts","HL7 / FHIR Concepts","AI / Human-in-the-Loop","Workflow Automation Concepts","Epic Resolute","Healthcare Quality Applications"]],
  ["Technical Foundation", ["React","TypeScript","Vite","GitHub","Vercel","Excel","Visio","Synthetic Data / Non-PHI Design"]]
];

const evidence = [
  ["Requirements", "BRD, FRD, requirements catalogue, user stories, acceptance criteria"],
  ["Process", "AS-IS / TO-BE flows and end-to-end RCM lifecycle models"],
  ["Traceability", "Requirements Traceability Matrix linking business need to validation"],
  ["Analytics", "SQL analysis, Power BI measures, KPI and financial analysis"],
  ["Agile", "Jira backlog, Scrum sprint artifacts and UAT tracking"],
  ["Validation", "UAT plan, test cases, business-focused validation scenarios"]
];

function Header({onMenu}:{onMenu:()=>void}) {
 return <header className="site-header"><div className="container header-inner">
  <a className="brand" href="index.html"><span className="brand-mark">AS</span><span>Angappan Sabarimani</span></a>
  <nav className="desktop-nav"><a href="index.html">Home</a><a href="experience.html">Experience</a><a href="ryvora.html">RyVora</a><a href="carebridge.html">CareBridge</a><a className="active" href="skills.html">Skills</a><a href="resume.html">Resume</a><a href="contact.html">Contact</a></nav>
  <button className="menu-button" onClick={onMenu}><Menu size={22}/></button>
 </div></header>
}
function MobileMenu({onClose}:{onClose:()=>void}) {
 return <div className="mobile-menu"><button className="mobile-close" onClick={onClose}><X size={22}/></button><a href="index.html">Home</a><a href="experience.html">Experience</a><a href="ryvora.html">RyVora</a><a href="carebridge.html">CareBridge</a><a href="skills.html">Skills</a><a href="resume.html">Resume</a><a href="contact.html">Contact</a></div>
}
function SectionTitle({label,title,copy}:{label:string;title:string;copy?:string}) {
 return <div className="section-heading"><div><p className="eyebrow">{label}</p><h2>{title}</h2></div>{copy&&<p>{copy}</p>}</div>
}
function App(){
 const [open,setOpen]=useState(false);
 return <div><Header onMenu={()=>setOpen(true)}/>{open&&<MobileMenu onClose={()=>setOpen(false)}/>}
 <main>
  <section className="hero"><div className="container hero-grid"><div><p className="eyebrow">Skills & Professional Toolkit</p><h1>Healthcare domain depth backed by structured Business Analysis.</h1><p className="hero-copy">A practical toolkit built across US healthcare RCM operations, requirements, process analysis, analytics, Agile delivery, healthcare technology and solution design.</p><div className="pill-row"><span>9+ Years US Healthcare / RCM</span><span>Healthcare BA</span><span>RCM Analytics</span></div></div><div className="hero-card"><p className="eyebrow">Core BA flow</p><div className="flow">Problem <ArrowRight/> Requirements <ArrowRight/> Process <ArrowRight/> Data <ArrowRight/> UAT</div></div></div></section>

  <section className="section"><div className="container"><SectionTitle label="Capability map" title="Skills organized around the work" copy="The grouping is designed for recruiter and hiring-manager scanning: domain knowledge first, then BA execution, analytics, delivery and technology."/><div className="skill-grid">{skillGroups.map(([title,items])=><article key={title}><div className="skill-icon"><BarChart3 size={20}/></div><h3>{title}</h3><div className="chips">{(items as string[]).map(x=><span key={x}>{x}</span>)}</div></article>)}</div></div></section>

  <section className="section muted"><div className="container"><SectionTitle label="How the capabilities connect" title="From healthcare operations to technology-enabled analysis"/><div className="bridge"><div><span>01</span><strong>Healthcare Operations</strong><small>Claims · AR · denials · coding · quality</small></div><ArrowRight/><div><span>02</span><strong>Business Analysis</strong><small>Requirements · process · stakeholders · traceability</small></div><ArrowRight/><div><span>03</span><strong>Analytics</strong><small>SQL · Power BI · KPIs · root causes</small></div><ArrowRight/><div><span>04</span><strong>Solution Design</strong><small>Healthcare technology · interoperability · HITL</small></div></div></div></section>

  <section className="section dark"><div className="container"><SectionTitle label="Evidence" title="Skills are supported by portfolio artifacts" copy="The portfolio is designed to let a recruiter move from a skill statement to a concrete artifact rather than relying on a keyword list alone."/><div className="evidence-grid">{evidence.map(([a,b])=><article key={a}><CheckCircle2/><h3>{a}</h3><p>{b}</p></article>)}</div></div></section>

  <section className="section"><div className="container"><SectionTitle label="Project mapping" title="Where the skills are demonstrated"/><div className="project-map"><article><div className="project-top"><span>RYVORA</span><a href="ryvora.html">Case study <ArrowRight size={15}/></a></div><h3>Digital Transformation & Interoperability</h3><p>Requirements · solution design · RCM lifecycle · X12 837/835 · HL7/FHIR concepts · AI/HITL · validation</p></article><article><div className="project-top"><span>CAREBRIDGE</span><a href="carebridge.html">Case study <ArrowRight size={15}/></a></div><h3>Claims Analytics & Denial Management</h3><p>Requirements · process mapping · SQL · Power BI · Jira/Scrum · RTM · UAT · business insights</p></article></div></div></section>

  <section className="section muted"><div className="container two-col"><div><SectionTitle label="Working style" title="How I approach BA work"/><div className="principles"><div><Workflow/><strong>Start with the business problem</strong><span>Define the decision, workflow or operational gap before jumping to a solution.</span></div><div><GitBranch/><strong>Make requirements testable</strong><span>Connect business intent to functional behavior, acceptance criteria and validation.</span></div><div><BarChart3/><strong>Validate the numbers</strong><span>Use independent analysis and clear business definitions before presenting KPIs.</span></div><div><ShieldCheck/><strong>Keep boundaries explicit</strong><span>Separate implemented capability from future scope, especially for healthcare technology and AI.</span></div></div></div><div className="career-card"><p className="eyebrow">Professional positioning</p><h3>Healthcare Business Analyst</h3><p>US Healthcare · RCM · Claims · Denials · AR · Healthcare Analytics</p><div className="career-line"><span>Domain</span><b>9+ years</b></div><div className="career-line"><span>BA focus</span><b>Requirements → Analytics → UAT</b></div><div className="career-line"><span>Portfolio</span><b>RyVora + CareBridge</b></div></div></div></section>

  <section className="section"><div className="container next"><div><p className="eyebrow">Next step</p><h2>Want the detailed work history?</h2><p>Review the roles that built the healthcare and RCM foundation behind these capabilities.</p></div><a className="button primary" href="experience.html">View Experience <ArrowRight size={17}/></a></div></section>
 </main><footer className="site-footer"><div className="container footer-inner"><span>© 2026 Angappan Sabarimani</span><span>Healthcare Business Analyst · US Healthcare · RCM · Analytics</span></div></footer></div>
}
createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>);
