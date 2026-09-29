import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, BarChart3, CheckCircle2, ChevronRight, Database,
  GitBranch, Layers3, Menu, Network, ShieldCheck, Workflow, X
} from "lucide-react";
import "./ryvora.css";

const modules = [
  ["Claims", "Claim lifecycle visibility and operational workflow context."],
  ["Denials", "Denial analysis, root-cause context and remediation workflow."],
  ["Payments", "Payment and 835-oriented workflow concepts."],
  ["AR Management", "A/R visibility, prioritization and exception handling."],
  ["Exceptions", "Operational exceptions and follow-up workflow."],
  ["Interoperability", "X12 837/835 and HL7/FHIR-oriented exchange concepts."],
  ["Analytics", "KPI, trend and operational decision-support views."],
  ["Automation", "Workflow opportunity, eligibility and control concepts."],
  ["AI / HITL", "Recommendation workflow with explicit human-review boundaries."]
];

const lifecycle = [
  "Claim",
  "837",
  "Denial",
  "AI Recommendation",
  "Human Review",
  "Payment",
  "835",
  "AR",
  "Exception",
  "Analytics / Automation"
];

const evidence = [
  ["Business Analysis", "BRD / FRD / user stories / acceptance criteria / process flows / traceability"],
  ["Solution Design", "RCM lifecycle / module architecture / service and business-rule concepts"],
  ["Interoperability", "X12 837/835 / HL7 / FHIR concepts and boundary definitions"],
  ["Governance", "AI/HITL controls / human review / workflow boundaries"],
  ["Validation", "Synthetic dataset checks / KPI reconciliation / regression / browser verification"],
  ["Technology", "React 19 / TypeScript / Vite / Vitest / Testing Library / Biome"]
];

function Header({ onMenu }: { onMenu: () => void }) {
  return <header className="site-header"><div className="container header-inner">
    <a className="brand" href="index.html"><span className="brand-mark">AS</span><span>Angappan Sabarimani</span></a>
    <nav className="desktop-nav">
      <a href="index.html">Home</a>
      <a href="experience.html">Experience</a>
      <a className="active" href="ryvora.html">RyVora</a>
      <a href="carebridge.html">CareBridge</a>
      <a href="skills.html">Skills</a><a href="resume.html">Resume</a><a href="contact.html">Contact</a>
    </nav>
    <button className="menu-button" onClick={onMenu}><Menu size={22}/></button>
  </div></header>;
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return <div className="mobile-menu">
    <button className="mobile-close" onClick={onClose}><X size={22}/></button>
    <a href="index.html">Home</a><a href="experience.html">Experience</a>
    <a className="active" href="ryvora.html">RyVora</a><a href="carebridge.html">CareBridge</a><a href="skills.html">Skills</a><a href="resume.html">Resume</a><a href="contact.html">Contact</a>
  </div>;
}

