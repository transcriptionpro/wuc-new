---
title: What Is aelf?
description: What Is aelf?
name: aelf
author: WeUseCoins
permalink: /what-is-aelf/
authorurl: /
published: true
toc: 
  what: What Is aelf?
  getting: Getting Started With aelf
  howto: How To Get A aelf Wallet?
  resources: aelf Resources 
  buy: How To Buy aelf?
  latest: Latest aelf News
img: aelf.png
category: appcoin
summary: aelf  cryptocurrency is a decentralized cloud computing blockchain project being developed by Hoopox and is based in Singapore.
---

<h2 id="what">What Is aelf?</h2>

<p><center><script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script><div class="coinmarketcap-currency-widget" data-currency="aelf" data-base="USD" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div></center></p>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/ftIf9p_7cYU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>

<p>The <a href="/making-decentralized-economic-policy/">Blockchain technology</a> and its applications are developing exponentially. Many industries are migrating from traditional network architecture to a Blockchain-based network architecture. However, current Blockchain systems are not yet capable or efficient enough to function as a versatile operating system and support multiple applications. </p>

<p>Bitcoin, the pioneering Blockchain design, is more similar to an application. Ethereum has demonstrated some characteristics of an Operating System – developers can program applications such as Smart Contracts, and the Chain provides programming language and Adaptor in the form of Solidity. </p>

{% include page-toc.html %}

<p>However, from the perspective of a modern Operating System, <a href="/what-is-ethereum/">Ethereum</a> still has several drawbacks, such as the lack of decoupling between system components, the lack of customization of most modules, and insufficient system interfaces, among others. This approach lacks the holistic design of aelf and is not yet commercially viable for cross-industry application scenarios. It greatly limits the commercial application of Blockchain technology.</p>

<h4>General Blockchain vs. Complex Business Scenarios</h4>

<p>The largest challenge facing commercial scale adoption of Blockchain technology is its current inability to meet the requirements of multiple, diverse, and complex business scenarios. Naturally, different scenarios often have different characteristics in terms of process and execution logic, and thus require distinct solutions. </p>

<p>Therefore, the "one size fits all" Blockchain approach that is currently utilized by other chains is not viable if Blockchain is to succeed in the future. For example, ticket issuance requires high frequency where a high transaction rate in the system is desirable, while digital legal contracts emphasize high security and reliability over speed. It simply does not make sense for them both to be built around the same Chain.</p>

<p>There are two general solutions to this problem:</p>

<p>1. Use Blockchain as solely a database not deal with business logic. This approach aims to handle any business scenario and maintain compatibility. Many Chains similar to Bitcoin use this approach. They record businessrelated data and hash into a transaction output "OP_RETURN", which is stored in the Blockchain.</p>

<p>2. Record various complex Smart Contracts onto one single Blockchain. These Smart Contracts serve pre-defined business models from various scenarios. Ethereum represents this type of Chain. Due to the fact that all Smart Contracts are written on one single Chain, the Blockchain becomes overly complex, requires a high maintenance cost, and lacks an effective structure to execute smart contracts.</p>

<h4>Performance Limitation of Sequential Processing</h4>

<p>As Blockchain becomes more and more widely used, especially for handling large scale transactions, its transaction processing capacity faces tremendous pressure when using sequential processing, which results in the bottleneck of network performance. </p>

<p>Current Blockchain systems face multiple challenges to improving capacity, sometimes at the expense of transaction efficiency. For example, the Bitcoin transaction fee is getting more expensive as transaction volume increases and a large 6 backlog waits for confirmation. Ethereum faces an increasing number of congestions during token sales. However, in traditional IT architecture, modern techniques such as partitioning, sharding and decent.</p>

<center><img src="/images/aelf-105.jpg" alt="aelf"></center>

<p>On the other hand, the concept of parallel task processing has not been adopted to increase efficiency. When a Block contains large amount of transaction data and complex Smart Contracts, sequential transaction has hit its efficiency limitation of Block formation and verification.</p>

