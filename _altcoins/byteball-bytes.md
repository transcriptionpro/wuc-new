---
title: What Is Byteball Bytes?
description: What Is Byteball Bytes?
name: Byteball Bytes
author: WeUseCoins
permalink: /what-is-byteball-bytes/
authorurl: /
published: true
toc: 
  what: What Is Byteball Bytes?
  getting: Getting Started With Byteball Bytes
  howto: How To Get A Byteball Bytes Wallet?
  resources: Byteball Bytes Resources 
  buy: How To Buy Byteball Bytes?
  latest: Latest Byteball Bytes News
img: byteball-byte.png
category: appcoin
summary: Byteball is a decentralized system that allows tamper proof storage of arbitrary data, including data that represents transferrable value such as currencies, property titles, debt, shares, etc.
---

<h2 id="what">What Is Byteball Bytes?</h2>

<p><center><script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script><div class="coinmarketcap-currency-widget" data-currency="gbyte" data-base="USD" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div></center></p>

<p>Byteball is a <a href="/video-qa-decentralised-immunity-from-state-sponsored-attacks/">decentralized system</a> that allows tamper proof storage of arbitrary data, including data that represents transferrable value such as currencies, property titles, debt, shares, etc. <a href="/bitcoin-cold-storage-guide/">Storage units</a> are linked to each other such that each storage unit includes one or more hashes of earlier storage units, which serves both to confirm earlier units and establish their partial order. The set of links among units forms a DAG (directed acyclic graph). </p>

{% include page-toc.html %}

<p>There is no single central entity that manages or coordinates admission of new units into the database, everyone is allowed to add a new unit provided that he signs it and pays a fee equal to the size of added data in bytes. The fee is collected by other users who later confirm the newly added unit by including its hash within their own units. As new units are added, each earlier unit receives more and more confirmations by later units that include its hash, directly or indirectly. </p>

<p>There is an internal currency called ‘bytes’ that is used to pay for adding data into the decentralized database. Other currencies (assets) can also be freely issued by anyone to represent property rights, debt, shares, etc. Users can send both bytes and other currencies to each other to pay for goods/services or to exchange one currency for another; the transactions that move the value are added to the database as storage units. </p>

<p>If two transactions try to spend the same output (double-spend) and there is no partial order between them, both are allowed into the database but only the one that comes earlier in the total order is deemed valid. Total order is established by selecting a single chain on the DAG (the main chain) that is attracted to units signed by known users called witnesses. A unit whose hash is included earlier on the main chain is deemed earlier on the total order. </p>

<p>Users choose the witnesses by naming the user-trusted witnesses in every storage unit. Witnesses are reputable users with real-world identities, and users who name them expect them to never try to <a href="/video-satoshis-thoughts-double-spending/">double-spend</a>. As long as the majority of witnesses behave as expected, all double-spend attempts are detected in time and marked as such. As witnesses-authored units accumulate after a user’s unit, there are deterministic (not probabilistic) criteria when the total order of the user’s unit is considered final. </p>

<p>Users store their funds on addresses that may require more than one signature to spend (multisig). Spending may also require other conditions to be met, including conditions that are evaluated by looking for specific data posted to the database by other users (oracles). Users can issue new assets and define rules that govern their transferability. </p>

<p>The rules can include spending restrictions such as a requirement for each transfer to be cosigned by the issuer of the asset, which is one way for financial institutions to comply with existing regulations. Users can also issue assets whose transfers are not published to the database, and therefore not visible to third parties. Instead, the information about the transfer is exchanged privately between users, and only a hash of the transaction and a spend proof (to prevent double-spends) are published to the database.</p>

<p>In Orwell’s 1984, the protagonist Winston Smith works in the Records Department of the Ministry of Truth as an editor, revising historical records, to make the past conform to the ever-changing party line and deleting references to unpersons – people who have been "vaporised," i.e. not only killed by the state but denied existence even in history or memory [1]. What we present here is data storage that is not rewritable. It is a distributed decentralized database where records can neither be revised nor deleted entirely. </p>

