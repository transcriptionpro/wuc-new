---
title: Trade Finance Global - About Page
seotitle: Trade Finance Global - About Page
---

<img src="/images/tfg-logo.png" alt=“Trade Finance Global“ align="center">
<p><a title=“Trade Finance Global“ href="https://www.tradefinanceglobal.com" target="_blank">Trade Finance Global</a> is the leading information provider and brokerage of trade and structured finance, working with 200+ financiers around the world to help companies big and small trade and grow.</p>

## Fast & Convenient

<p>We work around the clock with our global network of partners, so you can focus on growing and running the business.</p>

## Transparent

<p>Trusted leaders and sector focussed experts in trade and structured finance, which is why businesses love working with us.</p>

## Experts

<p>We simplify complex finance and create solutions to set your business up for long term profitable growth.</p>

## Cryptocurrencies and Trade

Trade Finance Global are thought leaders in how blockchain can be used to disrupt trade, be that in the freight forwarding, KYC and the receivables finance space.

<h2>Venture Capital Rounds</h2>

{% for company in site.data.companies %}
{% if company.company == ‘Trade Finance Global’ %}
{% include company_list.html %}
{% endif %}
{% endfor %}
