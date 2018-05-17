---
title: What Is IOSToken?
description: What Is IOSToken?
name: IOSToken
author: WeUseCoins
permalink: /what-is-iostoken/
authorurl: /
published: true
toc: 
  what: What Is IOSToken?
  getting: Getting Started With IOSToken
  howto: How To Get A IOSToken Wallet?
  resources: IOSToken Resources 
  buy: How To Buy IOSToken?
  latest: Latest IOSToken News
img: iostoken.png
category: altcoin
summary: The Internet-of-Services (IOS) blockchain is a project out of China that is aims to address the fundamental scalability challenges faced by blockchain technology in order to empower people, services and machines to scale robust services on a network with a thouroughput of more than 100,000 TPS (transactions-per-second).
---

<h2 id="what">What Is IOSToken?</h2>

<p><center><script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script><div class="coinmarketcap-currency-widget" data-currency="iostoken" data-base="USD" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div></center></p>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/b8CQd_YJEbc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>

<p>The Internet of Services Foundation, a Singapore incorporated non-for-profit organization, is currently developing the IOS blockchain and relevant technologies. The foundation is formed by a group of blockchain experts, distributed system scientists, world-class programmers and tech enthusiasts, aiming to make business-grade decentralized services possible on the blockchain.</p>

<center><img src="/images/iostoken-103.jpg" alt="what is iostoken"></center>

<p>Excessive commission fees, privacy violations, frauds and censorship are common issues encountered during daily interactions with centralized online service providers. Given these well-recognized problems with centralization, a wide range of <a href="/blockchain-explained-for-normal-people/">blockchain technologies</a> attempting to resolve these issues have been developed since the launch of <a href="/what-is-bitcoin/">Bitcoin</a> in 2008. </p>

<p>Specialized projects like <a href="/what-is-steemit/">SteemIt</a>, <a href="/what-is-bitshares/">Bitshares</a>, and <a href="/what-is-syscoin/">Syscoin</a>, as well as more versatile projects like Ethereum and EOS, are some of many examples. However, most of those attempts are either too specialized in certain applications, or burdened by low transaction throughput. Due to these limitations in flexibility and transaction throughput, it is impossible for developers and enterprises to bring heavy services like Facebook or Amazon onto the blockchain - not to mention something more complicated like digital asset exchanges.</p>

{% include page-toc.html %}

<p>The heart of the scalability issue lies in the fundamental design of these existing blockchain technologies -- their consensus protocols and blockchain architectures. Most of the existing blockchain technologies face two major challenges in their way of scaling up: a) every full node must store the entire ledger in order to participate; b) every participating node in the network is obligated to handle every transaction. </p>

<p>Since all the participating nodes are essentially conducting the same work, the number of transactions the system can process will not exceed that of a single node. Moreover, the growing size of the blockchain increases the requirements and costs of storage space, bandwidth, and computational resources for a node to fully participate in the network. The increasing mining cost will inevitably make the participation in the network become a privilege for the few, leading us straight back to the problem of centralization.</p>

<p>The IOS is designed to fill the void. In our vision, the IOS is a next-generation blockchain technology that provides the network infrastructure to support a service-oriented ecosystem. The IOS platform not only provides its users a completely decentralized way to exchange online services and digital goods, but also enables developers to deploy large scale dApps with the ability to support massive number of users. With a series of groundbreaking innovations, such as Efficient Distributed Sharding (“EDS”) and Believable-First consensus approach, we are able to increase the system’s throughput enormously while guaranteeing security.</p>

<p>We developed EDS based on the sharding technique. It is widely adopted in distributed systems and databases to enable parallel transaction processing. Inspired by the classic “Divide and Conquer” principle in computer science, sharding is a technique that partitions the entire IOS network into certain numbers of subspaces called shards. </p>

<center><img src="/images/iostoken-105.jpg" alt="what is iostoken"></center>

<p>We can consider each shard as a miniature network that runs its own consensus protocol in parallel. Instead of having the entire network validating the same set of transactions, subsets of transactions can be handled by various consensus groups simultaneously. </p>

<p>Therefore, the throughput of the system can be significantly enhanced even if the size of the network and number of transactions grow rapidly. Moreover, in order to ensure the network is divided homogeneously, we have developed a Bias-Resistant Distributed Randomness protocol in order to introduce unbiased and transparent randomness into the sharding process.</p>

<p>With the EDS, the IOS is also packed in a very powerful arsenal of technologies that empowers deployment of large scale dApps with high-performance and flexibility. It allows developers to build a wide range of products: from counterparts of traditional monopolistic online service providers to brand new business models that would have been considered impossible previously. </p>

<p>Admittedly, running such services could be quite expensive when the size of the IOS network is relatively small. However, with increasing number of nodes and resources in the network, the cost of running such large scale dApps might be greatly reduced. Additionally, there are many benefits including: avoiding cyber attacks, high-level of data security, and the immutable property.</p>

<p>During the development of the IOS blockchain, we thoroughly examined all currently available solutions in order to learn from previous attempts.</p>

<h4>Related Work</h4>

<p><b>State Machine Replication</b> - In a nutshell, blockchain technologies are state machine replication protocols. Every state machine replication protocol has to satisfy two important properties:</p>

