# Delivery Hero structure, profit, and Everyday App audit

## Scope

- Files reviewed and changed: `src/App.tsx`, `src/data/deliveryHeroFinancialData.ts`, `src/components/charts/RegionalGmvDonutChart.tsx`, `src/index.css`.
- Fact change: no. This round changes front-end structure, explanations, chart layout, and audit documentation without changing source financial data.

## Duplicate top KPI cards

- Deleted top repeated cards from front-end rendering: yes.
- Removed card group: Group GMV, Total Segment Revenue, MENA GMV, Integrated Verticals GMV.
- The underlying `heroKpis` data remains available in the data file but is no longer rendered as the repeated top KPI row.

## Total Segment Revenue explanation

- Before: `Delivery Hero 按分部披露的收入指标，反映平台从 GMV 转化为收入的能力，与 Group GMV 属于不同财务口径。`
- After: `Delivery Hero 在各业务分部确认的收入，主要来自佣金、配送服务、广告、订阅和商户服务等。它不同于 Group GMV：GMV 是平台交易总额，不等于公司收入；收入代表公司真正确认进账的部分。`

## Trend chart merge

- Merged `GMV 与 Revenue 季度趋势` and `同比增速差` into one chart card.
- The merged card keeps the quarterly GMV / Total Segment Revenue trend and adds the YoY growth comparison plus the Q1 2026 +9.0ppt LfL callout inside the same module.
- Independent `同比增速差` card removed.

## Regional GMV donut legend

- Added a responsive legend below the Q1 2026 regional GMV donut.
- Legend entries use the project data labels: Asia, MENA, Europe, Americas, Integrated Verticals.
- Legend is outside the chart center and should not cover the donut.

## Section movement and profit analysis

- Quick Commerce / Everyday App moved from section 03 `盈利质量与经营杠杆` to section 02 `增长来源与业务结构`.
- Section 02 now includes an Everyday App intro, strategic flywheel explanation, Quick Commerce GMV share chart, strategy metrics, and flywheel visualization.
- Section 03 now focuses on actual profit quality:
  - FY 2025 Adjusted EBITDA: €903m, +30%.
  - FY 2025 Free Cash Flow: €250m, second positive year.
  - FY26 Adjusted EBITDA guidance: €910m-€960m.
  - Profit analysis around cost control, investment return, marketing / technology cost, transaction execution, and capital structure.
- Section 04 title changed to `利润与财务预测`.

## Everyday App and strategic flywheel

- Everyday App explanation added: Delivery Hero expands from a single food-delivery entry point into a platform for dining, Quick Commerce, grocery retail, subscriptions, advertising, and merchant services.
- Strategic flywheel explanation added: more categories create more use cases, which raise app-open frequency and order frequency, then support membership, advertising, merchant services, fulfillment efficiency, revenue conversion, and profit improvement.

## Everyday App data availability

- Direct Everyday App GMV or order contribution found: no.
- Proxy indicators used:
  - FY 2025 Quick Commerce GMV above €7.5bn.
  - Q1 2026 Quick Commerce +30% LfL and 18% of Group GMV.
  - Multi-vertical users contributed 55% of GMV.
  - Subscription users contributed 43% of GMV.
  - Keyword Ads revenue €52m, +170%.
  - Merchant ROAS +7% from GenAI ranking model.

## Data gaps requiring manual review

- Direct Everyday App GMV contribution.
- Direct Everyday App order contribution.
- Direct order-frequency uplift from Everyday App.
- Segment-level profit contribution for Quick Commerce / Integrated Verticals.

## Build / Git / deploy status

- `npm run build`: success.
- Commit: yes, this audit is included in `Refine Delivery Hero structure profit analysis and Everyday App narrative`.
- `git push origin main`: yes, performed after successful build and commit.
- Netlify trigger: yes, expected from pushing `main` to the connected production deploy.