<h4>Data Complexity and Redundancy</h4>

<p>As described in Section 1.1, one universal Blockchain is used to meet the needs of different business scenarios. The drawbacks of a universal Blockchain system are overly-complex Smart Contracts and Consensus Protocols, lack of tailored solutions to specific business scenarios, and redundant data.</p>

<h4>Dilemma of Protocol Update</h4>

<p>Despite the increasing adoption of Blockchain, it is still in its nascent stage. Many significant improvements and innovations are yet to come. These updates are essential to evolve Blockchains and keep up with an ever-changing environment and stakeholder's interest. </p>

<p>The large variety of stakeholders within the eco-system usually makes it difficult reach consensus without effective governance mechanisms, leading most current Protocol updates into impasse or disputes. One vivid example is Bitcoin, as the community found it difficult to reach agreements for the introduction of many new features in recent years.</p>

<h4>Inflation of Block</h4>

<p>The more successful a Blockchain system is, the higher its maintenance cost. Running through a <a href="/full-bitcoin-node-on-a-raspberry-pi-3-with-or-without-a-pidrive/">full Current Bitcoin node</a> requires over 130G of space, and Ethereum requires over 180G. This situation will not be improved in the future. As more users adopt Blockchain and conduct more transaction activities, the inflation of Blocks will accelerate and the maintenance cost will grow even higher. Actions must be taken to alleviate this vicious cycle.</p>

<h4>Inefficient Point-to-Point Communication Support</h4>

<p>Existing Blockchains mainly communicate through on a broadcast network where the support for P2P communication is inefficient and insecure. One example is that if certain data only concerns a single group of users, that data should be communicated among finite nodes, not broadcasted to all nodes.</p>

<h4>Pending Breakthrough for Cross-Chain Communication</h4>

<p>Existing Blockchain systems have experimented with cross-chain communication to process related business logics. However, the outcomes have been unsatisfactory. Current cross-chain communication includes the centralized mechanism and the HTLC mechanism. The centralized mechanism deviates from the idea of Blockchain, and leads to lack of trust, single node failure, single node bottleneck, and is only applicable to certain scenarios. </p>

{% include page-toc.html %}

<p>The HTLC mechanism can also only deal with specific 7 scenarios, such as asset exchange, and imposes strict requirements on the protocols and <a href="/video-qa-dangers-of-hard-forks-in-protocol-evolution/">Consensus Protocols</a> of communicating chains. And implementation of such a mechanism is usually complex. As a result, it is imperative to address two critical issues: Protocol compatibility and data exchanging format compatibility.</p>

<h4>Key objectives of aelf</h4>

<p><b>A Highly Customizable OS for Commercial Use</b> - We envision aelf as a highly efficient and customizable OS that will become the "Linux system" for Blockchain. Take Linux as an example–Linux Kernel and various Linux versions constitute the large and successful Linux family. Linux Kernel resolves the most fundamental, critical and time-consuming parts, allowing other developers to make customized systems based on application scenarios and customer needs. This makes Linux the most popular server OS, and it supports all kinds of industries.</p>

<p>This same idea has been incorporated into the aelf design. First, we define and implement the aelf Kernel which includes fundamental functions of a Blockchain system, namely the minimum viable Blockchain system. Then, we develop a "shell" as the basic interactive interface for the Core. Users can either use the complete Blockchain OS, or rapidly develop a customized OS based on the Core by redefining the Core through interfaces.</p>

<p><b>Cross-Chain Interaction</b> - aelf can interact with Bitcoin, Ethereum, and other Blockchain systems. Cross-chain interaction with mainstream Chains can be realized through messaging. It will also form an endogenous multi-level cross-chain structure based on cross-chain interaction, in order to share digital assets, users and information.</p>

<p><b>Performance Improvement</b> - In traditional IT architecture, distributed structure is the most popular solution to debottleneck capability limitation. Blockchain systems should also support distributed parallel processing, the ability to process multiple transactions with non-competing data to improve transaction efficiency. In addition, when one chain has become too complex to be effectively processed, it should be split into parallel Chains to offload the traffic. </p>

