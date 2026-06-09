# @n8n-dev/n8n-nodes-ndhm-gov-ndhm-hiu

![ndhm-gov-ndhm-hiu Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-ndhm-gov-ndhm-hiu.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-ndhm-gov-ndhm-hiu)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing ndhm-gov-ndhm-hiu API integrations by hand.**

Every time you connect n8n to ndhm-gov-ndhm-hiu, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to ndhm-gov-ndhm-hiu took 5 minutes, not half a day?**

This node gives you **7+ resources** out of the box: **User Auth**, **Identification**, **Consent Flow**, **Data Flow**, **Subscriptions**, and 2 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-ndhm-gov-ndhm-hiu
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-ndhm-gov-ndhm-hiu`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **ndhm-gov-ndhm-hiu API** → paste your API key
3. Drag the **ndhm-gov-ndhm-hiu** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>User Auth</b> (4 operations)</summary>

- Post notification API in case of DIRECT mode of authentication by the CM
- Post callback API for auth confirm in case of MEDIATED auth to confirm user authentication or not
- Post Identification result for a consent manager user ID
- Post Response to user authentication initialization from HIP

</details>

<details>
<summary><b>Identification</b> (1 operations)</summary>

- Post Identification result for a consent manager user ID

</details>

<details>
<summary><b>Consent Flow</b> (4 operations)</summary>

- Post Response to consent request
- Post Result of consent request status
- Post Consent notification
- Post Result of fetch request for a consent artefact

</details>

<details>
<summary><b>Data Flow</b> (2 operations)</summary>

- Post Health information data request
- Post health information transfer API

</details>

<details>
<summary><b>Subscriptions</b> (3 operations)</summary>

- Post Notification for subscription grant deny revoke
- Post callback API for the subscription requests cm init to notify a HIU on acceptance acknowledgement of the request for subscription
- Post Notification to HIU on basis of a granted subscription

</details>

<details>
<summary><b>Monitoring</b> (1 operations)</summary>

- Get consent request status

</details>

<details>
<summary><b>Gateway</b> (17 operations)</summary>

- Get openid configuration
- Get certs for JWT verification
- Post Create consent request
- Post Get consent request status
- Post Get consent artefact
- Post Consent notification
- Post Health information data request
- Post Notifications corresponding to events during data flow
- Post Identify a patient by her consent manager user ID
- Post Get access token
- Post Request for subscription
- Post Callback API for subscription requests hiu notify to acknowledge receipt of notification
- Post Callback API for subscriptions hiu notify to acknowledge receipt of notification
- Post Confirmation request sending token otp or other authentication details from HIP HIU for confirmation
- Post Get a patient s authentication modes relevant to specified purpose
- Post Initialize authentication from HIP
- Post callback API by HIU HIPs as acknowledgement of auth notification

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from ndhm-gov-ndhm-hiu docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official ndhm-gov-ndhm-hiu OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **ndhm-gov-ndhm-hiu** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the ndhm-gov-ndhm-hiu API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
