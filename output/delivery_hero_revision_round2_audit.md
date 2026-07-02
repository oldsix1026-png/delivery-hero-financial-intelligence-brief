# Delivery Hero 本地精修 Round 2 审计

## 1. 本轮修改目标

- 按用户最新 10 条意见精修 Delivery Hero 看板。
- 仅做本地修改、本地 build 和本地预览文件生成。
- 不 push，不上传 Netlify，不修改 DoorDash 项目。

## 2. 修改文件

- `src/App.tsx`
- `src/components/Timeline.tsx`
- `src/components/charts/ProfitabilityTrendChart.tsx`
- `src/data/deliveryHeroFinancialData.ts`
- `src/data/deliveryHeroQuarterlyHistory.ts`
- `src/index.css`
- `output/delivery_hero_metric_definitions.md`
- `output/delivery_hero_dashboard_local_preview/index.html`
- `output/delivery_hero_dashboard_local_preview/assets/index-BW8i8ebB.js`
- `output/delivery_hero_dashboard_local_preview/assets/index-CeIcn8mj.css`
- `output/delivery_hero_revision_round2_audit.md`

## 3. 动态追踪标签颜色分类

- 财务与盈利层面：年度业绩、增长指引用橙红色系。
- 融资与资本层面：潜在要约、资本结构、债务再融资用红色系。
- 管理层 / 战略层面：管理层变化用深金棕色系。
- 资产处置 / 股东动作：资产出售、股东压力用酒红色系。
- 区域经营 / 业务扩张：业务层面事件预留蓝绿色系。
- 风险与压力：无法归入以上类型的事件预留灰红色系。
- 左侧竖向类型标签和顶部分类胶囊均按同一类型规则呼应。

## 4. 删除的核心判断条形板块

- 删除趋势总览底部深色横向 `总览 / 核心判断` 条。
- 删除 Topline 底部深色横向 `Topline / 核心判断` 条。
- 删除 Bottomline 底部深色横向 `Bottomline / 核心判断` 条。
- 删除 Hero 中与下方 Topline / Bottomline 高度重复的 `本季核心判断` 大卡片。
- 保留的信息已合并到 Topline / Bottomline 分析卡片：收入转化、区域增量、利润与现金流改善、资本结构影响。

## 5. 删除的灰字方法论说明

- 删除趋势总览章节下的“只展示有来源指标”等说明。
- 删除 Topline / Bottomline 章节下的“聚焦……”结构说明。
- 删除图表卡片副标题中的展示口径说明。
- 删除公开事件追踪卡片的默认排序/字段说明。
- 删除术语和信息来源章节的前台方法说明。
- 删除底部 `口径` 深色说明块。

## 6. 改成 DoorDash 风格的图

- 将趋势总览中的盈利图改为白色卡片组合图。
- 图中展示 Adjusted EBITDA 实际值柱状图、Free Cash Flow 实际值折线、EBITDA / GMV 右轴折线。
- 保留 tooltip、图例、左右轴和图下来源。

## 7. EBITDA% 加入情况

- 已加入。
- 公式：Adjusted EBITDA 实际值 / 同频率 Group GMV 实际值。
- 使用 Delivery Hero 的 Group GMV，不使用 DoorDash GOV。
- FY 2023 因缺少完整 Group GMV 实际值，不计算、不画点。

## 8. 删除的重复卡片

- 删除 Hero 中 `本季核心判断` 大卡片。
- 删除趋势总览、Topline、Bottomline 三个深色总结条。
- 删除底部 `口径` 说明块。

## 9. 指定句子删除情况

- 已删除“汇率与高通胀会计只作为口径解释，reported 与 LfL 必须同口径比较。”。
- 删除后 Bottomline 风险卡改为保留业务风险：竞争、营销、技术投入、交易执行、韩国恢复、MENA 竞争和 Quick Commerce 投资回报。

## 10. Build 结果

- `npm run build` 成功。
- Vite 仅提示 chunk size warning，不影响构建产物生成。

## 11. 本地预览路径

- `output/delivery_hero_dashboard_local_preview/index.html`
- `output/delivery_hero_dashboard_local_preview/assets/`
- `output/delivery_hero_dashboard_local_preview/start_preview.bat`
- `output/delivery_hero_dashboard_local_preview/README_如何打开.txt`

## 12. 是否 push

- 否。

## 13. 是否上传 Netlify

- 否。

## 14. 验证记录

- 本地预览服务 `http://127.0.0.1:4175/` 返回 HTTP 200。
- `index.html` 引用的新 JS/CSS 文件均已存在。
- 前台源码扫描未命中用户要求删除的指定方法论和口径解释短语。
- in-app Browser 插件连接受当前 Windows 路径元数据影响未完成；已用本地 HTTP 与资源存在性检查验证预览可访问。