<p>Bitcoin [2] was the first system to introduce tamper proof records designed for the specific purpose of tracking the ownership of electronic currency units known as bitcoins. In <a href="/what-is-bitcoin/">Bitcoin</a>, all transfers of the currency are represented as transactions that are digitally signed by the current owner of the coin, transactions are bundled into blocks, and blocks are linked into a chain (blockchain) secured by <a href="/video-proof-of-beats-na-komodo-dragon/">proof of work (PoW)</a> that assures that large computing resources have been invested into building the chain. </p>

<p>Any attempt to rewrite anything contained in the chain would therefore require even larger computing resources than those that have already been expended. Soon after Bitcoin appeared, it became clear that this was more than just a trust-free P2P electronic currency. Its technology became a source of new ideas for solving other problems. At the same time, Bitcoin’s deficiencies and limitations equally became clear. </p>

<p>Byteball is designed to generalize Bitcoin to become a tamper proof storage of any data, not solely transfers of a single electronic currency, and remove some of the most pressing deficiencies that impede a wider adoption and growth of Bitcoin. <b>Blocks</b>. In Bitcoin, transactions are bundled into blocks, and blocks are linked into a single chain. Since the blocks are linked linearly, their spacing in time and their size are optimized for near-synchrony among nodes, so that the nodes can share a new block with each other much faster than it typically takes to generate a new block. </p>

<p>This ensures that nodes most likely see the same block as the last block, and orphaning is minimized. As Bitcoin grows, blocks become increasingly unwieldy. They are either capped in size, in which case the growth is also capped, or they take too long to propagate to all nodes of the network, in which case there is greater uncertainty about which block is last, and more resources are wasted on extending chains that would later be orphaned. </p>

<p>In Byteball, there are no blocks, transactions are their own blocks, and they need not connect into a single chain. Instead a transaction may be linked to multiple previous transactions, and the whole set of transactions is not a chain but a DAG (directed acyclic graph). DAG-based designs have received much attention recently [3-5]. <b>Cost</b>. Bitcoin transactions are secure because it is prohibitively expensive to redo all the PoW included in the blocks created after the transaction. </p>

<p>But that also means that it is necessary to pay to build the legitimate PoW that is strong enough to ward off any attackers. This payment is spent for the electricity required to build the PoW. What is important to note here, is that this money goes outside the Bitcoin ecosystem – to energy companies – meaning that the community of Bitcoin holders as a whole is bleeding capital. In Byteball, there is no PoW, instead we use 3 another consensus algorithm based on an old idea that was known long before Bitcoin. <b>Finality</b>. Transaction finality in Bitcoin is probabilistic. </p>

<p>There are no strict and simple criteria for when you can say that a transaction will never be reversed. Rather, you can only argue that the probability of a transaction being reversed exponentially decays as more blocks are added. While this concept is perfectly clear to those versed in math, it might be a difficult sell to an average Joe who is used to expecting a black-or-white picture in matters of money ownership. To complicate things even further, transaction finality also depends on its amount. If the amount is small, you can be reasonably sure nobody will try to double-spend against you. </p>

<p>However, if the amount at stake is greater than the block reward (12.5 BTC at the time of writing), you might speculate that the payer could temporarily rent hashpower to mine another chain of blocks that doesn’t contain the transaction that pays to you. Therefore, you have to wait for more confirmations before being sure enough that a high-value transaction is final. In Byteball, there are deterministic criteria for when a transaction is deemed final, no matter how large it was. </p>

<p><b>Exchange rate</b>. The Bitcoin price is known to be quite volatile. The bigger problem is that this price is not only volatile, it is not bound to anything. Share and commodity prices are also very volatile but there are fundamentals behind them. Share price is largely a function of company earnings, revenue, debt-to-capital ratio, etc. Commodity prices depend, among other factors, on costs of production with various suppliers. For example, if the oil price falls below the production costs of some suppliers for a long time, these suppliers will eventually shut down, decreasing production and causing the price to go up. </p>

<p>There is a negative feedback loop. In Bitcoin, there are no fundamentals, and no negative feedback. A Bitcoin price of $500 is no more justified than a price of $50,000 or $5. If the Bitcoin price moves from where it is now, this movement alone will not create any economic forces that would push the price back. It’s just wild. In Byteball, the base currency, bytes, is used to pay for adding data into the Byteball database. You pay 1,000 bytes to add 1Kb of data. </p>

