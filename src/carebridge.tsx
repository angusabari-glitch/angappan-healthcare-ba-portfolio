import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, BarChart3, CheckCircle2, Database, FileText, GitBranch,
  Menu, Search, ShieldCheck, Users, Workflow, X
} from "lucide-react";
import "./carebridge.css";

const lifecycle = [
  ["Business problem", "Fragmented manual reporting made denial trends, financial exposure, root causes and follow-up priorities difficult to identify consistently."],
  ["Requirements", "Business requirements, functional requirements, business rules, user stories and measurable acceptance criteria."],
  ["Process analysis", "AS-IS / TO-BE mapping to identify manual effort, fragmented information, lagging visibility and reactive follow-up."],
  ["Traceability", "RTM connecting business requirements → functional requirements → stories → acceptance criteria → solution → UAT."],
  ["Agile delivery", "Jira backlog and three Scrum sprints covering requirements, data/BI work and UAT/insights."],
  ["Analytics", "SQL analysis and validation followed by Power BI business-facing decision-support views."],
  ["UAT preparation", "15 business-focused scenarios covering KPIs, denials, financial measures, filters, trends and usability."],
  ["Insights", "Denial concentration, financial exposure, supported segmentation, root causes, trends and follow-up priorities."],
];

const requirements = [
  ["Claims visibility", "Total Claims + Claims by Status"],
  ["Denial monitoring", "Denied Claims + Denial Rate"],
  ["Denial root causes", "RootCauseCategory analysis"],
  ["Denial reasons", "ReasonCode analysis"],
  ["Financial exposure", "Denied Amount"],
  ["Payment performance", "Billed / Allowed / Paid"],
  ["Payment variance", "Payment Variance"],
  ["Follow-up workload", "Follow-Up Claims"],
  ["Trend analysis", "Date-of-Service trends"],
  ["Segmentation", "Insurance / Provider / Status / Date filters"],
];

const stakeholders = [
  ["RCM Leadership", "Executive visibility and prioritization"],
  ["RCM / AR Manager", "Operational performance and follow-up"],
  ["AR / Billing Analysts", "Claim-level investigation and workload"],
  ["Denial Management", "Denial reasons and root-cause interpretation"],
  ["Finance", "Financial definitions and reconciliation"],
  ["BI / Data Team", "Data and reporting implementation"],
];

const uatAreas = [
  "Executive KPIs",
  "Claim status",
  "Denial metrics",
  "Root causes",
  "Financial impact",
  "Billed / Allowed / Paid",
  "Payment Variance",
  "Insurance / Provider / Date filters",
  "Combined filters",
  "Trends",
  "Usability"
];

function Header({ onMenu }: { onMenu: () => void }) {
  return <header className="site-header"><div className="container header-inner">
    <a className="brand" href="index.html"><span className="brand-mark">AS</span><span>Angappan Sabarimani</span></a>
    <nav className="desktop-nav">
      <a href="index.html">Home</a><a href="experience.html">Experience</a>
      <a href="ryvora.html">RyVora</a><a className="active" href="carebridge.html">CareBridge</a><a href="skills.html">Skills</a><a href="resume.html">Resume</a><a href="contact.html">Contact</a>
    </nav>
    <button className="menu-button" onClick={onMenu}><Menu size={22}/></button>
  </div></header>;
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return <div className="mobile-menu"><button className="mobile-close" onClick={onClose}><X size={22}/></button>
    <a href="index.html">Home</a><a href="experience.html">Experience</a><a href="ryvora.html">RyVora</a><a href="carebridge.html">CareBridge</a><a href="skills.html">Skills</a><a href="resume.html">Resume</a><a href="contact.html">Contact</a>
  </div>;
}

function SectionTitle({label,title,copy}:{label:string;title:string;copy?:string}) {
  return <div className="section-heading"><div><p className="eyebrow">{label}</p><h2>{title}</h2></div>{copy && <p>{copy}</p>}</div>;
}

