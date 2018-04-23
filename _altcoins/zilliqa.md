---
title: What Is Zilliqa?
description: What Is Zilliqa?
name: Zilliqa
author: WeUseCoins
permalink: /what-is-zilliqa/
authorurl: /
published: true
toc: 
  what: What Is Zilliqa?
  getting: Getting Started With Zilliqa
  howto: How To Get A Zilliqa Wallet?
  resources: Zilliqa Resources 
  buy: How To Buy Zilliqa?
  mining: What Is Zilliqa Mining?
  latest: Latest Zilliqa News
img: zilliqa.png
category: altcoin
summary: Zilliqa can support dApps that require higher transaction rates than those currently available, expanding the options for developers.
---

<h2 id="what">What Is Zilliqa?</h2>

<p><center><script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script><div class="coinmarketcap-currency-widget" data-currency="zilliqa" data-base="USD" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div></center></p>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/u_xBY7teNu0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>

<p>Existing cryptocurrencies and <a href="/video-ethereum-and-smart-contracts/">smart contract platforms</a> are known to have scalability issues, i.e., the number of transactions they are capable of processing per second is limited, usually less than 10. As the number of applications utilizing public cryptocurrencies and smart contract platforms grow, the demand for processing high transaction rates in the order of hundreds and thousands of Tx/s is increasing. </p>

<p>In this work, we present ZILLIQA— a new blockchain platform that is designed to scale in transaction rates. As the number of miners in ZILLIQA increases, its transaction rates are expected to increase. At Ethereum’s present network size of 30,000 miners, ZILLIQA would expect to process about a thousand times the transaction rates of Ethereum. </p>

<p>The cornerstone in ZILLIQA’s design is the idea of sharding — dividing the mining network into smaller shards each capable of processing transactions in parallel. ZILLIQA further proposes an innovative special-purpose smart contract language and execution environment that leverages the underlying architecture to provide a large scale and highly efficient computation platform. </p>

<p>The smart contract language in ZILLIQA follows a dataflow programming style which makes it ideal for running large-scale computations that can be easily parallelized. Examples include simple computations such as search, sort and linear algebra computations, to more complex computations such as training neural nets, data mining, financial modeling, scientific computing and in general any MapReduce task.</p>

<center><img src="/images/zilliqa-102.jpg" alt="zilliqa"></center>

<p>Cryptocurrencies and smart contract platforms are becoming a shared computational resource. One could view these platforms as a new generation of computers that synchronize over thousands of individual computers. However, existing cryptocurrencies and smart contract platforms have widely recognized limitations in scaling. </p>

{% include page-toc.html %}

<p>Average transaction rates in Bitcoin [1], Ethereum [2], and related cryptocurrencies have been limited to below 10 (usually about 3-7) transactions per second (Tx/s). As the number of applications utilizing public cryptocurrencies and smart contract platforms grow, the demand for processing high transaction rates in the order of hundreds of Tx/s is increasing. A global payment network would likely require tens of thousands of Tx/s in capacity. </p>

<p>Can we build a decentralized and open blockchain platform capable of processing at that scale? The limitations in scaling up existing protocols are somewhat fundamental — they are rooted in the design of the consensus and network protocols. Therefore, even though reengineering the parameters of the existing protocols in say Bitcoin or Ethereum (e.g., the block size or the block rate) may show some speedup, to support applications that need processing of thousands of Tx/s however requires rethinking the underlying protocols from scratch. </p>

<p>We present ZILLIQA— a new blockchain platform that is designed to scale in transaction rates. As the number of miners in ZILLIQA increases, its transaction rates are expected to increase as well. Specifically, ZILLIQA’s design allows its transaction rates to roughly double with every few hundred nodes added to its network. As of this writing, the Ethereum mining network is over 30,000 nodes. </p>

<p>At Ethereum’s present capacity, ZILLIQA would expect to process about a thousand times the transaction rates of Ethereum. ZILLIQA is a redesign from scratch and has been under research and development for over 2 years. The cornerstone in ZILLIQA’s design is the idea of sharding — dividing the mining network into smaller consensus groups called shards each capable of processing transactions in parallel. </p>

<p>If the mining network of ZILLIQA is say 8000 miners, ZILLIQA automatically creates 10 sub-networks each of size 800 miners, in a decentralized manner without a trusted co-ordinator. Now, if one sub-network can agree on a set of (say) 100 transactions in one time epoch, then 10 sub-networks can agree on a total of 1000 transactions in aggregate. </p>

