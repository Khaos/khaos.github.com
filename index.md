---
layout: page
title: 乱弹，学步
---
{% include JB/setup %}

万事开头难，一篇杂乱的开场白。

本欲在开场中矫揉造作一番，可提起笔来却不知道写些什么。一通挣扎，不仅释然，还是顺其自然，想到什么就写什么吧，于是就有了这个《**乱弹**》。

## 缘起

这个Blog是关于什么的？嗯～，我不是科学界的一名大师（怪兽？），而是茫茫工程界一枚迷途小书童，一个三脚猫的业余码农，狂热的TeX/LaTeX爱好者，Google的粉丝，New Age音乐的聆听者，于是我想这里就应该是关于这些东西的吧，。

- TeX/LaTeX
- Matlab
- R
- TikZ/pgf
- Python
- Ruby
- Mac
- 其他的一些杂七杂八

## 初探

既然对建站一无所知，不如就从此入手吧，前面这几篇就说说如何用Jekyll建站吧。

### 纷至沓来的概念

- [Liquid](http://liquidmarkup.org/)
- [Markdown](http://daringfireball.net/projects/markdown/)
- [Jekyll](http://jekyllrb.com/)
- [YAML](http://www.yaml.org/)
- [DISQUS](http://disqus.com/)
- [Octopress](http://octopress.org/), an exmple from [Lucifr](http://lucifr.com/)

### 网站

- [谢益辉](http://yihui.name/)
- [Tao](http://ztpala.com/)

### 工具

- [Sublime Text 2](http://www.sublimetext.com/), replacement of [TextMate](http://macromates.com/) (BBEdit? no)

### 目标

- Blogging with comments
- Blogging with codes
- Blogging with graph

### 技术

- 模版
- 插图
- 调整字体
- 代码高亮，利用[Pygments](http://pygments.org/)

## 预告，Step by step tutorial

- Jekyll
- Jekyll Bootstrape
- Markdown
- Sublime Text 2

## Blog列表

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

<!-- 
Read [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)

Complete usage and documentation available at: [Jekyll Bootstrap](http://jekyllbootstrap.com)

## Update Author Attributes

In `_config.yml` remember to specify your own data:
    
    title : My Blog =)
    
    author :
      name : Name Lastname
      email : blah@email.test
      github : username
      twitter : username

The theme should reference these variables whenever needed.
    
## Sample Posts

This blog contains sample posts which help stage pages and blog data.
When you don't need the samples anymore just delete the `_posts/core-samples` folder.

    $ rm -rf _posts/core-samples

Here's a sample "posts list".

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## To-Do

This theme is still unfinished. If you'd like to be added as a contributor, [please fork](http://github.com/plusjade/jekyll-bootstrap)!
We need to clean up the themes, make theme usage guides with theme-specific markup examples.
 -->