<p>1. Safety , i.e., all servers in the network have the same record of transactions;</p>
<p>2. Liveness , i.e., transactions of clients are submitted and documented into the log quickly.</p>

<p>There are two fundamentally different ways to achieve state machine replication: classical-style consensus and blockchain-style consensus. Classical-style consensus generally applies Paxos-like algorithms and is used in the permissioned setting where there is a priori knowledge of the consensus nodes known by the system. An example of this application would be the servers at software companies like Amazon, where their servers collectively use a classical way to replicate and store information, and the classical algorithm establishes the fundamentals to form a consensus of the ordering of their data.</p>

<p>Bitcoin and Proof-of-Work - Satoshi Nakamoto was the first to introduce Bitcoin as a solution to establish consensus in the permissionless setting , e.g. any node can freely join and leave the network without a priori knowledge of the consensus nodes. The network underlying Bitcoin, blockchain improves the scale of distributed systems without human involvement by providing economic incentives to the servers, dubbed miners in Bitcoin’s settings. </p>

{% include page-toc.html %}

<p>Miners in the Bitcoin network form consensus by calculating partial hash collisions with a certain difficulty level. The chain with the greatest cumulative difficulty would be acknowledged by other nodes as the consensus result. This solution is named Proof-of-Work (PoW), which in essence is to have all the nodes in the network contribute their computing power as a way to earn incentives and thus determine the ordering of transactions for the whole system. A benefit of PoW is its ability to defend against Sybil attack in a permissionless setting. </p>

<p>Despite its advancements in scale and security, Bitcoin has a few major drawbacks: (1) unlike other modern cryptocurrencies, it takes more than an hour to confirm a transaction according its configuration; (2) it is difficult to develop various applications upon Bitcoin network; (3) the consensus mechanism wastes too much energy, i.e., it costs more than two million dollars per day in electricity. More importantly, earlier works show that Bitcoin-style blockchain must have a sufficiently large interval to retain security.</p>

<center><img src="/images/iostoken-104.JPG" alt="what is iostoken"></center>

<p>Therefore, Bitcoin would not be a good replacement for the current centralized system to support day-to-day applications and large transaction volume.</p>

<h4>Proof-of-Stake</h4>

<p>The concept of Proof-of-Stake was first discussed on an online blockchain forum and was adopted by a few cryptocurrencies like <a href="/what-is-ppcoin/">PPcoin</a>, <a href="/what-is-peercoins/">PeerCoins</a> and <a href="/what-is-nxt/">Nxt</a>. The idea of PoS is essentially one vote per unit of stake, such that for each validator, owning more stake will have higher voting power. Therefore, validators have no economic incentive to harm the whole blockchain network. </p>

<p>For attackers, the cost of attack is huge because they have to own the majority of the stakes. In the early development, Proof-of-Stake consensus mechanism is known for being vulnerable to “nothing-at-stake” attacks, where servers are able to vote on multiple blocks at the same time with no incentive to converge, damaging the security of the blockchain. </p>

<p>Later work solves the problem using slasher, which enforces a punishment for violating nodes. Many other work are also described as the ad hoc application of Proof-of-Stake. Although PoS fulfills the liveness of the replicated state machine protocol, it still faces challenges like centralization and security problems. </p>

<p>For instance, validators possessing more tokens will be more likely to generate new blocks and get richer, leading to a potential centralization problem. Furthermore, previous work shows that Proof-of-Stake protocol can only be a provably secure and robustly configured consensus protocol if its token is not being exchanged too frequently, which potentially implies that there is a ceiling throughput for Proof-of-Stake in order to preserve security.</p>

<h4>Blockchain Architecture</h4>

<p>The infrastructure of IOSChain is similar to existing well-known blockchains like Bitcoin and <a href="/what-is-ethereum/">Ethereum</a>, where nodes disseminate data through gossip protocol. The system split its data and state into shards. Each node is responsible for one shard of the system. Unspent transactions (UTXOs) are stored in the memory of the nodes in the corresponding shards. This raises several new challenges.</p>

<ul>
<li>How to divide the system into shards.</li>
<li>How to reach consensus in each shard.</li>
<li>How to perform inter-shard transactions.</li>
</ul>

<p>In order to solve the above challenges in a fair and secure manner, we have to perform many random operations, for example, assigning nodes into shards, electing leaders in each shard. As a result, we have to first design an unforgeable and unbiased (uniformly random) distributed random number generation protocol. With the random number generation protocol, the above challenges can be addressed one by one.</p>

<h4>Distributed Randomness Protocol</h4>

<p>Traditional approach to generate randomness like <a href="/video-proof-of-work-vs-proof-of-stake/">Proof-of-Work based mechanism</a> or a trusted beacon have computational wastes and centralization concerns. It is desirable to use cryptographic tools to generate distributed random numbers, which not only saves resources but also is provably secure.</p>

<center><img src="/images/iostoken-106.jpg" alt="what is iostoken"></center>

<p>There are multiple algorithms to generate distributed random numbers for the purpose of node-shard assignment and leader election in IOSChain. Here we present the one that, to our knowledge, the best fits the requirement in the IOSChain scenario. In IOSChain, the distributed random number generator has the following requirements.</p>

