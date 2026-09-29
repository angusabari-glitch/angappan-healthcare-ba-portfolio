import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ArrowRight, BarChart3, BriefcaseBusiness, ClipboardCheck, Database, FileText, GitBranch, Layers3, Menu, X } from "lucide-react";
import "./index.css";

const experience = [
  ["Senior Analyst", "R1 RCM", "Dec 2025 – Present", "US Healthcare RCM · Medical Coding · Healthcare Analytics"],
  ["Senior Specialist — Insurance AR", "Business Integrity Services", "Mar 2022 – Sep 2025", "US Healthcare RCM · Denial Management · Medical Coding"],
  ["Senior Analyst — Quality Assurance", "HCLTech", "Feb 2022 – Mar 2022", "Anthem BCBS · US Medical Claims Processing"],
  ["Senior Executive — Accounts Receivable", "Omega Healthcare", "Jan 2021 – Jan 2022", "US Healthcare RCM · Insurance AR · Claims Resolution"],
  ["Executive — Accounts Receivable", "eCare India Pvt. Ltd.", "Aug 2019 – Dec 2020", "US Healthcare Claims · Insurance Follow-Up · Reimbursement"],
  ["Digital Game Design Faculty", "Imageminds", "Apr 2017 – May 2019", "Technical Training · Project Guidance · Evaluation"]
];

const capabilities = [
  [FileText, "Requirements", "BRD / FRD, user stories, acceptance criteria and traceability."],
  [GitBranch, "Process Analysis", "AS-IS / TO-BE mapping, workflow analysis and root cause."],
  [Database, "Data & SQL", "Healthcare data analysis, business rules and validation."],
  [BarChart3, "Analytics", "Power BI, KPI design, denial and financial analysis."],
  [ClipboardCheck, "UAT", "Business-focused scenarios, validation and defect thinking."],
  [Layers3, "Agile / Delivery", "Jira, Scrum, stakeholder collaboration and solution design."]
];

function Header({ onMenu }: { onMenu: () => void }) {
  return <header className="nav-wrap"><nav className="nav container">
    <a className="brand" href="index.html"><span className="brand-mark">AS</span><span>Angappan Sabarimani</span></a>
    <button className="menu-button" onClick={onMenu} aria-label="Toggle navigation"><Menu size={22}/></button>
    <div className="nav-links">
      <a href="index.html">Home</a>
      <a href="experience.html">Experience</a>
      <a href="ryvora.html">RyVora</a>
      <a href="carebridge.html">CareBridge</a>
      <a href="skills.html">Skills</a>
      <a href="resume.html">Resume</a>
      <a href="contact.html">Contact</a>
    </div>
  </nav></header>;
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return <div className="mobile-menu">
    <button className="mobile-close" onClick={onClose}><X size={22}/></button>
    <a href="index.html">Home</a><a href="experience.html">Experience</a><a href="ryvora.html">RyVora</a>
    <a href="carebridge.html">CareBridge</a><a href="skills.html">Skills</a><a href="resume.html">Resume</a><a href="contact.html">Contact</a>
  </div>;
}

