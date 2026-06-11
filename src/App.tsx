import { useMemo, useState, type ReactNode } from 'react'
import BrandFilter from './components/BrandFilter'
import InsightCard from './components/InsightCard'
import KpiCard from './components/KpiCard'
import RegionFilter from './components/RegionFilter'
import SectionNav from './components/SectionNav'
import StrategyFlywheel from './components/StrategyFlywheel'
import Timeline from './components/Timeline'
import ForecastRevisionChart from './components/charts/ForecastRevisionChart'
import GroupGrowthBarChart from './components/charts/GroupGrowthBarChart'
import GuidanceRangeChart from './components/charts/GuidanceRangeChart'
import RegionalGmvDonutChart from './components/charts/RegionalGmvDonutChart'
import RegionalGrowthBarChart from './components/charts/RegionalGrowthBarChart'
import {
  capabilityPath, efficiencySignals, financialInsights, flywheelSteps, guidance, heroKpis,
  profitabilityInsights, regionalInsights, regions, risks, strategicActions, strategyMetrics,
} from './data/deliveryHeroFinancialData'
import { brandOptions, eventTypeOptions, intelligenceEvents, regionOptions } from './data/deliveryHeroIntelligenceData'
import { sources } from './data/deliveryHeroSources'

function SectionHeading({ number, title, question, description }: { number: string; title: string; question: string; description: string }) {
  return <header className="section-heading"><span>{number} · {title}</span><h2>{question}</h2><p>{description}</p></header>
}