<p>It is a measure of the utility of the storage in this database, and actual users will have their opinion on what is a reasonable price for this. If the price of byte rises above what you think is reasonable for your needs, you will find ways to store less bytes, therefore you need to buy less bytes, demand decreases, and the price falls. This is negative feedback, common for all goods/services whose demand is driven by need, not speculation. Besides paying in bytes, one can issue other assets and use them as means of payment. </p>

<p>These assets might represent, for example, debt expressed in fiat currencies or in natural units (such as kWh or barrels of oil). The price of such assets is naturally bound to the underlying currencies or commodities. <b>Privacy</b>. All <a href="/adam-back-confidential-transactions/">Bitcoin transactions</a> and balances of all addresses are visible on the blockchain. Although there are ways to obfuscate one’s transactions and balances, it is not what people have come to expect from a currency. </p>

<p>Transactions in bytes (the base currency) in Byteball are equally visible, but there is a second currency (blackbytes), which is significantly less traceable. <b>Compliance</b>. Bitcoin was designed as an anonymous currency where people have absolute control over their money. That goal was achieved; however, it made 4 Bitcoin incompatible with existing regulations, and hence inappropriate for use in the financial industry. </p>

{% include page-toc.html %}

<p>In Byteball, one can issue assets with any rules that govern their transferability, from no restrictions at all, like Bitcoin, to anything like requiring every transfer to be cosigned by the issuer (e.g. the bank) or restricted to a limited set of whitelisted users.</p>

<p>Byteball enables trust where trust couldn’t exist before.</p>

<p>When a contract is created on Byteball platform, it can be trusted to work exactly as agreed upon. Why? Because it is validated by multiple nodes on the decentralized network, which all follow the same immutable rules. The counterparty, even if it is a total stranger, has to behave honestly because only the rules have authority. Such a contract is called a smart contract. See below for examples of working smart contracts available today.</p>

<h4>Why Use Byteball?</h4>

<p><b>Risk-free conditional smart payments</b> - Byteball allows you to do something that traditional currencies can't: conditional payments. You set a condition when the payee receives the money. If the condition is not met, you get your money back.</p>

<center><img src="/images/byteball-101.jpg" alt="byteball bytes"></center>

<p><b>P2P insurance</b> - Hedge against negative events. Buy insurance from peers to get paid in case a negative event occurs. Sell insurance for profit. Insurance is just a <a href="/video-ethereum-and-smart-contracts/">simple smart contract</a> that can be unlocked by the insured — if the event in question did occur, or by the insurer — otherwise.</p>

<p>To insure against flight delay, find your counterpart in #p2p_insurance channel on our Slack, create a contract, and if your flight arrives late, chat with flight delays oracle	to have it post the data about the delay, then unlock the contract.</p>

<center><img src="/images/byteball-102.jpg" alt="byteball bytes"></center>

<p><b>Prediction markets</b> - Make money by correctly predicting future events. Create a P2P smart contract that can be unlocked if a specific event occurs. Use it for betting on price movements, sports betting, and insurance. Find your counterpart in #prediction_markets channel on our Slack.</p>

<center><img src="/images/byteball-103.jpg" alt="byteball bytes"></center>

<p><b>P2P betting</b> - Bet against other users on sports events. Find your counterpart in #prediction_markets	channel on our Slack and create a contract that can be unlocked by you or your peer depending on the results of a future game. After the result is known, chat with sports oracle	to have it post the data about the outcome, then unlock the contract.</p>

<center><img src="/images/byteball-104.jpg" alt="byteball bytes"></center>

<p><b>P2P payments in chat</b> - Chat and pay in the same app just by clicking links.</p>

<center><img src="/images/byteball-105.jpg" alt="byteball bytes"></center>

<p><b>Chatbots</b> - Talk to a bot like you would talk to a human. Shop by chatting with a merchant's bot, pay in two clicks. Exchanges and other services are also easy to use in conversational interface.</p>

<center><img src="/images/byteball-106.jpg" alt="byteball bytes"></center>

<p><b>Bot Store</b> - Easily discover and add new chatbots via the built-in Bot Store. Developers have instant access to all users by publishing their chatbot on the Bot Store. See the developer guide about building chatbots.</p>

<center><img src="/images/byteball-107.jpg" alt="byteball bytes"></center>