<p>The initial design of an effective Blockchain should focus on solving specific business scenarios, not combining all Smart Contracts onto one single Chain. In order to deliver optimal performance based on business requirements, the Chain has to provide an effective and customized data structure, Smart Contract logic, and a Consensus Protocol can be designed specifically for the targeted objective. By doing so, the components and data within the Chain will be much simpler and easier to manage. </p>

<center><img src="/images/aelf-106.jpg" alt="aelf"></center>

<p>In addition, aelf can define a mechanism to trigger a snapshot in the system. Upon defining a cycle, it takes a snapshot of current data and trims detailed transaction data. A new Genesis Block will include all subsequent transactions. This idea has been adopted in traditional IT database architecture to alleviate system inflation.</p>

<p><b>Protocol Update</b> - Upon the Genesis of Blockchain, the voting and update mechanism needs to be clearly defined. With introduction of the Consensus Protocol to include new features in the future, it avoids impasse and dispute over Protocol update.</p>

<p><b> Private Chain Module</b> - A Considerable number of businesses are interested in Private Chains to leverage the advantage of Blockchain technology. These private Chains usually exist in isolation without any connection to external eco-system or other businesses. We provide a model similar to Amazon cloud service, "AMI", where users can rapidly create an independent Chain using our Private Chain module and obtain full ownership of it.</p>

Core Approaches to Realize aelf System

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/T1DwYRfrrWc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>

<p><b>Performance Enhancements</b> - The core principle of aelf is to resolve practical technical problems using solutions that have already been tested. Instead of “optimizing” the concepts of Blockchain, more attention is paid to provide a mature configuration for the stable execution of business applications. A few performance enhancement ideas are currently being explored: Most Blockchain sharding solutions are implemented by dividing a single consensus into numerous sub-consensus. </p>

<p>Basically, the consensus as a whole is split, leaving several sub-consensus groups which are easier to attack than a single one. People can increase randomness to complicate the routing path, but this will impair the specialization of the mining node. PoW mining nodes decrease substantially as more mining pools replace them as a specialized ledger system. </p>

<p>These pools are able to ensure mining efficiency and timely broadcasting, slowing down the speed of block formation and keeping it steady. By leveraging experiences from the IT industry, mining pools have abandoned the standard official node software but aggregate computing power through load balancing and run smart contracts in an asynchronous parallel manner, putting their own nodes globally to improve the broadcasting efficiency. </p>

<p>However, the performance of mining pools is still limited by the technical differences used in the pool, and by the fact that nodes are all designed equally and limited by the protocol itself. So, the upgrading of one single node does not lead to the improvement of the whole network. aelf’s logic is that nodes are categorized according to their roles; those who provide standard services on clusters are open-sourced and work through DPoS to reach consensus of the Main Chain. </p>

<p>The delegated mining nodes are able to protect Side Chains and share the strong consensus of the Main Chain. This method increases the pressure for each delegate, however, efficiency will improve as more Side Chains are added, because delegated mining nodes are capable of running in clusters. Side Chains are independent of each other, thus one additional Side Chain will increase the efficiency of the whole system. Moreover, the efficiency of each Side Chain will also benefits from parallel processing.</p>

<center><img src="/images/aelf-108.jpg" alt="aelf"></center>

<p><b>Resource Segregation</b>- To protect Smart Contracts from unnecessary mutual interference and maintain their stable running on Blockchain, aelf abandons the one-chain-fits-all solution and design a public Blockchain that is able to ensure proper running of each contract. aelf will be a cloud-computing platform similar to AWS. No business would like to be disturbed by other businesses. </p>

<p>For example, trades in a future market should not be interfered by the traffic generated by the Black Friday. However, this seemingly impossible interference is commonly seen in the domain of Blockchain. So the key obstacle preventing Blockchain technology being applied in real cases lies in its initial design.</p>

