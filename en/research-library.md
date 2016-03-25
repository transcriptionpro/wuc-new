---
title: Research Library
---

This is a list of many reports and papers on Bitcoin and the blockchain. Feel free to use them for your own research. Please use CTRL+F to find a specific file.

<ul>
{% for file in site.data.library %}
  <li>[{{ file.title }} ({{ file.size }}) - {{ file.date }}]({{ site.baseurl }}/assets/pdf/library/{{ file.file }})</li>
{% endfor %}
</ul>
