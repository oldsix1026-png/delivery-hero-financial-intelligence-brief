# Delivery Hero Everyday App strategy fix audit

## 本轮修改范围

- 修改 `src/App.tsx` 中 Everyday App 相关板块的说明结构。
- 修改 `src/data/deliveryHeroFinancialData.ts`，删除前台术语区的“战略飞轮”独立概念卡片。
- 修改 `src/components/StrategyFlywheel.tsx`，将流程图可访问标签改为 Everyday App 战略思路流程。
- 修改 `src/index.css`，新增“Everyday App 的战略思路”说明模块样式。

## 删除的独立卡片

- 已删除术语区标题为“战略飞轮”的独立概念卡片。
- 已删除 Everyday App 板块顶部以“战略飞轮”加粗开头的独立解释段落。

## 新增说明位置

- “Everyday App 的战略思路”说明已放在 `src/App.tsx` 的 Everyday App 卡片内，位于 Quick Commerce 图表和指标卡之后、流程图组件 `StrategyFlywheel` 之前。

## 流程图保留情况

- 保留流程图，步骤仍为：更多品类、更多使用场景、更高订单频率、更强订阅留存、更高商户价值、更好的履约效率、支撑变现与盈利改善。

## 前台展示自查

- 前台页面不再出现“战略飞轮”独立标题。
- “战略飞轮”如仍出现在历史 audit 或历史输出文件中，仅作为历史记录保留，不属于前台展示。
- Everyday App 第一次出现在术语区时已有定义说明。

## 验证、提交与部署

- `npm run build`：成功
- 是否 commit：是，提交信息为 `Refine Delivery Hero Everyday App strategy section`
- 是否 push origin main：是，本提交推送到 `origin/main`
- 是否触发 Netlify：是，`origin/main` 推送后触发 Netlify 生产部署

## 需要人工复核的点

- 建议在 Netlify 生产页面加载后，人工查看 Everyday App 板块是否符合截图预期：说明模块在流程图前，且页面无文字溢出、卡片重叠或横向滚动。
