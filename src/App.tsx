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
  growthAnalysis,
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
            <h1>Delivery Hero 收入转化改善，利润和资本结构进入兑现期</h1>
            <ul className="hero-bullets">
              <li><b>Topline：</b>Q1 2026 Group GMV 增长 8.8% LfL，Total Segment Revenue 增长 17.8% LfL；收入增速高于 GMV 9.0 个百分点，说明交易规模向收入的转化继续改善。</li>
              <li><b>Bottomline：</b>FY26 Adjusted EBITDA 指引为 €910m–€960m，Free Cash Flow 指引大于 €200m；利润改善仍取决于韩国、MENA、Quick Commerce 投入回报和营销补贴节奏。</li>
            </ul>
            <div className="hero-judgment">
              <h2>本季核心判断</h2>
              <ul>
                <li>Total Segment Revenue 增速持续高于 Group GMV，Quick Commerce、订阅、AdTech 和 own-delivery 支撑收入结构改善。</li>
                <li>MENA、Americas 和 Integrated Verticals 是当前增量来源，韩国业务恢复改善亚洲表现，但竞争和技术整合仍影响利润速度。</li>
                <li>Adjusted EBITDA 和 Free Cash Flow 指引维持改善方向，资产出售、债务再融资和 Uber 持股提高资本结构关注度。</li>
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
          <SectionHeading number="" title="趋势总览" question="Q1 2026 收入增速高于 GMV 9.0 个百分点，利润和现金流指引保持改善方向" description="趋势总览只展示有来源的集团、区域和利润指标；金额单位为欧元，历史实际值与公司指引分开呈现。" />
          <div className="kpi-grid">
            {heroKpis.map((item) => <StrategyMetric key={item.label} label={item.label} value={item.value} note={`${item.change} · ${item.note}`} />)}
          </div>
          <div className="analysis-layout">
            <div className="data-panel">
              <SectionCard title="Group GMV 与 Total Segment Revenue 同步增长" subtitle="Q2 2023–Q1 2026 · 实际值 · 左轴 GMV、右轴 Total Segment Revenue" source="官方公开财报">
                <div className="merged-growth-card">
                  <QuarterlyTrendChart />
                  <div className="growth-quality-strip">
                    <GrowthQualityChart />
                  </div>
                </div>
                <div className="difference-callout"><span>Q1 2026 公司披露 LfL 增速差</span><strong>+9.0ppt</strong><p>Revenue 17.8% vs GMV 8.8%</p></div>
              </SectionCard>
              <SectionCard title="Adjusted EBITDA 与 Free Cash Flow 已进入年度改善区间" subtitle="半年/全年频率 · 实际值；FY 2023 FCF 未在图中补造" source="官方公开财报">
                <ProfitabilityTrendChart />
              </SectionCard>
            </div>
            <AnalysisPanel title="收入转化和利润改善来自业务组合与投入回报" items={[growthAnalysis[0], growthAnalysis[1], profitabilityAnalysis[0], profitabilityAnalysis[2]]} />
          </div>
          <div className="conclusion"><i>总览</i><p><strong>核心判断：</strong>Total Segment Revenue 是 Delivery Hero 在各业务分部确认的收入，主要来自佣金、配送服务、广告、订阅和商户服务等。它不同于 Group GMV：GMV 代表平台上的交易总额，收入代表公司真正确认进账的部分。因此，Revenue 增速高于 GMV 时，通常说明平台从交易额中转化收入的能力在提升。</p></div>
        </section>

        <section className="page-section page-section--nested" id="topline">
          <SectionHeading number="" title="1. Topline" question="MENA、Americas 和 Integrated Verticals 提供增量，Everyday App 提高收入结构质量" description="Topline 聚焦 Group GMV、Total Segment Revenue、区域结构、Quick Commerce、Everyday App、韩国业务恢复以及公司指引。" />
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
              <SectionCard title="Everyday App 将餐饮、Quick Commerce 和广告连接成高频入口" subtitle="先解释战略含义，再呈现 GMV、用户和收入代理指标" source="财报 + 券商研报">
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
          <div className="conclusion"><i>Topline</i><p><strong>核心判断：</strong>MENA 与 Americas 是当前增长主力，Integrated Verticals 提供更高增速；韩国业务恢复改善亚洲表现，但竞争、补贴、own-delivery、订阅和技术整合仍会影响收入质量和利润速度。</p></div>
        </section>

        <section className="page-section page-section--nested" id="bottomline">
          <SectionHeading number="" title="2. Bottomline" question="FY26 Adjusted EBITDA 指引为 €910m–€960m，利润改善来自收入转化、成本控制和资本结构动作" description="Bottomline 聚焦 Adjusted EBITDA、Free Cash Flow、利润率、投入压力、公司指引和风险变量。" />
          <div className="analysis-layout">
            <div className="data-panel">
              <SectionCard title="利润改善依赖成本控制、投资回报和现金流管理" subtitle="公司实际披露与券商观点分开呈现" source="官方公开财报 + 券商研报">
                <div className="profit-point-grid">
                  <article><span>Adjusted EBITDA</span><strong>€903m</strong><p>FY 2025，同比增长 30%</p></article>
                  <article><span>Free Cash Flow</span><strong>€250m</strong><p>FY 2025，连续第二年为正</p></article>
                  <article><span>FY26 EBITDA 指引</span><strong>€910m–€960m</strong><p>公司指引，不是券商预测</p></article>
                </div>
              </SectionCard>
              <SectionCard title="FY26 公司指引" subtitle="GMV 与 Revenue 为 LfL；Adjusted EBITDA 与 FCF 为金额区间" source="公司指引">
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
          <div className="conclusion"><i>Bottomline</i><p><strong>核心判断：</strong>FY 2025 Adjusted EBITDA 和 Free Cash Flow 已改善，FY26 指引继续指向盈利和现金流增长；韩国业务恢复、MENA 竞争、Quick Commerce 投资回报、营销投入、技术成本和交易执行会决定利润改善速度。</p></div>
        </section>

        <section className="page-section" id="intelligence">
          <SectionHeading number="" title="二、竞品动态追踪" question="2026年上半年事件集中在业务恢复、资产出售、股权结构和治理调整" description="观察期：2026年1–6月；事件按类型和品牌筛选，卡片标题保留判断句，摘要说明业务影响。" />
          <div className="filters">
            <BrandFilter options={brandOptions} value={brand} onChange={setBrand} />
            <RegionFilter options={regionOptions} value={region} onChange={setRegion} />
            <EventTypeFilter options={eventTypeOptions} value={eventType} onChange={setEventType} />
          </div>
          <SectionCard title={`2026年上半年公开事件追踪 · ${filteredEvents.length} 条`} subtitle="默认按日期倒序排列，保留日期、分类、标题、事件说明、影响说明和来源链接">
            {filteredEvents.length > 0 ? <Timeline items={filteredEvents} /> : <p className="no-results">当前筛选组合没有可核验事件，请调整筛选条件。</p>}
          </SectionCard>
        </section>

        <section className="page-section" id="terms">
          <SectionHeading number="术语" title="关键术语解释" question="关键术语解释" description="以下术语只用于说明 Delivery Hero 的收入口径、业务结构和风险，不作为独立分析方法展示。" />
          <div className="term-grid">
            {keyTermCards.map((item) => <article key={item.term}><strong>{item.term}</strong><p>{item.body}</p></article>)}
          </div>
        </section>

        <section className="page-section sources-section" id="sources">
          <SectionHeading number="06" title="信息来源" question="信息来源与口径说明" description="财务趋势以 Delivery Hero 官方披露为主；研报只用于归因和交叉核验；品牌事件优先使用品牌或集团官方页面。" />
          <div className="source-grid">
            {sources.map((source) => <article key={source.id}><span>{source.type}</span><h3>{source.title}</h3><p>{source.institution}{source.publishedAt ? ` · ${source.publishedAt}` : ''}</p><p>{source.note}</p>{source.url && <a href={source.url} target="_blank" rel="noreferrer">访问来源 ↗</a>}</article>)}
          </div>
          <div className="source-policy"><i>口径</i><p>公司披露用于确认实际数据和指引，UBS 与 J.P. Morgan 用于解释区域差异、投资回报、模型修订和风险；预测值不进入历史实际趋势，reported、constant currency 和 like-for-like 仅在同口径下比较。</p></div>
        </section>
      </main>
      <footer><span>Delivery Hero 财报分析与公开事件时间线</span><span>公开事件观察期 2026年1–6月 · 核验于 2026-06-26</span></footer>
    </div>
  )
}
