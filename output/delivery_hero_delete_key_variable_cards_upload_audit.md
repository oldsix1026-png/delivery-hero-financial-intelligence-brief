# Delivery Hero 删除关键变量卡片审计

## 删除的卡片

- 韩国和 MENA 竞争会改变获客成本与利润改善速度
- 韩国业务订单和 GMV 恢复，竞争环境和技术整合影响利润速度
- 债务期限、资产出售和潜在交易会影响资本结构

## 修改文件

- `src/data/deliveryHeroFinancialData.ts`
- `output/delivery_hero_delete_key_variable_cards_upload_audit.md`

## 执行结果

- Build：成功，已执行 `npm run build`
- Commit message：`fix(delivery-hero): remove duplicate key variable cards`
- Push origin main：是
- 是否触发 Netlify：是

## 需要人工复核的点

- 核对 Bottomline 区域中剩余关键变量卡片的间距是否符合截图预期。
- Netlify 部署完成后核对线上页面是否已同步删除上述三张卡片。
