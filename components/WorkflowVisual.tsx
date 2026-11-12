export function WorkflowVisual({ kind = "session", compact = false }: { kind?: "session" | "reporting"; compact?: boolean }) {
  return (
    <figure className={`workflow-visual ${compact ? "workflow-compact" : ""}`} aria-label={kind === "session" ? "Session email automation workflow" : "Reporting implementation workflow"}>
      <figcaption className="eyebrow">{kind === "session" ? "From session to reviewed email" : "From source data to usable reporting"}</figcaption>
      {kind === "session" ? <>
        <div className="workflow-triggers">
          <div><span className="flow-tag">Before the session</span><strong>Outlook calendar event</strong></div>
          <div><span className="flow-tag">After the session</span><strong>Session content available</strong></div>
        </div>
        <div className="flow-connector" aria-hidden="true">↓</div>
        <div className="flow-step"><span className="flow-number">01</span><div><strong>Prepare a tailored draft</strong><p>Mapped session template + relevant content</p></div><span className="flow-tech">Python · Claude API</span></div>
        <div className="flow-connector" aria-hidden="true">↓</div>
        <div className="flow-step"><span className="flow-number">02</span><div><strong>Deliver to the consultant</strong><p>Email ready for review in their inbox</p></div><span className="flow-tech">Microsoft Graph</span></div>
        <div className="flow-connector" aria-hidden="true">↓</div>
        <div className="flow-step flow-review"><span className="flow-number">03</span><div><strong>Consultant reviews and sends</strong><p>Human judgement stays in the process</p></div></div>
      </> : <div className="report-flow">
        {[['01', 'Map requirements', 'Agree fields and reporting rules'], ['02', 'Retrieve and transform', 'OData + Excel Power Query'], ['03', 'Validate the output', 'Check mappings and investigate gaps'], ['04', 'Document and hand over', 'Explain the logic and refresh process']].map(([n,title,body])=><div className="flow-step" key={n}><span className="flow-number">{n}</span><div><strong>{title}</strong><p>{body}</p></div></div>)}
      </div>}
      {!compact && <p className="figure-note">Illustrative process overview. No production data or internal screenshots are shown.</p>}
    </figure>
  );
}