<p>The key to aggregating securely is to ensure that sub-networks process different transactions (with no overlaps) without double-spending. The assumptions are similar to existing blockchain-based solutions. We assume that the mining network will have a fraction of malicious nodes/identities with a total computational power that is a fraction (< 1/4) of the complete network. </p>

<p>It is based on a standard proof-of-work scheme, however, it has a new two-layer blockchain structure. It features a highly optimized consensus algorithm for processing shards. ZILLIQA further comes with an innovative special-purpose smart contract language and execution environment that leverage the underlying architecture to provide a large scale and highly efficient computation platform. </p>

<p>The smart contract language in ZILLIQA follows a dataflow programming style, where the smart contract can be represented as a directed graph. Nodes in the graph are operations or functions, while 1 an arc between two nodes represent the output of the first and the input to the second. A node gets activated (or operational) as soon as all of its inputs become valid and thus a dataflow contract is inherently parallel and suitable for decentralized systems such as ZILLIQA. </p>

<p>The sharded architecture is ideal for running large-scale computations that can be easily parallelized. Examples include simple computations such as search, sort and linear algebra computations, to more complex computations such as training a neural net, data mining, financial modeling, scientific computing and in general any MapReduce task among others.</p>

<center><img src="/images/zilliqa-103.jpg" alt="zilliqa"></center>

<p><a href="/how-bitcoin-unlimited-users-may-end-up-on-different-blockchains/">Blockchain platforms</a> are bringing to life the concept of a consensus computer --- a distributed network of computers carrying out useful tasks. One of the most pressing problems facing these platforms is their lack of scalability, i.e., the ability to handle a larger number of transactions per second as the network grows. </p>

<p>A number of works have noted how existing blockchains are handicapped in their ambition to scale the next generation of Internet-style applications. An oft cited example is the 3-7 TX/s available in Bitcoin and Ethereum today, and the demands of payment processing in centralized operators (e.g., VISA, MasterCard) for supporting thousands of TX/s. Zilliqa is a new blockchain platform that is designed to securely scale in an open, permissionless distributed network. </p>

<p>The core feature that makes Zilliqa scalable is sharding - -- the division of the network into several smaller component networks capable of processing transactions in parallel. As a result, the transaction rate in Zilliqa increases as the mining network expands. Zilliqa aims to rival traditional centralized payment methods such as VISA and MasterCard. In fact, with a network size of 10,000 nodes, Zilliqa will enable a throughput which matches the average transaction rate of VISA and MasterCard with the advantage of much lower fees for the merchants. </p>

<p>Zilliqa leverages proof-of-work (PoW) to establish identities and perform sharding. However, unlike several existing blockchain platforms (such as Ethereum and Bitcoin), Zilliqa does not employ PoW to achieve consensus. This provides several advantages: 1. PoW can be performed after, say every few hundred blocks. As a result, the high energy cost often associated with PoW will not apply in Zilliqa. </p>

<p>In fact, we estimate that the cost of running a Zilliqa node will be about 1/10 of running an Ethereum node today. 2. Since miners reach consensus on several blocks with a single PoW, Zilliqa ensures a much more stable payout with low variance. Furthermore, the unprecedented throughput of Zilliqa implies that the processing fee per transaction can be very low. In many of today’s popular blockchains, users have to compete for the few transactions processed per second. As a result, transactions with low or insufficient fees experience delays in processing. </p>

<p>Such issues will be significantly alleviated 3 in Zilliqa as the number of transactions processed per second becomes several hundred times more and beyond. Zilliqa will support a smart contract platform with a novel scripting language that is shardingfriendly, i.e., it will allow users to compute programs in parallel, harnessing the full computational capacity of the mining network. For instance, the Zilliqa platform will allow users to build distributed advertising networks, conduct parallel auctions, deploy MapReduce-style trading algorithms, run a shared economy, etc. </p>

<p>Zilliqa aims to support high-throughput data-intensive applications via a dataflow-style programming language interface. The underlying sharding architecture allows Zilliqa to support high throughput, both in terms of transactions processed as well as smart contracts executed per block epoch. The Zilliqa team consists of computer scientists with PhDs from some of the world’s best universities and research institutions including Princeton, Berkeley, Inria and NUS. </p>