<p><b>Untraceable currency</b> - Blackbytes Cash-like privacy. When you want complete privacy, pay in Blackbytes, a cash-like untraceable currency whose transactions are not visible on the public database, they are sent peer-to-peer instead. Use built-in TOR switch straight from the wallet to increase your privacy even further.</p>

<p><b>Users Help Each Other</b> - Secure each other's transactions. There is no central entity that stores and processes all the payments. Instead, transactions created by users are cryptographically linked to each other, and once you add your new transaction, other users start adding theirs on top of yours, and the number of other transactions that link to your transaction grows like snowball (that's why we call it Byteball).</p>

<center><img src="/images/byteball-108.jpg" alt="byteball bytes"></center>

<h4>Core Features</h4>

<p><b>Atomic exchange</b> - When two parties sign a single unit that executes both legs of the exchange, the two transactions either happen simultaneously or don't happen at all. It is no longer necessary to trust any centralized exchanges.</p>

<p><b>Multi signature</b> - For security, you can require that your funds be spendable only when several signatures are provided, e.g. from your laptop and from your phone. For shared control of funds, signatures from different people may be required.</p>

<p><b>Immutable storage</b> - Once stored in the Byteball database, the data can neither be revised nor removed.</p>

<p><b>Regulated assets</b> - Regulated institutions can issue assets that are compatible with KYC/AML requirements. Every transfer of such asset is to be cosigned by the issuer, and if there is anything that contradicts the regulations, the issuer won't cosign.</p>

<p><b>On-chain oracles</b> - When dealing with untrusted counterparties, you can lock the funds on an address that is spendable either by you or by the counterparty, depending on the events registered to the database by trusted data providers — oracles.</p>

<p><b>Settlement finality</b> - After certain criteria are met, a new transaction becomes final. It cannot be revised even by a powerful attacker. No guesswork about the right number of confirmations, no 51% attacks.</p>

<h2 id="getting">Getting Started With Byteball Bytes</h2>

<p>Byteball has two build-in currencies: bytes and blackbytes. Bytes can be traded at Bittrex, blackbytes are untraceable and can't be traded at an exchange (yet). They can only be exchanged after pairing wallets. The Byteball wallet has a chat in which you can do this.</p>

<h4>Nomenclature</h4>

<p>bytes = base unit</p>
<p>kB = 1 thousand bytes</p>
<p>MB= 1 million bytes (currently worth about $0.50)</p>
<p>GB/GBYTE = 1 billion bytes (currently worth about $500)</p>

<p>blackbytes = base unit</p>
<p>kBB = 1 thousand blackbytes</p>
<p>MBB = 1 million blackbytes</p>
<p>GBB = 1 billion blackbytes (currently worth about 0.02 GBYTE ($10) according to Slack)</p>

<h4>Fees</h4>

<p>Byteball requires 1 byte fee (paid to the Witnesses) per byte of data it stores in the DAG. A GBYTE transaction costs about 600 bytes fee ($0.0003) without special conditions, a GBB transaction can be larger, say up to 10,000 bytes ($0.005), depending on your exact payment. Low enough to neglect, just remember keep a few bytes in your wallet if you want to send blackbytes.</p>

<h4>Blackbytes trading</h4>

<p>Slack channel #trading_blackbyte has a bot that shows BID and ASK orders, but you need to do manual pairing. Byteball Wiki explains how.</p>

<h4>The Design</h4>

<p>There are no blocks in Byteball, and no block size issue.  Instead, every new transaction references one or more earlier ones (parents) by including and signing their hashes.  The links among transactions form a DAG (directed acyclic graph):</p>

<center><img src="/images/byteball-108.jpg" alt="byteball bytes"></center>

<p>By including its parents, each new transaction also indirectly includes and confirms all parents of the parents, parents of the parents of the parents, and so on.  As more transactions are added after your transaction, the number of confirmations you receive grows like snowball, that’s why the name Byteball (our snowflakes are bytes of data).</p>

<h4>Consensus</h4>

<p>There is no PoW, no PoS, and no mining.  Instead, we have the DAG, which already establishes partial order between transactions, plus we add the main chain within the DAG:</p>

<center><img src="/images/byteball-109.jpg" alt="byteball bytes"></center>

