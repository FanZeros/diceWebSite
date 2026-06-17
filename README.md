# Dice Tycoon — 官网

一个 Active Theory 风格的滚动驱动 3D 骰子交互式官网，基于 Three.js + GSAP。

## 特性

- 滚动驱动的三段式骰子动画（近距离审视 → 投掷 → 排列显示点数）
- 游戏同款 BeveledDiceGeometry 几何体 + Fire/Star/Golden/Ice/Arcane shader
- 多骰子系统（主骰 + 环绕骰 + 收集展示骰）
- 骰子可拖拽旋转、投掷拖尾粒子、落地冲击波
- 游戏特性卡片视差、Bloom/色散后处理、移动端适配

## 本地运行

```bash
npm install
npm run dev      # 开发预览 http://localhost:5173
npm run build    # 生产构建 → dist/
```

## 技术栈

Three.js · GSAP ScrollTrigger · Vite · Vanilla JS