<p>The team also consists of developers with many years of secure software systems-building expertise. The advisors to the project include established academics in cybersecurity, technology entrepreneurs, bankers and leading experts in the cryptography community. The Zilliqa team proposed the theory of sharding in an academic paper in 2015, and since then the protocol has been under research, refinement and active development (through Anquan Capital Pte Ltd, a Singapore-based deep technology company). </p>

<p>Zilliqa’s infrastructure has been trialed in the financial services sector, for example enabling transparency and efficiency that were hitherto not possible in the Over-The-Counter (OTC) securities markets. We are now at the stage of developing a public testnet prototype of Zilliqa’s protocol, so that users can see its operational capabilities. </p>

<p>However, there are many more innovations and development milestones ahead of us that will enable further scalability and add many significant features to Zilliqa. As outlined in the section of Roadmap, we will release a testnet of Zilliqa’s initial implementation in December 2017. </p>

<p>The source code of the testnet as well as future development will be made freely available to the public. We believe that the public release of the Zilliqa protocol will enable development of scalable blockchain applications that will return enormous benefits to the users of Zilliqa and the applications built on it.</p>

<h2 id="getting">Getting Started With Zilliqa</h2>

<p>Blockchain scalability is a pressing issue that has attracted much attention, as seen in recent plans to scale Bitcoin and Ethereum in the future. However, it is unclear whether such proposals can scale up to the ever increasing network size without discarding legacy transactions. In the wake of the recent Bitcoin split, it is further evident that a truly scalable solution would require a clean-slate design that is built with scalability in mind. </p>

{% include page-toc.html %}

<p>Zilliqa is exactly that design - we have chosen to develop a clean-slate design and have built a new blockchain that develops and deploys our innovations around a scalable and secure protocol. In order to illustrate the growing need for a scalable blockchain, we outline a particular industry use case in digital advertising. This is just one example of a large scale market opportunity that can be enabled by the Zilliqa blockchain.</p>

<h4>Illustrating Example: Building A Blockchain-based Digital Advertising Supply Chain</h4>

<p>The most basic advertising supply chain involves the following three entities:</p>

<p>1) Marketers who wish to promote their product through ads,</p>
<p>2) Publishers who show ads, and,</p>
<p>3) The target audience for the advertisements</p>

<p>Marketers pay publishers to show the ads to the target audience. However, in reality, there exist several other entities in the digital advertising ecosystem such as ad agencies, ad exchanges and networks, various forms of middlemen who buy and sell ad impressions, etc. </p>

<p>These entities form a digital marketplace where publishers can sell (or auction) advertising space and marketers can buy them. The digital ad ecosystem as it exists today is plagued with issues, which adversely affect many players in the ecosystem. For instance, due to the presence of several layers of middlemen, the cost of digital advertising goes up while marginalising the revenue of publishers. </p>

<p>Moreover, in recent years marketers have faced serious fraud attacks, where attackers using Internet bots present fake publishers and users to siphon off millions of dollars from victim marketers. Beyond monetary loss, such attacks also leave marketers with a completely spurious belief on where their advertisements have been delivered. This may further lead to poor judgement in evaluating the effectiveness of their marketing campaign. </p>

<p>Users too get affected as they often receive uninteresting, offensive or unsafe advertisements. This drives many to use ad blockers, which unsettles the entire advertisingbased web economy. With the blockchain technology, we envision that a simplified supply chain can be implemented in the form of smart contracts. For instance, marketers who wish to deliver advertisements can submit smart contracts to specify general and specific requirements for ad impressions they need, including target audience profiles, geographic restrictions, time 6 constraints in ads delivery, etc. </p>

<center><img src="/images/zilliqa-104.jpg" alt="zilliqa"></center>

<p>Publishers or ad networks, can also submit smart contracts to sell ad spaces in bulk with different properties in terms of publisher page context, as well as audience user profiles. Once submitted to the blockchain, the smart contracts from marketers and those from the publishers can automatically match against one another to instruct ad content delivery. The smart contracts can also record evidence of claimed impressions, and settling the payment as per agreed upon between different parties. </p>

<p>Such a blockchain-based advertising supply chain will solve many of the existing issues by enabling a fair marketplace with transparency and accountability. For instance, with such a digital marketing platform, those middlemen who merely buy and sell ad impressions may no longer be relevant. This will further reduce the cost of the marketing campaign, and drive the entire ecosystem into more efficient and effectiveness execution. </p>

