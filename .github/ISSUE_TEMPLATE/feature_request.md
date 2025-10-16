---
name: Feature Request
about: Suggest a new feature for the Mentorship.01 Application built with TanStack Start, SolidJS, and ElysiaJS
title: "[FEATURE] "
labels: "enhancement, needs-triage"
assignees: ""

---

## Summary

Briefly describe the feature and who benefits.

## Problem statement

What problem does this feature solve for end users or developers?

## User story

<table>
  <tr><td>As a</td><td>type of user</td></tr>
  <tr><td>I want</td><td>capability or action</td></tr>
  <tr><td>So that</td><td>desired outcome or value</td></tr>
</table>

## Affected area

Mark the areas touched by this proposal with clickable checkboxes

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

## Proposed solution

High level approach and rationale. Include alternatives considered and trade offs.

## UI and UX details

New or changed screens and routes

<table>
  <tr><th>Screen or route path</th><th>Purpose</th><th>Access</th></tr>
  <tr><td>/</td><td></td><td>public | protected</td></tr>
</table>

Components impacted

<table>
  <tr><th>Component</th><th>Change type</th><th>Notes</th></tr>
  <tr><td>ComponentName</td><td>add | update | remove</td><td>SolidJS component</td></tr>
</table>

UI states

<table>
  <tr><th>State</th><th>Behavior</th></tr>
  <tr><td>Loading</td><td>SolidJS loading state</td></tr>
  <tr><td>Error</td><td>Error boundary or fallback</td></tr>
  <tr><td>Empty</td><td>Empty state handling</td></tr>
</table>

Accessibility

<ul>
  <li>Keyboard navigation and focus order</li>
  <li>ARIA attributes and labels</li>
  <li>Color contrast and motion preferences</li>
</ul>

## Backend considerations

If the feature requires backend changes (ElysiaJS)

<table>
  <tr><th>Method</th><th>Path</th><th>Description</th><th>Status codes</th></tr>
  <tr><td>GET</td><td>/api/...</td><td></td><td>200, 4xx</td></tr>
  <tr><td>POST</td><td>/api/...</td><td></td><td>201, 4xx</td></tr>
</table>

Database schema changes (Drizzle ORM)

<table>
  <tr><th>Table</th><th>Change type</th><th>Migration needed</th></tr>
  <tr><td>table_name</td><td>add | update | remove</td><td>yes | no</td></tr>
</table>

Effect handlers/services

<table>
  <tr><th>Service</th><th>New handlers</th><th>Dependencies</th></tr>
  <tr><td>ServiceName</td><td></td><td></td></tr>
</table>

Response shape assumptions and error handling

<ul>
  <li>Data fields and types expected by the frontend</li>
  <li>Empty states and error boundaries</li>
  <li>Effect error patterns (expected vs unexpected)</li>
</ul>

## Design references

<table>
  <tr><td>Figma or design link</td><td>URL</td></tr>
  <tr><td>Design tokens</td><td>names or theme variables</td></tr>
  <tr><td>Assets</td><td>icons or images</td></tr>
</table>

## Performance and caching

<table>
  <tr><td>Targets</td><td>LCP INP CLS goals if applicable</td></tr>
  <tr><td>Code splitting</td><td>screen or component level (TanStack Start)</td></tr>
  <tr><td>Data caching</td><td>TanStack Solid Query strategy</td></tr>
  <tr><td>Server-side rendering</td><td>SSR considerations</td></tr>
  <tr><td>Database optimization</td><td>Query optimization needed</td></tr>
</table>

## Analytics and telemetry

<table>
  <tr><th>Event</th><th>When triggered</th><th>Properties</th></tr>
  <tr><td>feature_used</td><td></td><td></td></tr>
</table>

## Rollout and flags

<table>
  <tr><td>Feature flag</td><td>name and default</td></tr>
  <tr><td>Rollout plan</td><td>sequence and monitoring</td></tr>
  <tr><td>Rollback strategy</td><td>how to disable quickly</td></tr>
</table>

## Dependencies

<table>
  <tr><td>External services</td><td></td></tr>
  <tr><td>Library additions or updates</td><td></td></tr>
  <tr><td>Browser or device constraints</td><td></td></tr>
  <tr><td>Database constraints</td><td>version requirements</td></tr>
</table>

## Acceptance criteria

* [ ] Criterion 1
* [ ] Criterion 2
* [ ] Criterion 3

## Testing plan

<ul>
  <li>Unit tests in Vitest for new logic</li>
  <li>Integration tests for Effect handlers</li>
  <li>API endpoint tests for ElysiaJS routes</li>
  <li>Database migration tests</li>
  <li>Accessibility checks for labels and focus</li>
</ul>

## Documentation

<ul>
  <li>README updates if needed</li>
  <li>API documentation updates (OpenAPI/Swagger)</li>
  <li>Effect service documentation</li>
  <li>Database schema documentation</li>
</ul>

## Additional context

Links to prior art related issues or PRs and notes.

### Technical constraints

<table>
  <tr><td>SolidJS reactivity model</td><td>considerations</td></tr>
  <tr><td>TanStack Router limitations</td><td></td></tr>
  <tr><td>ElysiaJS middleware requirements</td><td></td></tr>
  <tr><td>Effect error handling patterns</td><td></td></tr>
</table>