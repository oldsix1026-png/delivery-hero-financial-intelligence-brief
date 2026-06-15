import { useMemo, useState, type ReactNode } from 'react'
import AnalysisPanel from './components/AnalysisPanel'
import BrandFilter from './components/BrandFilter'
import EventTypeFilter from './components/EventTypeFilter'
import KpiCard from './components/KpiCard'
import MovementSummaryCard from './components/MovementSummaryCard'
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
  movementSummaries,
  quarterlyMovementSummary,
  regionOptions,
} from './data/deliveryHeroIntelligenceData'
import { sources } from './data/deliveryHeroSources'

function SectionHeading({ number, title, question, description }: {
  number: string
  title: string
  question: string
  description: string
}) {
  return (
    <header className="section-heading">
      <span>{number} · {title}</span>
      <h2>{question}</h2>
      <p>{description}</p>
    </header>
  )
}

function SectionCard({ title, subtitle, children, className = '' }: {
  title: string
  subtitle?: string
  children: ReactNode
  className?: string
}) {
  return (
    <article className={`section-card ${className}`}>
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
            <h1>Delivery Hero财报分析与情报追踪</h1>
            <p>以近三年季度趋势为主线，将官方财务数据与 UBS、J.P. Morgan 的经营归因对应呈现，并追踪最近 90 天集团与区域品牌的重要动作。</p>
            <div className="hero__meta">
              <span>12 个季度实际值</span><span>官方披露与券商观点分层</span>
              <span>集团、区域、品牌严格区分</span><span>情报观察期 2026Q1</span>
            </div>
          </div>
          <aside className="hero__signal">
            <span>核心判断 · 基于研报数据观察</span>
            <strong>收入质量改善，增长引擎向多品类与重点区域集中</strong>
            <p>Revenue 增速持续快于 GMV；MENA、Americas 与 Integrated Verticals 提供增量，Asia 的恢复仍需跨季度验证。</p>
            <a href="#overview">查看集团增长质量 →</a>
          </aside>
        </section>

        <div className="official-label">财务数据截至 2026-03-31 · 情报观察期 2026Q1 · 金额默认欧元</div>
        <section className="kpi-grid" aria-label="近三年核心指标趋势">
          {heroKpis.map((item) => <KpiCard key={item.label} {...item} />)}
        </section>
        <SectionCard title="集团近三年增长轨迹" subtitle="Q2 2023–Q1 2026 · 实际值 · 左轴 GMV、右轴 Total Segment Revenue" className="hero-trend-card">
          <QuarterlyTrendChart />
          <p className="method-note">Q2 2023 与 Q4 2025 单季值由官方全年值减去其他已披露季度计算并单独标注；趋势图不包含券商预测。</p>
        </SectionCard>

        <section className="page-section" id="overview">
          <SectionHeading number="01" title="集团增长质量" question="集团增长是否稳健？收入为什么快于 GMV？" description="左侧回答发生了什么，右侧区分公司披露、券商观点和基于数据的观察。" />
          <div className="analysis-layout">
            <div className="data-panel">
              <SectionCard title="GMV 与 Revenue 季度趋势" subtitle="近 12 个季度 · Reported actual">
                <QuarterlyTrendChart />
              </SectionCard>
              <SectionCard title="同比增速差" subtitle="由实际值计算的 Reported YoY，用于观察收入与 GMV 的增长差异">
                <GrowthQualityChart />
                <div className="difference-callout"><span>Q1 2026 公司披露 LfL 增速差</span><strong>+9.0ppt</strong><p>Revenue 17.8% vs GMV 8.8%</p></div>
              </SectionCard>
            </div>
            <AnalysisPanel title="增长质量归因" items={growthAnalysis} />
          </div>
          <div className="conclusion"><i>01</i><p><strong>底部总结：</strong>收入快于 GMV 并非单一提价结果，公司披露的主要驱动是 Quick Commerce、订阅、AdTech 和 own-delivery；券商认为区域结构与 Integrated Verticals 的超预期也在放大差异。</p></div>
        </section>

        <section className="page-section" id="regions">
          <SectionHeading number="02" title="区域增长结构" question="增长来自哪些区域？区域表现为何分化？" description="规模、增速和趋势同时呈现，避免用单一国家或品牌表现替代集团判断。" />
          <div className="analysis-layout">
            <div className="data-panel">
              <div className="two-column">
                <SectionCard title="Q1 2026 区域 GMV 构成" subtitle="分部含 Integrated Verticals，不能简单加总为集团 GMV">
                  <RegionalGmvDonutChart />
                </SectionCard>
                <SectionCard title="Q1 2026 区域增速" subtitle="Reported 与 LfL 口径并列">
                  <RegionalGrowthBarChart />
                </SectionCard>
              </div>
              <SectionCard title="重点区域近三年趋势" subtitle="Q2 2023–Q1 2026 · Reported actual">
                <RegionalGrowthTrendChart />
              </SectionCard>
            </div>
            <AnalysisPanel title="区域分化归因" items={regionalAnalysis} />
          </div>
          <div className="conclusion"><i>02</i><p><strong>底部总结：</strong>MENA 与 Americas 是当前增长主力，Integrated Verticals 提供更高增速；Asia 已出现修复，但 reported 数值仍受范围、汇率和高通胀会计影响。</p></div>
        </section>

        <section className="page-section" id="strategy">
          <SectionHeading number="03" title="战略增长引擎" question="Everyday App 与 Quick Commerce 如何支撑增长？" description="Quick Commerce 仅展示公司明确披露的节点，不补造连续季度；战略飞轮用于解释用户、商户、履约和技术之间的关系。" />
          <div className="analysis-layout">
            <div className="data-panel">
              <SectionCard title="Quick Commerce 占 Group GMV 比例" subtitle="公司仅明确披露部分同季节点：Q1 2024、Q1 2025、Q1 2026">
                <QuickCommerceTrendChart />
                <div className="qc-note"><strong>FY 2025 Quick Commerce GMV 超过 €7.5bn</strong><span>Q1 2026 同比 +30% LfL，占 Group GMV 18%</span></div>
              </SectionCard>
              <div className="strategy-metrics">{strategyMetrics.map((item) => <StrategyMetric key={item.label} {...item} />)}</div>
              <SectionCard title="Everyday App 战略飞轮" subtitle="基于研报与官方战略表述整理">
                <StrategyFlywheel steps={flywheelSteps} />
              </SectionCard>
            </div>
            <AnalysisPanel title="战略能力归因" items={strategyAnalysis} />
          </div>
          <div className="conclusion"><i>03</i><p><strong>底部总结：</strong>Quick Commerce 扩大使用场景，订阅增强留存，AdTech 提高商户价值，own-delivery 与 AI 改善履约和开发效率；这些能力共同支撑收入转化与盈利改善。</p></div>
        </section>

        <section className="page-section" id="guidance">
          <SectionHeading number="04" title="盈利、指引与风险" question="盈利改善是否可持续？市场关注哪些风险？" description="Adjusted EBITDA 与 Free Cash Flow 按半年或全年披露，未被强行拆成季度序列。" />
          <div className="analysis-layout">
            <div className="data-panel">
              <SectionCard title="盈利与现金流披露趋势" subtitle="半年/全年频率 · 实际值；FY 2023 FCF 未在图中补造">
                <ProfitabilityTrendChart />
              </SectionCard>
              <SectionCard title="FY26 公司指引" subtitle="GMV 与 Revenue 为 LfL；Adjusted EBITDA 与 FCF 为金额区间">
                <GuidanceRangeChart />
                <div className="guidance-summary">
                  {guidance.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.display}</strong></div>)}
                </div>
              </SectionCard>
              <div className="risk-matrix">
                {risks.map((risk) => <article key={risk.title} className={`risk-card risk-card--${risk.level === '较高' ? 'high' : risk.level === '中等' ? 'medium' : 'watch'}`}><span>{risk.level}</span><h3>{risk.title}</h3><p>{risk.text}</p></article>)}
              </div>
            </div>
            <AnalysisPanel title="盈利、指引与风险归因" items={profitabilityAnalysis} />
          </div>
          <div className="conclusion"><i>04</i><p><strong>底部总结：</strong>盈利与现金流方向已改善，但 FY26 仍包含重点市场投入；韩国修复、MENA 竞争、监管事项、汇率及资本交易决定改善能否持续。</p></div>
        </section>

        <section className="page-section" id="intelligence">
          <SectionHeading number="05" title="情报追踪" question="2026Q1 集团与区域品牌发生了什么？" description="观察期：2026Q1；仅收录官方披露或至少三家可信媒体独立报道的事项。" />
          <div className="movement-grid">{movementSummaries.map((item) => <MovementSummaryCard key={item.category} {...item} />)}</div>
          <div className="filters">
            <BrandFilter options={brandOptions} value={brand} onChange={setBrand} />
            <RegionFilter options={regionOptions} value={region} onChange={setRegion} />
            <EventTypeFilter options={eventTypeOptions} value={eventType} onChange={setEventType} />
          </div>
          <SectionCard title={`本季度事件列表 · ${filteredEvents.length} 条`} subtitle="观察期：2026Q1 · 前台不展示具体日期">
            {filteredEvents.length > 0 ? <Timeline items={filteredEvents} /> : <p className="no-results">当前筛选组合没有可核验事件，请调整筛选条件。</p>}
          </SectionCard>
          <SectionCard title="2026Q1 主要动向总结" subtitle="管理层关注事项">
            <div className="strategy-metrics">{quarterlyMovementSummary.map((item) => <StrategyMetric key={item.category} label={item.category} value="" note={item.text} />)}</div>
          </SectionCard>
        </section>

        <section className="page-section sources-section" id="sources">
          <SectionHeading number="06" title="信息来源" question="数字、判断与事件如何追溯？" description="财务趋势以 Delivery Hero 官方披露为主；研报只用于归因和交叉核验；品牌事件优先使用品牌或集团官方页面。" />
          <div className="source-grid">
            {sources.map((source) => <article key={source.id}><span>{source.type}</span><h3>{source.title}</h3><p>{source.institution}{source.publishedAt ? ` · ${source.publishedAt}` : ''}</p><p>{source.note}</p>{source.url && <a href={source.url} target="_blank" rel="noreferrer">访问来源 ↗</a>}</article>)}
          </div>
          <div className="source-policy"><i>口径</i><p>券商观点不代表 Delivery Hero 官方结论；预测值不进入历史实际趋势；reported、CC、LfL 仅在同口径下比较；集团、区域、国家和品牌数据不相互替代。</p></div>
        </section>
      </main>
      <footer><span>Delivery Hero财报分析与情报追踪</span><span>情报观察期 2026Q1 · 核验于 2026-06-15</span></footer>
    </div>
  )
}
