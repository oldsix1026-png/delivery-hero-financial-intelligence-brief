import { useState } from 'react'

const links = [
  ['financial', '财报分析'],
  ['trend', '趋势总览'],
  ['topline', 'Topline'],
  ['bottomline', 'Bottomline'],
  ['intelligence', '动态追踪'],
  ['sources', '信息来源'],
]

export default function SectionNav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="section-nav" aria-label="页面导航">
      <a className="brand" href="#top" onClick={() => setOpen(false)}><span>DH</span><strong>Delivery Hero 简报</strong></a>
      <button className="nav-toggle" aria-label="切换导航" onClick={() => setOpen(!open)}>{open ? '关闭' : '菜单'}</button>
      <div className={`nav-links ${open ? 'nav-links--open' : ''}`}>
        {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      </div>
    </nav>
  )
}
