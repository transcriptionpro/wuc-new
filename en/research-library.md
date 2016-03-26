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
        <td>
          <a href="{{ site.baseurl }}/assets/pdf/library/{{ file.file }}">{{ file.title }}</a><br>
          <p>{{ file.desc }}</p>
          {% if file.authors %}
            Authors:
            {% for author in file.authors %}
              {% assign inCollection = site.people|where:'name',author %}

              {% if inCollection == empty %}
                {% assign inCollection = site.people|where:'title',author %}
              {% endif %}

              {% if inCollection != empty %}
                {% assign inCollection = inCollection[0] %}
                <a href="{{ inCollection.url }}">
                  {% if inCollection.name %}
                    {{ inCollection.name }}{% if forloop.last != true %}, {% endif %}
                  {% else %}
                    {{ inCollection.title }}{% if forloop.last != true %}, {% endif %}
                  {% endif %}
                </a>
              {% else %}
                {{ author }}{% if forloop.last != true %}, {% endif %}
              {% endif %}
            {% endfor %}
            {% if file.organization %}
              <br>Organization: {{ file.organization }}
            {% endif %}
          {% endif %}
        </td>
        <td>{{ file.size }}</td>
        <td>{{ file.date }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