<p>The main chain (MC) allows to define total order between transactions: the transaction which gets included (directly or indirectly) earlier on the MC, is deemed earlier in the total order.  When there is a double-spend, the version of the transaction that comes earlier in the total order is deemed valid, all others are deemed void.</p>

{% include page-toc.html %}

<p>The main chain is defined deterministically based on the positions of transactions in the graph.  Refer to the white paper for details, but as a general rule, the MC gravitates towards transactions authored by well known users, which we call witnesses.  The list of witnesses is defined by users themselves as they include the list in every transaction they post.  The MC then follows the path within the DAG such that:</p>

<p>1. the witness lists of the neighboring transactions on the chain are either identical or differ by only one mutation,</p>
<p>2. the chain goes through the most number of witness-authored transactions, compared with alternative chains.</p>

<p>The above is very brief and sketchy description with many important details omitted, refer to the white paper for a full technical story.</p>

<h4>Fees and intrinsic value</h4>

<p>The fees paid for storing one’s transactions (or any other data) in the Byteball database are equal to the size of the data being stored.  If the size of your transaction data is 500 bytes, you pay exactly 500 bytes (the native currency of Byteball) in fees.  This means there is intrinsic value in bytes: it is the utility of permanently storing that size of data in a decentralized immutable database.  For data that represents financial transactions, the value is social rather than personal, because you absolutely need to store the full coin history in order to be able to prove the value and authenticity of the coin to each subsequent owner.</p>

<p>The fees are collected partially by those who are first to reference your transaction as parent and partially by witnesses.  The former incentivizes referencing the most recent transactions as parents, which results in the DAG growing in one direction only, like the trunk of a tree, and being as narrow as network latency permits.  If new transactions are rare enough, such that all nodes have enough time to sync before a new transaction appears, the DAG will look almost like a chain, with only occasional forks and quick merges.</p>

<h4>Money supply</h4>

<p>The total number of bytes is 1015, all bytes were issued in the <a href="http://geni.us/genesismining">genesis transaction</a>. Since the fees paid are returned into the circulation, the money supply will remain the same.</p>

<p>Exchanges list the currency as gigabytes (GB, GBYTE), 1 gigabyte is 1 billion bytes.  The total money supply in gigabytes is 1,000,000.</p>

<h4>Deterministic finality</h4>

<p>In Byteball, there is a protocol rule that a transaction must include the previous transaction (if any) sent from the same address, i.e. there must be partial order between subsequent transactions from the same address.  Breaking this rule is considered equivalent to double-spending, therefore at least one of such unordered transactions will become void.  </p>

<p>If we assume that most witnesses follow this rule (that’s what they are elected for), they have to reference only sufficiently recent transactions as parents and can’t inherit from old enough parents.  Therefore, they can no longer influence the MC (which is attracted to witnesses) in the old enough part of the DAG, and that part of the MC becomes stable, hence the total order relative to this MC also becomes stable.  </p>

<p>See the white paper for discussion of exact criteria of reaching stability, here it is important that the criteria are deterministic, and once a transaction appears on the stable part of the MC, it is final, and, unlike all other cryptocurrencies, no re-orgs are possible.  </p>

<p>This is extremely important for applications in financial industry and for wider adoption in general, as most people are used to expect certainty in matters of money and property ownership, and the concept of probabilistic finality is a difficult sell.</p>

<h4>Assets and on-chain exchange</h4>

<p>Bytes is the native currency of Byteball.  Users can issue any other tokens (assets), e.g. to represent debt.  The debt can be expressed e.g. in fiat currencies or in natural units (barrels, ounces, kWh, etc).  The issuers of the debt can reveal their real-world identities and/or be voluntarily attested (i.e. their real-word identities be verified by a well known third party such as CA).  This enables the use of the existing legal system to secure against fraud.</p>

<p>The issued assets can be used as means of payment, along with bytes.  Assets can be exchanged against bytes and other assets by both parties signing a single unit that executes both legs of the exchange, thus the two transactions either happen simultaneously or don't happen at all.  This kind of signing is called multilateral signing.  No centralized exchange is needed, hence no trust is necessary and no exchange fees (apart from the usual fees for the size of the data).</p>

<h4>Private untraceable payments</h4>