{% include page-toc.html %}

<p><b>Structure of Governance</b> - Due to historical limitations, the current Blockchain governance structure is often not well defined upon creating. This problem becomes more prominent when there is a major functional upgrading or a stagnation caused by bugs. For example, Bitcoin has been stuck in scaling problems for more than two years and finally forked, and the differences on The DAO incidence between the Ethereum community and the foundation led to the birth of ETC. </p>

<p>As a result, we clarify the method of aelf directionsetting before users entering the world of aelf: We acknowledge the fact that aelf Token holders have the greatest right in the future of aelf, and token holders’ interests are linked with the destiny of aelf, in particular those with long-term locked-in tokens.</p>

<center><img src="/images/aelf-109.jpg" alt="aelf"></center>

<p><b>Resemblance of Representative Democracy</b> - One of the key principles of aelf is designating specialized nodes to perform specialized tasks. In aelf, vital decisions are carried out through a mechanism that resembles representative democracy. Delegated nodes must have enough votes from other stakeholders to participate in aelf governance. To some extent, mining nodes constitute the health of the aelf system, so these nodes are responsible for being a ledger and handing out bonuses and feedback values to the stakeholders who entrusted them through Smart Contracts.</p>

<p><b>Exercise of Power by the Delegates</b>- Foundation members realize their governance by submitting the source code and delegating mining nodes to review and vote. The process goes as follows: Foundation members provide open-source code and submit new features. Delegates then choose specific features to incorporate based on their needs. If one feature is adopted by enough delegates, it gains approval by the whole system. </p>

<h2 id="getting">Getting Started With aelf</h2>

<center><img src="/images/aelf-101.jpg" alt="aelf"></center>

<p>elf has been going strong since being introduced into the crypto world in the second half of 2017. Over the last three months this project has undergone some astounding growth, major updates, partnerships and a strong following spreading across multiple social media platforms.</p>

<p>aelf, for all intents and purposes, is creating a new blockchain which will resolve 3 main blockchain problems which has been restricting this technology from being adopted in more mainstream uses. These problems are limited performance, lack of resource segregation, and a properly working governance model. By resolving these issues, aelf will be bringing blockchain technology into business scenarios with full force.</p>

<p>In response to this, they have created a blockchain which can be integrated to side chain specific business scenarios. The <a href="/what-are-sidechains/">aelf blockchain and sidechains</a> will possess the following qualities:</p>

<ul>
<li>High efficiency and scalability to handle transactions/applications at a commercial scale</li>
<li>High flexibility to customize Smart Contracts to meet the needs of different industries</li>
<li>High adaptability to new technology in the future</li>
<li>High compatibility to allow communication across public and private Chains and existing Blockchains</li>
</ul>

<center><img src="/images/aelf-102.jpg" alt="aelf"></center>

<p>aelf was originally launched as Grid, however due to confusion with a similar project called Grid+, it was rebranded as aelf late November 2017. Another confusion which was cleared up early in aelf’s life was the complete separation from the Polkadot project.</p>

<p>Throughout the Christmas and New Year season, Co-Founder and COO, Zhuling Chen led the worldwide charge of aelf presentations at multiple conferences. One of the first of these was the presentation at Consensus Invest 2017. aelf’s vision presented by Zhuling was to establish a ‘Central Business District’ where different industry applications have dedicated chains to serve their needs. </p>

<p>Thanks to these impressive presentations; aelf’s private sale, to a focused investor group, oversubscribed by more than 6 times their cap within 2 weeks. These investors included 1kx Capital, Alphabit, BlockTower, FBG Capital, Galaxy Partners, Hashed, Hyperchain, LinkVC, and Signam Capital. aelf has attracted investors from all around the world which indicates that it’s looking to branch it’s operations and outreach globally instead of focusing on one region.</p>

<center><img src="/images/aelf-103.jpg" alt="aelf"></center>

