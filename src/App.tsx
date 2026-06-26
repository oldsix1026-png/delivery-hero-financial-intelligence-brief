import { useMemo, useState, type ReactNode } from 'react'
import AnalysisPanel from './components/AnalysisPanel'
import BrandFilter from './components/BrandFilter'
import EventTypeFilter from './components/EventTypeFilter'
import KpiCard from './components/KpiCard'
import RegionFilter from './components/RegionFilter'
import SectionNav from './components/SectionNav'
import StrategyFlywheel from './components/StrategyFlywheel'
import Timeline from './components/Timeline'
import GrowthQualityChart from './components/charts/GrowthQualityChart'
import GuidanceRangeChart from './components/charts/GuidanceRangeChart'
import ProfitabilityTrendChart from './components/charts/ProfitabilityTrendChart'
import QuarterlyTrendChart from './components/charts/QuarterlyTrendChart'
import QuickCommerceTrendChart from './components/charts/QuickCommerceTrendChart'
import RegionalGmvDonutChart from './components/charts/RegionalGmvDonutChart'
import RegionalGrowthBarChart from './components/charts/RegionalGrowthBarChart'
import RegionalGrowthTrendChart from './components/charts/RegionalGrowthTrendChart'
import {
  flywheelSteps,
  growthAnalysis,
  guidance,
  heroKpis,
  keyTermCards,
  profitabilityAnalysis,
  regionalAnalysis,
  risks,
  strategyAnalysis,
  strategyMetrics,
} from './data/deliveryHeroFinancialData'
import {
  brandOptions,
  eventTypeOptions,
  intelligenceEvents,
  regionOptions,
} from './data/deliveryHeroIntelligenceData'
import { sources } from './data/deliveryHeroSources'

function SectionHeading({ number, title, question, description }: {
  number: string
  title: string
  question: string
  description: string
}) {
  const isNumbered = /^\d{2}$/.test(number)

  if (isNumbered) {
    return (
      <header className="section-heading">
        <span className="section-number">{number}</span>
        <h2>{title}</h2>
        <strong className="section-subtitle">{question}</strong>
        <p className="section-description">{description}</p>
      </header>
    )
  }

  return (
    <header className="section-heading">
      <span>{number} · {title}</span>
      <h2>{question}</h2>
      <p className="section-description">{description}</p>
    </header>
  )
}

function SectionCard({ title, subtitle, source, children, className = '' }: {
  title: string
  subtitle?: string
  source?: string
  children: ReactNode
  className?: string
}) {
  return (
    <article className={`section-card ${className}`}>
      {source && <span className="source-badge">数据来源：{source}</span>}
      <header className="card-header"><h3>{title}</h3>{subtitle && <p>{subtitle}</p>}</header>
      {children}
    </article>
  )
}

function StrategyMetric({ label, value, note }: { label: string; value: string; note: string }) {
  return <article className="compact-metric"><span>{label}</span><strong>{value}</strong><p>{note}</p></article>
}