function SectionCard({ title, subtitle, children, className = '' }: { title: string; subtitle?: string; children: ReactNode; className?: string }) {
  return <article className={`section-card ${className}`}><header className="card-header"><h3>{title}</h3>{subtitle && <p>{subtitle}</p>}</header>{children}</article>
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
  const focusEvents = intelligenceEvents.slice(0, 3)

  return (
    <div id="top">
      <SectionNav />
      <main>
        <section className="hero">
          <div className="hero__copy">
            <span className="eyebrow">Q1 2026 · 管理层独立成果页</span>
            <h1>Delivery Hero财报分析与情报追踪</h1>
            <p>根据两份研报和官方公开情报，概括集团的核心增长逻辑、区域分化、战略能力与近期动态。</p>
            <div className="hero__meta">
              <span>集团与品牌分层</span><span>实际值与估算分开</span>
              <span>区域口径可追溯</span><span>情报来源直达</span>
            </div>
          </div>
          <aside className="hero__signal">
            <span>核心判断 · 基于研报数据观察</span>
            <strong>增长质量改善，区域修复仍不均衡</strong>
            <p>Revenue 增速高于 GMV，Quick Commerce、MENA、Americas 与 Integrated Verticals 提供增量；Asia 恢复仍需验证。</p>
            <a href="#overview">查看财报概览 →</a>
          </aside>
        </section>

        <div className="official-label">研报日期：2026-04-30 / 2026-05-01 · 官方情报截至 2026-06-11</div>
        <section className="kpi-grid" aria-label="Q1 2026 核心指标">{heroKpis.map((item) => <KpiCard key={item.label} {...item} />)}</section>

        <section className="page-section" id="overview">
          <SectionHeading number="01" title="财报概览" question="Delivery Hero 的整体经营表现如何？" description="Q1 2026 增长高于两家研报所列市场预期，收入增长快于 GMV；公司维持 FY26 指引。" />
          <div className="two-column">
            <SectionCard title="集团 GMV 与 Revenue 增速" subtitle="Q1 2026 YoY LfL · 公司披露"><GroupGrowthBarChart /></SectionCard>
            <SectionCard title="指引概览" subtitle="FY26 · 公司披露；Adjusted EBITDA 与 FCF 为预测区间">
              <div className="guidance-summary guidance-summary--stacked">{guidance.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.display}</strong></div>)}</div>
              <p className="method-note">LfL 为恒定汇率、剔除高通胀会计并按可比合并范围计算。FCF 指引另排除特定法律事项的异常现金流出。</p>
            </SectionCard>
          </div>
          <div className="insight-grid">{financialInsights.map((item) => <InsightCard key={item.title} {...item} />)}</div>
          <div className="conclusion"><i>01</i><p><strong>财报结论：</strong>增长结构优于单看 reported 数字所呈现的结果，但超预期贡献集中于部分区域和 Quick Commerce，Asia 的持续修复仍是关键验证点。</p></div>
        </section>

        <section className="page-section" id="regions">
          <SectionHeading number="02" title="区域结构" question="增长来自哪些区域？" description="规模仍集中在 Asia 与 MENA，增速则由 Americas、MENA 和 Integrated Verticals 领先；不同口径下的区域表现差异明显。" />
          <div className="two-column">
            <SectionCard title="区域 GMV 规模分布" subtitle="Q1 2026，€m · 公司披露；分部含内部交易，不显示误导性合计">
              <RegionalGmvDonutChart /><div className="legend">{regions.map((item) => <span key={item.name}><i style={{ background: item.color }} />{item.name}</span>)}</div>
            </SectionCard>
            <SectionCard title="区域 GMV 增速口径对照" subtitle="Reported 由 Q1 实际值计算；LfL 来自公司披露"><RegionalGrowthBarChart /></SectionCard>
          </div>
          <div className="insight-grid">{regionalInsights.map((item) => <InsightCard key={item.title} {...item} />)}</div>
          <div className="conclusion"><i>02</i><p><strong>区域结论：</strong>MENA 和 Americas 同时具备较强增长与研报超预期信号；Asia 的 reported 下滑与 LfL 正增长并存，必须保留汇率、范围变化及高通胀会计说明。</p></div>
        </section>

        <section className="page-section" id="strategy">
          <SectionHeading number="03" title="战略引擎" question="增长和效率提升依赖哪些战略能力？" description="Everyday App 将多品类、订阅、履约、广告和 AI 连接起来；页面只呈现公司披露和券商明确归纳，不延伸未经验证的因果结论。" />
          <div className="strategy-metrics">{strategyMetrics.map((item) => <InsightCard key={item.label} eyebrow="公司披露 / 研报转述" title={item.label} metric={item.value} description={item.note} tone={item.tone} />)}</div>
          <div className="two-column strategy-layout">
            <SectionCard title="Everyday App 战略飞轮" subtitle="基于研报与官方战略表述整理"><StrategyFlywheel steps={flywheelSteps} /></SectionCard>
            <SectionCard title="AI 与效率信号" subtitle="公司披露">
              <div className="efficiency-list">{efficiencySignals.map((item) => <div key={item.label}><i>DH</i><div><span>{item.label}</span><strong>{item.value}</strong><p>{item.text}</p></div></div>)}</div>
            </SectionCard>
          </div>
          <SectionCard title="能力路径图" subtitle="基于研报数据观察" className="capability-card">
            <div className="capability-path">{capabilityPath.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
          </SectionCard>
          <div className="broker-view"><span>券商怎么看</span><p><strong>UBS：</strong>Everyday App 与 AI 的早期结果支持更高用户参与和经营效率，但中长期利润改善仍取决于各市场执行。<strong>J.P. Morgan：</strong>多品类、Quick Commerce 和区域投入回报是 Q1 的主要积极信号。</p></div>
        </section>

        <section className="page-section" id="guidance">
          <SectionHeading number="04" title="盈利与指引" question="盈利改善是否可持续？风险来自哪里？" description="公司维持 FY26 指引，两家券商对盈利改善方向偏正面；与此同时，竞争、M&A、监管、治理和资本结构仍需持续跟踪。" />
          <div className="two-column">
            <SectionCard title="FY26 公司指引区间" subtitle="公司披露；不同单位分轨展示，不比较柱长"><GuidanceRangeChart /></SectionCard>
            <SectionCard title="UBS FY26 Adjusted EBITDA 预测调整" subtitle="€m · 券商估算；Asia 下调被 MENA 与 Americas 上调抵消"><ForecastRevisionChart /></SectionCard>
          </div>
          <div className="insight-grid">{profitabilityInsights.map((item) => <InsightCard key={item.title} {...item} />)}</div>
          <div className="action-grid">{strategicActions.map((item) => <article key={item.title}><span>{item.tag}</span><h3>{item.title}</h3><strong>{item.metric}</strong><p>{item.text}</p></article>)}</div>
          <h3 className="subheading">风险矩阵</h3>
          <div className="risk-grid">{risks.map((risk) => <article key={risk.title} className={`risk-card risk-card--${risk.level === '较高' ? 'high' : risk.level === '中等' ? 'medium' : 'watch'}`}><span>{risk.level}</span><h3>{risk.title}</h3><p>{risk.text}</p></article>)}</div>
          <p className="disclaimer">风险标签为定性整理，不是量化评分；券商评级和目标价不构成投资建议。</p>
        </section>

        <section className="page-section" id="intelligence">
          <SectionHeading number="05" title="情报追踪" question="集团与品牌层面近期发生了什么？" description="集团、区域和品牌事件分层保存。其他区域品牌仅在官方材料明确披露时加入，区域数据不会被写成品牌独立指标。" />
          <div className="event-focus-grid">{focusEvents.map((item) => <article key={item.id}><span>{item.eventDate} · {item.eventType}</span><h3>{item.titleZh}</h3><p>{item.summaryZh}</p><a href={item.sourceUrl} target="_blank" rel="noreferrer">{item.sourceOrganization} ↗</a></article>)}</div>
          <div className="filters">
            <BrandFilter options={brandOptions} value={brand} onChange={setBrand} />
            <RegionFilter options={regionOptions} value={region} onChange={setRegion} />
            <label className="select-filter"><span>事件类型</span><select value={eventType} onChange={(event) => setEventType(event.target.value)}>{eventTypeOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
          </div>
          <SectionCard title={`事件时间线 · ${filteredEvents.length} 条`} subtitle="默认按日期倒序 · 每条事件均保留原始来源入口">
            {filteredEvents.length > 0 ? <Timeline items={filteredEvents} /> : <p className="no-results">当前筛选组合没有可核验事件，请调整筛选条件。</p>}
          </SectionCard>
        </section>

        <section className="page-section sources-section" id="sources">
          <SectionHeading number="06" title="信息来源" question="本页数字、判断与情报如何追溯？" description="财务分析以两份本地券商研报和 Delivery Hero 官方披露为核心；品牌情报以集团或品牌官方网页为证据。" />
          <div className="source-grid">{sources.map((source) => <article key={source.id}><span>{source.type}</span><h3>{source.title}</h3><p>{source.institution}{source.publishedAt ? ` · ${source.publishedAt}` : ''}</p><p>{source.note}</p>{source.url && <a href={source.url} target="_blank" rel="noreferrer">访问来源 ↗</a>}</article>)}</div>
          <div className="source-policy"><i>说明</i><p>券商观点不代表 Delivery Hero 官方表述；预测值不代表实际结果；页面不提供研报 PDF 下载，也不展示原始研报内容。品牌动态与集团财务指标分层展示，不进行跨口径推算。</p></div>
          <div className="methodology">
            <strong>关键口径差异</strong>
            <p>J.P. Morgan 的 Q1 对比表包含 reported 增速、JPMe 和一致预期；正文同时引用公司 LfL 增速。UBS 的模型含 post-harmonization Revenue、券商调整后 EBITDA 和 equity FCF。页面仅在同定义、同币种、同期间内进行图表比较。</p>
          </div>
        </section>
      </main>
      <footer><span>Delivery Hero财报分析与情报追踪</span><span>独立管理层成果页 · 更新于 2026 年 6 月 11 日</span></footer>
    </div>
  )
}