<p>An exceptional marketing scheme developed by the aelf team was the Candy Airdrop Program. This airdrop project rewards users for completing simple tasks like re-tweeting an aelf tweet or logging onto the Candy dashboard daily. As of March 4th 2018, the Candy system’s success is demonstrated below:</p>

<ul>
<li>Registered users: 370,904</li>
<li>Page views: 2,557,441</li>
<li>Country spread: 204</li>
<li>City spread: 11,915</li>
</ul>

<p>Another example of the combined marketing success and clear real world application for the aelf project is the continuous partnership announcements. aelf is targeting existing companies that are looking for Blockchain solutions. </p>

<p>Companies that already have a customer base which will help increase awareness among customers that are not yet familiar with Blockchain. Over the last two months, partnerships and agreements have come from Decent, Youlive, Merry Merkle Tree, Wachsman, Theta, U Network, DATx and CNN.</p>

<p>Similarly to the business partnerships, the social media and community component to this project has not been overlooked either. Within a few months:</p>

<ul>
<li>aelf Telegram chat has been increasing to over 50,000 members</li>
<li>WeChat is increasing by the 10s of thousands</li>
<li>Twitter followers are sitting over 70,000</li>
<li>Single tweet interaction has surpassed 140,000 interactions</li>
</ul>

<p>Such huge efforts on the frontline at aelf is just an indication to the work ethic of the whole team. Behind the front lines, the development team have been working tirelessly to improve and refine the overall aelf system. This includes things like SDK encapsulation and test work for asset management in relation to the Asset Chain, Smart Contract invoking tests and Chain initialization tests.</p>

<p>2018 is proving to be a busy year for the aelf team. Not only are they ramping up their marketing and online presence, they are also aiming to release minor/major upgrades every few months. By the start of 2019, aelf plans on officially launching their main product into multiple business scenarios.</p>

<h2 id="howto">How To Get A aelf Wallet?</h2>

<p>Aelf has introduced ELF tokens to remit for the resource fees that need to be paid when used in a network which includes activities like smart contracts deployment, operating the systems and then upgrading them and is also employed to pay for the transaction fees and cross-chain data transfer fees.</p>

<p>Apart from paying up for the resource fees, it also offers the community a chance to vote on major Aelf concerned decisions like including new features in the system, electing mining nodes, and several other major decisions.</p>

<p>If you are looking for a secure wallet option then a Ledger Nano S or Trezor will work the best for you. Ledger Nano S is small and discreet and includes an LCD display which displays all the necessary information and Trezor is easy to use, small and also includes 2 buttons with a fully-packed LCD screen for your use.</p>

<center><img src="/images/aelf-104.jpg" alt="aelf"></center>

<p>aelf token incentivizes honest behavior in the system. All aelf Side Chains accept the aelf Token as storage of value and a means of value transfer. It can be transferred across any Chains that accept the aelf Token. When a Side Chain applies to be indexed by the Main Chain, it receives some lockedin Tokens from the Main Chain. </p>

<p>When the Side Chain receives transaction fees, it partially shares them with miners of the Main Chain. When the Main Chain finds indexing a Side Chain is economically unfavorable, the Main Chain has the right to terminate indexing, or permitting competition of two Side Chains providing the same services.</p>

<h2 id="resources">aelf Resources</h2>

<ul>
<li><a href="https://aelf.io/">Official Website</a></li>
<li><a href="https://www.facebook.com/aelfio/">Facebook</a></li>
<li><a href="https://twitter.com/aelfblockchain">Twitter</a></li>
<li><a href="https://www.reddit.com/r/aelfofficial/">Reddit</a></li>
<li><a href="https://medium.com/@aelfblockchain">Medium</a></li>
<li><a href="https://github.com/aelfProject">Github</a></li>
<li><a href="http://slack.aelf.io/">Slack</a></li>
<li><a href="https://www.linkedin.com/company/18482858/">LinkedIn</a></li>
</ul>

<h2 id="buy">How To Buy aelf?</h2>

