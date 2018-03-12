---
title: What Is Nano?
description: What Is Nano?
name: Nano
author: WeUseCoins
permalink: /what-is-nano/
authorurl: /
published: true
toc: 
  what: What Is Nano?
  getting: Getting Started With Nano
  howto: How To Get A Nano Wallet?
  resources: Nano Resources 
  buy: How To Buy Nano?
  mining: What Is Nano Mining?
  latest: Latest Nano News
img: nano.png
category: appcoin
summary: Nano is a low-latency payment platform that requires minimal resources; making Nano ideal for peer-to-peer transactions.
---

<h2 id="what">What Is Nano?</h2>

<p><center><script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script><div class="coinmarketcap-currency-widget" data-currency="nano" data-base="USD" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div></center></p>

<iframe width="700" height="394" src="https://www.youtube.com/embed/DYYF23IluxQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

<p>Launched in 2015 by Colin LeMahieu as RaiBlocks, Nano is a low-latency payment platform that requires minimal resources; making Nano ideal for peer-to-peer transactions.</p>

<p><b>Instant transactions</b> - Nano transactions happen immediately, so it's a currency you can use every day for purchases large or small.</p>

<p><b>Zero fees</b> - Pay for the purchase, not the privilege – zero fees on whatever you buy, from bus ticket to business class flight.</p>

<p><b>Infinitely scalable</b> - Nano can process over 1000x more transactions per second than Bitcoin, so you'll never get stuck in a queue.</p>

<h4>Each account has their own blockchain</h4>

<p>With Nano, each account has their own blockchain as part of a larger directed acyclic graph.</p>

<p>Each individual user provides the computational power for the verification of their own transactions, meaning entire network is not required to update the overall ledger together in massive blocks.</p

<center><img src="/images/nano-105.jpg" alt="nano coin"></center>

<h4>Wallets pre-cache the anti-spam Proof of Work</h4>

<p>Wallets pre-cache the anti-spam Proof of Work for the next transaction once a transaction is sent, making transactions instantaneous, as both sides have the proof of work ready to go.</p>

{% include page-toc.html %}

<h4>Running a node costs next to nothing</h4>

<p>Because the protocol is incredibly lightweight and running a node costs next to nothing, Nano’s transactions are processed with no fees.</p>

<p>One transaction fits within a single UDP packet, and transactions are handled independently, eliminating any block size issue.</p>

<p>Recently, high demand and limited scalability have increased the average transaction times and fees in popular cryptocurrencies, yielding an unsatisfactory experience. Here we introduce Nano, a cryptocurrency with a novel block-lattice architecture where each account has its own blockchain, delivering near instantaneous transaction speed and unlimited scalability. </p>

<p>Each user has their own blockchain, allowing them to update it asynchronously to the rest of the network, resulting in fast transactions with minimal overhead. Transactions keep track of account balances rather than transaction amounts, allowing aggressive database pruning without compromising security. </p>

<p>To date, the Nano network has processed 4.2 million transactions with an unpruned ledger size of only 1.7GB. Nano’s feeless, split-second transactions make it the premier cryptocurrency for consumer transactions.</p>

<p>Since the implementation of Bitcoin in 2009, there has been a growing shift away from traditional, governmentbacked currencies and financial systems towards modern payments systems based on cryptography, which offer the ability to store and transfer funds in a trustless and secure manner. </p>

<p>In order to function effectively, a currency must be easily transferable, non-reversible, and have limited or no fees. The increased transaction times, large fees, and questionable network scalability have raised questions about the practicality of Bitcoin as an everyday currency. In this paper, we introduce Nano, a low-latency cryptocurrency built on an innovative block-lattice data structure offering unlimited scalability and no transaction fees. </p>

<p>Nano by design is a simple protocol with the sole purpose of being a high-performance cryptocurrency. The Nano protocol can run on low-power hardware, allowing it to be a practical, decentralized cryptocurrency for everyday use. Cryptocurrency statistics reported in this paper are accurate as of publication date.</p>