<p>(1) It has to be resistant to dishonest participants (including clients and servers) with in a certain ratio. To be detailed, the system is able to make progress when the ratio of dishonest participants are below the threshold, and nothing bad happens when making progress.</p>

<p>(2) The final random number must be unforgeable and unbiased (uniformly random), except negligible probability.</p>

<p>(3) Dishonest participant is not able to try multiple times to generate the random number that favors the participant, even multiple dishonest participants collude.</p>

<p>(4) Third parties are able to verify the output is generated by faithfully running the protocol (i.e., verify that it satisfies all the above requirements).</p>

<p>In order to achieve these requirements, we propose to use a client-server protocol, called Distributed Randomness Protocol (DRP), where a client communicates with a set of servers to generate an unforgeable, uniformly random value through non-interactive zero-knowledge proof (NIZK) and publicly verifiable secret sharing (PVSS). </p>

<p>In a certain protocol run, before the protocol finishes and the final random output is revealed, no entity in the protocol is able to learn any information about the final output, which makes sure a dishonest client is not able to try multiple runs to generate the random number that favors the dishonest client.</p>

<p>The protocol consists of two phases - randomness generation and randomness verification. It works as follows. Initially, the client starts a protocol run by broadcasting to all the servers a message including a randomly generated balanced grouping. In the first phase, each server generates a random input value and creates shares only for other members of the same group using PVSS. </p>

<p>Upon receiving encrypted shares with the NIZK proofs from all the servers (or timeout), the client chooses a subset of server inputs from each group. This allows the client fix each group’s secret and the output of the protocol. In the second phase, the servers decrypt and send their shares to the client as soon as the client receives a sign-off on input values in a global run of collective signature (CoSi). Then the client combines the recovered group secrets to reveal the final random output.</p>

{% include page-toc.html %}

<h4>Efficient Distributed Sharding</h4>

<p>With the distributed randomness protocol (DRP) presented above, it is not difficult to implement efficient distributed sharding. However, the protocol only works well without malicious or failure nodes, since it is performed by validators collectively. Therefore, we have to design backup protocols for scenarios with malicious or failure nodes. To conquer this problem, we propose a solution that uses Algorand and Omniledger to elect a leader.</p>

<h4>Algorithm - Leader Election with Back-up Protocol</h4>

<p>Inputs:</p>

<ol>
<li>v is a view counter</li>
<li>i is a validator</li>
<li>ski is the private key for i</li>
<li>e is the current epoch</li>
<li>Δ is the synchrony bound</li>
</ol>

<p>Output: a validator i which has the minimum-value valid lottery to run DRP</p>

<p>1) For each e , each i computes a lottery lotteryi,e,v using Verifiable Random Function with its view v and the node’s private key ski.</p>

<p>2) Then for a time bound Δ , the validators gossip these lotteries with each other.Each validator collects the top 3 minimum-value lottery in the gossip process.</p>

<p>3) After the time bound Δ , the validators fix the minimum-value valid lottery they have seen so far.</p>

<p>4) The validator corresponding to the minimum-value valid lottery is elected as the leader, while the other two validators corresponding to the second and third minimum-value valid lottery are used as the pool for back-up leaders.</p>

<p>5) If the elected validator successfully runs the DRP, it broadcasts the output rnde to all other validators with its correctness proof.</p>

<p>6) Each i can use rnde to compute a permutation and divide the result into m buckets with same size, thus the mapping from nodes to shards is determined.</p>

<p>7) After the time bound Δ , if the elected validator fails to start DRP, validators mark the current run as failed and exclude this leader in the rest of the epoch e . In this case,the back-up leader will be used to run DRP. If the two backup leaders fail.</p>

<p>The leader election mechanism provides required properties which is the same as those described in Section 4. Each validator can produce only a single valid lottery per view v in a epoch e . The DRP design provides scalability. Since the private key ski is kept secret, the output of VRF is unpredictable. Given our synchrony time bound Δ , the lottery will be seen by all other validators within Δ. </p>

<p>If malicious nodes win the lottery, it cannot perform arbitrary behaviors---either choose to cooperate and run the DRP protocol, or decide to fail the epoch. If any of the malicious/abnormal cases happens, the malicious nodes would be excluded from participating in the rest of the epoch.</p>

<h4>Operability During Epoch Transitions</h4>

<p>There are many shard configuration schemes, such as static configuration and some different rolling schemes. IOSChain uses a dynamical rolling scheme - it swaps out and in validators in batches for each epoch e . This configuration will give IOSChain an idle period that only after enough validators have bootstrapped appropriately, the network can begin processing transactions. Many designs of the blockchain did not take the issue that how to make sure the system is operational during this period into consideration.</p>

<center><img src="/images/iostoken-107.jpg" alt="what is iostoken"></center>

<p>A key factor of the issue during the transition is the batch size, which is is highly relevant to the safety of the system. When the swap batch size grows, the risk increases as the number of remaining honest validators will not be sufficient to reach consensus. Another disadvantage of growing swap batch size is that the downloading and bootstrapping information will cause network stress increases. Given our threat model that there are at most 1/3 malicious nodes, the maximum size of the swap batch should be less than 1/3 nodes.</p>