<p>As previously mentioned, Aelf is an ERC20, thus you can use any ERC20 compatible wallet like ledger Nano s if you want to keep it very safe.</p>

<p>Exchange to ELF in Aelf listing exchange below:</p>

<h4>BINANCE</h4>

<p>This Hong Kong-based exchange was launched in 2017 by Changpeng Zhao. It was created by his company, Bejie Technology after its ICO successfully raised $15 million. After some difficulties with the Chinese government, the company’s servers now run from more tolerant states giving it the freedom to competitively run an exchange service. Since its launch, it has received astounding success and now sits on the top ten lists of CoinMarketCap in terms of 24hr trading volumes.</p>

<p>To use Binance, you have to create and register an account first. The process is easy and simple and for level 1 with a 2 BTC daily withdrawal limit, you are not required to verify your account. But for level 2 with up to 100 BTC daily withdrawal limit, you are required to upload a government-issued photo ID containing your full name, country, and gender, and then wait for their approval. For higher limits, you have to directly contact the team. Once you’re registered you can now fund your account with a wide array of cryptoccurencies they are offering.</p>

<ul>
<li>The average fee is 0.1% on every trade.</li>
<li>You can get a 50% discount on their trading fee when using Binance tokens as payment.</li>
<li>Withdrawal fees vary for every crypto. For example, BTC withdrawals is charged 0.0005 while ETH is 0.005.</li>
</ul>

<p>There are no transfer limits and no limits on how many coins you can deposit. But, if you are not verified, you are limited in terms of the amount you are allowed to withdraw.</p>

<h4>HUOBI</h4>

<p>Huobi is a China-based exchange platform founded by Leon Li. Since it was founded in 2013, it has become one of the biggest trading platforms in the world out of China. In the past, the company has been accused numerous times of fake trading but all were never proven. They also own BitYes, a trading platform that offering services for BTC and LTC to USD trading and focusing more on international users.</p>

<p>Its online verification process is far more meticulous compared to most exchanges. Huobi.com is meant for Chinese traders so it’s in Chinese, but foreign traders are welcome to register and trade as well.  After you’ve registered using your personal details, you have to verify via email and it will then ask you for your real name’s verification.</p>

{% include page-toc.html %}

<p>It is highly important that the name you provide matches that of the bank account you will connect to your account at Huobi, in order to make transfers between your bank and the platform. Once your name is verified, you will then be required to verify your nationality. While Chinese residents have a lot of options for this, while passport is automatically selected on the drop-down menu for foreigners. You also have to submit a selfie with your government documents as also a photo of the latest deposit transactions of your bank account. The last step required is mobile verification.</p>

<p>Huobi accepts CNY (Chines Yuan) and USD FIAT currencies as well as BTC and LTC cryptocurrencies.</p>

<ul>
<li>Maker fee is 0.1% of the traded amount for USD trading.</li>
<li>Maker fee for CNY trading is a flat rate of 0.2%.</li>
<li>CNY deposits are free of charge, while USD deposits and withdrawals are charged accordingly: 1% of the amount for international wire transfer and withdrawals of USD; OKPAY charges 1.5% transfer fee and 0.5% for withdrawals in USD.</li>
</ul>

<p>The trading platform offers Market, Limit and Stop Limit orders. Both BTC and LTC margin trading is available with 5 times leverage and a 0.1% 24-hours fee.</p>

<p>The platform may be easy to use once partially translated into English, but the company has invested in some high-levels of security that even passed numerous third-party tests. There was even a time that it got hacked, but not a single customer fund was stolen.</p>

<h4>Gate.io</h4>

<p>Gate.io is an exchange platform created for trades and investments and to help investors know the current value of different cryptocurrencies buy monitoring the markets real time. Their websites can be viewed in both Chinese and English as it also aims to target Chinese investors. The exchange is based in the United States but they do not hold an NY Bitlicense. This is a bit controversial but not unusual for some crypto exchanges. Keep in mind though that there are risks involved when dealing with any unregulated exchange companies.</p>

