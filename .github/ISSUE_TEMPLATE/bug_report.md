---
name: Bug Report
about: Report a bug in the Mentorship.01 Application built with TanStack Start, SolidJS, and ElysiaJS
title: "[BUG] "
labels: "bug, needs-triage"
assignees: ""

---

## Summary

Provide a concise description of the issue and its impact on the user experience.

## Affected area

Mark the areas touched by this bug with a check mark

* [ ] UI components (SolidJS)
* [ ] Screens and navigation flow (TanStack Router)
* [ ] State management with SolidJS reactivity
* [ ] Data fetching with TanStack Solid Query
* [ ] Backend API endpoints (ElysiaJS)
* [ ] Database operations (Drizzle ORM)
* [ ] Effect handlers and services
* [ ] Styling with Tailwind CSS
* [ ] Accessibility
* [ ] Performance
* [ ] Build or configuration (Vite/TanStack Start)
* [ ] Tests with Vitest

## Environment

Fill in the relevant details

<table>
  <tr><td>Commit SHA or branch</td><td></td></tr>
  <tr><td>Environment</td><td>development | preview | production</td></tr>
  <tr><td>Browser and version</td><td></td></tr>
  <tr><td>Operating system</td><td></td></tr>
  <tr><td>Device</td><td>desktop | mobile | tablet</td></tr>
  <tr><td>Screen size or DPR</td><td></td></tr>
  <tr><td>Node.js version</td><td></td></tr>
  <tr><td>SolidJS version</td><td>1.x</td></tr>
  <tr><td>TanStack Start version</td><td></td></tr>
  <tr><td>ElysiaJS version</td><td></td></tr>
  <tr><td>Database (PostgreSQL) version</td><td></td></tr>
  <tr><td>Feature flags or env</td><td>Environment values redacted</td></tr>
</table>

## Steps to reproduce

Describe the minimal sequence to trigger the issue

<table>
  <tr><th>Step</th><th>Action</th></tr>
  <tr><td>1</td><td>Start the app with bun run dev</td></tr>
  <tr><td>2</td><td>Open the affected screen</td></tr>
  <tr><td>3</td><td>Perform the specific interaction</td></tr>
</table>

## Expected versus actual

<table>
  <tr><th>Expected behavior</th><th>Actual behavior</th></tr>
  <tr><td></td><td></td></tr>
</table>

Frequency and severity

<table>
  <tr><td>Repro frequency</td><td>always | often | intermittent</td></tr>
  <tr><td>Impact</td><td>blocker | high | medium | low</td></tr>
</table>

## Evidence

Screens or components involved

Provide the route or screen name and a short description of the UI state.

Console output

<details>
<summary>Show console logs</summary>

```
paste relevant logs here
```

</details>

Network details

<details>
<summary>Show API request/response snippets</summary>

```
Method and URL (ElysiaJS endpoint)
Request payload
Response status and body
```

</details>

Backend logs

<details>
<summary>Show server logs</summary>

```
ElysiaJS server logs
Effect execution logs
Database query logs (if applicable)
```

</details>

Screenshots or recordings

<details>
<summary>Show media</summary>

Attach screenshots or short recordings that demonstrate the issue.

</details>

## Regression

<table>
  <tr><td>First observed in</td><td>commit, branch, or release</td></tr>
  <tr><td>Last known good</td><td>commit, branch, or release</td></tr>
</table>

## Workarounds tried

Describe any temporary workarounds or mitigations.

## Additional context

Include links to related issues or PRs and any design references or Figma files.

### Database state (if applicable)

<table>
  <tr><td>Database schema version</td><td></td></tr>
  <tr><td>Relevant tables/collections</td><td></td></tr>
  <tr><td>Sample problematic data</td><td></td></tr>
</table>

### Effect-related details (if applicable)

<table>
  <tr><td>Effect service involved</td><td></td></tr>
  <tr><td>Error pattern</td><td>expected | unexpected | timeout</td></tr>
  <tr><td>Effect retry attempts</td><td></td></tr>
</table>