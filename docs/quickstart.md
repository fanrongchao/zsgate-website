---
id: quickstart
title: Quickstart
---

## 1. Start gateway services

Use the `zsgate` repository to run control-plane and data-plane services.

## 2. Send your first request

```bash
curl -X POST http://localhost:8080/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -H 'X-ZS-API-Key: demo-key' \
  -H 'X-ZS-User-Id: alice' \
  -d '{
    "model": "gpt-4o-prod",
    "messages": [{"role": "user", "content": "Hello ZSGate"}]
  }'
```

## 3. Check audit and usage

- `GET /admin/usage`
- `GET /admin/audits`