<p>To maintain full operability during transition/idle phases, we use the method of selecting a subset of the validators to be swapped out and replaced with new members. This is based on Omniledger’s approach. It enables the remaining validators to continue offering services while the newly joined nodes are downloading history data and bootstrapping. We present the node-to-shard transition assignment protocol - TransEpoch as follows.</p>

<h4>Inter-Shard Transactions</h4>

<p>The mechanism that supports inter-shard transactions is critical in the system, since transactions are likely to happen cross shards. We introduce a Byzantine Shard Atomic Commit (Atomix) protocol to ensures the atomicity cross shards. This protocol prevents double spending and keeps the consistency of transactions. Our design is a variant of the Omniledger algorithm.</p>

<p>We first present Atomix in the UTXO state model. Previous work has proved that the Atomix can ensure that the smart contract is also supported by our inter-shard transaction mechanism, if the UTXO model is supported.</p>

<p>In a nutshell, when a cross-shard transaction from node a at shard A to node b at shard B happens, the algorithm does the following:</p>

<p>1) Create the TX within the shard A and let all nodes validate the transaction.</p>

<p>2) If the TX is approved by all nodes in shard A , the transaction is logged in A ’s blockchain. At the same time, the client will gossip a proof-of-acceptance to endorse the transaction,lock the fund of a in to a UTXO, and send it to B. a) If the TX is rejected by nodes in A , the fund gets returned to a.</p>

<p>3) A ’s blockchain commits the TX to the B ’s blockchain and have nodes in the receiver’s shard validating the TX. a) If the TX is rejected by nodes in B , the fund gets returned to a.</p>

<p>4) If the TX gets approved by all nodes in the B ’s blockchain, the fund is released to b . a) If the TX is rejected by all nodes, the fund gets returned to a.</p>

<h4>Consensus Mechanism</h4>

<p><b>Tokens and Motivations</b> - In the IOS system, IOS Token , like tokens in other blockchain systems, serves as the medium of exchange for all transactions and commission fees. More importantly, IOS also plays a important role in calculating a user’s believability score. All IOS tokens will be generated in the Genesis Block. In the IOS ecosystem, IOS tokens can be used for:</p>

<center><img src="/images/iostoken-108.jpg" alt="what is iostoken"></center>

<ul>
<li>Payment : Payments for services and goods provided by merchants or other community members.</li>

<li>Commission : Payment to validators as compensation for running smart contracts, processing messages and transactions, and using resources shared by the general ecosystem including but not limited to storage space, computing power, etc. The commission fee incentivizes the validators and prevents malicious users from damaging the interests of the community through excessive deployment of smart contracts.</li>

<li>Believability : IOS tokens will be used to calculate users' believability scores (will be explained in the following section).</li>
</ul>

<p>In addition, as a member of the IOS ecosystem, each user can acquire IOS tokens through validating transactions and contributing resources (e.g., running smart contracts, providing storage space, etc.).</p>

<p>As mentioned in previous sections, A major challenge faced by traditional Proof-of-Stake consensus mechanism is the tendency towards centralization. In order to mitigate this risk, we introduce Servi as both a measurement of users' contribution to the community and a way to encourage members to contribute to the continued development of the IOSChain. It has the following attributes:</p>

<ul>
<li>Non-tradable : Since Servi is not designed as a medium of exchange, Servi can not be traded or exchanged in any way.</li>
<li>Self-destructive : After validating a block, the system will automatically clear the Servi balance owned by the validator. In this way, nodes with high believability scores can take turns in validating blocks, to ensure a fair block generation process.</li>
<li>Self-issuance : Servi will be generated and deposited to user accounts automatically after certain contributions, such as providing community services, evaluating services provided by another entities, and/or making other special contributions.</li>
</ul>

<h4>Proof-of-Believability</h4>

<p>Traditional blockchain systems have an inherent trade-off between safety and throughput, depending on shard size. A system with a large number of small shards delivers better performance but provides less resiliency against bad actors, and vice versa. In order to break the trade-off in a way that keeps safety and increases throughput, we propose an innovative Proof-of-Believability (PoB) consensus protocol for IOSChain. PoB guarantees that the nodes are with negligible probability to misbehave, while significantly increasing the transaction throughput by size-one-shard.</p>

<p>The Proof-of-Believability consensus protocol uses an intra-shard Believable-First approach. The protocol divides all validators into two groups, a believable league and a normal league. Believable validators process transactions quickly in the first phase. Afterwards, normal validators sample and verify the transactions in the second phase to provide finality and ensure verifiability. The chance of a node being elected into the believable league is determined by believability score which is calculated by multiple factors (e.g., token balance, contributions to the community, reviews, etc). </p>

<p>One with higher believability score is more likely to be elected into the believable league. Believable validators follow the procedures to decide the set of committed transactions and their order, as well as process them in order. Believable validators also form smaller groups - one validator per group. Transactions will be randomly distributed among these believable validators. Consequently, they produce smaller blocks with extremely low latency.</p>

