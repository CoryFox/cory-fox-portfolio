# Session Protocol

This repository should maintain its own memory. Future Codex sessions should treat this file as operational policy, not optional reading.

## Start Of Session

Before making changes:

1. Read `README.md`.
2. Read `docs/HANDOFF.md`.
3. Read `docs/DECISION_LOG.md`.
4. Read `docs/CONTEXT_LOG.md`.
5. Confirm the current git branch and working tree state.

## During Session

Update the logs when any of the following happen:

- a design direction changes
- a technical approach changes
- a regression is discovered
- a meaningful tradeoff is made
- a repo/layout/source-of-truth detail changes
- a blocker or unresolved issue appears

## Which File To Update

Use `docs/DECISION_LOG.md` for:

- deliberate choices
- tradeoffs
- architecture or UX/system decisions
- rules the next session should preserve

Use `docs/CONTEXT_LOG.md` for:

- current repo status
- latest local head or pushed commit if known
- what changed this session
- known weak spots
- what still needs doing next

Use `docs/HANDOFF.md` for:

- stable project structure notes
- architecture notes
- long-lived implementation guidance

## End Of Session

Before finishing:

1. Update `docs/CONTEXT_LOG.md` with the current state.
2. Add any new durable decisions to `docs/DECISION_LOG.md`.
3. Update `docs/HANDOFF.md` if architecture or workflow changed.
4. Run verification if code changed:
   - `npm run lint`
   - `npm run build`
5. Commit the docs updates with the code changes, or as a separate docs commit.

## Minimum Context Standard

No session should end with:

- stale commit hashes in `docs/CONTEXT_LOG.md`
- major decisions only preserved in chat
- regressions fixed without recording the cause
- repo/source-of-truth confusion left undocumented

## Expected Behaviour For Future Codex Sessions

If a session materially changes the project and does not update the logs, that session is incomplete.
