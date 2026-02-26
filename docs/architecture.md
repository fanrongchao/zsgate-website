---
id: architecture
title: Architecture
---

ZSGate follows a split-plane architecture.

- **Control Plane**: policy, vendor, budget, and audit management
- **Data Plane**: request authentication, routing, forwarding, and metrics

Recommended deployment:
- China ingress region for employee traffic
- Overseas egress region for external model providers