<p>The platform does not offer FIAT currency trading against crypto but instead inter-crypto trading only. Investing is pretty easy, all you have to do is to first create an account using a valid email address, username, and a cryptocurrency wallet. This allows for buying and selling digital currencies listed on Gate.io. There are no minimum deposits required and you can monitor and compare personalized markets.</p>

<ul>
<li>2% fee applies to every executed trade.</li>
<li>Deposits are free.</li>
<li>Withdrawal fees are deducted from the amount you requested to be withdrawn and will vary according to the type of coin.</li>
<li>Withdrawals have daily limits.</li>
<li>You can take back your funds whenever you want.</li>
</ul>

<h4>Bitfinex</h4>

<p>Bitfinex is another major Hong Kong-based crypto exchange and is currently one of the biggest exchange by volume in the world. High volume is essential in a cryptocurrency trader as it guarantees low spread or the difference between the asking prices and best bids. The trading platform caters to the USD trading of BTC and 7 other digital currencies such as Ethereum and Monero. It also allows for up to 3.3x leveraged and they have speculative tokens unique only to them, that traders can use in case of a Bitcoin network fork.</p>

<p>The company has had its share of problems in the past where its bank accounts where frozen by Wells Fargo, its correspondent bank in April 2017. This lead to BItfinex accounts currently not capable of being funded with FIAT currency. You can only deposit FIAT currency through SWIFT or bank wire transfer. However, this is a very slow and expensive way that requires verification of your identity.</p>

<p>Before creating an account, the Bitfinex team reminds new users that the platform is aimed towards professional traders and that they have certain specifications. So, make sure to read all pop-up boxes before agreeing to their terms and conditions. Creating an account is simple, just follow their signup process. Provide a username, password and valid email address as well as your time zone. Once done, you can now start funding your account and start trading.</p>

<p>Your account is reinforced using PGP encryption, 2FA and a number of advanced tools for verification designed to monitor any changes in your account’s activity.</p>

<ul>
<li>1% fee on every bank wire deposits with a $20 minimum fee in addition to banking costs.</li>
<li>All digital currency deposits are free.</li>
<li>2% fee for taking offers of others.</li>
<li>1% for trades placed in the order book.</li>
<li>Waived maker fees for accounts which have traded more than $7.5 million.</li>
</ul>

<h2 id="latest">Latest aelf News</h2>

<h4>Building up the aelf kernel</h4>

<p>The Kernel is an important piece of software that’s at the center of the system. One of its main roles is to dispatch transactions. aelf Kernel stores its state in a structure named “World State”. It contains the states of every account in the system which also includes the state of every smart contract. The last weeks we have been focusing on the storage of state, transaction scheduling and smart contracts, which form the main components of the aelf Kernel.</p>

<p>We implemented the World State which contains the state of all accounts on the chain. The integrity and correctness of the data is verified with our Merkle Tree structure. In order to interface our system with different data providers, we have implemented the data access mechanism that lets aelf work with different data storage solutions.</p>

<center><img src="/images/aelf-107.jpg" alt="aelf"></center>

<p>The Scheduler is a very important part of the Kernel since its responsibility is to dispatch transactions that will be executed by worker machines. Because certain transactions must be completed before others, the scheduler must calculate which transaction can be processed in parallel and the ones that cannot. We have stabilized our design and implemented our solution.</p>

<p>The Kernel is now capable of deploying new smart contracts to our system. Once a contract is deployed, users can call methods on these smart contract. We’ve implemented the mechanism that processes transactions that invoke code on smart contracts.</p>

{% include page-toc.html %}

<p>While stabilizing the core we are also planning the next steps. The Kernel is going to be run in a computing cluster (numerous computers together in the same network). As said earlier one of the roles of the Scheduler is to send transactions to be executed by worker machines. In order for this to work we need to design and implement the network layer and the communication protocol for in-cluster communication.</p>