<p>In 2008, an anonymous individual under the pseudonym Satoshi Nakamoto published a whitepaper outlining the world’s first decentralized cryptocurrency, Bitcoin [1]. A key innovation brought about by Bitcoin was the blockchain, a public, immutable and decentralized data-structure which is used as a ledger for the currency’s transactions. Unfortunately, as Bitcoin matured, several issues in the protocol made Bitcoin prohibitive for many applications:</p>

<p><b>1) Poor scalability:</b> Each block in the blockchain can store a limited amount of data, which means the system can only process so many transactions per second, making spots in a block a commodity. Currently the median transaction fee is $10.38. </p>

<p><b>2) High latency:</b> The average confirmation time is 164 minutes.</p> 

<p><b>3) Power inefficient:</b> The Bitcoin network consumes an estimated 27.28TWh per year, using on average 260KWh per transaction.</p>

<p>Bitcoin, and other cryptocurrencies, function by achieving consensus on their global ledgers in order to verify legitimate transactions while resisting malicious actors. Bitcoin achieves consensus via an economic measure called Proof of Work (PoW). </p>

<p>In a PoW system participants compete to compute a number, called a nonce, such that the hash of the entire block is in a target range. This valid range is inversely proportional to the cumulative computation power of the entire Bitcoin network in order to maintain a consistent average time taken to find a valid nonce. The finder of a valid nonce is then allowed to add the block to the blockchain; therefore, those who exhaust more computational resources to compute a nonce play a greater role in the state of the blockchain. </p>

<p>PoW provides resistance against a Sybil attack, where an entity behaves as multiple entities to gain additional power in a decentralized system, and also greatly reduces race conditions that inherently exist while accessing a global data-structure.</p>

<p>An alternative consensus protocol, Proof of Stake (PoS), was first introduced by Peercoin in 2012. In a PoS system, participants vote with a weight equivalent to the amount of wealth they possess in a given cryptocurrency. With this arrangement, those who have a greater financial investment are given more power and are inherently incentivized to maintain the honesty of the system or risk losing their investment. PoS does away with the wasteful computation power competition, only requiring light-weight software running on low power hardware.</p>

<center><img src="/images/nano-106.jpg" alt="nano coin"></center>

<p>The original Nano (RaiBlocks) paper and first beta implementation were published in December, 2014, making it one of the first Directed Acyclic Graph (DAG) based cryptocurrencies. Soon after, other DAG cryptocurrencies began to develop, most notably DagCoin/Byteball and IOTA. These DAG-based cryptocurrencies broke the blockchain mold, improving system performance and security. Byteball achieves consensus by relying on a “main-chain” comprised of honest, reputable and user-trusted “witnesses”, while IOTA achieves consensus via the cumulative PoW of stacked transactions. Nano achieves consensus via a balance-weighted vote on conflicting transactions. This consensus system provides quicker, more deterministic transactions while still maintaining a strong, decentralized system. Nano continues this development and has positioned itself as one of the highest performing cryptocurrencies.</p>

{% include page-toc.html %}

<h4>NANO COMPONENTS</h4>

<p><b>Account -</b> An account is the public-key portion of a digital signature key-pair. The public-key, also referred to as the address, is shared with other network participants while the private-key is kept secret. A digitally signed packet of data ensures that the contents were approved by the private-key holder. One user may control many accounts, but only one public address may exist per account.</p>

<p><b>Block/Transaction -</b> The term “block” and “transaction” are often used interchangeably, where a block contains a single transaction. Transaction specifically refers to the action while block refers to the digital encoding of the transaction. Transactions are signed by the private-key belonging to the account on which the transaction is performed.</p>