<p>Moreover, if all transactions regarding ads delivery, impression and payment are backed by a blockchain, then the marketers can obtain details on each ad impression, who saw the ad and where the traffic ends up. It can further provide an audit trail of every stage of the advertising process and would give a way to correctly measure the success of a marketing campaign. Equipped with the right data, marketers can take future decisions with much greater confidence. </p>

<p>Several ongoing efforts such as BAT, adChain, AdEx, among others have plans to run digital ad supply chain on blockchains. However, there are fundamental limitations of the existing blockchain protocols to support such a digital supply chain as it gains popularity. We list some of them below, and then discuss how Zilliqa addresses these challenges with a new scalable blockchain backed by several technical advancements.</p>

<p><b>High Volume:</b> Since digital advertising is run programmatically, it entails high volume both in terms of the number of ads served and the number of ad impressions collected. If on-chain digital advertising ever becomes popular, it should be able to handle billions of ads and ad impressions per day. None of the existing blockchain platforms are capable of processing transactions at this rate even if they dedicate the entire network to process only ad related transactions and nothing else. For instance, <a href="/what-is-ethereum/">Ethereum</a> as of today can process a maximum of around a million transactions per day, while <a href="/what-is-bitcoin/">Bitcoin</a> around 50,000 transactions per day.</p>

<p><b>Real-time Parallel Bidding:</b> The sale of advertising space is often done via a realtime auction. Clearly, the auctioning is expected to be an efficient process. First of all, bidders should not have to wait for long before being able to successfully bid for tokens. This should be the case even under high volume and volatility. Moreover, bidders should be able to bid for multiple advertisement spaces for sale in parallel without sacrificing efficiency. </p>

<p>However, auctioning of digital tokens on existing blockchains in the recent months shows a dismal trend. During a crowdsale or auction of digital tokens, the transaction volume often gets increased by an unexpected magnitude to an extent that wallet services are forced to scale from 10% capacity to 1000% capacity in the course of less than a minute.1 As of now, these auctions (or crowdsale) are carefully timed in a way that two big events do not end up running in parallel. However, this is unrealistic in the case of real-time bidding as multiple ad spaces are routinely auctioned in parallel.</p>

<center><img src="/images/zilliqa-105.jpg" alt="zilliqa"></center>

<p><b>Correctness:</b> The rightful winner should get the advertising space at the expected bidding price, which is paid to the seller. In existing smart contract platforms, the correctness is hard to be guaranteed. Bidders have to trust the seller. In fact, even if the bidder is honest, the contract code may have vulnerabilities that may lead to an incorrect outcome of the auction. Moreover, existing contract codes are hard to reason about for correctness.</p>

<p><b>Fairness:</b> None of the buyers/sellers gets disadvantaged in the auctioning process. For reasons similar to the previous property, it is not clear how to argue about fairness in existing smart contract codes.</p>

<p>These challenges are by no means exhaustive, but they are typical for the large-scale distributed dApps that Zilliqa aims to support. We now discuss how these challenges are addressed by Zilliqa. It is evident that efficiency is key to the success of such an application. As for any blockchain platform, it should be able to process the ensuing high-volume transactions. Failure to do so would mean heavy congestion and transaction queuing. </p>

<p>Moreover, the underlying blockchain protocol needs lots of message exchanges to reach any agreement. Such message exchanges are required for security against malicious nodes, yet constituting severe gridlocks for performance and scalability. To resolve such gridlocks, Zilliqa leverages an orchestrated secure network sharding scheme that can automatically divide, say, bidding requests into a subgroup of nodes. All subgroups can simultaneously process different ad space auctions. </p>

<p>They also lock the deposit from different bidders before the final bidding results are obtained. This significantly improves the throughput of such an application. Moreover, Zilliqa supports the computation of highly sophisticated optimization algorithms to conduct and participate in auctions via computational sharding. In this respect, the auction application can instruct Zilliqa to form many small groups of nodes to compute. </p>

{% include page-toc.html %}

<p>Each group is tasked to compute a portion of the algorithm, such as many groups for multiplication of different matrices, some other groups for sorting, and finally groups for aggregation. Nodes inside each group independently compute the task and cross-check against one another. Zilliqa allows different levels of security to be enforced as requested by the application on a needs basis. The correctness of the result is guaranteed at two levels: consensus level and the contract level. </p>

