---
title: "Automating session emails, with people in control"
slug: "session-email-automation"
client: "Implementation consulting team · Organisation unnamed"
summary: "A Python-led workflow that prepares pre-session and post-session emails, giving consultants a tailored draft to review rather than a blank page."
role: "Automation design and implementation"
focus: "Session communications, template mapping and consultant review."
technologies: ["Python", "Claude API", "Microsoft Graph"]
responsibilities:
  - "Built the automation connecting session content, mapped templates and email drafting."
  - "Used Python with the Claude API and Microsoft Graph to prepare and deliver drafts."
  - "Kept the consultant responsible for reviewing and sending each email."
year: "Recent implementation"
status: "Adopted as normal working practice"
tags: ["Automation", "AI implementation", "Human review"]
heroImage: ""
cardImage: ""
diagram: "session"
featured: true
order: 0
challenge: "After each client session, consultants manually wrote a detailed email covering the discussion, topics covered and client next steps, with a link to the recording. They also prepared pre-session emails outlining the planned coverage. This created recurring administration around every session."
approach: "Combine event-triggered workflows, mapped session templates and AI-assisted drafting, with a consultant reviewing the message before sending."
outcome: "Around 50% less email preparation time across 21 logged examples. Adopted by all ten consultants as normal working practice."
metrics:
  - value: "~50%"
    label: "less email preparation time"
  - value: "21"
    label: "logged email-preparation examples"
  - value: "10"
    label: "consultants using the workflow"
evidenceNote: "Based on 21 separate logged examples: approximately 5.7 hours before and 2.8 hours afterwards, using recorded hour values displayed to one decimal place. The headline is rounded; results varied between emails and describe this sample."
gallery: []
nextSlug: "reporting-implementation"
---
## The workflow I built

I used Python to coordinate the Claude API and Microsoft Graph. For post-session emails, the automation waited for session content to become available through a transcription service, generated a summary and prepared a message for the relevant recipients.

The draft brought together what had been covered, the client's next steps and a link to the session recording. It was delivered to the consultant's inbox, ready for review and sending.

Pre-session emails were triggered by Outlook calendar events and outlined what the upcoming session would cover.

## Consistency without starting from scratch

General templates were mapped to session types, then enriched with relevant content. This gave the team a shared structure and voice while allowing each message to reflect the session.

The practical change was simple: consultants could review and refine a prepared draft instead of writing every communication manually.

## Human review was part of the design

The automation prepared the email. The consultant reviewed and sent it. That review step kept responsibility for checking accuracy, relevance and next steps with the person who understood the client relationship.

The templates supported consistent coverage; they did not remove the need to check for omissions or incorrect summaries.

## Results and adoption

Across 21 logged examples, total email preparation time fell from approximately 5.7 to 2.8 hours: around a 50% reduction. These totals use the displayed, rounded hour values. Some examples showed no time saving, so the headline describes the overall sample rather than a guaranteed reduction for each email.

All ten consultants adopted the workflow, and it became part of normal working practice. The result combined less repetitive administration with a consistent approach to session communications and a clear human review step.

## Scope of this case study

The organisation is unnamed. The process illustration is explanatory and contains no production data, client information or internal screenshots. The timing figures describe the supplied sample; they have not been extrapolated into annual or per-project savings.