<p>Assets can be either public or private.  All transactions in public assets are visible to everyone on the public decentralized database, just like Bitcoin.  Bytes is a predefined public asset.</p>

<p>Payments in private assets are not published to the public database.  Instead, only the hash of the transaction is stored to the database, while the plaintext of the transaction is sent directly from the payer to the payee.  To protect against double-spends, a spend proof is also published to the Byteball database.  The spend proof is constructed as a hash of the output being spent, so that if the same output is spent twice, the spend proofs will be necessarily the same.</p>

<p>I’ve already described this design at https://bitcointalk.org/index.php?topic=1574508.0, see more details in the white paper.</p>

<h4>Regulated assets</h4>

<p>Regulated institutions can issue assets that are compatible with KYC/AML requirements. Every transfer of such asset is to be cosigned by the issuer, and if there is anything that contradicts the regulations, the issuer won't cosign.</p>

<p>This way, banks can issue fiat-pegged assets and stay fully compliant.  They can open demand deposit accounts and track them on Byteball as assets.  These assets are easily exchangeable against bytes and other assets (with bank’s approval).</p>

<h4>Other features</h4>

<p>- Spending conditions (AKA smart contracts) in an easy to understand declarative language https://bitcointalk.org/index.php?topic=1617816.0</p>
<p>- Multisig: a special case of spending conditions</p>
<p>- On-chain oracles can post data (such as timestamps, exchange rates, weather, various events) directly to the database, then that data can be referenced from spending conditions</p>
<p>- Private end-to-end encrypted messaging: used to convey private payment data, communicate in multisig scenarios, and chat with a merchant’s bot.</p>

<h4>Initial distribution</h4>

<p>There will be no ICO, no crowdsale.  I believe the success of a currency depends on the number of people who own it, in fact Peter R’s research suggests that historical marketcap of Bitcoin follows Metcalfe's law: https://bitcointalk.org/index.php?topic=572106.0, i.e. it is proportional to the square of the number of active users.  That’s why I want Byteball to be in the hands of as many people as possible:</p>

<p>98% of all bytes and blackbytes (the private untraceable currency) are to be distributed for free.</p>
<p>1% I reserve for myself</p>

<h4>Free distribution</h4>

<p>There are two ways to participate in the free distribution:</p>

<p>Make purchases at the merchant stores we partner with and receive 10% cashback on the amount of your purchase, in Bytes.  The cashback program has just started, follow our announcements to learn about merchants who join the program.  If you are a merchant and want to join, contact us.</p>
<p>Hold bytes and/or BTC and receive additional bytes proportional to your holdings.  No investment required, you keep your bitcoins and bytes, plus receive new bytes and blackbytes.  See below how to receive the coins.</p>

<h4>Current status</h4>

<p>The network was launched on December 25, 2016, and 10% of bytes and blackbytes distributed to those who linked their Bitcoin and Byteball addresses.  The total balance linked was over 70,000 BTC.  In the 2nd to 9th rounds, we distributed another 48.4%, almost 1,400,000 BTC was linked.</p>

<h4>Proving your holdings for Byteball distribution</h4>

<p>If you missed earlier rounds of distribution, you can still participate in the further rounds.  </p>
<p>If you already participated or bought bytes on an exchange or received as cashback from a participating merchant, you can multiply your holdings with 10% monthly interest.  </p>

<p>What you receive, is proportional to your balances in BTC and Bytes on the Full Moon of November, on November 4, 2017 at 05:23 UTC:</p>
<ul>
<li>BTC to bytes: 1 BTC of proven balance gives you 6.25 MB (0.00625 GB)</li>
<li>BTC to blackbytes: 1 BTC of proven balance gives you 2.1111 * 6.25 million blackbytes (money supply of blackbytes is 2.1111 times more than that of bytes)</li>
<li>Bytes to bytes: 1 byte on any Byteball address gives you 0.1 new bytes</li>
<li>Bytes to blackbytes: 1 byte on linked Byteball address gives you 0.21111 blackbytes</li>
</ul>
<p>Putting this another way, to receive 1 GB from the distribution, you need to already hold 160 BTC or 10 GB.  These same holdings also give you 2.1111 GBB (giga-blackbyte).</p>

<h2 id="howto">How To Get An Byteball Bytes Wallet?</h2>

<p>1.  Download and install the wallet by following the above links.</p>

