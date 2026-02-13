---
sidebar_label: Audit logging
description: Describes how the Moderne Platform records and manages audit logs.
---

# Audit logging

The Moderne Platform records a structured audit log of every user-initiated and system-initiated action. All audit events are persisted to a dedicated PostgreSQL database with a retention period of one year. Events are categorized by a CRUD action type (Create, Read, Update, Delete), tagged with the acting user's identity (or identified as a system-initiated action when performed automatically by the platform), timestamped in UTC, and marked with an outcome of Success or Failed.

Tenant administrators (users in your organization that have been granted the `admin` role) can query audit logs through the Moderne UI, a paginated GraphQL API, or export them in CEF (Common Event Format) or CSV for ingestion into a SIEM or other log aggregation system. Access to the audit log is itself audited.

For instructions on exporting audit logs, see [Reporting](./reporting.md).

## Centralized audit framework

All Moderne microservices share a common audit logging library that provides a uniform, structured approach to logging every user action. Each audit log entry contains the following fields:

| Field         | Description                                                                              |
|---------------|------------------------------------------------------------------------------------------|
| `timestamp`   | ISO-8601 offset date/time (UTC) of when the event occurred.                              |
| `user_id`     | Email address, API token name, or system identifier of the acting principal.             |
| `target`      | The object or resource being acted upon (the noun).                                      |
| `action`      | The specific operation performed (the verb), dot-separated hierarchical name.            |
| `action_type` | CRUD category: Create, Read, Update, or Delete.                                          |
| `description` | Human-readable description of the action, with variable interpolation.                   |
| `outcome`     | Started, Success, or Failed.                                                             |

## Event lifecycle

Each auditable action follows a two-phase logging pattern:

1. **Initiation**: An audit record is inserted with an outcome of `Started` before the business logic executes.
2. **Completion**: The same record is updated to `Success` or `Failed` upon completion or error.

This ensures that actions that fail or time out are still captured in the audit trail.

## Actor identity

The `user_id` field identifies who initiated the action. There are two categories of actor:

* **User-initiated actions**: The `user_id` is the authenticated user's email address (e.g., `jane.doe@example.com`) or the name of the API access token used to authenticate the request. This covers all actions taken through the Moderne UI or API, such as running recipes, committing changes, managing tokens, and viewing results.
* **System-initiated actions**: The `user_id` is set to `Moderne` for actions performed automatically by the platform without a user request. This includes automatic recipe artifact deployments, artifact indexing and downloads from agents, and Python package installations for visualizations.

This distinction allows administrators to differentiate between user activity and background platform operations when reviewing the audit trail.

## Retention

Moderne retains audit logs for **one year** from the time of recording. Customers are responsible for exporting audit logs to meet their own longer-term retention or compliance requirements.

## Export formats

Audit logs can be exported in the following formats:

* **CEF (Common Event Format)**: Compliant with ArcSight CEF v0 standard, suitable for SIEM ingestion.
* **CSV**: Tabular export with all audit log fields.
* **GraphQL API**: Paginated query interface for programmatic access with filtering and sorting.

For detailed export instructions, see [Reporting](./reporting.md).

## Time synchronization

All timestamps are recorded in UTC (RFC 3339 / ISO-8601 format: `YYYY-MM-DDTHH:MM:SS.sss+00:00`). Infrastructure runs on AWS, which synchronizes to NTP time sources.

## Access control

Audit log access (both UI and API) is restricted to users with the `admin` role. Attempts to access audit logs without the `admin` role are denied. Access to the audit log itself is also logged.

For more information about user roles and permissions, see [User roles](./user-roles.md).

## Confidential data exclusions

The Moderne audit logging system does **not** include:

* Passwords or credential values
* API token values (only token names/identifiers)
* Source code content
* SCM authorization codes (only the exchange event is logged, not the code itself)
* Cardholder data, PII (other than the user email that took the action), or other highly confidential data

For more information about how Moderne handles sensitive data, see [Sensitive data flow](./flow.md).
