---
title: What Is Railblocks?
description: What Is Railblocks?
name: Railblocks
author: WeUseCoins
permalink: /what-is-railblocks/
authorurl: /
published: true
toc: 
  what: What Is Railblocks?
  getting: Getting Started With Railblocks
  howto: How To Get A Railblocks Wallet?
  resources: Railblocks Resources 
  buy: How To Buy Railblocks?
  latest: Latest Railblocks News
img: railblocks.png
category: appcoin
summary: RaiBlocks is a novel take on cryptocurrency technology in which every user maintains their own blockchain.
---

<h2 id="what">What Is Railblocks?</h2>

<p><center><script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script><div class="coinmarketcap-currency-widget" data-currency="railblocks" data-base="USD" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div></center></p>

<p><a href="/what-is-bitcoin/">Bitcoin</a>, and other cryptocurrencies, function by achieving consensus on their global ledgers in order to verify legitimate transactions while resisting malicious actors. Bitcoin achieves consensus via an economic measure called Proof of Work (PoW). </p>

<p>In a PoW system participants compete to compute a number, called a nonce, such that the hash of the entire block is in a target range. This valid range is inversely proportional to the cumulative computation power of the entire Bitcoin network in order to maintain a consistent average time taken to find a valid nonce. The finder of a valid nonce is then allowed to add the block to the blockchain; therefore, those who exhaust more computational resources to compute a nonce play a greater role in the state of the blockchain. </p>

<p>PoW provides resistance against a Sybil attack, where an entity behaves as multiple entities to gain additional power in a decentralized system, and also greatly reduces race conditions that inherently exist while accessing a global data-structure. An alternative consensus protocol, <a href="/video-qa-lightning-network-have-proof-of-stake-elements/">Proof of Stake (PoS)</a>, was first introduced by Peercoin in 2012. In a PoS system, participants vote with a weight equivalent to the amount of wealth they possess in a given cryptocurrency. </p>

<p>With this arrangement, those who have a greater financial investment are given more power and are inherently incentivized to maintain the honesty of the system or risk losing their investment. PoS does away with the wasteful computation power competition, only requiring light-weight software running on low power hardware. The original RaiBlocks paper and first beta implementation were published in December, 2014, making it one of the first Directed Acyclic Graph (DAG) based cryptocurrencies. </p>

<p>Soon after, other DAG cryptocurrencies began to develop, most notably DagCoin/Byteball and IOTA. These DAG-based cryptocurrencies broke the blockchain mold, improving system performance and security. Byteball achieves consensus by relying on a “main-chain” comprised of honest, reputable and user-trusted “witnesses”, while <a href="/what-is-iota/">IOTA</a> achieves consensus via the cumulative PoW of stacked transactions.</p>

<center><img src="/images/railblocks-101.jpg" alt="railblocks"></center>

<p>RaiBlocks achieves consensus via a balance-weighted vote on conflicting transactions. This consensus system provides quicker, more deterministic transactions while still maintaining a strong, decentralized system. RaiBlocks continues this development and has positioned itself as one of the highest performing cryptocurrencies.</p>

<h4>RAIBLOCKS COMPONENTS</h4>

<p>Before describing the overall RaiBlocks architecture, we define the individual components that make up the system.</p>

<p><b>A. Account</b> - An account is the public-key portion of a digital signature key-pair. The public-key, also referred to as the address, is shared with other network participants while the <a href="/what-is-a-private-key/">private-key</a> is kept secret. A digitally signed packet of data ensures that the contents were approved by the private-key holder. One user may control many accounts, but only one public address may exist per account</p>

<p><b>B. Block/Transaction</b> - The term “block” and “transaction” are often used interchangeably, where a block contains a single transaction. Transaction specifically refers to the action while block refers to the digital encoding of the transaction. Transactions are signed by the private-key belonging to the account on which the transaction is performed.</p>

<center><img src="/images/railblocks-102.jpg" alt="railblocks"></center>