<p>However, it may introduce security problem as only one node is performing the verification. As a result, some corrupted transactions might be committed by misbehaved validators. In order to solve this security problem, we specify a sampling probability p that normal validators will sample transactions and detect inconsistencies. </p>

{% include page-toc.html %}

<p>If a validator is detected as misbehaviour, it will lose all the tokens and reputation in the system while the defrauded users will be compensated for any loss. The believable-first approach makes processing transactions extremely fast as only a single (believable) validator is doing the verification and it is unlikely to misbehave.</p>

<p>In the IOS system, the sharding policy file specifies the sizes of the believable and normal league, respectively, and the sampling probability p . Upon the inception of an epoch, all validators will be assigned to shards using the distributed randomness generation protocol. Their states will be bootstrapped from the corresponding shard’s last Micro State Blocks (MSB). Depending on the believability score , validators will be assigned to either believable group (small) or the normal group (large) within a shard.</p>

<p>In the first phase, transactions that are processed by the believable league produce optimistically validated blocks. These blocks serve as input for sampling re-validation by the normal league who runs concurrently. The normal league also combines inputs from multiple optimistic processing groups. This could maximize the throughput of the system. If transactions are validated successfully, they will be included in a finalized block, added to the shard’s blockchain, and finally included in the MSB. </p>

<center><img src="/images/iostoken-109.jpg" alt="what is iostoken"></center>

<p>However, when the normal league detects any inconsistency, the corresponding validated transaction would be excluded from the blockchain and the validator who signed the invalid block would be detected and held accountable. We designed the punishment scheme to be powerfully harsh so that the validator has no incentive to misbehave under any circumstances. </p>

<p>If a validator is detected as misbehaving, that validator will lose all tokens and reputation in the system and all its previously validated transactions will be re-checked. Given the minimal incentive to be at fault and the quantifiable confidence in the security of validation, clients can achieve real-time processing speed with assurance.</p>

<p>The normal league runs the Byzantine consensus scheme based on ByzCoin, because it scales efficiently to thousands of consensus group members. ByzCoin uses collective signature (CoSi) , a scalable cryptographic primitive that uses multi-signatures, to make traditional consensus algorithms such as PBFT scale.</p> 

<p>ByzCoin distributes blocks using multicast trees for performance, and falls back to a star topology for fault tolerance. It ensures that all the honest members of a shard agree on a specific common sequence of actions, despite some malicious nodes are in the shard, while guaranteeing safety and liveness.</p>

<p>To ensure robustness, we use a fall-back scheme in Believable-first protocol. When a shard doesn’t have enough believable validators to form the league, due to either temporary downtime or being in the bootstrapping phase of the ecosystem, two-league committees would fall back to one-league. All transactions a are directly processed by the normal league following the PBFT consensus protocol.</p>

<h4>Blockchain Storage Pruning</h4>

<p>Another issue current blockchains are facing is the rapid expanding size of the blockchain storage [8] , which puts on new validators heavy workload for bootstrapping. Blockchains follow the same pattern to store historical data from the beginning. However, this is a crucial concern for the high-throughput blockchain systems as the the storage will explode. To minimize the storage and bootstrapping costs for validators, we use a blockchain storage pruning approach to summarize the full state of a shard’s blockchain. We use Micro State Blocks (MSB), which is based on the State Block [8] . We present the MSB generation protocol below.</p>

<p>Transactions are checked by references to past blockchains. Since each shard in IOSChain stores only the past MSB headers and blockchain state is distributed across multiple shards, a client cannot prove the existence of a past transaction by providing a check in the block. We mitigate this issue by moving the storage responsibility from past blockchains to the client. Since latest epoch’s blocks is retained, clients can ask the validators of the shard to create existence proof for transactions validated in epoch e during the next epoch.</p>

<p>Validators are essentially creating a higher level chain for MSBs, that provides skips from an epoch’s MSB to another. This MSB Chain keeps the latest MSB with its body and all the previous MSB headers. This is important as clients that want to verify a past transaction need to have a reference point. We remark that MSBs may contain several multi-hop backpointers to headers of regular blocks in order to reduce the size of their proofs.</p>

<center><img src="/images/iostoken-110.jpg" alt="what is iostoken"></center>

<p>With MSB, bootstrapping new validators and syncing crashed validators up-to-date become efficient, as validators start from the last valid MSB and replay only the last part of the blockchain, instead of replaying the full history from the first block or from the time they crashed. If Bitcoin is deployed on IOSChain, currently the bandwidth bootstrapping costs would be two orders of magnitude less. </p>

<p>This is critical when new shards come in in IOSChain. Due to the random shard assignment mechanism, validators changes shards periodically and need to be updated frequently, which benefits a lot from the blockchain storage pruning technique.</p>

<h2 id="getting">Getting Started With IOSToken</h2>

<p>The “Internet-of-Services” (IOS) blockchain is a project out of China that is aims to address the fundamental scalability challenges faced by blockchain technology in order to empower people, services and machines to scale robust services on a network with a thouroughput of more than 100,000 TPS (transactions-per-second).</p>

<p>The blockchain has built in features for:</p>