export default function App() {
  const [brand, setBrand] = useState('全部')
  const [region, setRegion] = useState('全部')
  const [eventType, setEventType] = useState('全部')

  const filteredEvents = useMemo(() => intelligenceEvents
    .filter((item) => brand === '全部' || item.brand === brand)
    .filter((item) => region === '全部' || item.region === region)
    .filter((item) => eventType === '全部' || item.eventType === eventType)
    .sort((a, b) => b.eventDate.localeCompare(a.eventDate)), [brand, region, eventType])

  return (
    <div id="top">
      <SectionNav />
      <main>
        <section className="hero">
          <div className="hero__copy">
            <span className="eyebrow">Q1 2026 · 管理层财务与情报简报</span>
            <h1>Delivery Hero 的增长质量取决于业务组合、区域执行和现金流验证</h1>
            <ul className="hero-bullets">
              <li>Group GMV 与 Total Segment Revenue 继续增长，Revenue 增速高于 GMV 说明收入转化能力改善。</li>
              <li>Quick Commerce、Everyday App、MENA/KSA 和 AdTech 共同提供新增量。</li>
              <li>UBS 与 J.P. Morgan 更关注韩国修复、MENA 竞争和 FY26 EBITDA/FCF 指引。</li>
              <li>资产处置、债务期限管理和潜在交易会继续影响现金流、估值和资本结构。</li>
            </ul>
            <div className="hero__meta">
              <span>12 个季度实际值</span><span>官方披露与券商观点分层</span>
              <span>集团、区域、品牌严格区分</span><span>情报观察期 2026Q1</span>
            </div>
          </div>
          <aside className="hero__signal">
            <span>核心判断</span>
            <strong>增长质量正在改善，但投资者会继续检验现金流和资本结构</strong>
            <ul className="hero-bullets hero-bullets--dark">
              <li>Revenue 增速持续快于 GMV，Quick Commerce、订阅、AdTech 和 own-delivery 是主要业务解释。</li>
              <li>MENA、Americas 与 Integrated Verticals 是当前主要增量来源。</li>
              <li>韩国订单和 GMV 恢复、战略复盘、资产出售和债务期限管理决定后续估值弹性。</li>
            </ul>
            <a href="#overview">查看集团增长质量 →</a>
          </aside>
        </section>

        <section className="page-section" id="terms">
          <SectionHeading number="术语" title="关键术语 / 事件速读" question="关键术语解释" description="这些术语贯穿 Delivery Hero 的集团、区域、战略和风险分析；页面聚焦影响本季判断的核心概念。" />
          <div className="term-grid">
            {keyTermCards.map((item) => <article key={item.term}><strong>{item.term}</strong><p>{item.body}</p></article>)}
          </div>
        </section>

        <div className="official-label">财务数据截至 2026-03-31 · 情报观察期 2026Q1 · 金额默认欧元</div>
        <section className="kpi-grid" aria-label="近三年核心指标趋势">
          {heroKpis.map((item) => <KpiCard key={item.label} {...item} source="官方公开财报" />)}
        </section>
        <SectionCard title="集团近三年增长轨迹" subtitle="Q2 2023–Q1 2026 · 实际值 · 左轴 GMV、右轴 Total Segment Revenue" source="官方公开财报" className="hero-trend-card">
          <QuarterlyTrendChart />
          <p className="method-note">Q2 2023 与 Q4 2025 单季值由官方全年值减去其他已披露季度计算并单独标注；趋势图不包含券商预测。</p>
        </SectionCard>

        <section className="page-section" id="overview">
          <SectionHeading number="01" title="核心指标与规模趋势" question="Q1 2026 Revenue 增速高于 GMV 9.0 个百分点，收入转化继续改善" description="Delivery Hero 仍在扩张，Q1 2026 Revenue LfL 增长 17.8%，Group GMV LfL 增长 8.8%；增速差来自 Quick Commerce、订阅、AdTech 和 own-delivery 的业务组合变化。" />
          <div className="analysis-layout">
            <div className="data-panel">
              <SectionCard title="GMV 与 Revenue 季度趋势" subtitle="近 12 个季度 · Reported actual" source="官方公开财报">
                <QuarterlyTrendChart />
              </SectionCard>
              <SectionCard title="同比增速差" subtitle="由实际值计算的 Reported YoY，用于观察收入与 GMV 的增长差异" source="官方公开财报">
                <GrowthQualityChart />
                <div className="difference-callout"><span>Q1 2026 公司披露 LfL 增速差</span><strong>+9.0ppt</strong><p>Revenue 17.8% vs GMV 8.8%</p></div>
              </SectionCard>
            </div>
            <AnalysisPanel title="收入转化改善来自业务组合变化" items={growthAnalysis} />
          </div>
          <div className="conclusion"><i>01</i><p><strong>底部总结：</strong>收入增速持续高于 GMV，说明平台从交易规模向收入的转化能力改善；背后原因包括 Quick Commerce、订阅、AdTech 和 own-delivery，而不是单一提价或单个市场拉动。</p></div>
        </section>

        <section className="page-section" id="regions">
          <SectionHeading number="02" title="增长来源与业务结构" question="MENA 增长 16.1%、Americas 增长 18.1%，韩国业务恢复仍取决于订单、GMV 和技术整合" description="增量来自多区域组合，而不是单一市场拉动；韩国业务恢复取决于订单、GMV、订阅、own-delivery、商户工具和技术整合效果。" />
          <div className="analysis-layout">
            <div className="data-panel">
              <div className="two-column">
                <SectionCard title="Q1 2026 区域 GMV 构成" subtitle="分部含 Integrated Verticals，不能简单加总为集团 GMV" source="官方公开财报">
                  <RegionalGmvDonutChart />
                </SectionCard>
                <SectionCard title="Q1 2026 区域增速" subtitle="Reported 与 LfL 口径并列" source="官方公开财报">
                  <RegionalGrowthBarChart />
                </SectionCard>
              </div>
              <SectionCard title="重点区域近三年趋势" subtitle="Q2 2023–Q1 2026 · Reported actual" source="官方公开财报">
                <RegionalGrowthTrendChart />
              </SectionCard>
            </div>
            <AnalysisPanel title="区域和品类组合解释增量来源" items={regionalAnalysis} />
          </div>
          <div className="conclusion"><i>02</i><p><strong>底部总结：</strong>MENA 与 Americas 是当前增长主力，Integrated Verticals 提供更高增速；韩国订单和 GMV 已有恢复迹象，但竞争、补贴、own-delivery、订阅和技术整合仍会影响利润改善速度。</p></div>
        </section>

        <section className="page-section" id="strategy">
          <SectionHeading number="03" title="盈利质量与经营杠杆" question="Keyword Ads 收入同比增长 170%，Everyday App 提高高频场景和收入转化" description="Everyday App 通过多品类入口提高使用频次和跨品类消费，再通过广告、商户服务和履约效率改善收入转化。" />
          <div className="analysis-layout">
            <div className="data-panel">
              <SectionCard title="Quick Commerce 占 Group GMV 比例" subtitle="公司仅明确披露部分同季节点：Q1 2024、Q1 2025、Q1 2026" source="官方公开财报">
                <QuickCommerceTrendChart />
                <div className="qc-note"><strong>FY 2025 Quick Commerce GMV 超过 €7.5bn</strong><span>Q1 2026 同比 +30% LfL，占 Group GMV 18%</span></div>
              </SectionCard>
              <div className="strategy-metrics">{strategyMetrics.map((item) => <StrategyMetric key={item.label} {...item} />)}</div>
              <SectionCard title="Everyday App 战略飞轮" subtitle="基于研报与官方战略表述整理" source="财报 + 券商研报">
                <StrategyFlywheel steps={flywheelSteps} />
              </SectionCard>
            </div>
            <AnalysisPanel title="Everyday App 连接高频场景和收入结构" items={strategyAnalysis} />
          </div>
          <div className="conclusion"><i>03</i><p><strong>底部总结：</strong>Everyday App 的逻辑是把外卖、杂货、零售、订阅和广告放在同一高频入口，先提高使用频次和跨品类消费，再提升广告变现、商户服务和履约效率；仍需验证不同市场执行、客户获取成本、基础设施投入和复购能否改善利润。</p></div>
        </section>

        <section className="page-section" id="guidance">
          <SectionHeading number="04" title="财务预测" question="FY26 Adjusted EBITDA 指引为 €910m–€960m，FCF 指引为大于 €200m" description="公司指引显示盈利和现金流方向改善；现金流、韩国订单和 GMV 恢复、MENA 竞争、资产出售、债务期限和潜在交易会影响改善持续性。" />
          <div className="analysis-layout">
            <div className="data-panel">
              <SectionCard title="盈利与现金流披露趋势" subtitle="半年/全年频率 · 实际值；FY 2023 FCF 未在图中补造" source="官方公开财报">
                <ProfitabilityTrendChart />
              </SectionCard>
              <SectionCard title="FY26 公司指引" subtitle="GMV 与 Revenue 为 LfL；Adjusted EBITDA 与 FCF 为金额区间" source="公司指引">
                <GuidanceRangeChart />
                <div className="guidance-summary">
                  {guidance.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.display}</strong></div>)}
                </div>
              </SectionCard>
              <div className="risk-matrix">
                {risks.map((risk) => <article key={risk.title} className={`risk-card risk-card--${risk.level === '较高' ? 'high' : risk.level === '中等' ? 'medium' : 'watch'}`}><span>观察变量</span><h3>{risk.title}</h3><p>{risk.text}</p></article>)}
              </div>
            </div>
            <AnalysisPanel title="FY26 财务预测取决于现金流、韩国、MENA 和资本结构" items={profitabilityAnalysis} />
          </div>
          <div className="conclusion"><i>04</i><p><strong>底部总结：</strong>盈利与现金流方向已改善，但 FY26 仍包含重点市场投入；韩国订单和 GMV 恢复、MENA 竞争、监管事项、资产出售、债务期限和潜在交易会决定改善能否持续。</p></div>
        </section>

        <section className="page-section" id="intelligence">
          <SectionHeading number="05" title="公开事件时间线" question="2026Q1 公开事件集中在盈利改善、资产出售和债务期限管理" description="观察期：2026Q1；仅收录官方披露或至少三家可信媒体独立报道的事项。" />
          <div className="filters">
            <BrandFilter options={brandOptions} value={brand} onChange={setBrand} />
            <RegionFilter options={regionOptions} value={region} onChange={setRegion} />
            <EventTypeFilter options={eventTypeOptions} value={eventType} onChange={setEventType} />
          </div>
          <SectionCard title={`本季度公开事件时间线 · ${filteredEvents.length} 条`} subtitle="默认按日期倒序排列，保留日期、分类、标题、事件说明、影响判断和来源链接">
            {filteredEvents.length > 0 ? <Timeline items={filteredEvents} /> : <p className="no-results">当前筛选组合没有可核验事件，请调整筛选条件。</p>}
          </SectionCard>
        </section>

        <section className="page-section sources-section" id="sources">
          <SectionHeading number="06" title="信息来源" question="信息来源与口径说明" description="财务趋势以 Delivery Hero 官方披露为主；研报只用于归因和交叉核验；品牌事件优先使用品牌或集团官方页面。" />
          <div className="source-grid">
            {sources.map((source) => <article key={source.id}><span>{source.type}</span><h3>{source.title}</h3><p>{source.institution}{source.publishedAt ? ` · ${source.publishedAt}` : ''}</p><p>{source.note}</p>{source.url && <a href={source.url} target="_blank" rel="noreferrer">访问来源 ↗</a>}</article>)}
          </div>
          <div className="source-policy"><i>口径</i><p>公司披露用于确认实际数据和指引，UBS 与 J.P. Morgan 用于解释区域差异、投资回报、模型修订和风险；预测值不进入历史实际趋势，reported、constant currency 和 like-for-like 仅在同口径下比较。</p></div>
        </section>
      </main>
      <footer><span>Delivery Hero 财报分析与公开事件时间线</span><span>公开事件观察期 2026Q1 · 核验于 2026-06-15</span></footer>
    </div>
  )
}
