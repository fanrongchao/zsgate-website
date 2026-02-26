---
id: architecture
title: 架构
---

ZSGate 采用分层架构：
- **Control Plane**：策略、供应商、预算、审计管理
- **Data Plane**：鉴权、路由、转发、计量

推荐部署：
- 国内入口接入员工流量
- 海外出口访问境外模型服务