<p><b>Ledger -</b> The ledger is the global set of accounts where each account has its own transaction chain (Figure 2). This is a key design component that falls under the category of replacing a run-time agreement with a design-time agreement; everyone agrees via signature checking that only an account owner can modify their own chain. This converts a seemingly shared datastructure, a distributed ledger, in to a set of non-shared ones.</p>

<p><b>Node -</b> A node is a piece of software running on a computer that conforms to the Nano protocol and participates in the Nano network. The software manages the ledger and any accounts the node may control, if any. A node may either store the entire ledger or a pruned history containing only the last few block of each account’s blockchain. When setting up a new node it is recommended to verify the entire history and prune locally.</p>

<h2 id="getting">Getting Started With Nano</h2>

<p>Nano is a new way of thinking about money, take some time and educate yourself on the benefits and uses for this network.</p>

<ul>
<li>Nano is a trustless, low-latency cryptocurrency that utilizes a novel block-lattice architecture, where each account has its own blockchain and achieves consensus via delegated Proof of Stake voting.</li>
<li>Offers feeless, instantaneous transactions, as well as unlimited scalability, making Nano ideal for peer-to-peer transactions.</li>
<li>The network requires minimal resources, no high-power mining hardware, and can process high transaction throughput.</li>
<li>To date, the Nano network has processed over four million transactions with an unpruned ledger size of only 1.7GB.</li>
<li>For a more in-depth look at Nano, please read Nano whitepaper</li>
</ul>

<h4>How does Nano work?</h4>

<ul>
<li>Unlike conventional blockchains used in many other cryptocurrencies, Nano uses a block-lattice structure. Each account has its own blockchain (account-chain), equivalent to the account’s transaction/balance history. Each account-chain can only be updated by the account’s owner; this allows each account-chain to be updated immediately and asynchronously to the rest of the block-lattice, resulting in quick transactions. Since blocks can only be added by each account-chain’s owner, transferring funds from one account to another requires two transactions: a send transaction deducting the amount from the sender’s balance and a receive transaction adding the amount to the receiving account’s balance.</li>

<center><img src="/images/nano-107.jpg" alt="nano coin"></center>

<li>Refer to sections three and four of the whitepaper for a more thorough look at how Nano’ works.</li>
</ul>

<h4>What are the advantages of Nano?</h4>

<p><b>Zero Fees -</b> Because the protocol is incredibly lightweight and running a node costs next to nothing, Nano transactions are processed with no fees. One transaction fits within a single UDP packet, and transactions are handled independently, eliminating any block size issue.</p>

<p><b>Instantaneous Transaction Speed -</b> Wallets pre-cache the anti-spam Proof of Work for the next transaction once a transaction is sent, making transactions instantaneous, as both sides have the proof of work ready to go. For ongoing transactions there may be delays, but this is intentional to prevent transaction spam.</p>

<p><b>Scalability -</b> Transaction lookups scale with the logarithm of the data set size logNO with a tree-like structure or O1 if they are based on a hash table. To get an idea of how this scales, if it was a simple binary tree with 1,000 entries it would take 10 lookups. With 1,000,000 entries it takes 20 and 1 billion would take 30. Pruned nodes only need to keep the latest block of each account-chain, even further reducing lookup time and system resources.</p>

<h2 id="howto">How To Get A Nano Wallet?</h2>

<p>Nano currently supports both a desktop and online wallet, with plans to release a mobile wallet and light wallet in the near future.</p>

<ul>
<li>The desktop wallet can be downloaded from the Nano <a href="https://nano.org/#getwallets">website</a></li>
<li>Instructions on setting up the desktop wallet can be found on YouTube.</li>
<li>An open source, online wallet is located at www.nanowallet.io</li>
<li>An integrated wallet within Telegram app is available here https://t.me/RaiWalletBot</li>
</ul>

<center><img src="/images/nano-102.jpg" alt="nano coin"></center>

<p>Currently the NANO ticker represents 1 million nano (Mnano), which is 10^30 raw, the smallest unit of Nano (equivalent to a satoshi in bitcoin)</p>