<ul>
<li>Smart contract language (dApps).</li>
<li>Private transactions.</li>
<li>Decentralized P2P hosting (Amazon S3 competitor).</li>
<li>User reputation tracking for decentralized marketplaces.</li>
<li>Light weight infrastructure to run on smart devices.</li>
<li>Rewards for ‘good-citizens’ in the blockchain.</li>
</ul>

<p>Well, first of all, current blockchain’s have a problem — a big problem. They can’t yet handle transactions at scale.</p>

<p>It doesn’t matter if you are:</p>

<ul>
<li>Sending payments.</li>
<li>Interacting with a Smart Contract or dApp.</li>
<li>Validating an identity.</li>
<li>Hosting a decentralized vote.</li>
</ul>

<p>All these actions require the blockchain to ‘validate’ and process the transaction.</p>

<p>To put it into perspective, people like to compare blockchain tps against the Visa Network which handles around 2000 tps on average. While the Visa network seldom handles more than 4000 tps, the network is estimated to be able to handle around 56,000 tps.</p>

<p>The problem with this comparison is two-fold:</p>

<p>1. Payments are just one type of transaction that takes place on modern smart-blockchains.</p>

<p>2. Visa as a centralized service, doesn’t cross-validate transactions with multiple nodes. This means that for them one transaction is only ever one transaction. Where as in a blockchain, one transaction could take the equivalent processing power of thousands of centralized transactions.</p>

<p>To put this question into perspective based on the IOST blockchain and what they hope to achieve, we’ve got to look at another ‘smart blockchain’ — that is to say we have to look at a blockchain that allows the processing of programmable contracts and code execution, rather than just looking at a blockchain that only facilitates transfers or payments.</p>

<h4>Comparison #1 — Ethereum:</h4>

<p>Ethereum is the current king when it comes to being a robust smart contract platform and having live useable dApp products.</p>

<p>On January 4th, 2018, a few months after the chaos of the CryptoKitties Craze rendered the Ethereum network practically unusable for nearly 24-hours, Ethereum had it’s highest transaction day of all time processing 1.35M transactions in a single day.</p>

<p>Broken out evenly across the day, this would account to roughly 15 TPS.</p>

<p>During this time, processing at 15 TPS, transfers become very slow and Ethereum’s “gas price” skyrocketed costing users significant fees for using the network.</p>

<h4>Comparison #2 — Stellar:</h4>

<p>Stellar is a blockchain managed by the non-profit Stellar foundation and partnered with companies like IBM and Square.</p>

<p>Stellar is what is called a “decentralized permissioned blockchain” meaning that through use of its quorum slices, validators, and trusted nodes, their “Stellar Consensus Protocol” (SCP) isn’t quite as decentralized as other blockchains, but it gives them advantages in speed and cost.</p>

<p>Recently, a team at Barclay’s testing the Stellar protocol on Google Cloud infrastructure was able to stress test a private version of the Stellar network and achieve a transaction rate of 10,000 TPS. But, it is important to note that this was in a perfectly controlled lab environment and not on the public blockchain.</p>

<h4>Comparison #3 — Zilliqa:</h4>

<p>The centerpiece of zilliqa’s scalability is sharding, a technique that divides the entire network into smaller subspaces and processes transactions in parallel. While Zilliqa’s sharding creation depends on two PoW(s) processes to elect a committee and assign shards, our Efficient Distributed Sharding technology makes the sharding creation process even faster by replacing the PoW process with cryptographic sortition. All nodes in <a href="/what-is-zilliqa/">Zilliqa</a> form shards together which would cause an idle phase where the system couldn’t process any transactions before nodes are bootstrapped. </p>

<p>IOS is using a dynamic validators-to-shards assignment protocol during epoch transitions while maintaining system operability. Another difference between the two is how transactions across shards are handed. IOS uses a two-step atomic commit protocol that guarantees transaction atomicity. At this point it is still unclear how Zilliqa deals with transactions across shards as no such information is given.</p>

<center><img src="/images/iostoken-111.jpg" alt="what is iostoken"></center>

<h4>Comparison #4 —  EOS:</h4>

<p>The cornerstone of EOS’s high scalability is the DPoS consensus mechanism. The network elected 21 so-called “block producers” to record blocks. The probability of a node being selected is proportional to the node’s stake. Then all of those 21 nodes will propose blocks in term. Despite the high TPS, there are two major risks associated with the system. </p>

<p>Firstly, the size of the elected committee is not large enough to support large scale network. Secondly, just like many other DPoS consensus protocol, EOS’s solution is troubled by a greater risk of unhealthy centralization. IOS is taking a different approach; leaders and shards are configured dynamically via EDS and TransEpoch without causing system downtimes while guarantees the security and liveness. Centralization is minimized due to PoB’s multi-dimension stakes and multi-league processing.</p>

<p>The Internet of Services scales social and economic cooperation to a new level. We aim to gain universal acceptance and utilize decentralization and the power of blockchain technology to cut out middlemen and maximize network value for all parties. </p>

<p><b>Neutral</b> - Anyone participating in blockchain-enabled cooperation does so on an equal footing with all other participants. The Internet of Services aims to fundamentally disrupt previous methods of business by gaining widespread acceptance, creating a network run with trustless trust, and maximizing network value for everyone. We are a direct challenge to the systems that came before us which have been so heavily skewed to favor the few at the expense of the many.</p>

