---
title: What Is Nebulas?
description: What Is Nebulas?
name: Nebulas
author: WeUseCoins
permalink: /what-is-nebulas/
authorurl: /
published: true
toc: 
  what: What Is Nebulas?
  getting: Getting Started With Nebulas
  howto: How To Get A Nebulas Wallet?
  resources: Nebulas Resources 
  buy: How To Buy Nebulas?
  latest: Latest Nebulas News
img: nebulas.png
category: appcoin
summary: Nebulas is a next generation public blockchain, aiming for a continuously improving ecosystem.
---

<h2 id="what">What Is Nebulas?</h2>

<p><center><script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script><div class="coinmarketcap-currency-widget" data-currency="nebulas" data-base="USD" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div></center></p>

<p><a href="/what-is-bitcoin/">Bitcoin</a> and <a href="/what-is-ethereum/">Ethereum</a> successfully introduced both the “Peer-to-Peer Electronic Cash System” and <a href="/video-ethereum-and-smart-contracts/">“Smart Contract”</a> to blockchains. The industry is evolving rapidly, with emerging applications and requirements, however for current blockchain technologies, we find there are three core challenges: establishing a measurement of value for applications on the blockchain, the ability to self-evolve & incorporate future advancements into the underlying blockchain itself, and a healthy long term ecosystem for all participants within the blockchain ecosystem.</p>

<p>Nebulas aims to address these challenges. This white paper explains the technical design ideologies and principles of the Nebulas framework. Our framework includes:</p>

<ul>
<li><b>Nebulas Rank (NR)</b>,a new system for the measurement of value for applications on the blockchain. Nebulas Rank measures the value of applications by considering liquidity and the propagation of addresses & contracts used in applications on the Nebulas platform - in a trustful, computable, and deterministic approach. With our new ranking system we’ll be able to see more applications with real usage surfacing on the Nebulas platform.</li>

<li><b>Nebulas Force (NF)</b>, which supports upgrading the core protocols & smart contracts directly on the main chains. This will provide Nebulas the capability to self-evolve and incorporate the newest technologies into the main chain, once they are ready for real world usage. With Nebulas Force, developers can build rich applications in fast iterations, and these applications can dynamically adapt to market changes or community feedback.</li>

<li><b>Developer Incentive Protocol (DIP)</b>, is designed to develop our blockchain ecosystem in a better way. The Nebulas token will be provided as an incentive for the top developers on our platform - as measured by our Nebulas Ranking system. This will help reward the best applications and incentivize developers to build more value for themselves and Nebulas as a whole.</li>

<li><b>Proof of Devotion (PoD) Consensus Algorithm</b>. To build a healthy ecosystem, Nebulas proposes three key points for our new consensus algorithm: speediness, irreversibility, and fairness.</li>

<li><b>Search engine for decentralized applications</b>. Nebulas constructs a new type of search engine for decentralized applications based on Nebulas ranking system. Using our engine, users will be able to find the most useful decentralized applications when they need it.</li>
</ul>

<p>Currently the Blockchain technology and community have grown into a large scale ecosystem. However, people’s perception of Blockchain world is still relatively flat; there is no reasonable way to evaluate the value of an entity (such as user address) on the blockchain yet. Therefore, we try to come up with a universal measure of value. By exploring and utilizing activities on chain, we create Nebulas Rank through which the value of each entity (user address) is able to be quantified. Nebulas Rank is designed to:</p>
<ul>
<li>serve as a native measure of value and a core algorithm for many fundamental scenarios, such as consensus algorithm, DIP and Blockchain search engine, etc; </li>

<li>inspire diversified measures of value and deeper insights into the blockchain ecosystem, so as to better guide business decisions and research activities.</li>
</ul>

<p>Based on the goals above, we define the measure of value of Nebulas Rank from three dimensions:</p>

<p>Liquidity, the frequency and scale of transactions, is the first dimension that Nebulas Rank measures. Finance essentially is about the social activities which optimize social resources via capital liquidity and promote economic development. Blockchain establishes a network of value. More transactions and larger transaction scale produce better liquidity, and better liquidity further increases transactions and transaction scale, forming a complete mechanism of positive feedback.</p>

<p>Propagation, the scope and depth of asset liquidity, is the second dimension that Nebulas Rank measures. In social network, the propagation property, i.e. speed, scope and depth of information transmission, is a key index indicating network quality and user growth. We see the same pattern in the Blockchain world. Powerful propagation means wider and deeper asset liquidity, which improves the quality and scale of assets in the Blockchain world.</p>

