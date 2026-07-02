# Delivery Hero 看板指标口径说明

本文件记录看板使用的核心指标口径。财务数据仅使用 Delivery Hero 项目已有数据、公司官方披露、IR 文件、公司公告和已录入券商观点；未使用 DoorDash 数据。

| 指标名称 | 中文含义 | 数据来源 | 单位 | 是否官方披露 | 是否看板计算 | 计算公式 | 使用位置 | 缺失数据处理 | 需要人工复核的点 |
|---|---|---|---|---|---|---|---|---|---|
| Group GMV | 集团平台交易总额 | Delivery Hero Trading Update / Quarterly Statement / FY results | EUR million / EUR billion | 是 | 否 | 官方披露值 | 趋势总览：Group GMV 与 Total Segment Revenue；趋势总览右下角指标卡 | 缺失季度不补 0，不连线 | Q2 2023、Q4 2025 单季值由官方全年值减去其他已披露季度，需人工复核计算过程 |
| Total Segment Revenue | 各业务分部确认收入，主要来自佣金、配送服务、广告、订阅和商户服务等 | Delivery Hero Trading Update / Quarterly Statement / FY results | EUR million / EUR billion | 是 | 否 | 官方披露值 | 趋势总览：Group GMV 与 Total Segment Revenue；趋势总览右下角指标卡 | 缺失季度不补 0，不用 DoorDash 或示例数据替代 | reported、constant currency、LfL 口径不可混用 |
| MENA GMV | MENA 区域平台交易额 | Delivery Hero 官方披露 | EUR million / EUR billion | 是 | 否 | 官方披露值 | 趋势总览右下角指标卡；Topline 区域结构图 | 缺失季度不补 0 | 土耳其高通胀会计影响需与 LfL / reported 口径分开说明 |
| Integrated Verticals GMV | Integrated Verticals 业务分部 GMV，主要反映 Quick Commerce 等战略业务规模 | Delivery Hero 官方披露 | EUR million / EUR billion | 是 | 否 | 官方披露值 | 趋势总览右下角指标卡；Topline 区域结构图 | 缺失季度不补 0 | Integrated Verticals 是业务分部视图，不能简单加总为集团 GMV |
| Revenue YoY / GMV YoY | 收入和交易额同比增速 | 基于官方历史实际值 | % | 部分为官方披露，部分为看板计算 | 是 | 本期实际值 / 上年同期实际值 - 1 | 趋势总览：增长质量柱状图 | 无上年同期时留空，不画点、不补 0 | 公司披露的 LfL YoY 与看板计算的 reported YoY 需要分开说明 |
| Regional LfL YoY | 区域 like-for-like 同比增长 | Delivery Hero Q1 2026 披露 | % | 是 | 否 | 公司披露 LfL YoY | Topline：Q1 2026 区域增速 | 缺失则留空，不用 reported 增速替代 | LfL 与 reported 需要同图但不同颜色展示 |
| Quick Commerce GMV share | Quick Commerce 占 Group GMV 比例 | Delivery Hero 公司披露 | % / EUR billion | 是 | 否 | 公司披露比例或金额 | Topline：Quick Commerce 趋势图 | 未披露 GMV 金额的季度只展示占比；FY 2025 金额单独用文字说明 | Q1 2026 +30% LfL 为公司披露增长，不反推单季 GMV |
| Adjusted EBITDA | 调整后 EBITDA | Delivery Hero FY results / H1 results / 公司指引 | EUR million | 是 | 否 | 官方披露值 | 趋势总览：Adjusted EBITDA、Free Cash Flow 与 EBITDA / GMV；Bottomline：利润改善说明 | 未披露季度不补造；历史实际值和 FY26 指引分开 | 公司指引区间与 UBS/J.P. Morgan 预测不可混同 |
| Free Cash Flow | 自由现金流 | Delivery Hero FY results / H1 results / 公司指引 | EUR million | 是 | 否 | 官方披露值 | 趋势总览：Adjusted EBITDA、Free Cash Flow 与 EBITDA / GMV；Bottomline：利润与现金流说明 | FY 2023 FCF 未在图中补造，缺失处不连线 | FCF 正负波动需结合营运资本、交易执行和投入回收速度复核 |
| EBITDA / GMV | Adjusted EBITDA 占同频率 Group GMV 的比例 | Adjusted EBITDA 与 Group GMV 均来自 Delivery Hero 官方实际披露；比例由看板计算 | % | 否 | 是 | Adjusted EBITDA 实际值 / 同频率 Group GMV 实际值 | 趋势总览：Adjusted EBITDA、Free Cash Flow 与 EBITDA / GMV | 如果某期间缺少同频率 Group GMV 实际值，则不计算、不画点；FY 2023 缺少完整 Group GMV，保持空值 | 当前计算值：H1 2024 为 1.0%，FY 2024 为 1.4%，H1 2025 为 1.7%，FY 2025 为 1.8%；需复核同频率 GMV 汇总口径 |
| FY26 公司指引 | 管理层对 GMV、Revenue、Adjusted EBITDA、FCF 的全年展望 | Delivery Hero 公司指引 | % / EUR million | 是 | 否 | 公司披露区间 | Bottomline：FY26 公司指引 | 缺失指标不展示；不使用券商预测代替公司指引 | GMV / Revenue 为 LfL 增速，Adjusted EBITDA / FCF 为金额区间，单位不同 |
| UBS / J.P. Morgan 观点 | 券商对利润、区域和风险的判断 | 项目已录入券商研报摘录 | 不适用 | 否 | 否 | 不计算，仅作为归因和风险说明 | Topline 分析卡、Bottomline 分析卡、风险变量 | 未录入原文的观点不新增 | 需要人工复核券商观点是否仍为最新版 |

## 百分点口径

- 看板中“收入增速高于 GMV 的 9.0 个百分点”来自 Total Segment Revenue 17.8% LfL 与 Group GMV 8.8% LfL 的差值。
- 该数值是两个同比增速之间的差值，不是普通百分比，因此不用英文缩写，也不写成 `9%`。

## 缺失数据处理原则

- 缺失历史实际值不补 0、不反推、不用示例值。
- 公司指引和券商预测分开呈现，不混入历史实际趋势。
- EBITDA / GMV 只在 Adjusted EBITDA 与同频率 Group GMV 均存在时计算。
- 图表下方保留来源说明；计算指标在本文件写明公式。
