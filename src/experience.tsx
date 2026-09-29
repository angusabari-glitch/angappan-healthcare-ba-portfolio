import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Menu, Workflow, X } from "lucide-react";
import "./index.css";

const roles = [
  {
    role: "Senior Analyst — R1 RCM",
    period: "Dec 2025 – Present · Chennai, India",
    area: "US Healthcare RCM · Medical Coding · Healthcare Analytics",
    summary: "Analyze coding trends, quality metrics and operational reports to identify performance patterns, coding discrepancies and workflow improvement opportunities across US healthcare operations.",
    bullets: [
      "Analyze clinical documentation and coding workflows to identify process gaps and support claims accuracy and reimbursement outcomes.",
      "Perform root-cause analysis on coding discrepancies and claim-related issues, documenting workflow gaps and corrective actions.",
      "Collaborate with Quality, Operations, managers and cross-functional teams to communicate issues and address workflow gaps.",
      "Support healthcare quality and audit workflows using an AI-enabled healthcare application for chart selection and coding/quality review.",
      "Interpret payer policies and regulatory guidance across Medicare, Medicaid and Commercial workflows using Epic Resolute for documentation and coding review."
    ],
    bridge: "Healthcare Operations → Quality Analysis → Root Cause → Process Improvement → Data-Driven Decisions"
  },
  {
    role: "Senior Specialist — Insurance AR | Business Integrity Services",
    period: "Mar 2022 – Sep 2025 · Chennai, India",
    area: "US Healthcare RCM · Denial Management · Medical Coding",
    summary: "Managed US healthcare insurance AR across Medicare, Medicaid and Commercial payers, with a focus on denial analysis, reimbursement, account prioritization and process improvement.",
    bullets: [
      "Managed a portfolio of 500+ medical claims across Medicare, Medicaid and Commercial payers.",
      "Analyzed denial trends and performed root-cause analysis to identify recurring claim issues and corrective actions.",
      "Analyzed the end-to-end claims lifecycle, reimbursement issues, process gaps and workflow inefficiencies.",
      "Evaluated AR aging and prioritized high-value accounts for follow-up.",
      "Collaborated with AR, Medical Coding, Quality Assurance and cross-functional teams to resolve claim issues and improve workflows.",
      "Resume documentation reports a 17% increase and sustained provider payment ratio over four consecutive quarters through denial analysis, payer collaboration and reimbursement optimization."
    ],
    bridge: "Claims → Denials → Root Cause → AR Prioritization → Corrective Action"
  },
  {
    role: "Senior Analyst — Quality Assurance | HCLTech",
    period: "Feb 2022 – Mar 2022 · Chennai, India",
    area: "Anthem BCBS · US Medical Claims Processing",
    summary: "Performed quality analysis of US medical claims, identifying recurring processing defects and supporting corrective actions across Operations.",
    bullets: [
      "Performed quality audits and validated medical-claim processing accuracy.",
      "Identified recurring defects and documented quality findings.",
      "Analyzed quality trends and collaborated with Operations on corrective actions.",
      "Supported process compliance, SLA adherence and first-pass processing accuracy."
    ],
    bridge: "Quality Data → Defect Analysis → Root Cause → Corrective Action"
  },
  {
    role: "Senior Executive — Accounts Receivable | Omega Healthcare",
    period: "Jan 2021 – Jan 2022 · Chennai, India",
    area: "US Healthcare RCM · Insurance AR · Claims Resolution",
    summary: "Managed insurance AR follow-up and reimbursement workflows across Medicare, Medicaid and Commercial claims.",
    bullets: [
      "Managed end-to-end insurance AR follow-up supporting reimbursement and AR-reduction objectives.",
      "Analyzed denials, underpayments, rejections, EOBs, ERAs, claim history, contractual adjustments and payer policies.",
      "Resolved reimbursement issues through payer communication, appeals, corrected claims and reconsiderations.",
      "Performed payment-variance and claim-status analysis.",
      "Collaborated with Medical Coding, Billing, provider offices and cross-functional teams to resolve documentation, coding, billing and adjudication issues.",
      "Maintained claim documentation according to applicable healthcare, payer and quality requirements."
    ],
    bridge: "Claim History → Issue Analysis → Resolution Strategy → Stakeholder Coordination"
  },
  {
    role: "Executive — Accounts Receivable | eCare India Pvt. Ltd.",
    period: "Aug 2019 – Dec 2020 · Chennai, India",
    area: "US Healthcare Claims · Insurance Follow-Up · Reimbursement",
    summary: "Supported end-to-end claims management and insurance follow-up across Medicare, Medicaid and Commercial payers.",
    bullets: [
      "Conducted eligibility and benefits validation and claim-status monitoring.",
      "Investigated denials and rejections and analyzed EOBs.",
      "Reviewed payment variances and reimbursement issues.",
      "Worked with insurance payers to resolve discrepancies and submit corrections.",
      "Supported reimbursement turnaround while maintaining compliant claim documentation."
    ],
    bridge: "Claims → Validation → Denial Investigation → Reimbursement"
  },
  {
    role: "Digital Game Design Faculty | Imageminds",
    period: "Apr 2017 – May 2019",
    area: "Technical Training · Programming · Project Guidance",
    summary: "Delivered technical training and project guidance across digital game design and programming.",
    bullets: [
      "Delivered lectures and hands-on technical training.",
      "Supervised student projects.",
      "Provided programming and technical guidance.",
      "Supported performance evaluation and curriculum development."
    ],
    bridge: "Training → Technical Communication → Project Guidance → Evaluation"
  }
];

