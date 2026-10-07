---
sidebar_label: Restricting network access
description: Restrict your Moderne tenant so that only your network can reach it.
---

# Restricting network access to your tenant

import {useEffect as docsPreviewEffect} from 'react'; // docs-preview

export const DocsPreviewBoxes = () => { docsPreviewEffect(() => { const draw = () => { document.querySelectorAll('.docs-preview-box').forEach(b => b.remove()); const art = document.querySelector('article'); if (!art) return; const ar = art.getBoundingClientRect(); document.querySelectorAll('.docs-preview-start').forEach(s => { const e = document.getElementById(s.id + '-end'); if (!e) return; const top = s.getBoundingClientRect().top, bottom = e.getBoundingClientRect().top; const box = document.createElement('div'); box.className = 'docs-preview-box'; Object.assign(box.style, {position: 'absolute', left: (ar.left - 14 + scrollX) + 'px', width: (ar.width + 28) + 'px', top: (top + scrollY - 10) + 'px', height: (bottom - top + 14) + 'px', outline: '4px solid #ff2fa0', background: 'rgba(255, 47, 160, 0.08)', borderRadius: '10px', pointerEvents: 'none', zIndex: 5}); const label = document.createElement('span'); label.textContent = s.dataset.label; Object.assign(label.style, {position: 'absolute', top: '-14px', left: '12px', background: '#ff2fa0', color: '#fff', fontWeight: 700, fontSize: '12px', padding: '2px 10px', borderRadius: '999px'}); box.appendChild(label); document.body.appendChild(box); }); }; if (!window.docsPreviewPing) { let last = 0; window.docsPreviewPing = () => { const now = Date.now(); if (now - last < 60000) return; last = now; fetch('/__docs-preview-activity?' + now, {cache: 'no-store'}).catch(() => {}); }; ['scroll', 'click', 'keydown', 'mousemove'].forEach(t => addEventListener(t, window.docsPreviewPing, {passive: true})); } draw(); const h = decodeURIComponent(location.hash.slice(1)); if (h.startsWith('dp-')) { setTimeout(() => document.getElementById(h)?.scrollIntoView(), 400); } const ro = new ResizeObserver(draw); ro.observe(document.body); addEventListener('resize', draw); return () => { ro.disconnect(); removeEventListener('resize', draw); document.querySelectorAll('.docs-preview-box').forEach(b => b.remove()); }; }, []); return null; }; // docs-preview

<style>{`.docs-preview-start,.docs-preview-end{display:block;height:0;scroll-margin-top:110px}`}</style><DocsPreviewBoxes />{/* docs-preview */}

<span className="docs-preview-start" id="dp-1" data-label="NEW PAGE" />{/* docs-preview */}

By default, your tenant's public endpoints accept HTTPS connections from any IP address. If your security policy requires the tenant to be reachable only from your network, Moderne can restrict it to a list of IP ranges you provide.

In this guide, we will walk you through what the restriction covers, which ranges you need to collect, and how to request it.

Here's how the setup works end-to-end:

1. You collect every public egress range that needs to reach your tenant.
2. You send that list to Moderne.
3. Moderne applies it to your tenant's network configuration right away, with no downtime and nothing to change on your side.

## Prerequisites

This guide assumes that you have:

* A Moderne SaaS v2 tenant.
* Your Moderne tenant name (the subdomain in your tenant's URL, e.g. `acme` for `acme.moderne.io`).

## Understanding what the restriction covers

Keep the following in mind before building your list:

* The restriction applies to the whole tenant: the UI, the GraphQL API, login, the CLI download, and the endpoint the Connector connects to. It cannot be scoped to only one of them.
* A client outside the list gets a connection timeout rather than an error page, and your tenant's hostnames still resolve.
* Only the source IP address is checked. If your traffic leaves through a shared cloud proxy without dedicated egress addresses, listing the proxy's ranges also admits the proxy vendor's other customers. Restrictions on specific users or devices belong in your identity provider.

## Collecting your egress ranges

You will need the public egress range of everything that reaches your tenant:

* Your corporate proxy and VPN, used by people working in the Moderne UI, the Moderne CLI, or the IDE plugins
* Every Moderne Connector you run
* Any automation or CI pipeline that calls the Moderne API with an access token

Cloud-hosted CI runners, such as GitHub-hosted runners or Microsoft-hosted Azure DevOps agents, use large and changing address ranges that cannot realistically be listed. Run automation that calls the Moderne API from runners inside your network instead.

## Requesting the restriction

Send your tenant name and the full list of ranges, in CIDR notation, to your CSM or [support@moderne.io](mailto:support@moderne.io). To change the list later, send the updated list the same way.

<span className="docs-preview-end docs-preview-eof" id="dp-1-end" />{/* docs-preview */}
