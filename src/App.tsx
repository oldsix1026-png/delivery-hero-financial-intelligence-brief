import { useMemo, useState, type ReactNode } from 'react'
import BrandFilter from './components/BrandFilter'
import InsightCard from './components/InsightCard'
import KpiCard from './components/KpiCard'
import RegionFilter from './components/RegionFilter'
import SectionNav from './components/SectionNav'
import StrategyFlywheel from './components/StrategyFlywheel'
import Timeline from './components/Timeline'
import GroupGrowthBarChart from './components/charts/GroupGrowthBarChart'
import GuidanceRangeChart from './components/charts/GuidanceRangeChart'
import RegionalGmvDonutChart from './components/charts/RegionalGmvDonutChart'
import RegionalGrowthBarChart from './components/charts/RegionalGrowthBarChart'
import {
  efficiencySignals, flywheelSteps, growthPath, guidance, heroKpis, regionalInsights,
  regions, risks, strategicActions, strategyMetrics,
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

  return (
    <div id="top">
      <SectionNav />
      <main>
        <section className="hero">
          <div className="hero__copy">
            <span className="eyebrow">Q1 2026 · 管理层独立简报</span>
            <h1>Delivery Hero财报分析与情报追踪</h1>
            <p>Q1 增长加速，Everyday App 与 Quick Commerce 成为增长主线；区域表现持续分化，集团同步推进战略梳理与资本结构调整。</p>
            <div className="hero__meta">
              <span>↗ 增长加速</span><span>◎ 区域分化</span>
              <span>▦ 多品牌经营</span><span>△ 战略调整</span>
            </div>
          </div>
          <aside className="hero__signal">
            <span>核心判断</span><strong>增长质量改善，但恢复并不均衡</strong>
            <p>收入增速高于 GMV，Quick Commerce 动能突出；MENA、Americas 与 Integrated Verticals 更强，Asia 仍处于恢复观察期。</p>
            <a href="#overview">查看财报概览 →</a>
          </aside>
        </section>

        <div className="official-label">官方公开数据 · 截至 2026 年 6 月 11 日</div>
        <section className="kpi-grid" aria-label="Q1 2026 核心指标">{heroKpis.map((item) => <KpiCard key={item.label} {...item} />)}</section>

        <section className="page-section" id="overview">
          <SectionHeading number="01" title="财报概览" question="Delivery Hero 的 Q1 增长是否稳健？" description="集团 GMV 延续增长，收入增速明显高于 GMV；Quick Commerce 是重要增量来源，公司维持 FY26 指引。" />
          <div className="two-column">
            <SectionCard title="Q1 2026 集团增长对比" subtitle="同比增速，LfL；Quick Commerce 为同比口径"><GroupGrowthBarChart /></SectionCard>
            <SectionCard title="增长路径" subtitle="基于 Delivery Hero 官方 Q1 战略表述整理">
              <div className="growth-path">{growthPath.map((item, index) => <div key={item.title}><span>{index + 1}</span><div><strong>{item.title}</strong><p>{item.text}</p></div></div>)}</div>
            </SectionCard>
          </div>
          <div className="guidance-summary">{guidance.map((item) => <div key={item.label}><span>{item.label}</span><strong>{item.display}</strong></div>)}</div>
          <div className="conclusion"><i>◆</i><p><strong>财报结论：</strong>GMV 延续增长，收入增速高于 GMV，Quick Commerce 是重要增长来源；公司维持 FY26 指引，并提高对 Adjusted EBITDA 达到区间上半段的信心。</p></div>
        </section>

        <section className="page-section" id="regions">
          <SectionHeading number="02" title="区域结构" question="增长来自哪些区域和业务？" description="区域增长并不均衡。MENA、Americas 和 Integrated Verticals 是更强的增长来源，Asia 已出现恢复迹象。" />
          <div className="two-column">
            <SectionCard title="区域 GMV 构成" subtitle="Q1 2026，€m；分部数据包含内部交易，不能与集团 GMV 直接相加比较">
              <RegionalGmvDonutChart /><div className="legend">{regions.map((item) => <span key={item.name}><i style={{ background: item.color }} />{item.name}</span>)}</div>
            </SectionCard>
            <SectionCard title="区域 GMV 增速" subtitle="Q1 2026，同比增长，LfL"><RegionalGrowthBarChart /></SectionCard>
          </div>
          <div className="insight-grid">{regionalInsights.map((item) => <InsightCard key={item.title} {...item} />)}</div>
          <div className="conclusion"><i>◎</i><p><strong>区域结论：</strong>MENA、Americas 和 Integrated Verticals 是当前更强的增长来源；Asia 已出现恢复迹象，但仍需要持续观察。</p></div>
        </section>

        <section className="page-section" id="strategy">
          <SectionHeading number="03" title="战略引擎" question="Delivery Hero 为什么强调 Everyday App？" description="集团试图通过多品类、订阅、广告、履约和 AI 能力提升用户频率、商户价值与经营效率。" />
          <div className="strategy-metrics">{strategyMetrics.map((item) => <InsightCard key={item.label} eyebrow="官方公开数据" title={item.label} metric={item.value} description={item.note} tone={item.tone} />)}</div>
          <div className="two-column strategy-layout">
            <SectionCard title="Everyday App 战略飞轮" subtitle="因果链为基于官方战略表述的管理层整理"><StrategyFlywheel steps={flywheelSteps} /></SectionCard>
            <SectionCard title="AI 与效率信号" subtitle="仅展示官方网页明确披露的信息">
              <div className="efficiency-list">{efficiencySignals.map((item) => <div key={item.label}><i>AI</i><div><span>{item.label}</span><strong>{item.value}</strong><p>{item.text}</p></div></div>)}</div>
            </SectionCard>
          </div>
        </section>

        <section className="page-section" id="guidance">
          <SectionHeading number="04" title="指引与风险" question="经营改善与战略调整如何并行？" description="集团维持 FY26 指引，同时推进台湾业务出售、CEO 交接和对潜在资本市场事项的战略审视。" />
          <div className="two-column">
            <SectionCard title="FY26 指引区间" subtitle="Delivery Hero Q1 2026 官方公告"><GuidanceRangeChart /></SectionCard>
            <SectionCard title="管理层观察" subtitle="指引不是结果保证"><div className="management-note"><i>↗</i><strong>Adjusted EBITDA 区间上半段</strong><p>公司表示，在 Q1 动能和转型进展基础上，对实现 €910m–€960m 指引区间上半段更有信心。</p></div></SectionCard>
          </div>
          <div className="action-grid">{strategicActions.map((item) => <article key={item.title}><span>{item.tag}</span><h3>{item.title}</h3><strong>{item.metric}</strong><p>{item.text}</p></article>)}</div>
          <h3 className="subheading">风险矩阵</h3>
          <div className="risk-grid">{risks.map((risk) => <article key={risk.title} className={`risk-card risk-card--${risk.level === '高' ? 'high' : risk.level === '中' ? 'medium' : 'watch'}`}><span>{risk.level}</span><h3>{risk.title}</h3><p>{risk.text}</p></article>)}</div>
          <p className="disclaimer">风险等级为管理层观察标签，不是量化评分，也不构成投资建议。</p>
        </section>

        <section className="page-section" id="intelligence">
          <SectionHeading number="05" title="情报追踪" question="集团与品牌层面近期发生了什么？" description="集团、品牌与区域事件分层呈现；默认按日期倒序，并保留每条事件的官方来源链接。" />
          <div className="filters">
            <BrandFilter options={brandOptions} value={brand} onChange={setBrand} />
            <RegionFilter options={regionOptions} value={region} onChange={setRegion} />
            <label className="select-filter"><span>事件类型</span><select value={eventType} onChange={(event) => setEventType(event.target.value)}>{eventTypeOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
          </div>
          <SectionCard title={`事件时间线 · ${filteredEvents.length} 条`} subtitle="集团财务指标不作为品牌数据；区域数据不作为单一市场全球趋势">
            {filteredEvents.length > 0 ? <Timeline items={filteredEvents} /> : <p className="no-results">当前筛选组合没有可核验事件，请调整筛选条件。</p>}
          </SectionCard>
        </section>

        <section className="page-section sources-section" id="sources">
          <SectionHeading number="06" title="信息来源" question="本页数据与情报来自哪里？" description="财务指标优先引用 Delivery Hero 官方公开材料；品牌动态与集团层级指标严格分开。" />
          <div className="source-grid">{sources.map((source) => <article key={source.id}><span>{source.type}</span><h3>{source.title}</h3><p>{source.institution} · {source.note}</p>{source.url && <a href={source.url} target="_blank" rel="noreferrer">访问来源 ↗</a>}</article>)}</div>
          <div className="source-policy"><i>DH</i><p>页面不展示券商 PDF 原文，不提供券商 PDF 下载，不使用券商 Logo。财务指标优先引用 Delivery Hero 官方公开材料，情报优先引用集团及品牌官方站点。</p></div>
        </section>
      </main>
      <footer><span>Delivery Hero财报分析与情报追踪</span><span>独立管理层成果页 · 数据截至 2026 年 6 月 11 日</span></footer>
    </div>
  )
}
