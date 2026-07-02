import { useMemo, useState, type ReactNode } from 'react'
import AnalysisPanel from './components/AnalysisPanel'
import BrandFilter from './components/BrandFilter'
import EventTypeFilter from './components/EventTypeFilter'
import RegionFilter from './components/RegionFilter'
import SectionNav from './components/SectionNav'
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
  guidance,
  heroKpis,
  keyTermCards,
  profitabilityAnalysis,
  regionalAnalysis,
  risks,
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

  if (!number) {
    return (
      <header className="section-heading section-heading--major">
        <h2>{title}</h2>
        {question && <strong className="section-subtitle">{question}</strong>}
        {description && <p className="section-description">{description}</p>}
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
            <span className="eyebrow">2026年上半年 · 管理层财务与情报简报</span>
            <h1>Delivery Hero 财报与<br />业务情报看板</h1>
            <ul className="hero-bullets">
              <li><b>Topline：</b>Q1 2026 Group GMV 和 Total Segment Revenue 保持增长，收入增速高于 GMV，MENA、Americas、Integrated Verticals、Quick Commerce、订阅和 AdTech 带来业务组合变化。</li>
              <li><b>Bottomline：</b>Adjusted EBITDA 和 Free Cash Flow 保持改善，利润表现受韩国业务恢复、营销投入、技术投入、交易执行和 Quick Commerce 投资回报共同影响。</li>
            </ul>
            <div className="hero-judgment">
              <h2>本季度核心判断</h2>
              <ul>
                <li>收入增速高于 GMV，收入转化改善；Quick Commerce、订阅、AdTech 和 own-delivery 改变收入结构。</li>
                <li>Adjusted EBITDA 和 Free Cash Flow 保持改善，FY26 公司指引继续指向盈利和现金流增长。</li>
                <li>成本压力来自竞争、营销、技术投入、交易执行和韩国业务恢复节奏。</li>
              </ul>
            </div>
            <div className="hero__meta">
              <span>12 个季度实际值</span><span>公司披露与券商观点分层</span>
              <span>历史实际值与预测值分开</span><span>情报观察期 2026年1–6月</span>
            </div>
          </div>
        </section>

        <div className="official-label">财务数据截至 2026-03-31 · 情报观察期 2026年1–6月 · 金额默认欧元</div>

        <section className="page-section major-section" id="financial">
          <SectionHeading number="" title="一、财报分析" question="" description="" />
        </section>

        <section className="page-section page-section--nested" id="trend">
          <SectionHeading number="" title="趋势总览" question="Q1 2026 收入增速高于 GMV 9.0 个百分点，利润和现金流保持改善" description="" />
          <div className="kpi-grid">
            {heroKpis.map((item) => <StrategyMetric key={item.label} label={item.label} value={item.value} note={`${item.change} · ${item.note}`} />)}
          </div>
          <div className="trend-chart-grid">
            <SectionCard title="Group GMV 与 Total Segment Revenue 同步增长" source="官方公开财报">
              <div className="merged-growth-card">
                <QuarterlyTrendChart />
                <div className="growth-quality-strip">
                  <GrowthQualityChart />
                </div>
              </div>
              <div className="difference-callout"><span>Q1 2026 公司披露 LfL 增速差</span><strong>+9.0ppt</strong><p>Revenue 17.8% vs GMV 8.8%</p></div>
            </SectionCard>
            <SectionCard title="Adjusted EBITDA、Free Cash Flow 与 EBITDA / GMV" source="官方公开财报">
              <ProfitabilityTrendChart />
            </SectionCard>
          </div>
        </section>

        <section className="page-section page-section--nested" id="topline">
          <SectionHeading number="" title="1. Topline" question="MENA、Americas 和 Integrated Verticals 提供增量，Everyday App 提高收入结构质量" description="" />
          <div className="analysis-layout">
            <div className="data-panel">
              <div className="two-column">
                <SectionCard title="Q1 2026 区域 GMV 构成" source="官方公开财报">
                  <RegionalGmvDonutChart />
                </SectionCard>
                <SectionCard title="Q1 2026 区域增速" source="官方公开财报">
                  <RegionalGrowthBarChart />
                </SectionCard>
              </div>
              <SectionCard title="重点区域近三年趋势" source="官方公开财报">
                <RegionalGrowthTrendChart />
              </SectionCard>
              <SectionCard title="Everyday App 将餐饮、Quick Commerce 和广告连接成高频入口" source="财报 + 券商研报">
                <div className="everyday-intro">
                  <p><strong>Everyday App</strong> 是 Delivery Hero 试图把外卖、快商、零售和本地服务整合成高频入口的战略方向。<strong>Quick Commerce</strong> 是其提升频次、订单密度和收入结构的重要业务，但也可能带来履约和补贴投入压力。</p>
                </div>
                <QuickCommerceTrendChart />
                <div className="qc-note"><strong>FY 2025 Quick Commerce GMV 超过 €7.5bn</strong><span>Q1 2026 同比 +30% LfL，占 Group GMV 18%</span></div>
                <div className="strategy-metrics">{strategyMetrics.map((item) => <StrategyMetric key={item.label} {...item} />)}</div>
                <div className="everyday-strategy-note">
                  <h4>Quick Commerce 扩张提升收入质量，但履约投入仍需跟踪</h4>
                  <p>Delivery Hero 将 Everyday App 从单一餐饮外卖入口扩展为覆盖更多日常消费场景的平台。更多品类带来更多使用场景，使用场景增加后提升用户打开频率和订单频次，并进一步带动会员留存、广告收入、商户服务和履约效率改善，最终推动收入转化和利润改善。</p>
                </div>
              </SectionCard>
            </div>
            <AnalysisPanel title="区域和品类组合解释增量来源" items={regionalAnalysis} />
          </div>
        </section>

        <section className="page-section page-section--nested" id="bottomline">
          <SectionHeading number="" title="2. Bottomline" question="FY26 Adjusted EBITDA 指引为 €910m–€960m，利润改善来自收入转化、成本控制和资本结构动作" description="" />
          <div className="analysis-layout">
            <div className="data-panel">
              <SectionCard title="利润改善依赖成本控制、投资回报和现金流管理" source="官方公开财报 + 券商研报">
                <div className="profit-point-grid">
                  <article><span>Adjusted EBITDA</span><strong>€903m</strong><p>FY 2025，同比增长 30%</p></article>
                  <article><span>Free Cash Flow</span><strong>€250m</strong><p>FY 2025，连续第二年为正</p></article>
                  <article><span>FY26 EBITDA 指引</span><strong>€910m–€960m</strong><p>公司指引，不是券商预测</p></article>
                </div>
              </SectionCard>
              <SectionCard title="FY26 公司指引" source="公司指引">
                <GuidanceRangeChart />
                <div className="guidance-summary">
                  {guidance.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.display}</strong></div>)}
                </div>
              </SectionCard>
              <div className="risk-matrix">
                {risks.map((risk) => <article key={risk.title} className={`risk-card risk-card--${risk.level === '较高' ? 'high' : risk.level === '中等' ? 'medium' : 'watch'}`}><span>关键变量</span><h3>{risk.title}</h3><p>{risk.text}</p></article>)}
              </div>
            </div>
            <AnalysisPanel title="盈利质量改善来自 EBITDA、FCF 和投资回报约束" items={profitabilityAnalysis} />
          </div>
        </section>

        <section className="page-section" id="intelligence">
          <SectionHeading number="" title="二、竞品动态追踪" question="2026年上半年事件集中在业务恢复、资产出售、股权结构和治理调整" description="" />
          <div className="filters">
            <BrandFilter options={brandOptions} value={brand} onChange={setBrand} />
            <RegionFilter options={regionOptions} value={region} onChange={setRegion} />
            <EventTypeFilter options={eventTypeOptions} value={eventType} onChange={setEventType} />
          </div>
          <SectionCard title={`2026年上半年公开事件追踪 · ${filteredEvents.length} 条`}>
            {filteredEvents.length > 0 ? <Timeline items={filteredEvents} /> : <p className="no-results">当前筛选组合没有可核验事件，请调整筛选条件。</p>}
          </SectionCard>
        </section>

        <section className="page-section" id="terms">
          <SectionHeading number="术语" title="关键术语解释" question="关键术语解释" description="" />
          <div className="term-grid">
            {keyTermCards.map((item) => <article key={item.term}><strong>{item.term}</strong><p>{item.body}</p></article>)}
          </div>
        </section>

        <section className="page-section sources-section" id="sources">
          <SectionHeading number="06" title="信息来源" question="信息来源" description="" />
          <div className="source-grid">
            {sources.map((source) => <article key={source.id}><span>{source.type}</span><h3>{source.title}</h3><p>{source.institution}{source.publishedAt ? ` · ${source.publishedAt}` : ''}</p><p>{source.note}</p>{source.url && <a href={source.url} target="_blank" rel="noreferrer">访问来源 ↗</a>}</article>)}
          </div>
        </section>
      </main>
      <footer><span>Delivery Hero 财报分析与公开事件时间线</span><span>公开事件观察期 2026年1–6月 · 核验于 2026-06-26</span></footer>
    </div>
  )
}