<p>Interoperability is the third dimension that Nebulas Rank measures. During the early stage of Internet, there were just simple websites and isolated information. Now information on different platforms can be forwarded on the network, and isolated data silos are gradually being broken. This tendency could be understood as a process of recognizing information from higher dimensional perspective. We believe that Blockchain world also follows a similar pattern, whose development will be faster. There will be more information of users’ assets, smart contracts and DApp. And also, there will be more frequent interactions among them. Therefore, better interoperability will become more important.</p>

{% include page-toc.html %}

<p>We choose transaction records on chain as source data for Nebulas Rank. That is because the “trajectory” in Blockchain world is more clear and trustworthy than that in the real world. Transaction data such as transfers and callings of “smart contracts” are all recorded on chain. But it is not trivial 9 to design rank algorithm for Blockchain transaction data, since the transactions in Blockchain world are naturally anonymous and bear larger data scale than that in the real world. Three major properties for Nebulas Rank are described below:</p>

<ul>

<li>Truthful. An entity must pay reasonable costs to improve its ranking, which assures that the algorithm can identify trusted valuable users. On one hand, in scenarios like consensus algorithm and DIP, truthful ranking encourages users to contribute truthfully in order to realize positive feedback. On the other hand, truthful result provides meaningful hierarchy representation of all users, which will be more helpful for decision makers;</li>
<li>Computable. As a fundamental field, the result of Nebulas Rank should be accessible instantly and thus requires low computational complexity;</li>
<li>Deterministic. As required by scenarios such as consensus algorithm and DIP, the computing result of Nebulas Rank should be identical on any client.</li>
</ul>

<p>Next we design the basic framework of Nebulas Rank. First, transaction records are represented in the form of graph. In the transaction graph (entity graph), every node is mapped to one entity, and each edge represents the transfer between two entities. Transaction graph embodies the fact that money transfer among users leads to assets flowing, which helps to represent the concepts of liquidity and propagation defined before. Meanwhile, the form of graph can clearly display the interoperability among contracts. With the derived transaction graph, we rank nodes by their network centrality. In the scenario of Nebulas Rank, LeaderRank is a more reasonable measurement and outperforms PageRank of Google and NCDAwareRank of NEM.</p>

<h2 id="getting">Getting Started With Nebulas</h2>