<p>At the consensus level, almost all honest nodes agree on the final auction allocation results. This is typical to any distributed system where, if just a few nodes make the final decision, the system would lose all the desirable properties of decentralization. Zilliqa innovates on several new techniques to develop a protocol that enables almost all honest nodes to quickly and unambiguously reach a conclusion for sale requests and bids 8 processed across the entire network. </p>

<p>For instance, Zilliqa develops an efficient collective signature scheme to make it secure even in a highly hostile environment. This signature scheme is then used to significantly reduce the convergence time needed for reaching the auction allocation results across the network. At the contract level, Zilliqa uses a data-flow style programming language that allows us to reason the correctness of the contracts in an easy manner. </p>

<p>The data-flow language approach is also useful to prove several other properties such as fairness. Moreover, a dataflow program provides the potential for massive parallel execution. Roughly speaking, a data-flow program can be interpreted as a graph where a vertex represents a computational unit that can start processing the moment its inputs become available. </p>

<p>To continue with our advertising supply chain example, some vertices of the graph can handle the placing of bids for advertising space, another set of vertices may process the bids to find the winners, while a set of dedicated vertices may handle the settlement of payments. The first set of nodes can independently process bids for several advertisement spaces in parallel. </p>

<p>Once a bid for advertisement spaces are placed, the next set of vertices can run the auctioning algorithm in parallel to find the winner for each advertisement space (again in parallel) and the last set of vertices can transfer funds. Zilliqa’s smart contracts have built-in support for dependency, atomicity and consistency between such different sets of operations.</p>

<h4>Key Features of Zilliqa</h4>

<p>Zilliqa is built to scale from many aspects. It leverages a network-level sharding mechanism to divide the nodes in the network to process transactions in parallel, and an atomic transaction sharding protocol to ensure transactions are accepted as if there is no sharding. Zilliqa also proposes a novel computational sharding framework to allow computationintensive applications to be executed efficiently over the network. To facilitate a high-level understanding of them, we describe some of the key ideas below.</p>

<p><b>1. Network Sharding</b></p>

<p>Zilliqa dynamically splits the network of blockchain nodes into different subgroups, called shards, with each shard formed to process and reach consensus on a subset of transactions. This way, disjoint subsets of transactions can be processed in parallel, and significantly boost the transaction throughput by orders of magnitude. Eventually, such transactions are merged into a new block that is committed to the blockchain.</p>

<p>The primary challenge in realizing such network sharding is how to ensure the security of the protocol. The naive approach would suffer from much higher susceptibility to compromised blocks as the size of the consensus groups is smaller under network sharding. To address security implications from it, we invent a new protocol that achieves scalability with strong 9 security guarantees, inspired by our innovative research outcome [1] and other state-of-theart research literature.</p>

<p>The gist of our network sharding protocol is to leverage a proof-of-work (PoW) puzzle to elect and update a directory service committee in a decentralized and democratic manner. The directory committee is tasked to coordinate the sharding process, as well as validate the blocks of transactions proposed by each shard and verify if they have received approval from a sufficiently large quorum within the shard. </p>

<p>Unlike several existing blockchain platforms (such as Ethereum and Bitcoin), Zilliqa does not employ PoW to achieve consensus. In fact, PoW is used only to prevent sybil attacks and perform sharding. As a result, it can potentially be replaced by any other sybil resistance mechanism such as proof-of-stake (PoS). Our choice of PoW is motivated by the fact that its security guarantees have been well studied in the literature unlike PoS which is still under active research.</p>

<p><b>2. Secure & Efficient Consensus Algorithm</b></p>

<p>Within the directory service committee and each shard that processes and accepts transactions, we run a secure and efficient consensus protocol. The protocol enables each shard to reach an agreement on the blocks to propose. Our consensus protocol is based on the idea of byzantine fault tolerance (BFT) [4] with heavy optimizations. We choose BFT to design our consensus protocol to ensure that the resulting blocks are definitive, without the need of long confirmation times as required in the popular “longest-chain” rule in existing cryptocurrencies. However, existing BFT protocols entail a large communication bandwidth and hence time elapsed to converge. As a result, they do not scale well to a large network of nodes.</p>

<p>We specifically identify a recently proposed scalable signature scheme CoSi [5] that has the potential to make BFT protocols much more scalable. The challenges we faced here was that CoSi was proposed to work in a much less hostile environment than that of a public blockchain. With several significant enhancements we develop for the CoSi scheme. In particular, we add extra steps and message rounds to the CoSi protocol both on the leader's side and on the signer's side to prevent malicious leaders and signers in the protocol. The added steps and checks ensure that malicious behaviors get detected as early as possible. As a result, we derive a secure scheme and apply it to develop a scalable BFT protocol for consensus in Zilliqa.</p>