function App() {
  const [open, setOpen] = useState(false);
  return <div className="site">
    <Header onMenu={() => setOpen(!open)}/>{open && <MobileMenu onClose={() => setOpen(false)}/>} 
    <main id="top">
      <section className="hero"><div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Healthcare Business Analyst</p>
          <h1>US Healthcare <span>·</span> RCM <span>·</span> Healthcare Analytics</h1>
          <p className="hero-text">9+ years of US healthcare experience across revenue cycle management, claims, denials, AR, medical coding and healthcare operations — extended through structured Business Analysis and healthcare analytics.</p>
          <div className="hero-actions"><a className="button primary" href="#projects">View Projects <ArrowRight size={17}/></a><a className="button secondary" href="resume.html">View Resume</a></div>
          <div className="hero-proof"><div><strong>9+</strong><span>Years</span></div><div><strong>US</strong><span>Healthcare</span></div><div><strong>RCM</strong><span>Domain</span></div><div><strong>BA</strong><span>Capability</span></div></div>
        </div>
        <div className="hero-panel"><div className="panel-label">CAREER THROUGH-LINE</div>
          <div className="flow">{['Healthcare Operations','Claims & AR','Denial & Root Cause','Quality & Process Improvement','Healthcare Analytics'].map((x,i)=><span key={x}>{x}{i<4&&<i>↓</i>}</span>)}<strong>Business Analysis</strong></div>
          <div className="panel-note">Domain experience translated into requirements, process analysis, data validation, analytics, UAT and healthcare technology solution design.</div>
        </div>
      </div></section>

      <section className="section summary"><div className="container narrow"><p className="section-kicker">Professional Summary</p><h2>Healthcare domain knowledge backed by practical Business Analysis capability.</h2><p>My experience spans US healthcare claims, insurance AR, denial management, medical coding, quality analysis and reimbursement workflows. I apply that domain knowledge to structured requirements, process mapping, root-cause analysis, SQL, Power BI, Agile/Scrum and UAT.</p></div></section>

      <section className="section light" id="experience"><div className="container"><div className="section-head"><div><p className="section-kicker">Career at a Glance</p><h2>Professional Experience</h2></div><span className="section-note">US Healthcare · RCM · Operations · Quality</span></div>
        <div className="experience-grid">{experience.map(([role,company,period,focus])=><article className="experience-card" key={company}><div className="card-icon"><BriefcaseBusiness size={19}/></div><div><p className="period">{period}</p><h3>{role}</h3><h4>{company}</h4><p>{focus}</p></div></article>)}</div>
        <a className="text-link" href="experience.html">View full experience <ArrowRight size={16}/></a>
      </div></section>

      <section className="section" id="capabilities"><div className="container"><div className="section-head"><div><p className="section-kicker">Business Analysis Capability</p><h2>From business problem to validated solution.</h2></div></div>
        <div className="capability-grid">{capabilities.map(([Icon,title,text])=><article className="capability-card" key={title}><Icon size={22}/><h3>{title}</h3><p>{text}</p></article>)}</div>
        <a className="text-link" href="skills.html">Explore skills <ArrowRight size={16}/></a>
      </div></section>

      <section className="section light" id="projects"><div className="container"><div className="section-head"><div><p className="section-kicker">Featured Healthcare BA Projects</p><h2>Evidence of analysis, design and delivery thinking.</h2></div></div>
        <div className="project-grid">
          <article className="project-card featured"><div className="project-top"><span>01</span><span>Live Application</span></div><p className="project-type">US Healthcare · RCM · Interoperability</p><h3>RyVora</h3><p>US Healthcare RCM Digital Transformation & Interoperability Platform — a simulated, synthetic-data portfolio application covering claims, denials, payments, AR, exceptions, analytics, automation and AI/HITL workflows.</p><div className="tags"><span>React</span><span>TypeScript</span><span>X12 837/835</span><span>HL7/FHIR Concepts</span></div><div className="button-row"><a className="button dark" href="ryvora.html">View Case Study <ArrowRight size={16}/></a><a className="text-link" href="https://ry-vora.vercel.app" target="_blank" rel="noreferrer">Live Demo <ArrowRight size={16}/></a></div></article>
          <article className="project-card"><div className="project-top"><span>02</span><span>Analytics Case Study</span></div><p className="project-type">Claims Analytics · Denial Management</p><h3>CareBridge</h3><p>Healthcare Claims Analytics & Denial Management — a simulated BA lifecycle connecting business problems, requirements, process analysis, SQL, Power BI, Jira/Scrum, traceability, UAT and business insights.</p><div className="tags"><span>SQL</span><span>Power BI</span><span>Jira</span><span>UAT</span></div><a className="text-link" href="carebridge.html">View Case Study <ArrowRight size={16}/></a></article>
        </div>
      </div></section>

      <section className="section" id="evidence"><div className="container"><div className="section-head"><div><p className="section-kicker">Evidence</p><h2>Artifacts recruiters can inspect.</h2></div><p className="section-note">Selected evidence first; detailed artifacts follow on project pages.</p></div><div className="evidence-row">{['BRD / FRD','Process Flows','User Stories','RTM','SQL','Power BI','Jira / Scrum','UAT'].map(x=><span key={x}>{x}</span>)}</div></div></section>

      <section className="contact-section" id="contact"><div className="container contact-grid"><div><p className="section-kicker">Next Step</p><h2>Let’s connect around healthcare business analysis, RCM and analytics.</h2></div><div className="contact-actions"><a className="button primary" href="contact.html">Contact Me <ArrowRight size={17}/></a><a className="button secondary" href="resume.html">Resume</a></div></div></section>
    </main>
    <footer><div className="container footer-inner"><span>© 2026 Angappan Sabarimani</span><span>Healthcare Business Analyst · US Healthcare · RCM</span></div></footer>
  </div>
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
