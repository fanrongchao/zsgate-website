---
id: quickstart
title: 快速开始
---

## 1. 启动服务
在 `zsgate` 仓库启动 control-plane 与 data-plane。

## 2. 发送请求
```bash
curl -X POST http://localhost:8080/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -H 'X-ZS-API-Key: demo-key' \
  -d '{"model":"gpt-4o-prod","messages":[{"role":"user","content":"你好"}]}'
```

## 3. 查看统计
- `GET /admin/usage/by-user`
- `GET /admin/audits`