<p><b>3. Transaction Sharding</b></p>

<p>Zilliqa employs account-based design. The account-based design allows transactions to be sharded according to the sending accounts. This ensures that attacks akin to double spending or replay can be thwarted by the same shard of nodes. For better scalability, Zilliqa makes two conscious choices in the design of transaction sharding: 1) Zilliqa provides atomic transaction commits without involving cross-shard communication that is often costly and complex. 2) Zilliqa allows transactions to be processed asynchronously with the 10 consensus processes of the blockchain. Zilliqa adopts a “reject-and-retry” mechanism to asynchronously process transactions as and when the majority of nodes become up-to-date.</p>

<p><b>4. Computational Sharding & Data-flow Smart Contract Language</b></p>

<p>Smart contracts allow applications to be built on top of the distributed ledger provided by the blockchain storage and consensus. However, today’s mainstream public blockchains are not suitable for running computation-intensive tasks, as any of the computation tasks would have to be repeated at all full nodes for validation. Albeit being secure, such a fully redundant programming model is prohibitively expensive for running large-scale computations. </p>

<center><img src="/images/zilliqa-106.jpg" alt="zilliqa"></center>

<p>With scalability as the main goal of Zilliqa, we propose a new smart contract language that scales much better for a multitude of applications that range from automated auctions, shared economy to financial modelling. The smart contract language in Zilliqa follows a dataflow programming paradigm. In the dataflow programming model, a smart contract is represented by a directed graph. </p>

<p>Nodes in the graph are primitive instructions or operations. Directed arcs between two nodes represent the data dependencies between the operations, i.e., output of the first and the input to the second. A node gets activated (or operational) as soon as all of its inputs are available. This stands in contrast to the classical execution model (as employed in Ethereum), in which an instruction is only executed when the program counter reaches it, regardless of whether or not it can be executed earlier. </p>

<p>The key advantage of employing a dataflow approach is that more than one instruction can be executed at once. Thus, if several nodes in the graph become activated at the same time, they can be executed in parallel. This simple principle provides the potential for massive scalable execution. </p>

<p>To see this, consider the simple example of naive matrix multiplication of two square matrices A and B. Let the resulting matrix be C. Then, each entry of C can be independently computed by considering a row of A and a column of B. Since each of these operations are independent, they can in fact be performed in parallel. When run on the Zilliqa’s sharded network, each node in the dataflow program can be eventually attributed to a single shard or even a small subset of nodes within a shard.</p>

<p>More specifically, this smart contract language has the following features</p>
<ul>
<li>Data sharing between smart contracts via virtual memory space.</li>
<li>2-phase commit for atomic execution.</li>
<li>First-order abstraction for computing MapReduce tasks.</li>
<li>Flexible security budgeting via computational sharding.</li>
</ul>

<p>The last feature is enabled by sharding the computational resources in the blockchain network via an overlay above the consensus process. Computational sharding allows users of Zilliqa and applications running on Zilliqa to specify the sizes of consensus groups to compute for each of the subtasks. Each consensus group will then be tasked to compute the same subtask, and produce the results. The user specifies the condition on acceptance of 11 the results, e.g., all in the consensus group must produce the same results, or ¾ of them must produce the same results, etc.</p>

<p>We apply gas fees to bound the computation required for smart contract execution and prevent abuse of computational resources available on the blockchain. A user of the application running on Zilliqa can budget how much he or she wants to spend on computing and security, respectively. In particular, a user running a particular application may spend more gas fee on running different subtasks than letting too many nodes repeating the same computation. In this case, he or she can specify a smaller consensus group for running each neural network computation. On the other hand, a sophisticated modeling algorithm that requires greater precision may task consensus groups of larger number of nodes to compute the critical portions of the algorithm to be more resilient against potential tampering and manipulation of the results.</p>

<p>Finally, equally important to the efficiency of smart contract execution is its friendliness to programmers. Although dataflow programming is very good for efficiency and easy to be automatically verified for its security and correctness, it may not be the programming language and model that most programmers today are familiar with. To address this challenge, Zilliqa will provide a front-end higher level language to programmers, whose syntax will be similar to Solidity. We will develop compilers to automatically convert such Solidity-like smart contracts into the underlying dataflow programming language. We believe such syntax-level compatibility with Solidity will ease the migration cost of some existing smart contracts to Zilliqa for much higher-throughput.</p>

