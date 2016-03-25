---
title: Research Library
---

This is a list of many reports and papers on Bitcoin and the blockchain. Feel free to use them for your own research. Please use CTRL+F to find a specific file.

<table class="research-library">
  <thead>
    <tr>
      <th>File</th>
      <th>Size</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    {% for file in site.data.library %}
      <tr>
        <td><a href="{{ site.baseurl }}/assets/pdf/library/{{ file.file }}">{{ file.title }}</a></td>
        <td>{{ file.size }}</td>
        <td>{{ file.date }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
