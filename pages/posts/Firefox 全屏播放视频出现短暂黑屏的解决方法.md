---
layout: post
title: Firefox 全屏播放视频出现短暂黑屏的解决方法
date: 2025-06-01
updated: 2025-06-01
categories: 小问题
tags:
  - Firefox
  - 笔记
  - 黑屏
---

# 解决 Firefox 全屏播放时会短暂黑屏的问题

如果你在使用Firefox播放视频并且切换到全屏模式时会出现短暂的黑屏，那么可以通过如下办法解决。

---

## 🛠 解决方法

### 步骤一：进入高级配置页面

1. 打开 Firefox，在地址栏输入 `about:config` 并回车。
2. 点击“接受风险并继续”，进入设置页面。

### 步骤二：搜索并修改以下配置项

1. **关闭进入全屏时的过渡动画**
   - 搜索：`full-screen-api.transition-duration.enter`
   - 双击该项，将值改为：`0 0`
   - 👉 作用：禁用进入全屏的动画效果，避免黑屏闪烁。

2. **关闭退出全屏时的过渡动画**
   - 搜索：`full-screen-api.transition-duration.leave`
   - 双击该项，将值改为：`0 0`
   - 👉 作用：禁用退出全屏的动画效果，提升响应速度。

3. **如果你还想关闭全屏提示**
   - 搜索：`full-screen-api.warning.timeout`
   - 双击该项，将值改为：`0`
   - 👉 作用：关闭“您正在进入全屏模式”的顶部提示条，减少干扰。