<p>Nebulas legitimate site demonstrates a worldwide group of 14 center individuals, including Hitters Xu, originator and CEO of Nebulas (who additionally happens to be the author of AntShares, now known as NEO). Xu is viewed as a pioneer in the blockchain business, establishing BitsClub (the principal Blockchain/Bitcoin people group in China) in 2013 and in addition mainstream ICO stage ICO 365. He additionally established the crypto supports firm, FBG capital. Over that, he coordinated an Alibaba budgetary arm (Ant Financial's Blockchain Platform) and supported Google's Search and Anti-Fraud group. </p>

<p>Prime supporters Robin Zhong and Aero Wang convey a long time of blockchain ability to Nebulas too. Features in Zhong's resume incorporate him being a unique planner of Ant Financial's Blockchain Platform and the author of Chinas first blockchain bolster stage, Tongxinclub. </p>

<p>Wang helped to establish Antshares (NEO) with Xu and is a persuasive business visionary in the blockchain business. The groups head of designing, Duran Liu, is a previous senior programming engineer at both Google and FreeWheel and a previous programming engineer at IBM. </p>

<p>The three counselors (Edith Yeung, Chris McCann, and Evan Cheng) to the venture are likewise persuasive individuals from the business/blockchain groups. Yeung is a devoted tech financial specialist, an accomplice at 500 Startups, and has been highlighted in Inc's Magazine article "The Silicon Valley Investors You Need to Know in 2016". </p>

<p>McCann built up the group program at Greylock Partners (financial specialists in <a href="http://geni.us/coinbase">Coinbase</a>, FB, Airbnb, Linkedin, and so forth). Also, McCann was an early guide for the Thiel Fellowship at Stanford University and was a prime supporter of StartupDigest. </p>

<p>To wrap things up, Cheng is a building chief at Facebook with an earlier 10-year advancement profession at Apple. He's got the ACM Software System Award for his commitments to software engineering.</p>

<h4>Principles</h4>
<ul>
<li><b>Value Ranking</b> - Nebulas Rank (NR) provides a measure of value for every unit in the blockchain.</li>

<li><b>2Self-evolving</b> - Nebulas Force (NF) enables Nebulas to respond to new demands without forks.</li>

<li><b>3Native Incentive</b> - Nebulas Incentive (NI) rewards devoted Nebulas developers and virtuous users.</li>
</ul>

<h4>Value Ranking</h4>

<center><img src="/images/nebulas-101.jpg" alt="what is nebulas"></center>

<p><b>Nebulas Rank (NR)</b> - Nebulas Rank (NR) is our core ranking algorithm which has been open sourced. The algorithm is based on liquidity, propagation of users' assets, and the interactivity between users. NR is used to rank addresses, smart contracts, decentralized applications (Dapps) and other entities on the blockchain.</p>

<h4>Self-evolving</h4>

<center><img src="/images/nebulas-102.jpg" alt="what is nebulas"></center>

<p><b>Nebulas Force (NF)</b> - Nebulas Force (NF) provides the Nebulas blockchain & its distributed applications built on top, the capability to self evolve. With NF developers are able to make changes, incorporate new technologies, and fix bugs without needing to hard fork.</p>

<h4>Native Incentive</h4>

<center><img src="/images/nebulas-103.jpg" alt="what is nebulas"></center>

<p><b>Nebulas Incentive (NI)</b> - Incentives are the driving force of blockchain evolution. The Nebulas Incentive includes Developer Incentive Protocol (DIP) and Proof of Devotion (PoD). DIP provides a feedback loop for developers to create high-quality distributed applications. With PoD, users who rank well (based on NR) will be rewarded in our Nebulas Token (NAS) by bookkeeping.*</p>

{% include page-toc.html %}

<h2 id="howto">How To Get A Nebulas Wallet?</h2>

<h4>Nebulas Wallet Part 1</h4>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/snoiFncCGgc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>

<p>Go to <a href="https://github.com/nebulasio/web-wallet">Nebulas GitHub Web Wallet</a></p>

<p>Download the source code using the Terminal</p>

<p><code>git clone https://github.com/nebulasio/web-wallet.git</code></p>

<center><img src="/images/nebulas-104.jpg" alt="what is nebulas"></center>

<p>If you don’t know what a Terminal is you can also <a href="https://github.com/nebulasio/web-wallet">Download the zip file</a></p>

<center><img src="/images/nebulas-105.jpg" alt="what is nebulas"></center>

<p>Note: Nebulas doesn’t use a dedicated website for the web wallet because of security. Its always safer to do these types of things offline.</p>

<h4>Step 2</h4>

<p>Go to the Web-Wallet directory</p>

<center><img src="/images/nebulas-106.jpg" alt="what is nebulas"></center>

<p>When you Click index.html (this will open up your browser)</p>

<center><img src="/images/nebulas-107.jpg" alt="what is nebulas"></center>

<p>Now we will create a Password (must be 9 characters) then click Create New Wallet</p>

<p>WARNING: KEEP YOUR KeyFile Safe and Don’t forget your password. (if you forget your password you won’t be able to access you NAS.</p>

<h4>Step 3</h4>

<center><img src="/images/nebulas-108.jpg" alt="what is nebulas"></center>

<p>Click Download Keystore File to Save to your computer</p>

<p>NOTE: The KeyFile allows you to create transactions offline.</p>

<p>Great Job! You just created a NAS Wallet.</p>

<h4>Sending NAS from your Wallet</h4>

<h4>Nebulas Wallet Part 2</h4>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/jrJL0p1cPL8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>

<h2 id="resources">Nebulas Resources</h2>

<ul>
<li><a href="https://nebulas.io/index.html">Official Website</a></li>
<li><a href="https://twitter.com/nebulasio">Twitter</a></li>
<li><a href="https://www.facebook.com/nebulasproject/">Facebook</a></li>
<li><a href="https://github.com/nebulasio">Github</a></li>
<li><a href="https://www.reddit.com/r/nebulas/">Reddit</a></li>
<li><a href="https://www.youtube.com/c/Nebulasio">Youtube</a></li>
<li><a href="https://www.instagram.com/nebulasio/">Instagram</a></li>
<li><a href="mailto:contact@nebulas.io">Email</a></li>
</ul>

<h2 id="buy">How To Buy Nebulas?</h2>

<h4>I. Create A Coinbase Account</h4>

<p>Go to the <a href="http://geni.us/coinbase">Coinbase Signup Page</a>.   Here we’re going to buy some Bitcoin or Ethereum with which to trade.</p>

<p>You can actually use USD Tether, but thats a whole other rabbit hole.  Let’s stick to the basics.</p>

<center><img src="/images/nebulas-109.jpg" alt="what is nebulas"></center>

<h4>II. Create A Gate.io Account</h4>

<p>This is a marketplace.  This is where BTC & ETH can be traded for Nebulas.  Make an account on the Gate signup page.  Make sure to write down your passwords and use the Authenticator app for 2-Factor authentication.</p>

<p>Gate has a really quick & easy registration process, so there shouldn’t be much trouble here.  If you don’t like Gate, there are other places where you can buy Nebulas.</p>

<center><img src="/images/nebulas-110.jpg" alt="what is nebulas"></center>

<h4>III. Buy BTC or ETH on Coinbase</h4>

<p>Use credit/debit or a bank transfer to purchase some of either of these coins.  Note, there are 5-7 day wait times for bank transfers.  Credit/Debit are instant.</p>

<center><img src="/images/nebulas-111.jpg" alt="what is nebulas"></center>

<h4>IV. Transfer BTC/ETH to Gate.io</h4>

<p>This part is the first technically challenging thing you will do.  Click on the screenshots below for a visual aid.  Essentially, we’re going to send coins from Coinbase to Gate.io.  In order to do this, you need to generate a BTC or <a href="/ethereum-wallets/">ETH wallet address</a> on Gate.io.  This demo uses Ethereum, you can do this same process with Bitcoin.</p>

<center><img src="/images/nebulas-112.jpg" alt="what is nebulas"></center>

<p>Go to the “Wallets” page found in the main header. Search for “ETH” in the search bar. When you find Ethereum, click “Deposit”</p>

<center><img src="/images/nebulas-114.jpg" alt="what is nebulas"></center>

<p>This page contains your Gate.io ETH wallet address. Copy down the string of letters and numbers.</p>

<center><img src="/images/nebulas-113.jpg" alt="what is nebulas"></center>

<p>On <a href="http://geni.us/coinbase">Coinbase</a>, select Accounts > ETH Wallet > Send. Paste you Gate.io address code into the “Recipient” input on Coinbase. Then select how much you would like to send & you’re all gravy.</p>

<h4>V. Buy Nebulas (NAS) With BTC or ETH</h4>

<p>Head to the NAS/BTC or NAS/ETH pages.</p>

<center><img src="/images/nebulas-115.jpg" alt="what is nebulas"></center>

<p>This is a pretty complicated page to look at if you’ve never used a marketplace.  Here are some general pointers/tips:</p>
<ul>
<li>In the buy box, set the price at which you would like to buy NAS, as well as the quantity.  You can reference the current price of the asset.  The closer to the current price, the faster your trade will go through.   As long as the trade hasn’t gone through, it is pending.  If you want to cancel it, make sure you do.</li>
<li>You can set what we call a limit buy by selecting a price that you expect the asset to rise or fall to.  Doing this numerous times per day is what we call day trading.</li>
<li>You sell the exact same way, instantly or based on market speculation.</li>
</ul>

<h2 id="buy">How To Buy Nebulas?</h2>

<h4>Official Interpretation of Nebulas Incentive Program Implementation Details Season 1</h4>

<center><img src="/images/nebulas-116.jpg" alt="what is nebulas"></center>

<p>Nebulas officially announced the start of the Nebulas Incentive Program on April 27, 2018. From 00:00 on May 7th, 2018 to 00:00 on July 2nd, 2018, Beijing time, all developers and their referrers who successfully submit DApps on the Nebulas mainnet can receive NAS coin rewards.</p>

{% include page-toc.html %}

<p>For developers, the Weekly Excellent Application rewards 10,000 NAS, and the Monthly reward, 20,000 NAS, while referrers can get monthly rewards of as much as 10,000 NAS.</p>

<p>The total reward of this program amounts to 460,000 NAS (according to the price on May 1, it’s more than $4.5 million).</p>

<p>The Nebulas Incentive Program has attracted a lot of attention since its announcement. There have been huge increases across the board in the number of transactions on the Nebulas testnet, developer activity of in our community, as well as media coverage. This positive feedback from the market illustrates the blockchain community’s recognition for and interest in the Nebulas Incentive Program.</p>