<p>2.  Start a chat with the Transition Bot (you find it in the Bot Store in the wallet).  Follow the instructions of the Transition Bot to prove your Bitcoin balance.</p>

<center><img src="/images/byteball-110.jpg" alt="byteball bytes"></center>

<p>You have two options to prove your Bitcoin balance:</p>

<p>a.  By making a micropayment.  The bot will see your address the payment came from, will know that it is your address, and will instruct you to move your Bitcoins to this address.  By making several micropayments, you can link several Bitcoin addresses to the same Byteball address.</p>

<p>b.  By signing a message (if your Bitcoin wallet supports this function).  You tell the bot your Bitcoin address and sign your Byteball address with the Bitcoin address.  After you prove one address (a typical Bitcoin wallet has dozens of them), you can either move all your coins to this single proven address or prove all other addresses in the same way -- by signing a message.  </p>

{% include page-toc.html %}

<p>If you try to link the same Bitcoin address to multiple Byteball addresses by sending a micropayment, both links are ignored.  If you did this by mistake, link another Bitcoin address or link by signing a message.</p>

<p>If you prove by micropayment, remember to check that the Bitcoin address that the bot received the micropayment from, is indeed your address.  An attacker might see your payment on the blockchain and repeat the same micropayment from his address trying to trick you to move your funds to him.</p>

<p>3.  If you make any Bitcoin payment, your coins will most likely be moved to a new change address.  Chat with the bot again, see the balance on your linked address(es) and move the coins back to the linked address(es) if necessary.</p>

<p>The linking phase will end on November 4, 2017 at 05:23 UTC, after which we'll do the distribution in proportion to BTC and bytes balances on this date.</p>

<p>In the 10th round, we'll distribute as much as is linked and calculated by the above rules, the exact % is not known in advance.  </p>

<p>The 11th and subsequent rounds (yet to be announced) will follow similar rules.  The rules and speed of distribution will be adjusted to maximize the value of bytes and keep the speed of distribution in sync with the growth of user base and the actual use of the network.</p>

<p>We'll have as many rounds as is necessary until all 98% of bytes are distributed, most likely a new round every full moon.</p>

<p>My 1% doesn't participate in the 2nd and further rounds.</p>

<p>Earlier adopters have the opportunity to participate in greater number of distribution rounds and receive new bytes in each round by using the same BTC balance and bytes received in the previous rounds.  You are effectively multiplying your stake in each additional round you take part in.</p>

<p>Track the progress of linking at http://transition.byteball.org.</p>
<p>More information at https://wiki.byteball.org/airdrop</p>

<h4>Windows</h4>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/bBuLgihIpNA" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></center>

<h4>Linux</h4>

<p>#1 Installing Electrum</p>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/ijMtwx12p1o" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></center>

<p>Note that for Ubuntu 16.04 an additional dependency appears to be necessary</p>

<p>#2 Making bitcoin addresses visible in Electrum - Tutorial for ALL PLATFORMS</p>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/Cvv0YMLtcv4" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></center>

<h4>Part 3 Signing - Tutorial for ALL PLATFORMS</h4>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/GGsw_2srqmg" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></center>

<h4>Multisig</h4>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/V7rQMyolFuQ" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></center>

<h2 id="resources">Byteball Bytes Resources</h2>

<ul>
<li><a href="https://byteball.org/">Official Website</a></li>
<li><a href="https://twitter.com/ByteballOrg">Twitter</a></li>
<li><a href="https://www.facebook.com/byteball.org">Facebook</a></li>
<li><a href="https://medium.com/byteball">Medium</a></li>
<li><a href="https://bitcointalk.org/index.php?topic=1608859.0">Bitcoin Talk</a></li>
<li><a href="https://www.reddit.com/r/ByteBall/">Reddit</a></li>
<li><a href="https://byteball.slack.com/">Slack</a></li>
</ul>
 
<h2 id="buy">How To Buy Byteball Bytes?</h2>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/ODctDrgKpqM" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></center>

<h4>Step 1: Buy Bitcoin (BTC)</h4>

<p>Exchange your fiat currency for Bitcoin at a top exchange.</p>

<p>I use <a href="http://geni.us/coinbase">Coinbase</a> because it is one of the longest running and most reputable places to buy Bitcoin. It also has a well designed and easy-to-use interface.</p>