<p>Nano’ smallest unit is 1 raw, while 1 Gnano is the largest. 1 nano is 10^24 raw.</p>

<p>NANO is the ticker used on exchanges/software to trade Mnano.</p>

<p>1 NANO does not equal 1 nano. 1 NANO currently equals 1Mnano.</p>

<p>Name dividers have been put in place to notate the factor of raw units in SI notation:</p>

<center><img src="/images/nano-101.jpg" alt="nano coin"></center>

<h2 id="resources">Nano Resources</h2>

<ul>
<li><a href="https://nano.org">Official Website</a></li>
<li><a href="https://twitter.com/nanocurrency">Twitter</a></li>
<li><a href="https://chat.nano.org/">Discord</a></li>
<li><a href="https://github.com/nanocurrency">Github</a></li>
<li><a href="https://reddit.com/r/nanocurrency">Reddit</a></li>
<li><a href="https://medium.com/@nanocurrency">Medium</a></li>
</ul>

<h2 id="buy">How To Buy Nano?</h2>

<p>Nano is currently traded on several exchanges under the ticker symbol $NANO</p>
<ul>
<li>KuCoin</li>
<li>Binance</li>
<li>OKEx</li>
<li>BitFlip</li>
</ul>
<p>The development team is actively working to add Nano to additional exchanges, with the goal of Nano ultimately trading on every major exchange.</p>

<p>Unfortunately, the Nano team ​is not permitted to discuss ​potential listings on additional exchanges until Nano is officially listed. The Nano team will announce each new exchange listing as soon as they are available.</p>

<h4>How does Nano achieve consensus?</h4>
<ul>
<li>The voting process is balance-weighted. Every account selects a wallet address of a representative node. This is just a node that is configured to stay online and be ready to vote. When an account selects their representative, the vote weight of that account is increased by the balance of the source account.</li>

<li>Votes are weighted by account balances. Those who have more funds in the system are inherently incentivized to keep the system honest; a dishonest system would make their investment worthless.</li>

<li>Additional transactions don’t contribute to securing the network; transactions settle individually within a few seconds regardless of other network activity. Because of this there’s no reason to incentivize generating activity.</li>

<li>A list of current representatives, sorted by voting power, can be found here. Any wallet, regardless of balance, can be a representative. A good representative is always online to vote.</li>
</ul>

<h2 id="mining">What Is Nano Mining?</h2>

<p>Nano is not mined and has reached its maximum supply of 133,248,290 NANO. Funds were initially distributed via a captcha-based faucet distribution system that ended in October 2017. Websites claiming to mine NANO are actually mining other cryptocurrencies, such as Monero, to trade for NANO on an exchange, and then paying out miners in NANO, leveraging Nano’ feeless transactions.</p>

<h4>Nano Vs Other Cryptocurrencies</h4>

<p><b>Bitcoin</b></p>

<p>Bitcoin organizes transactions into blocks with an average processing time of 10 minutes per block. For a transaction to go through, it must be included in a block, and that block must be mined. To be safe, transactions are usually not considered complete until a few additional blocks are added to the blockchain. Because of this, Bitcoin transactions typically process on the order of hours. With Nano, each individual transaction is a block, and each block is able to be processed instantly by the network. The limit to the speed of the transactions is primarily network-bound; transactions are processed as fast as they can be propagated throughout the Nano network.</p>

<p>Bitcoin’s security is derived from hundreds of terawatts of computing power computing power computing hashes. In order to perform malicious actions, such as a double spend, on the Bitcoin blockchain, an attacker would have to accrue at least half of the network’s computation power, which is both financially and practically infeasible.</p>

{% include page-toc.html %}

<p>Nano secure’s it’s ledger via delegated proof of stake (dPoS). In order to perform malicious actions on the Nano block-lattice, an attacker would have to posses >50% of the online voting power. Such an attack would spoil their large financial investment, and as such not an attractive option. The dPoS of Nano consumes minimal energy, allowing full-nodes to run on inexpensive, low-power hardware.</p>