function Header({ onMenu }: { onMenu: () => void }) {
  return <header className="site-header"><div className="container header-inner">
    <a className="brand" href="index.html"><span className="brand-mark">AS</span><span>Angappan Sabarimani</span></a>
    <nav className="desktop-nav">
      <a href="index.html">Home</a>
      <a className="active" href="experience.html">Experience</a>
      <a href="ryvora.html">RyVora</a>
      <a href="carebridge.html">CareBridge</a>
      <a href="skills.html">Skills</a>
      <a href="resume.html">Resume</a>
      <a href="contact.html">Contact</a>
    </nav>
    <button className="menu-button" onClick={onMenu} aria-label="Open navigation"><Menu size={22}/></button>
  </div></header>;
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return <div className="mobile-menu">
    <button className="mobile-close" onClick={onClose} aria-label="Close navigation"><X size={22}/></button>
    <a href="index.html">Home</a><a href="experience.html">Experience</a>
    <a href="ryvora.html">RyVora</a><a href="carebridge.html">CareBridge</a><a href="skills.html">Skills</a><a href="resume.html">Resume</a><a href="contact.html">Contact</a>
  </div>;
}

function App() {
  const [open, setOpen] = useState(false);
  return <div>
    <Header onMenu={() => setOpen(true)}/>{open && <MobileMenu onClose={() => setOpen(false)}/>} 
    <main>
      <section className="experience-hero">
        <div className="container experience-hero-grid">
          <div>
            <p className="eyebrow">Professional experience</p>
            <h1>US Healthcare experience with a Business Analysis mindset.</h1>
            <p className="hero-copy">My BA capability is built on hands-on experience across claims, insurance AR, denials, medical coding, quality and healthcare analytics — extended through structured requirements, process, data and solution-design practices.</p>
            <div className="hero-actions">
              <a className="button primary" href="index.html#projects">View projects <ArrowRight size={17}/></a>
              <a className="button secondary" href="skills.html">Explore skills <ArrowRight size={17}/></a>
            </div>
          </div>
          <div className="experience-stat-card">
            <div><strong>9+</strong><span>years across healthcare operations and RCM</span></div>
            <div><strong>US</strong><span>Medicare, Medicaid and Commercial workflows</span></div>
            <div><strong>BA</strong><span>requirements, process, data, analytics and UAT</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Career history</p><h2>From healthcare operations to structured business analysis</h2></div>
            <p>Each role added another layer of domain, analytical, quality, stakeholder and process-improvement capability that now supports my Healthcare BA positioning.</p>
          </div>
          <div className="experience-timeline">
            {roles.map((item, index) => <article className="experience-card" key={item.role}>
              <div className="experience-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="experience-content">
                <div className="experience-topline"><p className="eyebrow">{item.period}</p><span className="experience-icon"><BriefcaseBusiness size={18}/></span></div>
                <h3>{item.role}</h3>
                <p className="experience-area">{item.area}</p>
                <p className="experience-summary">{item.summary}</p>
                <ul>{item.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={16}/><span>{bullet}</span></li>)}</ul>
                <div className="ba-bridge"><Workflow size={17}/><div><strong>BA connection</strong><span>{item.bridge}</span></div></div>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Experience-to-BA bridge</p><h2>How the healthcare foundation connects to Business Analysis</h2></div>
          </div>
          <div className="ba-path">
            {[
              ["01", "US Healthcare Operations", "Claims, coding, AR and payer workflows"],
              ["02", "Claims & Insurance AR", "Denials, reimbursement, aging and follow-up"],
              ["03", "Root-Cause & Quality", "Defect analysis, trends and corrective action"],
              ["04", "Healthcare Analytics", "SQL, KPI analysis and Power BI decision support"],
              ["05", "Business Analysis", "Requirements, process, traceability, UAT and solution design"],
              ["06", "Healthcare Technology", "Digital transformation, interoperability and workflow concepts"]
            ].map(([n, title, copy]) => <div className="ba-path-card" key={n}><span>{n}</span><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <p className="body-copy">My Business Analysis capability is not based only on portfolio exercises. It is grounded in real US healthcare and RCM workflows and extended through structured BA practices including requirements engineering, process mapping, user stories, traceability, SQL, Power BI, Agile/Scrum and UAT.</p>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Next evidence</p><h2>See how this experience becomes portfolio evidence</h2></div>
            <p>RyVora demonstrates digital-transformation and solution-design thinking. CareBridge demonstrates the analytics, requirements and UAT lifecycle.</p>
          </div>
          <div className="experience-next-grid">
            <a className="experience-next-card" href="ryvora.html"><span>Project 01</span><h3>RyVora</h3><p>US Healthcare RCM digital transformation, interoperability concepts and AI/HITL workflow design.</p><ArrowRight size={19}/></a>
            <a className="experience-next-card" href="carebridge.html"><span>Project 02</span><h3>CareBridge</h3><p>Healthcare claims analytics, denial management, SQL, Power BI, Agile and UAT.</p><ArrowRight size={19}/></a>
          </div>
        </div>
      </section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><span>Angappan Sabarimani · Healthcare Business Analyst</span><span>US Healthcare · RCM · Healthcare Analytics</span></div></footer>
  </div>;
}

createRoot(document.getElementById("root")!).render(<App />);