<p><b>Open</b> - Anyone is able to participate in any layer of the system. No registration, identification or other preconditions should or will limit participation.</p>

<p><b>Immutable</b> - The Internet of Services is committed to keeping blockchains open, neutral and immutable. This informs our actions and positions towards any and all developments in the crypto world and beyond. We are a truth machine preserving one universally accepted version of history. It’s not possible to change history, and no resources will be wasted on that effort.</p>

{% include page-toc.html %}

<h4>Intelligent Service System</h4>

<p>The IOS blockchain mitigates the tendency towards centralization by introducing Servi as both a measurement of individual users’ contribution to the community, and as a way to encourage members to contribute to the continued development of the IOS blockchain.</p>

<p><b>Non-tradable</b> - Since Servi are not designed as a medium of exchange, Servi can not be traded or exchanged in any way.</p>

<p><b>Self-terminating</b> - After validating a block, the system will automatically clear the Servi balance owned by the validator. In this way, nodes with high believability scores can take turns in validating blocks, to ensure a fair block generation process.</p>

<p><b>Automated Issuance</b> - Servi will be generated and deposited to user accounts automatically after making contributions such as: providing community services, evaluating services provided by other entities, and/or making other special contributions.</p>

<p><b>Decentralized Governance Efficient and Resilient Consensus Benefiting the entire network</b> - IOST is using a powerful consensus engine named Proof-of-Believability. Believability factors include IOS token balance, Servi balance, contributions, user behaviors and, it has a definitive range. We use a faster graded Byzantine Fault Tolerance mechanism, that allows for a set of nodes to decide on the next block. A key aspect of Proof-of-Believability is that these nodes are selected fairly by using algorithmic randomness based on input from previously generated blocks. </p>

<p>By design, accounts with more contribution to the network are more likely to be selected as the next validators and beneficiaries of the newly generated blocks. Unlike <a href="/video-qa-security-in-proof-of-work-vs-proof-of-stake/">Proof-of-Stake</a>, validators are selected using a certain algorithm, not just by chance and their number of tokens. Proof-of-Believability guarantees that nodes have negligible probability to misbehave, while significantly increasing the transaction throughput.</p>

<p><b>The Key to Blockchain Scalability Available. Scalable. Safe</b> - IOST uses a robust and dynamic sharding protocol. We call it “Efficient Distributed Sharding” (EDS). It benefits the underlying blockchain networks by reducing the transaction processing workload on each validator and increasing the total processing capacity linearly with the increase of new network participants. EDS uses a novel scheme to form subsets of validators to record and process state transactions that are both sufficiently large and strongly bias-resistant.</p>

<p><b>Seamless Operability Designed for security and reliability</b> - The IOS Blockchain uses an Atomic Commit protocol to commit transactions instantaneously across shards. The atomic commit protocol ensures that all transactions either commit or abort atomically even when they affect IOS blockchain states distributed across multiple shards. Additionally, application of a two-tier verification processing will minimize the latency of micro-transactions, thus ensuring that IOS transactions are safeguarded and fast.</p>

<p><b>Space Saving Performance improvements</b> - The IOS blockchain uses classic distributed checkpointing principles to produce consistent, collectively-signed state blocks periodically. Our micro state blocks minimize storage and update overhead, which helps new or crashed validators quickly catch up to the current blockchain state without downloading the entire blockchain since the first block. The micro state blocks summarize the shards’ states and enable blockchain pruning to reduce storage and configuration costs for validators.</p>

<h2 id="howto">How To Get A IOSToken Wallet?</h2>

<p>IOS tokens are for all transactions and commission fees on the IOS blockchain. Users can use them to pay for goods and services from community members and merchants or commissions that validators earn. These commissions can be from running smart contracts, using resources like computer power and storage space, and processing transactions and messages. They will also be part of the user believability calculation.</p>

<p>Users can get tokens through exchanges and League partner’s integrations early on by validating transactions or by community service that involves contributing resources. Examples would be providing storage space and running smart contracts.</p>

<p>There is also a Servi token that measures a user’s contributions. It is non-tradeable and self-destructive, automatically having its balance cleared following validation of a block. This lets the nodes with a high believability take turns in block validation for fairness. It also has self-issuance, meaning it is automatically generated then deposited to users’ accounts following certain contributions.</p>

<p>The IOS (Internet of Services) offers a solid infrastructure for all kinds of online service providers. Its ultra-high TPS, privacy protection, scalable and secure blockchain provide infinitely many new possibilities for online service providers to serve their customer base.</p>

<p><b>Step 1: Create an account on Binance</b></p>

<p>The first step in the process is to create your Binance account. The process is very simple. You are only required to provide your valid email address and a password. Make sure that you provide a strong password when creating your account, since this is a place where you will be keeping your funds.</p>

<p><b>Step 2: Activate your Account</b></p>

<p>Once you finish with the first step, an email will be sent to you from Binanceto activate your account. Open your email client and click on the activation link. If you can’t find the activation email from Binance then check your spam folder or request Binance to send another activation email.</p>

<p><b>Step 3: Log in to your Account</b></p>

