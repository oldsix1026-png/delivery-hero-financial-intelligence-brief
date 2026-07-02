# Delivery Hero 看板指标口径说明

本文件记录本轮看板使用的核心指标口径。财务数据仅使用 Delivery Hero 项目已有数据、公司官方披露、IR 文件、公司公告和已录入券商观点；未使用 DoorDash 数据。

| 指标名称 | 中文含义 | 数据来源 | 是否官方披露 | 是否看板计算 | 计算公式 | 使用在哪张图 | 缺失数据处理 | 需要人工复核的点 |
|---|---|---|---|---|---|---|---|---|
| Group GMV | 集团平台交易总额 | Delivery Hero Trading Update / Quarterly Statement / FY results | 是 | 否 | 官方披露值 | 趋势总览：Group GMV 与 Total Segment Revenue；Topline：区域结构说明 | 缺失季度不补 0，不连线；当前序列中 Q2 2023 与 Q4 2025 为官方披露计算口径 | Q2 2023、Q4 2025 单季值由官方全年值减去其他已披露季度，需人工复核计算过程 |
| Total Segment Revenue | 各业务分部确认收入，主要来自佣金、配送服务、广告、订阅和商户服务等 | Delivery Hero Trading Update / Quarterly Statement / FY results | 是 | 否 | 官方披露值 | 趋势总览：Group GMV 与 Total Segment Revenue；Topline：收入转化说明 | 缺失季度不补 0，不用 DoorDash 或示例数据替代 | reported、constant currency、LfL 口径不可混用 |
| Revenue YoY / GMV YoY | 收入和交易额同比增速 | 基于官方历史实际值 | 部分为官方披露，部分为看板计算 | 是 | 本期实际值 / 上年同期实际值 - 1 | 趋势总览：增长质量柱状图 | 无上年同期时留空，不画点、不补 0 | 公司披露的 LfL YoY 与看板计算的 reported YoY 需要分开说明 |
| 区域 GMV | Asia、MENA、Europe、Americas、Integrated Verticals 的 GMV | Delivery Hero 官方披露 | 是 | 否 | 官方披露值 | Topline：Q1 2026 区域 GMV 构成、区域增速、重点区域近三年趋势 | 缺失区域不补 0；图例保留，避免读者猜测颜色 | Integrated Verticals 为业务分部视图，不能简单加总为集团 GMV |
| Regional LfL YoY | 区域 like-for-like 同比增长 | Delivery Hero Q1 2026 披露 | 是 | 否 | 公司披露 LfL YoY | Topline：Q1 2026 区域增速 | 缺失则留空，不用 reported 增速替代 | LfL 与 reported 需要同图但不同颜色展示 |
| Quick Commerce GMV share | Quick Commerce 占 Group GMV 比例 | Delivery Hero 公司披露 | 是 | 否 | 公司披露比例 | Topline：Quick Commerce 趋势图 | 未披露 GMV 金额的季度只展示占比；FY 2025 金额单独用文字说明 | Q1 2026 +30% LfL 为公司披露增长，不反推单季 GMV |
| Adjusted EBITDA | 调整后 EBITDA | Delivery Hero FY results / H1 results / 公司指引 | 是 | 否 | 官方披露值 | 趋势总览：Adjusted EBITDA 与 Free Cash Flow；Bottomline：利润改善说明 | 未披露季度不补造；历史实际值和 FY26 指引分开 | 公司指引区间与 UBS/J.P. Morgan 预测不可混同 |
| Free Cash Flow | 自由现金流 | Delivery Hero FY results / H1 results / 公司指引 | 是 | 否 | 官方披露值 | 趋势总览：Adjusted EBITDA 与 Free Cash Flow；Bottomline：利润与现金流说明 | FY 2023 FCF 未在图中补造，缺失处不连线 | FCF 正负波动需结合营运资本、交易执行和投资节奏复核 |
| FY26 公司指引 | 管理层对 GMV、Revenue、Adjusted EBITDA、FCF 的全年展望 | Delivery Hero 公司指引 | 是 | 否 | 公司披露区间 | Bottomline：FY26 公司指引 | 缺失指标不展示；不使用券商预测代替公司指引 | GMV / Revenue 为 LfL 增速，Adjusted EBITDA / FCF 为金额区间，单位不同 |
| UBS / J.P. Morgan 观点 | 券商对利润、区域和风险的解释 | 项目已录入券商研报摘录 | 否 | 否 | 不计算，仅作为归因和风险说明 | Topline 分析卡、Bottomline 分析卡、风险变量 | 未录入原文的观点不新增 | 需要人工复核券商观点是否仍为最新版 |

## 缺失数据处理原则

- 缺失历史实际值不补 0、不反推、不用示例值。
- 公司指引和券商预测分开呈现，不混入历史实际趋势。
- reported、constant currency、like-for-like 只在同口径下比较。
- 图表下方保留来源说明；计算指标在本文件写明公式。