<p><b>C. Ledger</b> - The ledger is the global set of accounts where each account has its own transaction chain (Figure 2). This is a key design component that falls under the category of replacing a run-time agreement with a design-time agreement; everyone agrees via signature checking that only an account owner can modify their own chain. This converts a seemingly shared datastructure, a distributed ledger, in to a set of non-shared ones.</p>

<p><b>D. Node</b> - A node is a piece of software running on a computer that conforms to the RaiBlocks protocol and participates in the RaiBlocks network. The software manages the ledger and any accounts the node may control, if any. A node may either store the entire ledger or a pruned history containing only the last few block of each account’s blockchain. When setting up a new node it is recommended to verify the entire history and prune locally</p>

<h4>SYSTEM OVERVIEW</h4>

<p>Unlike blockchains used in many other cryptocurrencies, RaiBlocks uses a block-lattice structure. Each account has its own blockchain (account-chain) equivalent to the account’s transaction/balance history (Figure 2). Each account-chain can only be updated by the account’s owner; this allows each account-chain to be updated immediately and asynchronously to the rest of the block-lattice, resulting in quick transactions. </p>

<p>RaiBlocks’ protocol is extremely light-weight; each transaction fits within the required minimum UDP packet size for being transmitted over the internet. Hardware requirements for nodes are also minimal, since nodes only have to record and rebroadcast blocks for most transactions (Figure 1). The system is initiated with a genesis account containing the genesis balance. </p>

<p>The genesis balance is a fixed quantity and can never be increased. The <a href="http://geni.us/genesismining">genesis balance</a> is divided and sent to other accounts via send transactions registered on the genesis account-chain. The sum of the balances of all accounts will never exceed the initial genesis balance which gives the system an upper bound on quantity and no ability to increase it. This section will walk through how different types of transactions are constructed and propagated throughout the network.</p>

<p>A. Transactions - Transferring funds from one account to another requires two transactions: a send deducting the amount from the sender’s balance and a receive adding the amount to the receiving account’s balance.</p>

<center><img src="/images/railblocks-103.jpg" alt="railblocks"></center>

<p>Transferring amounts as separate transactions in the sender’s and receiver’s accounts serves a few important purposes:</p>

<p>1) Sequencing incoming transfers that are inherently asynchronous.</p>
<p>2) Keeping transactions small to fit in UDP packets. </p>
<p>3) Facilitating ledger pruning by minimizing the data footprint. </p>
<p>4) Isolating settled transactions from unsettled ones.</p>

<p>More than one account transferring to the same destination account is an asynchronous operation; network latency and the sending accounts not necessarily being in communication with each other means there is no universally agreeable way to know which transaction happened first. </p>

<p>Since addition is associative, the order the inputs are sequenced does not matter, and hence we simply need a global agreement. This is a key design component that converts a run-time agreement in to a design-time agreement. The receiving account has control over deciding which transfer arrived first and is expressed by the signed order of the incoming blocks. </p>

<p>If an account wants to make a large transfer that was received as a set of many small transfers, we want to represent this in a way that fits within a UDP packet. When a receiving account sequences input transfers, it keeps a running total of its account balance so that at any time it has the ability to transfer any amount with a fixed size transaction. </p>

<p>This differs from the input/output transaction model used by Bitcoin and other cryptocurrencies. Some nodes are uninterested in expending resources to store an account’s full transaction history; they are only interested in each account’s current balance. When an account makes a transaction, it encodes its accumulated balance and these nodes only need to keep track of the latest block, which allows them to discard historical data while maintaining correctness. </p>

<p>Even with a focus on design-time agreements, there is a delay window when validating transactions due to identifying and handling bad actors in the network. Since agreements in RaiBlocks are reached quickly, on the order of milliseconds to seconds, we can present the user with two familiar categories of incoming transactions: settled and unsettled. </p>

<p>Settled transactions are transactions where an account has generated receive blocks. Unsettled transactions have not yet been incorporated in to the receiver’s cumulative balance. This is a replacement for the more complex and unfamiliar confirmations metric in other cryptocurrencies.</p>