function App() {
  const [open,setOpen]=useState(false);
  return <div>
    <Header onMenu={()=>setOpen(true)}/>{open&&<MobileMenu onClose={()=>setOpen(false)}/>}
    <main>
      <section className="project-hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Healthcare Business Analysis Case Study</p>
            <h1>CareBridge — Healthcare Claims Analytics & Denial Management</h1>
            <p className="hero-copy">An independent healthcare BA portfolio project that takes a simulated claims problem through requirements, process analysis, Agile delivery, SQL, Power BI, UAT preparation and business recommendations.</p>
            <div className="tag-row"><span>Apr 2026 – Aug 2026</span><span>Independent Portfolio Project</span><span>~1,000 simulated claims</span></div>
            <div className="tool-row"><span>SQL</span><span>Power BI</span><span>Excel</span><span>Jira</span><span>Visio</span></div>
          </div>
          <div className="hero-card">
            <p className="eyebrow">At a glance</p>
            <div className="fact"><strong>3</strong><span>Scrum sprints</span></div>
            <div className="fact"><strong>15</strong><span>UAT scenarios designed</span></div>
            <div className="fact"><strong>1</strong><span>claim-level record grain</span></div>
            <div className="fact"><strong>3</strong><span>implemented Power BI report pages</span></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Business problem" title="From manual reporting to decision-support analytics" copy="The simulated organization relied heavily on manually prepared Excel reports and fragmented operational information."/>
          <div className="problem-strip">
            {["Claims / Billing / AR information","Excel consolidation","Manual cleaning & reconciliation","Periodic reporting","Management review","Manual follow-up"].map((x,i)=><React.Fragment key={x}><div><span>{String(i+1).padStart(2,"0")}</span>{x}</div>{i<5&&<ArrowRight/>}</React.Fragment>)}
          </div>
          <div className="problem-callout"><Search size={20}/><p><strong>Business need:</strong> improve visibility into claim outcomes, denial patterns, financial exposure, root causes and follow-up priorities without treating the dashboard as a replacement for operational review.</p></div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <SectionTitle label="BA lifecycle" title="End-to-end Business Analysis" copy="The project follows a defensible sequence from business problem through recommendations, with traceability connecting the stages."/>
          <div className="ba-lifecycle">{lifecycle.map(([t,c],i)=><article key={t}><div className="step-num">{String(i+1).padStart(2,"0")}</div><h3>{t}</h3><p>{c}</p></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Process analysis" title="AS-IS → TO-BE" />
          <div className="process-grid">
            <div className="process-card asis"><div className="process-label">AS-IS</div><h3>Manual reporting flow</h3><p>Claims/billing/AR information → operational extracts → Excel consolidation → manual cleaning → periodic reporting → management review → manual follow-up.</p><div className="pain-points"><span>Manual effort</span><span>Fragmented information</span><span>Lagging visibility</span><span>Reactive follow-up</span></div></div>
            <div className="process-arrow"><ArrowRight size={28}/></div>
            <div className="process-card tobe"><div className="process-label">TO-BE</div><h3>Analytics-supported workflow</h3><p>Claims/denial data → validate & standardize → monitor KPIs → prioritize impact → analyze root causes → corrective action → monitor outcomes.</p><div className="pain-points"><span>Standardized measures</span><span>Impact prioritization</span><span>Root-cause visibility</span><span>Continuous improvement</span></div></div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionTitle label="Requirements → solution" title="Business need translated into measurable behavior" copy="A representative requirement demonstrates how the project connects business intent to dashboard behavior and validation."/>
          <div className="requirement-card">
            <div><span className="req-label">Business requirement</span><h3>REQ-001</h3><p>Provide visibility into total claim volume and distribution across approved claim-status categories.</p></div>
            <ArrowRight/>
            <div><span className="req-label">Functional requirement</span><h3>FR-001</h3><p>Display total claim volume and a breakdown by approved ClaimStatus values, including filtering/drill-down behavior.</p></div>
            <ArrowRight/>
            <div><span className="req-label">User story</span><h3>RCM Leader</h3><p>“I want to see total claims and status distribution so that I can understand workload and identify bottlenecks.”</p></div>
            <ArrowRight/>
            <div><span className="req-label">Acceptance criterion</span><h3>Testable</h3><p>Given a dataset containing 1,000 claims, when the dashboard loads, Total Claims should display 1,000.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Power BI" title="Three implemented analytics views" copy="The implemented PBIX contains three report pages organized around the questions: What is happening? Why is it happening? What is the financial impact?"/>
          <div className="dashboard-grid">
            <article className="dashboard-card"><div className="dash-head"><BarChart3/><span>01</span></div><p className="eyebrow">Executive Claims Overview</p><h3>RCM KPI and financial visibility</h3><p>Consolidates claims volume, status, denial performance and Billed / Allowed / Paid measures with insurance, provider and date filtering.</p><div className="mini-dashboard"><div><b>1K</b><small>Total Claims</small></div><div><b>32.80%</b><small>Denial Rate</small></div><div><b>$201K</b><small>Total Paid</small></div></div></article>
            <article className="dashboard-card"><div className="dash-head"><Search/><span>02</span></div><p className="eyebrow">Denial Analytics</p><h3>Root cause and financial exposure</h3><p>Analyzes denial volume by root-cause category and denial reason while connecting patterns to denied financial exposure.</p><div className="bar-list">{[["Billing Error",89],["Payer Policy",73],["Authorization",48],["Eligibility",41],["Medical Necessity",40]].map(([x,v])=><div key={x}><span>{x}</span><i style={{width:`${Number(v)/89*100}%`}}></i><b>{v}</b></div>)}</div></article>
            <article className="dashboard-card"><div className="dash-head"><BarChart3/><span>03</span></div><p className="eyebrow">Financial & Payment Analysis</p><h3>Billed, Allowed, Paid and variance</h3><p>Compares financial measures across insurance types and analyzes payment variance for financial-impact visibility.</p><div className="financial-row"><div><b>$297K</b><small>Billed</small></div><div><b>$223K</b><small>Allowed</small></div><div><b>$201K</b><small>Paid</small></div><div><b>$22K</b><small>Variance</small></div></div></article>
          </div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <SectionTitle label="Requirements coverage" title="Business needs mapped to analytics" />
          <div className="coverage"><div className="coverage-head"><span>Business need</span><span>Analytical solution</span></div>{requirements.map(([a,b])=><div className="coverage-row" key={a}><span>{a}</span><strong>{b}</strong></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <SectionTitle label="Stakeholders" title="Designed around decisions, not just reports" />
            <div className="stakeholders">{stakeholders.map(([a,b])=><div key={a}><Users size={17}/><div><strong>{a}</strong><span>{b}</span></div></div>)}</div>
          </div>
          <div>
            <SectionTitle label="Data & business rules" title="Common definitions before visualization" />
            <div className="rules">
              <div><Database/><strong>Grain</strong><span>One record per claim</span></div>
              <div><Database/><strong>Primary key</strong><span>ClaimID</span></div>
              <div><BarChart3/><strong>Denial Rate</strong><span>Denied Claims ÷ Total Claims × 100</span></div>
              <div><BarChart3/><strong>Payment Variance</strong><span>Allowed Amount − Paid Amount</span></div>
              <div><ShieldCheck/><strong>Denial definition</strong><span>Release 1 uses ClaimStatus = Denied</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionTitle label="SQL + Power BI" title="Independent validation before dashboard acceptance" copy="SQL provides a separate analytical path for checking business calculations and investigating denial, financial and follow-up patterns before relying on the report output."/>
          <div className="sql-flow"><div>Source data</div><ArrowRight/><div>SQL validation</div><ArrowRight/><div>Business rule reconciliation</div><ArrowRight/><div>Power BI measure</div><ArrowRight/><div>Business-facing view</div></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Agile / Jira" title="Three Scrum increments" copy="Jira was used to organize backlog items, priorities, sprint work and UAT-related tracking."/>
          <div className="sprints">{[
            ["Sprint 1","Requirements & analysis","Problem framing, requirements, process analysis, stories and traceability."],
            ["Sprint 2","Data & BI","Data preparation, SQL analysis, measures and Power BI reporting."],
            ["Sprint 3","UAT & insights","UAT preparation, validation framework, insights, recommendations and completion."]
          ].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div>
        </div>
      </section>

      <section className="section muted">
        <div className="container">
          <SectionTitle label="UAT" title="15 business-focused scenarios prepared" copy="The current execution tracker shows the 15 scenarios as Not Executed. The portfolio therefore presents UAT preparation, not completed UAT sign-off."/>
          <div className="uat-header"><div><strong>15</strong><span>scenarios designed</span></div><div className="not-executed"><ShieldCheck size={18}/><span>Execution status: Not Executed</span></div></div>
          <div className="uat-grid">{uatAreas.map(x=><div key={x}><CheckCircle2 size={16}/><span>{x}</span></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Insights & recommendations" title="From reporting to action" copy="The analysis is intended to support prioritization and corrective-action planning rather than claim production outcomes that were not measured."/>
          <div className="insight-grid">
            {[
              ["Prioritize high-impact denials","Combine denial volume with financial impact so follow-up attention is not based on volume alone."],
              ["Standardize root-cause categorization","Use consistent denial categories to improve trend analysis and upstream corrective action."],
              ["Monitor supported segmentation","Review insurance-type and provider patterns where the available dataset supports the analysis."],
              ["Establish recurring KPI review","Use consistent KPI definitions and periodic review to surface changes early."],
              ["Feed causes upstream","Translate recurring denial causes into training, documentation, coding or workflow improvements."],
              ["Keep production gaps visible","Move unsupported capabilities to future scope rather than presenting them as implemented."]
            ].map(([a,b])=><article key={a}><GitBranch size={19}/><h3>{a}</h3><p>{b}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section boundary">
        <div className="container">
          <SectionTitle label="Project boundaries" title="What this project does — and does not — claim" />
          <div className="boundary-grid">
            {["Independent portfolio simulation","Simulated claims dataset","No production claims processing","No live EHR / EMR integration","No automated claim submission","No payment processing","No real-time production integration","No predictive denial analytics","No automated claim assignment","No true payer-level performance where identifiers are unavailable","No reliable A/R >90-day analysis when aging data is unavailable"].map(x=><div key={x}><CheckCircle2 size={16}/><span>{x}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container next"><div><p className="eyebrow">Portfolio</p><h2>CareBridge complements RyVora</h2><p>RyVora demonstrates healthcare solution design and interoperability concepts; CareBridge demonstrates requirements, analytics, Agile delivery, traceability and UAT preparation.</p></div><a className="button primary" href="ryvora.html">Back to RyVora <ArrowRight size={17}/></a></div>
      </section>
    </main>
    <footer className="site-footer"><div className="container footer-inner"><span>© 2026 Angappan Sabarimani</span><span>Healthcare Business Analyst · US Healthcare · RCM · Analytics</span></div></footer>
  </div>;
}
createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>);
