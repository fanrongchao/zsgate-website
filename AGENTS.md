# AGENTS.md - ZSGate Website

## 1. 仓库目标与非目标
目标：维护 ZSGate 官网与文档站，确保 OSS 与 Enterprise 口径清晰一致。
非目标：在此仓库实现后端业务逻辑。

## 2. 目录职责
- `docs/`: 英文文档主内容。
- `i18n/zh-Hans/docusaurus-plugin-content-docs/current/`: 中文文档。
- `src/pages/`: 官网页面。
- `src/css/`: 品牌样式。
- `docusaurus.config.ts` / `sidebars.ts`: 导航与站点结构。

## 3. 开发流程
1. 先阅读：`README.md`、`docs/feature-matrix.md`、`docs/pricing.md`。
2. 新增功能说明时，先确认与 `zsgate` / `zsgate-enterprise` 实际能力一致。
3. 改文档导航时同步更新 `sidebars.ts` 与 navbar。
4. 本地可用时执行：
   - `npm run build`

## 4. 内容边界约束
- 开源与商业能力必须明确分层，不可混写。
- 不公开内部-only 文档（dogfooding、内部流程、私有链接）。
- Pricing 页面只写公开可披露信息，不放客户定制条款细节。

## 5. 中英文同步规则
- `docs/` 新增页面后，应同步到 `i18n/zh-Hans/...`。
- 能力矩阵、定价、架构三类页面优先保持双语同步。
- 若短期无法同步，必须在 PR/提交描述里标注待翻译项。

## 6. 视觉与可读性规则
- 保持现有品牌方向（非默认模板风格）。
- 移动端优先，避免长段落与信息过载。
- 修改样式时先保证文档可读性，再做视觉强化。

## 7. 提交规范
- 文档改动与配置改动尽量分提交。
- Commit 建议：`docs(site):`、`feat(site):`、`chore(site):`。
- 如涉及产品口径变化，提交信息必须说明来源仓库或版本依据。

## 8. 常见任务 Playbook
### 新增“能力”页面
1. 在 `docs/` 增页并加入 `sidebars.ts`。
2. 若对外核心页面，补 `zh-Hans` 对应译文。
3. 检查导航、页间链接、术语一致性。

### 更新功能矩阵
1. 先对照 `zsgate/docs/FEATURE_MATRIX*` 与 `zsgate-enterprise/docs/FEATURE_MATRIX*`。
2. 再更新网站矩阵，避免出现“官网先行、代码未落地”的倒挂。