<p>B. Creating an Account - To create an account, you need to issue an open transaction (Figure 4). An open transaction is always the first transaction of every account-chain and can be created upon the first receipt of funds. The account field stores the public-key (address) derived from the private-key that is used for signing. </p>

<p>The source field contains the hash of the transaction that sent the funds. On account creation, a representative must be chosen to vote on your behalf; this can be changed later (Section IV-F). The account can declare itself as its own representative.</p>

<center><img src="/images/railblocks-103.jpg" alt="railblocks"></center>

<h2 id="getting">Getting Started With Railblocks</h2>

<p>Raiblocks (XRB) is an open-source programming venture and a shared cryptocurrency like Bitcoin. It is a low inertness and high-throughput digital money used in exchange affirmation. The only difference between RaiBlocks and other coins is that it does not require any exceptions equipment to mine, but it is rather conveyed through its fixture in light by guaranteeing and fathoming captcha. This makes XRB one of its kind token and platform. In May 2017, RaiBlocks was among the top 200 biggest cryptocurrencies in the crypto world. The listing was by advertising capitalization.</p>

<p>RaiBlocks features instant transaction confirmation and has with a low energy consumption. The appropriation of Raiblocks mostly depends on human based work. People who tackle captcha work are the ones who make Raiblocks evolve. Every hour, more than 17000 MXRB are made available to the public. </p>

<p>The MXRB are dispersed among claimers as indicated by the recipe known as the best record remunerate. The best record remunerate is the best record claims that add up to the best record claims. The recipe max amount is appropriated so that it adds up the quantity of claimers increment the mining trouble on Raiblocks coins. The process additionally expands and brings about fewer rewards per asset.</p>

<p>Raiblocks has two trades, the Mercatox and the Bitgrail. The Bitgrail is a committed Raiblocks trade, which was used in the Cryptopia trade in the past. A vast majority of the Raiblocks trade exchanges for Bitcoin BTC and can be exchanged for different coins on Bitgrail.</p>

<p>On the other hand, you can get the Mercatox trade and make a record exchange using the Mrai under the code XRB. There have been issues that Bitcointalk and telegram string is not appropriate to exchange XRB, but there is no concrete evidence supporting the issues. You can try using a little sum and get the sentiment of the execution on your exchange.</p>

<p>In the realm of digital money, Telegram appears as an exception. The benefits of utilizing telegram are that you can talk instantly with individuals required in the venture. However, you have to pick the stage you want to utilize the most. The procedure on the XRB is straightforward and exceptional.</p>

<p>The main exchanging trade recorded in the Raiblocks community happened earlier on. The exchanging stage change frequently and Raiblocks is turning out to be one of the well-known digital money. Both its cost and market cap are taking off enhancing its position among different digital currencies in the crypto market.</p>

<p>Raiblocks (XRB) is a cryptocurrency which I thought was the same as Steem with instant, feeless, and scalable transactions when I first saw it. Including low-energy requirements, this simple set of features are in my opinion, desirable. Just can't think of a future where this is not the standard.</p>

<center><img src="/images/railblocks-105.jpg" alt="railblocks"></center>

<p>It wasn't until @anyx mentioned about it during Steemfest2 that I decided to take a look at it again for the second time. Bought some after reading the abstract and conclusion of the whitepaper. It's just a simple cryptocurrency that aims to solve Bitcoin's issues as a currency. It's fast, feeless, and minerless. It's also capable of scaling up right away.</p>

<p>The price went up 10 times a couple of weeks later and I began thinking, okay, maybe Raiblocks' zen-like functionality and design is a great plus point for a pure currency. People know what they're getting into right away. No cluttered marketing for investors and users alike.</p>

<p>So it went up about 200 times in just 2 months. It's a good testament to the soundness of Delegated Proof-of-Stake architectures. Steem is pretty similar as well that it also provides quick and free transactions. But why did this thing go up quicker than Steem? I'd venture the following reasons:-</p>

