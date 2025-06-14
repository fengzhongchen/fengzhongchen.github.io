---
layout: post
title: Valaxy博客部署指南：GitHub Pages绑定域名+CDN加速全流程
date: 2025-06-01 20:03:27
categories: Valaxy 笔记
tags:
  - valaxy
  - 部署
  - 自定义域名
  - GitHub Pages
  - CDN
  - Cloudflare
  - 阿里云
---
## Valaxy博客部署指南
如果你已经使用 Valaxy 创建好了博客，那么接下来最重要的一步就是让其他人能够访问它。这篇文章将带你完成博客的部署、绑定域名，以及通过 CDN 加速访问的完整流程。

---

### 一、将博客托管到 GitHub Pages
1. 登录 GitHub，创建一个新的仓库，**仓库名称必须为** `用户名.github.io`（将“用户名”替换为你的 GitHub 用户名）。点击“Create repository”创建仓库。
2. 打开仓库页面，点击上方的“Settings”，在左侧导航栏中选择 “Actions” - “General”。滚动到页面底部的“Workflow permissions”，勾选 `Read and write permissions`，点击“Save”保存设置。
3. 将你本地博客的源代码推送到该仓库的 `main` 分支。GitHub 会根据 `.github/workflows/gh-pages.yml` 中的配置自动构建静态站点，并将生成的内容部署到 `gh-pages` 分支。
4. 再次进入“Settings”，点击左侧的 “Pages”。在“Build and deployment”部分，将“Branch”设置为 `gh-pages / (root)`，点击“Save”。

此时，你就可以通过地址 `https://用户名.github.io` 访问你的博客了。

### 二、绑定自己的域名
1. 首先你需要注册一个域名。本文以 [阿里云](https://wanwang.aliyun.com/) 为例。购买时请注意，阿里云的域名价格分为**首年注册价**和**续费价**，例如 `.xyz` 域名第一年可能只需 **6 元**，但续费价格可能为 **98 元/年**。

2. 进入阿里云“域名列表”，点击你购买的域名后选择“解析”，再点击“添加记录”。

|记录类型|主机记录|记录值|
|---|---|---|
|`CNAME`|`@`|`用户名.github.io`|
|`CNAME`|`www`|`用户名.github.io`|
3. 回到 GitHub 仓库，进入“Settings” -> “Pages”，在 “Custom domain” 中填写你的自定义域名，点击“Save”。建议勾选“Enforce HTTPS”以启用安全访问。

配置完成后，一般几分钟到数小时内你就可以通过自己的域名访问博客了。
虽然你已经配置了自己的域名，但博客内容依然托管在 GitHub Pages 上，这意味着访问速度仍可能受 GitHub 在中国大陆访问限制的影响。你可以通过 Cloudflare 免费 CDN 加速访问。

### 三、使用 CDN 提升访问速度
1. 访问 [Cloudflare](https://www.cloudflare-cn.com/) 官网，注册并登录账号。
2. 如果你在账户主页，选择页面中间蓝色的“添加域”，输入你的域名选择“快速扫描 DNS 记录”并“继续”，选择”Free“计划。
3. 选择添加记录，确保内容和表格相同。
   |记录类型|主机记录|记录值|
   |---|---|---|
   |`CNAME`|`@`|`用户名.github.io`|
   |`CNAME`|`www`|`用户名.github.io`|

   如果你的域名只用来访问博客，其他内容可以删除。选择`继续前往激活`。
4. Cloudflare会提示你：`将您当前的名称服务器替换为 Cloudflare 名称服务器`。复制Cloudflare提供的两个DNS地址。
5. 回到阿里云的“域名列表”选择“管理”。选择左侧的“DNS 管理” -“DNS修改”。选择蓝色的“修改DNS服务器”，输入Cloudflare提供的两个DNS地址。修改按完成后点击“确认”。
6. 最后，**删除**你在阿里云中添加的 DNS 解析记录，以避免冲突。

稍作等待后，DNS 变更生效，你的博客就能通过 Cloudflare 加速访问，且自动支持 HTTPS，提升国内访问速度和安全性。通常需要等待几分钟到 24 小时不等，取决于 DNS 缓存时间。