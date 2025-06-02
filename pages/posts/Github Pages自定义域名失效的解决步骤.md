---
layout: post
title: Github Pages自定义域名失效的解决步骤
date: 2025-06-02 20:50:47
categories: Valaxy 笔记
tags:
  - GitHub Pages
  - valaxy
---
## Github Pages自定义域名失效的解决步骤
博主发现将更新的博客推送到GitHub之后会出现自定义域名失效的问题。经过搜索博主参考了这篇文章：[解决Github Pages自定义域名失效的问题](https://www.suiyan.cc/blog/20230404212258)成功的解决了问题。文章中分析了这个问题的成因并且给出了解决办法。但对于刚接触 GitHub Pages 的新手来说，缺乏足够详细的操作步骤。因此，博主在此记录一下具体的解决步骤，供大家参考。

---
## 解决步骤

打开`.github\workflows\gh-pages.yml`
```yaml
  - name: 🌌 Build Valaxy Blog
    run: npm run build
```
在这一步 **之后** 添加以下代码，用于写入 CNAME 文件：
```yaml
  - name: 📝 Add CNAME File
    run: echo 'fengzhongchen.top' > dist/CNAME
```
然后，确保它位于部署步骤 **之前**，也就是紧接在下面这行 **之前**：
```yaml
  - name: 🪤 Deploy to GitHub Pages
    uses: peaceiris/actions-gh-pages@v3
```
这样，每次 GitHub 自动部署时，`CNAME` 文件都会被正确包含在发布内容中，自定义域名也就不会再失效了。