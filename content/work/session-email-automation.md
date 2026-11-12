---
title: "Cutting the time spent on session emails"
slug: "session-email-automation"
client: "Implementation consulting team"
summary: "I built an automation that drafts emails before and after client sessions, cutting preparation time by around half. The consultant checks the email and sends it."
role: "Design and development"
focus: "Preparing session emails and keeping the team’s tone consistent."
technologies: ["Python", "Claude API", "Microsoft Graph"]
responsibilities:
  - "Built the automation in Python, using the Claude API to draft the emails."
  - "Connected it to Outlook through Microsoft Graph and used calendar events to trigger pre-session emails."
  - "Matched templates to session types so the emails followed a consistent structure and tone."
year: "Recent implementation"
status: "Used by the whole team"
tags: ["Automation", "AI implementation", "Human review"]
heroImage: ""
cardImage: ""
diagram: "session"
featured: true
order: 0
challenge: "Every client session came with more work afterwards: writing up the discussion, explaining the next steps and finding the recording link. Consultants also had to prepare an email before each session to set out what they would cover. Across a busy team, that was a lot of time spent writing emails."
approach: "Use the session details and the right template to prepare an email, then put it in the consultant’s inbox to check and send."
outcome: "Recorded email preparation time fell by around 50%. All ten consultants adopted the automation as part of their normal working day."
metrics:
  - value: "~50%"
    label: "less time preparing emails"
  - value: "10"
    label: "consultants using it day to day"
gallery: []
nextSlug: "reporting-implementation"
---

## Getting the draft into Outlook

I built the automation in Python, connecting the Claude API with Microsoft Graph. After a session, it waited for the recording and session content to become available through the transcription service. It then drafted an email covering the discussion, what the client needed to do next and a link to the recording.

The email arrived in the consultant's inbox, addressed to the relevant people and ready to check. Pre-session emails worked from Outlook calendar events, setting out what the upcoming session would cover.

## Making the emails sound like the team

I mapped general templates to the different session types, then used the session details to fill them out. This gave the emails a familiar structure and kept the team's tone consistent, while making each message relevant to that client and session.

The consultant could spend their time checking the detail and making any changes they wanted, with the first draft already written.

## Keeping the final check with the consultant

We still wanted a person to review every email. The consultant knew the client and had been part of the conversation, so they were best placed to check the summary, confirm the next steps and decide when it was ready to send.

That's why I built the review into the existing inbox workflow. The automation prepared the email; sending it stayed with the consultant.

## What changed

Recorded email preparation time fell by around 50%, and all ten consultants adopted the automation as part of their normal working day. It reduced the writing involved before and after sessions and gave the team a consistent starting point for their client emails.