<p>Go back to Binance website and log in to your account with the credential you provided in the previous step. Although it is not mandatory, the first thing that I would personally do is to set up a Two-factor Authentication in order to strengthen the security of the account.</p>

<p><b>Step 4: Transfer Funds to your Binance wallet</b></p>

<p>In Binance you buy IOStoken (IOST) tokens only by using Ethereum or Bitcoin. Therefore, you will need to transfer some Ethereum or Bitcoin to you Binancewallet. In case, you do not have any Bitcoin on Ethereum, then you can buy some using fiat currency at <a href="http://geni.us/coinbase">Coinbase</a> or your preferred exchange. If you don’t know how to do that, then you can just follow one of our step-by-step guides on how to buy Ethereum or Bitcoin.</p>

<p>In order to deposit your funds, tap on the Funds tab on the top navigation bar. Then click Deposit Withdrawals and from the list below find either the Ethereum or Bitcoin wallet, depending on what you want to deposit. Select the wallet address provided and use it in the exchange or wallet you have your funds and send them in Binance.</p>

<p><b>Step 5: Buy IOStoken (IOST) tokens</b></p>

<p>Congratulations, you are ready to buy some IOStoken (IOST) tokens. Tap on the Exchange tab and then Basic on the top navigation bar. On the top right of the exchange select BTC (Bitcoin) or ETH (Ethereum) and search for IOST/ETH or IOST/BTC.</p>

<p>This will open the trading view of the pair you want to exchange. Go and find the Buy/Sell section of the page and place your Buy order. Here you go, you have your first IOStoken (IOST) tokens.</p>

<h2 id="resources">IOSToken Resources</h2>

<ul>
<li><a href="https://iost.io">Official Website</a></li>
<li><a href="https://twitter.com/iostoken">Twitter</a></li>
<li><a href="https://t.me/officialios">T.ME</a></li>
<li><a href="https://www.reddit.com/r/IOStoken">Reddit</a></li>
<li><a href="https://medium.com/@iostoken">Medium</a></li>
<li><a href="https://bitcointalk.org/index.php?topic=2789376.0">BitcoinTalk</a></li>
<li><a href="https://www.youtube.com/channel/UCyyPv5TQ01kRV48drO-ivpQ">YouTube</a></li>
<li><a href="https://github.com/iost-official?tab=repositories">Github</a></li>
</ul>

<h2 id="buy">How To Buy IOSToken?</h2>

<p>You are not able to purchase IOST with “Fiat” currency so you will need to first purchase another currency – the easiest to buy are Bitcoin or Ethereum which you can do at <a href="http://geni.us/coinbase">Coinbase</a> using a bank transfer or debit / credit card purchase and then trade that for IOST at an exchange which lists the token. Read on to see how to purchase it.</p>

<h4>Register at Coinbase</h4>

<p>For first time buyers of crypto currency, we recommend that you use Coinbase to make your first purchase – its easy to use, fully regulated by the US government so you know it is one of the safest and most reputable places to purchase cryptocurrency from. <a href="http://geni.us/coinbase">Coinbase</a> offers the ability to purchase Bitcoin, Litecoin and Ethereum with a credit or debit card or by sending a bank transfer. The fees are higher for cards but you will receive your currency instantly.</p>

<p>You will have to carry out some identity verification when signing up as they have to adhere to strict financial guidelines.</p>

<p>To get started, click the <b>“Sign up”</b> button where you will be taken to a registration form where you will need to enter your name, email and choose a password.</p>

<h4>Purchase Ethereum</h4>

<p>In Coinbase, visit the <b>“Buy / Sell”</b> tab at the top, select <b>“Ethereum”</b>, choose your payment method and enter the amount you wish to purchase – you can either enter a US Dollar amount or a number of Ether.</p>

<center><img src="/images/iostoken-101.jpg" alt="what is iostoken"></center>

<p>You will then be asked to confirm your transaction, if paying with a card you might have to complete a verification with your card provider. Once that’s complete, your Ethererum will be added to your account.</p>

<h4>Purchase IOST at Binance</h4>

<p>You can now send your Ether over to Binance to make your purchase of IOST take a look at our review of Binance here to see how to signup and purchase on their exchange.</p>

<center><img src="/images/iostoken-102.jpg" alt="what is iostoken"></center>

<p>IOS aims to tackle the issues of scalability with existing blockchain networks and provide a solution that is secure as well as scalable. It will offer the opportunity for developers to deploy dApps with high scalability and provides yet another type of blockchain technology that may be the way of the future.</p>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/km89jLIZqa4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>

{% include page-toc.html %}

<h2 id="latest">Latest IOSToken News</h2>

<h4>IOST Weekly Update - May 7th-May 14th</h4>

<center><img src="/images/iostoken-112.jpg" alt="what is iostoken"></center>

<p>The Internet of Service Foundation develops a next generation, scalable block of chains that can meet the volume of data required for massive use. The inclusion of the system's openness, ultra high TPS value, privacy protection, scalability and many leading innovations will provide endless and new possibilities for serving the customer base of online service providers.</p>

<p>You can learn more about our website by visiting our website and you can communicate with our team on telegram , reddit and discord.</p>