<h2 id="howto">How To Get A Zilliqa Wallet?</h2>

<p>Zilliqa is a high-throughput public blockchain platform that is designed to scale and process thousands of transactions per second. The project has been in development for two years, and CEO Xinshu Dong leads a talented team with experience in bringing forth groundbreaking commercial technology.</p>

<p>Over the past two years, the Zilliqa team has overcome a number of technically challenging hurdles to achieve a performance rate that was previously unobtainable by past blockchain protocols. The team has conducted a major trial run, which yielded a throughput of 1,389 transactions per second and Zilliqa uses a novel consensus protocol that increases transaction rates as the network expands.</p>

<p>The Zilliqa blockchain processes more transactions per second as more mining nodes join the network, which makes Zilliqa a viable option for the next generation of dApps that incorporate high volume transaction rates. It’s possible that the project will support high volume payment networks and financial algorithms that operate at a level on par with the more traditional centralized projects in operation today.</p>

<p>Zilliqa also offers several other features to dApps and miners such as:</p>

<ul>
<li>More stable payout to miners with lower variance</li>
<li>Low joining cost for miners with compatibility with Ethash</li>
<li>Better energy utilization by leveraging PoW only for identity establishment</li>
<li>Quantifiable security for dApp users with different budgets for secure computation</li>
<li>Secure and dataflow style smart contracts</li>
</ul>

<p>The sharding concept has intrigued Ethereum developers for some time as they look to find a viable solution to Ethereum’s scaling issues. Currently, all nodes on the Ethereum network store and process all of the transactions, which take place on the network. This method of validation is labor-intensive and sharding acts as an alternative, less intensive form of validation. With sharding, a small subset of network nodes will validate every single transaction. This will allow the Ethereum blockchain to scale effectively while remaining stable and secure.</p>

<p>Zilliqa transforms sharding from theory to practice via its novel protocol that generates increased transaction rates as its network expands. The platform involves groundbreaking principles and looks set to enable high performance data-driven decentralized apps that can meet the scaling requirements of machine learning and financial algorithms.</p>

<p>The main net launch and the first set of decentralized applications are scheduled for Q2 and Q3 of 2018. The developer community will be keeping a close eye on these developments over the next few months, and if Zilliqa delivers on its promises, and introduces sharding to a public blockchain, it may become a top choice for coders and develop a competitive edge over its competitors.</p>

<h2 id="resources">Zilliqa Resources</h2>

<ul>
<li><a href="https://www.zilliqa.com/">Official Website</a></li>
<li><a href="https://twitter.com/zilliqa">Twitter</a></li>
<li><a href="https://github.com/Zilliqa/Zilliqa">Github</a></li>
<li><a href="https://www.reddit.com/r/zilliqa">Reddit</a></li>
<li><a href="https://www.youtube.com/channel/UCvinnFbf0u71cajoxKcfZIQ">Youtube</a></li>
<li><a href="https://t.me/zilliqachat">T.ME</a></li>
<li><a href="mailto:enquiry@zilliqa.com">Email</a></li>
</ul>

<h2 id="buy">How To Buy Zilliqa?</h2>

<p>Zilliqa is an ERC-20 token based on the Ethereum blockchain.</p>

<h4>Step 1: Create an account on Binance</h4>

<p>The first step in the process is to create your Binance account. The process is very simple. You are only required to provide your valid email address and a password. Make sure that you provide a strong password when creating your account, since this is a place where you will be keeping your funds.</p>

<h4>Step 2: Activate your Account</h4>

<p>Once you finish with the first step, an email will be sent to you from Binance to activate your account. Open your email client and click on the activation link. If you can’t find the activation email from Binance then check your spam folder or request Binance to send another activation email.</p>

<p>Please note that they may ask you for some verification documents such as national id, driving license and/or passport.</p>

<h4>Step 3: Log in to your Account</h4>

<p>Go back to Binance website and log in to your account with the credential you provided in the previous step. Although it is not mandatory, the first thing that I would personally do is to set up a Two-factor Authentication in order to strengthen the security of the account.</p>

<h4>Step 4: Transfer Funds to your Binance wallet</h4>