function SectionTitle({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return <div className="section-heading"><div><p className="eyebrow">{label}</p><h2>{title}</h2></div>{copy && <p>{copy}</p>}</div>;
}

function App() {
  const [open, setOpen] = useState(false);
  return <div>
    <Header onMenu={() => setOpen(true)}/>{open && <MobileMenu onClose={() => setOpen(false)}/>}
    <main>
      <section className="project-hero">
        <div className="container project-hero-grid">
          <div>
            <p className="eyebrow">Featured Healthcare BA Project</p>
            <h1>RyVora — US Healthcare RCM Digital Transformation & Interoperability Platform</h1>
            <p className="hero-copy">A simulated, synthetic-data healthcare solution concept designed to connect RCM workflows, interoperability concepts, analytics, automation opportunities and AI-assisted human-in-the-loop review.</p>
            <div className="tag-row">
              <span>Healthcare BA / Product & Solution Design</span><span>Nov 2025 – Sep 2026</span>
            </div>
            <div className="hero-actions">
              <a className="button primary" href="https://ry-vora.vercel.app" target="_blank" rel="noreferrer">Open live demo <ArrowRight size={17}/></a>
              <a className="button secondary" href="https://github.com/angusabari-glitch/RyVora" target="_blank" rel="noreferrer">View GitHub <ArrowRight size={17}/></a>
            </div>
          </div>
          <div className="hero-card">
            <p className="eyebrow">Project boundary</p>
            <div className="boundary-item"><ShieldCheck size={18}/><span>Simulated / portfolio application</span></div>
            <div className="boundary-item"><Database size={18}/><span>Synthetic / non-PHI dataset</span></div>
            <div className="boundary-item"><Network size={18}/><span>No live payer or FHIR connectivity</span></div>
            <div className="boundary-item"><Workflow size={18}/><span>AI recommendations are not autonomous decisions</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Business problem" title="From fragmented RCM workflows to a connected operating model" copy="RyVora is framed as a digital-transformation solution concept for connecting operational workflows that are often analyzed separately."/>
          <div className="problem-flow">
            <div>Claims & transactions</div><ChevronRight/><div>Denials & exceptions</div><ChevronRight/><div>Human review</div><ChevronRight/><div>Payments & AR</div><ChevronRight/><div>Analytics & improvement</div>
          </div>
          <p className="body-copy">The solution concept brings these stages into a common workflow model so that operational events can be traced across the claim lifecycle rather than treated as isolated screens or reports.</p>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <SectionTitle label="RCM lifecycle" title="One connected claim lifecycle" copy="The lifecycle is the backbone of the solution design and links operational activity with analytics and improvement opportunities."/>
          <div className="lifecycle">
            {lifecycle.map((x, i) => <React.Fragment key={x}><div className="lifecycle-step"><span>{String(i+1).padStart(2,"0")}</span>{x}</div>{i < lifecycle.length-1 && <ChevronRight className="life-arrow"/>}</React.Fragment>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Solution scope" title="Nine connected capability areas"/>
          <div className="module-grid">
            {modules.map(([title, copy], i) => <article className="module-card" key={title}>
              <div className="module-number">{String(i+1).padStart(2,"0")}</div><h3>{title}</h3><p>{copy}</p>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionTitle label="Business Analysis contribution" title="Turning RCM knowledge into structured solution design" copy="The portfolio demonstrates BA work across discovery, requirements, process design, solution concepts and validation."/>
          <div className="ba-grid">
            <article><FileIcon/><h3>Requirements</h3><p>Translated stakeholder and workflow needs into requirements, business rules, user stories and acceptance criteria.</p></article>
            <article><FileIcon/><h3>Process & workflow</h3><p>Connected claim, denial, payment, AR and exception stages into an end-to-end lifecycle model.</p></article>
            <article><FileIcon/><h3>Traceability</h3><p>Linked business intent to functional behavior and solution components so the implementation could be validated against the intended workflow.</p></article>
            <article><FileIcon/><h3>Governance</h3><p>Defined explicit boundaries for AI recommendations, human review and workflow automation opportunities.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Interoperability" title="Conceptual healthcare transaction and data exchange" copy="The project distinguishes administrative transactions from healthcare data-exchange concepts instead of presenting them as interchangeable technologies."/>
          <div className="interop-grid">
            <div className="interop-card"><span className="interop-label">X12</span><h3>837 / 835</h3><p>837 concepts are used for healthcare claim submission workflows; 835 concepts represent electronic remittance/payment workflows.</p></div>
            <div className="interop-card"><span className="interop-label">HL7 / FHIR</span><h3>Healthcare data exchange concepts</h3><p>HL7/FHIR are represented as interoperability concepts within the solution boundary, not as live production APIs.</p></div>
            <div className="interop-card"><span className="interop-label">Boundary</span><h3>No live connectivity</h3><p>The portfolio does not claim live payer connectivity, production interfaces or real-time external data exchange.</p></div>
          </div>
        </div>
      </section>

      <section className="section muted-section">
        <div className="container">
          <SectionTitle label="AI + human-in-the-loop" title="Recommendation first, human decision always" copy="The AI workflow is intentionally bounded so that a recommendation is treated as workflow support rather than an autonomous financial or clinical decision."/>
          <div className="hitl-flow">
            <div><strong>Denial</strong><small>Structured event enters workflow</small></div><ChevronRight/>
            <div><strong>Recommendation</strong><small>Suggested next action / rationale</small></div><ChevronRight/>
            <div className="human-step"><strong>Human Review</strong><small>Reviewer evaluates and controls disposition</small></div><ChevronRight/>
            <div><strong>Workflow</strong><small>Follow-up / exception / analytics path</small></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Architecture" title="A portfolio application with explicit boundaries" />
          <div className="architecture">
            {["Approved synthetic dataset","Dataset validation","Vite build-time projection","Typed data modules","Services","Business selectors / calculations","React pages"].map((x,i) =>
              <div className="arch-node" key={x}><span>{String(i+1).padStart(2,"0")}</span>{x}</div>
            )}
          </div>
          <p className="body-copy">Vite is used as development and build tooling. It is not presented as a healthcare capability or integration layer.</p>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionTitle label="Validation & evidence" title="Validated against the portfolio boundary" />
          <div className="evidence-grid">
            {evidence.map(([title, copy]) => <div className="evidence-row" key={title}><CheckCircle2 size={19}/><div><strong>{title}</strong><p>{copy}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Synthetic dataset" title="Structured healthcare workflow data" copy="The approved v1.2 dataset provides enough linked records to demonstrate cross-module relationships without using real patient or production data."/>
          <div className="data-grid">
            {[
              ["Claims","1,000"],["837 Transactions","1,000"],["Denials","290"],["AI Recommendations","290"],
              ["Human Reviews","180"],["835 Payments","520"],["AR Records","1,000"],["Exceptions","180"],["Audit Events","3,060"]
            ].map(([k,v]) => <div className="data-card" key={k}><strong>{v}</strong><span>{k}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="next-project">
            <div><p className="eyebrow">Next case study</p><h2>CareBridge — Healthcare Claims Analytics & Denial Management</h2><p>Requirements → SQL → Power BI → UAT → business insights.</p></div>
            <a className="button primary" href="carebridge.html">View CareBridge <ArrowRight size={17}/></a>
          </div>
        </div>
      </section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><span>© 2026 Angappan Sabarimani</span><span>Healthcare Business Analyst · US Healthcare · RCM · Analytics</span></div></footer>
  </div>;
}

function FileIcon() { return <div className="feature-icon"><Layers3 size={21}/></div>; }

createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>);