<center><img src="/images/byteball-111.jpg" alt="byteball bytes"></center>

<p>After signing up and ID verification, you can buy Bitcoin with major currencies (USD, EUR, GBP, etc.) via online bank transfer or with credit/debit card.</p>

<p>Coinbase is currently available in these countries.</p>

<p>Other good places to buy Bitcoin are:</p>
<ul>
<li>Paxful (Worldwide online)</li>
<li>LocalBitcoins (Worldwide peer-to-peer marketplace)</li>
</ul>
<h4>Step 2: Open an account with an exchange that trades Byteball Bytes</h4>

<p>Now that you have some Bitcoin, you need a place to trade it for GBYTE.</p>

<p>Here is a list of online exchanges where GBYTE can be bought and sold:</p>
<ul>
<li>Bittrex</li>
<li>Cryptox</li>
<li>Cryptopia</li>
</ul>
<p>Exchanges are listed in order of trade volume (descending).</p>

<p>This list is current as of December 2017.</p>

<h4>Step 3: Get your Bitcoin address</h4>

<p>After opening an account at one of the exchanges above, obtain your BTC wallet address.</p>

<p>The details for obtaining a wallet address vary from exchange to exchange, but it is usually relatively straightforward.</p>

<p>Make sure to get your “deposit” or “receiver” address.</p>

<p>It will be a long string of random characters, looking something like this:</p>

<p><code>3Nk7sb84BC9qeuVj62TL25cqHTN9zuByVv</code></p>

<p>Copy this address for the next step. (Your own unique address of course, not the address above!)</p>

<h4>Step 4: Send Bitcoin to your new wallet address</h4>

<p>Send Bitcoin from your <a href="http://geni.us/coinbase">Coinbase</a> account (or any other account/wallet funded with BTC) to your receiver BTC address from the step above.</p>

<h4>Step 5: Trade BTC for GBYTE</h4>

<p>After you receive the BTC in your “secondary” exchange account (it usually takes a few minutes) you can trade it for Byteball Bytes within the exchange.</p>

<p>The details for trading currencies vary depending on the exchange.</p>

<p>Generally, you will look for the GBYTE/BTC trading pair and buy or “place an order” to buy GBYTE with your BTC balance.</p>

<p>Your order may fill immediately or after a short while. If there is a delay, it is usually to find sufficient matching “sell” order(s) for your buy order.</p>

<p>Voila! Now you have some Byteball Bytes </p>

<h4>Step 6 (Optional): Store your Byteball Bytes in a private </h4>

<p>Now that you’ve got some coin, you can just leave it at the exchange where you bought it. Maybe you want to hold your GBYTE or maybe you want to trade it for other coins.</p>

<p>Another option is to move your coins to a wallet.</p>

<p>Here is a list of wallets that hold GBYTE:</p>
<ul>
<li>CoinPayments Wallet</li>
<li>There may also be a coin-specific Byteball Bytes wallet, which you can search for here.</li>
</ul>
<p>In general, there are <a href="/video-trezor-vs-ledger/">different types of wallets</a> – hardware, desktop/software, mobile, web or paper. Some have cross-functionality but most are dedicated to single platform. Each type of wallet has different pros and cons but they all provide the benefit of having an additional place to store your digital currency.</p>

{% include page-toc.html %}

<p>Increased security may be advantage of storing your coins in a private wallet, since exchanges have been hacked in the past. It can also be good to have a backup location to store your GBYTE and will give you options for moving your coins in the future.</p>

<h2 id="spend">Where To Spend Byteball Bytes?</h2>

<p>You can buy or sell bytes without leaving the wallet by chatting with a trading bot. You can also trade on Bittrex, Cryptox, Cryptopia, Changelly, and Bitsquare exchanges.</p>

<p>To buy or sell blackbytes, see or post orders in #trading_blackbyte	channel on our Slack, then exchange peer-to-peer using bound (conditional) payments.</p>

<h2 id="latest">Latest Byteball Bytes News</h2>

<p>Byteball version 2.1 released: paper wallets, sending all public assets as #textcoins, and display of dollar amounts.</p>

<center><img src="/images/byteball-112.jpg" alt="byteball bytes"></center>