<p>In Binance you buy Zilliqa (ZIL) tokens only by using Ethereum or Bitcoin. Therefore, you will need to transfer some Ethereum or Bitcoin to you Binancewallet. In case, you do not have any Bitcoin on Ethereum, then you can buy some using fiat currency at Coinbase or your preferred exchange. If you don’t know how to do that, then you can just follow one of our step-by-step guides on how to buy Ethereum or Bitcoin.</p>

<p>In order to deposit your funds, tap on the Funds tab on the top navigation bar. Then click Deposit Withdrawals and from the list below find either the Ethereum or Bitcoin wallet, depending on what you want to deposit. Select the wallet address provided and use it in the exchange or wallet you have your funds and send them in Binance.</p>

<h4>Step 5: Buy Zilliqa (ZIL) tokens</h4>

<p>Congratulations, you are ready to buy some Zilliqa (ZIL) tokens. Tap on the Exchange tab and then Basic on the top navigation bar. On the top right of the exchange select BTC (Bitcoin) or ETH (Ethereum) and search for ZIL/ETH or ZIL/BTC.</p>

<p>This will open the trading view of the pair you want to exchange. Go and find the Buy/Sell section of the page and place your Buy order. Here you go, you have your first Zilliqa (ZIL) tokens.</p>

<center><img src="/images/zilliqa-101.jpg" alt="zilliqa"></center>

<p>Zilliqa only recently completed their ICO and went live on some exchanges, at the moment you can purchase Zilliqa on the following sites :</p>

<ul>
<li>Huobi</li>
<li>IDEX</li>
<li>Gate.io</li>
<li>EtherDelta</li>
</ul>

<h2 id="mining">What Is Zilliqa Mining?</h2>

<p>As discussed earlier, Zilliqa uses PoW only to establish identities and prevent sybil attacks. Zilliqa does not use PoW to reach consensus on blocks. This has the following two advantages:</p>

<p>1. once the identities are established, the nodes can reach consensus on several blocks in a row. As a result, a PoW can be performed after, say every few hundred blocks. This is in contrast with the use of PoW as in Bitcoin and Ethereum where, a new PoW solution is required to reach consensus on every new block. As a consequence, the energy cost often associated with PoW per block will on average be very low in Zilliqa.</p>

<p>2. since miners can reach consensus on multiple blocks during an epoch, they are guaranteed more stable rewards with low variance.</p>

<center><img src="/images/zilliqa-107.jpg" alt="zilliqa"></center>

<p>The unprecedented throughput of Zilliqa also has an important impact on the incentives that miners draw from transaction processing, i.e., gas fees (or transaction fees). In many of today’s popular blockchains, users have to compete for the small number of transactions that can be processed every second. Miners also tend to pick transactions with higher fees to compensate for their operational costs. </p>

<p>As a result, transactions with low or insufficient transaction fees will experience delays in processing, or worse can be held indefinitely. The situation may further deteriorate as mining rewards close to zero in currencies with finite 12 supply such as Bitcoin. Recently in August 2017, the average transaction fee in Bitcoin rose as high as USD 92 . </p>

{% include page-toc.html %}

<p>Such issues will be significantly alleviated in Zilliqa. As the number of transactions processed per second becomes 200x more or beyond, the competition in terms of transaction fees will be less intense. At the same time, the cost of processing a transaction on the miners’ side is also cut by orders of magnitude. We expect that the bar for transaction fees acceptable to miners will be lowered significantly. </p>

<p>Note that a low fee in Zilliqa does not necessarily imply that miners are insufficiently incentivized. On the contrary, due to its high throughput, the aggregated sum of incentives from several transactions can compensate the low fee per transactions.</p>

<h2 id="latest">Latest Zilliqa News</h2>

<h4>Zilliqa Testnet v1.0 Release: Codename Red Prawn</h4>

<p>Scalability (or rather the lack of it) is one of the biggest challenges with existing public blockchain platforms. Without scalability it is hard to imagine a real-world decentralized application built on a blockchain.</p>

<p>Whilst there are various different approaches to solving the scalability problem, sharding offers us a powerful solution.</p>

<p>Zilliqa is one of the few projects that have taken the sharding route. With the use of sharding, Zilliqa has the potential to match throughput benchmarks set by traditional payment methods (such as VISA and MasterCard). Even more importantly, sharding ensures that Zilliqa’s transaction throughput increases (roughly) linearly with its network size — a ground-breaking feature missing in all popular blockchains today.</p>

