# TRACE//X — Hackathon Frontend

A responsive, interactive frontend prototype for:

> Real-Time Identification of Fraud-Linked Cryptocurrency Exchanges from Victim-Reported Suspect Wallet Addresses through Automated Blockchain Analytics.

## Run locally

No npm installation is required.

### Option 1 — Open directly
Open `index.html` in Chrome or Edge.

### Option 2 — VS Code Live Server
Open the project folder in VS Code and launch `index.html` with Live Server.

### Option 3 — Python local server
From the project folder:

```bash
python -m http.server 3000
```

Then open `http://localhost:3000/`.

## Demo flow

1. Click **LOAD DEMO CASE**.
2. Scroll to **Investigate**.
3. Click **RUN BLOCKCHAIN ANALYSIS**.
4. The **Trace** section appears with a risk score, entity tags, graph and transaction timeline.
5. Try the three sample cases for different risk profiles.

## Project structure

```text
TraceX/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── app.js
└── assets/
```

## Currently mocked

Blockchain/indexer API calls, entity intelligence, and AI scoring are represented by demo data in the frontend JavaScript. The UI is structured so these can later be replaced by real API responses.

## Tech

- HTML5
- CSS3
- Vanilla JavaScript
- Three.js CDN
- Responsive layout