<p><b>IOTA</b></p>

<p>IOTA’s consensus is decided by Proof of Work (PoW) stacking of consecutive transactions, while Nano’ is achieved by voting on conflicting transactions. PoW stacking requires maximizing the continuous network hash rate which is an expense that is inherently paid in electricity by users of the network. Because Nano doesn’t rely on high network PoW to maintain security, the operating cost of Nano nodes and Nano users are much lower.</p>

<center><img src="/images/nano-108.jpg" alt="nano coin"></center>

<p>While IOTA’s Tangle and Nano’ block-lattice are both DAG data-structures, offering instantaneous and feeless transactions, the way they operate are significantly different. With IOTA, two “tip” transaction must first be discovered via a probabilistic algorithm, such as a Monte Carlo Random Walk; a good tip is a recent transaction and expands the tangle in a “forward” moving direction. The idea is that if everyone uses similar tip selection algorithms, recent valid transactions will be approved by newer, valid transactions. </p>

<p>Once a transaction is sufficiently deep in the Tangle, it is considered confirmed. Nano’ block-lattice is an organized structure that doesn’t require “tip” discovery. The last block on each account-chain is easily found/cached, and account transactions can only be appended, like a conventional blockchain. For typical transactions, this transaction is instantaneous and doesn’t require any additional blocks for a transaction to be considered confirmed.</p>

<p>IOTA’s vision is machine-to-machine communication, commerce, data storage and to become the premier protocol of IoT devices. Nano’ focus is on reliable, quick peer-to-peer payments and rapid exchange transfers for arbitrage.</p>

<p><b>Ethereum</b></p>

<p>Ethereum is an alternative or separate technology from Nano. The entire concept of programs executing on top of the Ethereum Virtual Machine is something Nano doesn’t attempt to replicate. The part we focus on is an efficient transfer of value i.e. purely a currency, so while Ethereum requires miners and electricity input which is paid for by devaluing the currency, Nano has no fees and no devaluing while operating.</p>

<h2 id="latest">Latest Nano News</h2>

<h4>Nano Rebrand Announcement</h4>

<p>To our valued community,</p>

<p>It has been an eventful year for RaiBlocks, capped off by a December that saw unprecedented growth in the community. The Core team would like to thank each and every one of you for making this community second to none. It is your support and engagement that makes RaiBlocks such an exciting project to be a part of.</p>

<p>In November, the team gathered to discuss the future of Raiblocks and develop plans to further the project’s growth. One topic discussed was the name itself (“Is it, ray or rye?,” “Ditch the Blocks!,” “Just call it Rai!”). Feedback from the community suggested that improvements could be made to better resonate with the public and a mainstream audience. Because of this, our team made the decision to rebrand.</p>

<p>It is with great pleasure that we announce Nano.</p>

<center><img src="/images/nano-103.jpg" alt="nano coin"></center>

<p>The Core Team wanted a name that represented the simplicity and speed of the project, and Nano does just that. The new logo uses several nodes, playing on the block-lattice design of the network, that connect to form an “N.” All social media accounts will be updated to reflect the name and logo changes. The new website is nano.org.</p>

<p>All funds, wallets, and transactions will still operate as they have been. Addresses will continue to start with xrb_ for the moment. In the future we will introduce nano_ addresses with the rest of the current addresses being consistent. We know that many of you will have questions about the rebrand and we will do our best to answer all of them.</p>

<center><img src="/images/nano-104.jpg" alt="nano coin"></center>

<p>The launch of Nano is just the beginning of what will be an exciting 2018! Beta testing sign-ups are open for both the desktop wallet and iOS mobile wallet.</p>

<p>The Core team would like to express our humble gratitude for all of your support!</p>

<p>Thank you,</p>

<p>The Nano Core Team</p>