<ul>
<li>Raiblocks has a simple function and message going for it.</li>
<li>Might be capable of scaling up to the size of Internet-of-Things as well.</li>
<li>Easy for exchanges to set up nodes for quick confirmation times. (although contestable, since there's only a couple of not very popular exchanges dealing with XRB at the moment)</li>
<li>Fixed finite supply.</li>
</ul>

<p>Okay, so how is Steem different? It's also has fast, free, and scalable transactions. It's not quite as instant and scalable like Raiblocks, but you get what I mean. It's capable of supporting a public content platform and the massive amounts of transactions that happen in a social network. According to https://blocktivity.info, it has been the highest performing blockchain compared to the rest. In order to appreciate the difference, let's first understand more about Raiblocks.</p>

<h4>What does it mean to hold Raiblocks (XRB)?</h4>

<p>This is a simple currency which was entirely pre-mined via CAPTCHA faucets. The supply is fixed and ownership is fairly distributed. This means there's no one party that owns too many "free" XRBs, and they would need to spend money to acquire more. Since there's no inflation and overhead costs involved, there's a good chance that it's not a currency that will devalue over time. These parts in their FAQ section says it best:-</p>

<p><i>RaiBlocks secure’s it’s ledger via delegated proof of stake (dPoS). In order to perform malicious actions on the RaiBlocks block-lattice, an attacker would have to posses >50% of the online voting power. Such an attack would spoil their large financial investment, and as such not an attractive option. The dPoS of RaiBlocks consumes minimal energy, allowing full-nodes to run on inexpensive, low-power hardware.</i></p>

<p><i>RaiBlocks’ focus is on reliable, quick peer-to-peer payments and rapid exchange transfers for arbitrage.</i></p>

<p><i>The entire concept of programs executing on top of the Ethereum Virtual Machine is something RaiBlocks doesn't attempt to replicate. The part we focus on is an efficient transfer of value i.e. purely a currency, so while Ethereum requires miners and electricity input which is paid for by devaluing the currency, RaiBlocks has no fees and no devaluing while operating.</i></p>

<p>Holding Raiblocks doesn't earn you more Raiblocks, nor does it have a vested form such as Raiblocks Power. The network already has a fixed supply and doesn't create new ones. There's just no concept of mining. There are no workers to pay off. It's a "stable" product.</p>

<h4>What does it mean to hold Steem?</h4>

<p>At its surface, Steem is pretty much the same as Raiblocks when it comes to their use as a currency. They're comparable in performance from a first person point-of-view. I've tried transacting decent amounts on both networks before. Equally quick and reliable. However, it's important to notice that Steem has a decaying-inflationary protocol. The inflation rate reduces every year until Steem has about 2.5 times more total supply in 20 years.</p>

<p>Now, if you look on https://coinmarketcap.com, you'd notice that Raiblocks is worth about 2.5 times more than Steem's market capitalisation. This is a sensible benchmark valuation that accounts for both Raiblocks' fixed supply vs. Steem's long-term supply.</p>

<p>A pessimist will do much better just holding Raiblocks instead of Steem. But Steem could be a better hold if you believe that Steem's inflation works in bringing in more value and user adoption for the network in the future. However, that's not all for Steem. You can actually hedge against Steem's inflation if you convert your Steem into Steem Power.</p>

<h4>What does it mean to hold Steem Power?</h4>

<p>The more Steem Power you have, the better your earning power on the network. You can earn more Steem just by having more Steem Power. All you have to do is just contribute work on the platform by posting and voting. It's a good hedge against Steem's inflationary protocol, so it's definitely a great hold if you believe in Steem's future and the network effects that it can generate. Even better if you're actively using the platform.</p>

<p>Steem Power is like a powerful game-item in an online role playing game, and that might have value on its own. Here's a longer post on it. But wait, there's also Steem-Backed Dollars!</p>

<h4>What does it mean to hold Steem-Backed Dollars?</h4>

<p>SBDs has been a peculiar coin in the Steem ecosystem. It's a coin that is only generated for author payouts (which is part of the inflation). It is also limited in quantity. Like Steem, it has all the same features for fast and free transactions. </p>

<p>Theoretically, it's a currency that should be pegged to $1 USD by the market. However, we've been seeing traders pushing up the price to ~$10 USD for the past couple of weeks. It's not something that I would hold as I just treat it as a vestigial currency that I'll sell right away for more Steem Power (or something else).</p>

<h4>How about the market potential of Raiblocks & Steem?</h4>

<p>The future of currencies are both instant and free-to-transact, or at least half of the market should be swayed into this path. This quality enables the inclusion of all kinds of transactions, including micropayments. Personally, I think Steem's inflation and rewards distribution mechanism provides an edge over Raiblocks when it comes to user adoption. So holding Steem or Steem Power might prove to be more beneficial over the long-run.</p>

<p>Raiblocks might be easier to set up for exchanges due to its simplicity. It might also end up being widely used for IoT microtransactions. Personally, I believe Steem's market (attention, social, and gaming) occupies just as much capital as the IoT market, at least in the meantime. The value in IoT transactions are still largely speculative, in my opinion, although it could very well dominate the markets once it matures.</p>

<p>Raiblocks' price seems to be peaking at its rally at the moment. Without inflation to cater for a DAO-like structure for the network, I think the pump experienced by Raiblocks at the moment will unlikely sustain itself over the long-run until it has major backing from exchanges and corporations like IOTA. Well, Raiblocks vs. IOTA is another different matter. Here's an article on it: https://hackernoon.com/iota-vs-raiblocks-413679bb4c3e</p>

<center><img src="/images/railblocks-106.jpg" alt="railblocks"></center>

<p>There's not much going on with Raiblocks' ecosystem and adoption at the moment, although it might get listed on Binance soon (here's the voting page, link will expire soon: https://www.binance.com/vote.html) which may provide a good boost, but still largely speculative. Also, I suspect that Steem's recent price increase was partly contributed by more market attention looking into fast and free transaction coins, thanks to Raiblocks' clear and concise marketing.</p>

<p>Verdict: If you like to just buy and hold without doing much, Raiblocks might be a good option although maybe not at the moment. But if you like to actively use your currency and participate in the network, then Steem / Steem Power is a much better option. </p>

<p>Both of these protocols offer quick and free transactions. Steem might not be engineered for the size of IoT markets, but it should be able to scale up to the realm of social networks. So if you're somehow itching for Raiblocks, I think it might be best to just sit out and see if it survives the recent major pump. Part of the capital might flow to Steem instead.</p>

<p>Regardless, I think any protocols that serve as platforms for quick and free transactions are a necessary part of the future. But there's just no way of telling which will stay for the long-term, although part of why I like Steem is that has the edge of user adoption.</p>

<h2 id="howto">How To Get A Railblocks Wallet?</h2>

<p>RaiBlocks is a novel take on cryptocurrency technology in which every user maintains their own blockchain. It aims to offer near-instantaneous transaction times with limited (or zero) fees by avoiding the mining process, while simultaneously reducing reliance on synchronization with a main network and high CPU and energy usage. </p>

<p>By doing so, it strives to act as an actual, usable currency, on a worldwide scale; regardless of the size of each transaction, or the computing capacity of any user connected to the network. In this way it plans to compete with or even replace bitcoin as the most widely used cryptocurrency, given that bitcoin transaction fees remain at extraordinarily high levels and confirmation times sometimes take hours.</p>

<p>RaiBlocks was first released in February 2016 by bitcoin enthusiast Colin LeMahieu, in a quest to solve many of the problems inherent to classical blockchain structures, such as high transaction fees and long confirmation times. In doing so, he has more-or-less completely re-invented cryptocurrency by employing a unique approach to blockchain data transmission. From LeMahieu’s medium.com profile:</p>

<center><img src="/images/railblocks-107.jpg" alt="railblocks"></center>

<p>“I first stumbled upon Bitcoin in 2010 and immediately saw the potential of decentralized currency. After four years of following Bitcoin and researching its capabilities, I began to worry about its flaws: scalability, transfer times, and high fees. Realizing these issues could potentially hinder its use as an everyday currency, in 2014 I embarked on a mission to design a payment system that solved these performance issues.”</p>

<p>According to the initial post on the coin’s announcement [ANN] (better known as an ICO) thread on the forum bitcointalk.org, it is designed to be a “cryptocurrency killer,” meaning it started with the goal of replacing all other cryptocurrencies as the #1 unit of digital money transfer via its ability to conduct cost-free “micropayments;” something not yet achieved by any other cryptocurrency.</p>

<p>RaiBlocks aims to achieve their goals by replacing the common, ubiquitous “shared-memory data structure” model that governs most blockchain-based cryptocurrencies with a “message passing” model, in which all users have their own blockchain that only requires intermittent connectivity with the main network, and minimal computational power. </p>

<p>RaiBlocks is the first cryptocurrency to employ a “block lattice” (or multi-dimensional blockchain), which frees the user from having to pay fees to miners, wait for network synchronization and avoid lengthy transaction confirmation times. It also uses a decimal system similar to that of bitcoin, in which the smallest transferable unit of RaiBlocks is one millionth of one unit (8 decimal places).</p>

<p>“Recently, high demand and limited scalability have increased the average transaction times and fees in popular cryptocurrencies, yielding an unsatisfactory experience. Here we introduce RaiBlocks, a cryptocurrency with a novel blocklattice architecture where each account has its own blockchain, delivering near instantaneous transaction speed and unlimited scalability. </p>

<p>Each user has their own blockchain, allowing them to update it asynchronously to the rest of the network, resulting in fast transactions with minimal overhead. Transactions keeps (sic) track of account balances rather than transaction amounts, allowing aggressive database pruning without compromising security.”</p>

<h2 id="resources">Railblocks Resources</h2>

<h4>Publications</h4>

<ul>
<li><a href="https://raiblocks.net">Official Website</a></li>
<li><a href="https://github.com/clemahieu/raiblocks">Github</a></li>
<li><a href="https://twitter.com/raiblocks">Twitter</a></li>
<li><a href="https://www.reddit.com/r/CryptoCurrency/comments/73b98j/comparing_the_cost_of_attacking_proofofwork_and/">Cost of Attack Comparison</a></li>
<li><a href="https://steemit.com/raiblocks/@icarusglider/raiblocks-wallet-sync-workaround">IcarusGlider - Steemit</a></li>
<li><a href="https://medium.com/@Siegfried_JW/raiblocks-xrb-research-cb0e649d6d9c">Siegfried - Medium</a></li>
<li><a href="http://ftreporter.com/cryptocurrency-review-introduction-of-raiblocks-xrb/">FT Reporter</a></li>
<li><a href="http://cryptoleet.com/raiblocks-new-cryptocurrencies-based-captcha-services/">Cryptoleet</a></li>
<li><a href="https://chesatochi.com/raiblocks-human-proof-blockchain/">Chesatochi</a></li>
<li><a href="https://www.reddit.com/r/CryptoCurrency/comments/49cyt6/coinaday_raiblocks/">Reddit</a></li>
<li><a href="https://bitcoinist.com/exclusive-interview-raiblocks-team/">Bitcoinist</a></li>
<li><a href="https://docs.google.com/document/d/13s6BKzRq9oD5Me55JBRzR7BdvjJ44QKqPu2lf-JsAlU">Whitepaper</a></li>
</ul>

<h4>Merchandise</h4>

<ul>
<li><a href="https://shop.yapraiwallet.space/">YapRai Shop</a></li>
<li><a href="https://www.teepublic.com/t-shirt/1891623-raiblocks-xrb-crypto">cryptogeek on Teepublic</a></li>
<li><a href="https://shop.spreadshirt.com/steemit/men+1012978637?&q=D1I1012978637">Station Shop USA CAN AUS</a></li>
<li><a href="https://shop.spreadshirt.net/steemit/men+140237994?noCache=true&q=D1I140237994">Station Shop EUR</a></li>
<li><a href="https://www.spendraiblocks.com/">Spend RaiBlocks</a></li>
</ul>

<h2 id="buy">How To Buy Railblocks?</h2>

<h4>Exchanges</h4>

<ul>
<li><a href="https://bitgrail.com/market/BTC-XRB">BitGrail</a></li>
<li><a href="https://bitflip.li/trade/XRB-BTC">BitFlip</a></li>
<li><a href="https://t.me/raiblockstradebot">raiblockstradebot</a></li>
</ul>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/aWYTDa0yus8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/8atw20gGH1s" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>

<ul>
<li>Buy Ethereum or Bitcoin on <a href="http://geni.us/coinbase">Coinbase</a>. You can use one of the following guides to buy them. If you already have Bitcoin or Ethereum, you can skip this step.</li>

<li>Once you’ve Bitcoin or Ethereum, you can head to KuCoin where XRB is listed and available to trade.</li>

<li>Register yourself on KuCoin — It’s a cool exchange with really nice user interface and usable too without throwing cluttered stuff onto your face.</li>

<li>It’s important to save your recovery key while setting up 2 factor authentication. Incase your phone is lost or you change your phone — you need this key to get the Google Authenticator working properly.</li>

<li>Once you login with username, password and 2FA — you get to the assets screen — if not click on “Assets” on top menu bar.</li>
</ul>

<p>You can find your KuCoin <a href="/video-new-eea-members/">ETH wallet address</a> by logging in, and clicking on Assets in the top navigation bar. Then click on Deposit, and select ETH from the list (note, there is also a ETF that has a similar symbol. DO NOT send ETH funds to that address as they will likely be lost). This will load your KuCoin Ethereum address. Copy this, and then open up your <a href="http://geni.us/coinbase">Coinbase account</a>.</p>

<center><img src="/images/railblocks-108.jpg" alt="railblocks"></center>

<p>After you click Assets, select Deposit from the side menu item as shown below</p>

<center><img src="/images/railblocks-109.jpg" alt="railblocks"></center>

<p>On Deposit screen, you will have a dropdown to select an asset (Bitcoin or Ethereum or anything you’ve with you). Select Bitcoin to see the Deposit address or Ethereum to see the Ethereum deposit address.</p>

<center><img src="/images/railblocks-110.jpg" alt="railblocks"></center>

<p>Use this address to send your funds from Coinbase or any other exchange you have your Bitcoin or Ethereum.</p>

<p>As you scroll down, you can see the deposit history for selected asset here as shown below</p>

<center><img src="/images/railblocks-111.jpg" alt="railblocks"></center>

<p>Once you see that your deposits are confirmed, you can scroll up to menu on top and click on Markets — which will show you different pairs you can trade XRB with.</p>

<center><img src="/images/railblocks-112.jpg" alt="railblocks"></center>

<p>If you have deposited Bitcoin to KuCoin, click on BTC tab and You’ll see XRB/BTC.</p>

<p>Don’t click on it — Follow the next steps for easy Buy/Sell</p>

<p>If you have deposited Ethereum to KuCoin, click on ETH tab and you can see XRB/ETH pair. Don’t click on it yet as you can Buy/Sell right from this screen itself.</p>

<center><img src="/images/railblocks-113.jpg" alt="railblocks"></center>

<p>Follow the below screenshot with comments inline to complete your purchase of XRB token before it hits other exchanges and becomes famous.</p>

<center><img src="/images/railblocks-114.jpg" alt="railblocks"></center>

<p>Once you have completed XRB purchase, you can go to Assets menu item on top and look at Active Orders or Dealt Orders to see your XRB tokens. If it’s in active orders, it means XRB is not bought yet — but an order has been placed — when ever it hits the price we’ve mentioned — it will be purchased automatically and moves to Dealt orders.</p>

<h2 id="latest">Latest Railblocks News</h2>

<center><img src="/images/railblocks-115.jpg" alt="railblocks"></center>

