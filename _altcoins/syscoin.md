---
title: What Is Syscoin?
description: What Is Syscoin?
name: Syscoin
author: WeUseCoins
permalink: /what-is-syscoin/
authorurl: /
published: true
toc: 
  what: What Is Syscoin?
  getting: Getting Started With Syscoin
  howto: How To Get A Syscoin Wallet?
  resources: Syscoin Resources 
  buy: How To Buy Syscoin?
  latest: Latest Syscoin News
img: syscoin.png
category: appcoin
summary: Syscoin is a global network, a distributed ledger, a decentralized database and a blockchain. It is also a cryptocurrency, an altcoin, a digital currency and a tradeable token.
---

<h2 id="what">What Is Syscoin?</h2>

<p><center><script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script><div class="coinmarketcap-currency-widget" data-currency="syscoin" data-base="USD" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div></center></p>

<p>Syscoin is a global network, a distributed ledger, a <a href="/long-live-decentralized-bitcoin/">decentralized database and a blockchain</a>. It is also a cryptocurrency, an altcoin, a digital currency and a tradeable token.</p>

<p>Syscoin is based on a fork of the Bitcoin protocol and is merge-mined with Bitcoin, giving us one of the most secure, stable and scalable networks to ever exist on the planet.</p>

<p>Our first project completed Satoshi Nakamoto’s original vision of including a marketplace on the blockchain, but we didn’t stop there.  Syscoin is a revolutionary cryptocurrency that offers near zero cost financial transactions, incredible speed and provides businesses the infrastructure to trade goods, assets, digital certificates and data securely. </p>

<center><img src="/images/syscoin-106.jpg" alt="syscoin"></center>

<p>Syscoin isn’t just about money and trading, it has the ability to attract various business types thanks to its native set of features geared towards business on the blockchain. From eBay traders and High Street shops to Medical applications, Insurance and Gaming, Syscoin’s decentralized network benefits everyone!</p>

<p>The Swiss Army Knife of cryptocurrency platforms, our collection of features and smart contracts can be used to provide solutions for hundreds of different decentralized service use-cases directly on the blockchain and our hardened smart contracts cannot be compromised for nefarious purposes like some turing-complete platforms.  All these features work together to create applications not possible with other blockchain projects.</p>

<p>Syscoin is a permissionless <a href="/blockchain-explained-for-normal-people/">blockchain-based cryptocurrency</a> with a set of <a href="/video-ethereum-and-smart-contracts/">smart contracts</a> which have been thoroughly tested and built on the Bitcoin scripting system using OP1 to OP16 standard script op-codes, representing coloured coin transactions, controlled by a hardened layer of distributed consensus logic for each smart contract (Syscoin service) while still retaining backwards compatibility with the Bitcoin protocol. </p>

<p>These contracts can be combined to form building blocks for blockchain-based e-commerce solutions. Syscoin’s hardened smart contracts are in contrast to turing-complete smart contracts, which, by definition, are not hardened due to the open-ended nature of the underlying scripting language. </p>

<p>Commercial integrators who are looking for a secure solution to leverage the increased efficiency that blockchain technology allows compared with traditional e-commerce applications are better off trying to use a hardened service which cannot change and is well-tested with regression testing, white box and black box testing, specifically targeting rules of the application. Integrators are also inclined to choose the most powerful network available (currently <a href="/what-is-bitcoin/">Bitcoin</a>). Syscoin combines both of these features, making it a compelling choice of network for end users.</p>

<h4>Turing-Complete Scripting</h4>

<p>Turing-complete smart-contracts are technical marvels but they may face issues when applied to practical business processes. Business logic is normally hardened during the Software Requirements and Specification stage of the software development life-cycle. Hardened contract rules make sense in the context of a system that has a measurable number of points of failure (like Bitcoin). </p>

<p>In contrast, Turing-complete systems have infinite paths of execution and risk of failure. The current consensus appears to be that if smart contracts are not needed to solve a problem they are best avoided until the languages and toolboxes on top of the smart contract core API are hardened to a point where they certified to be used by the general public. </p>

{% include page-toc.html %}

<p>It is an open-box software experiment that is useful for applications which can offer cost-effective contracts that must change on demand. In the context of e-commerce applications, this level of flexibility is not required. In contrast, with Syscoin we have decided to try to generalize applications into a set of hardened services that can be used in conjunction with each other to create complex use cases.</p>

<h4>Innovative Service Layer</h4>

<p>User aliases form the backbone of all Syscoin services. We have created an alias identity system whereby recognizable names facilitate the use of services on the network. Data and public keys associated with aliases are stored within the network, allowing aliases to perform blockchain-based activities such as multisignature signing, payment discovery and maintaining identity payment balances. </p>

<p>Once an alias has been initialized on the network, it can then create a variety of other services, including: creating an offer to buy or sell in the decentralized marketplace, creating a transferable certificate which represents proof of ownership and can contain public and private encrypted information, creating an escrow transaction including multisignature payments and refunds, and creating and transmitting secure messages to other aliases. </p>

<center><img src="/images/syscoin-107.jpg" alt="syscoin"></center>

<p>Each alias is cryptographically linked to a service by enforcing a rule that the alias output of the last alias transaction is linked to the creation of any subsequent Syscoin service transactions. This ensures that the owner of the alias is the only party which can make those transactions. In addition, cryptographically secure signatures (backed by enormous proofs-of-work) are required in order to make changes to the services that aliases are linked to. </p>

<p>By linking services to an identity system it makes it much easier to integrate services into real-world scenarios which use identity-based work flows. Almost anything we do today requires the signature of a known actor on the service contract. By providing a cryptographically secure mechanism to create, manage and link these identities to service contracts, it ensures a seamless integration to real-world business processes.</p>

<p><b>Mechanism design</b>. Bitcoin provides two incentives for miners: block subsidies through rewards, and transaction fees. As Bitcoin rewards wind down the network could become unstable due to degrading miner incentive to do what is in the best interest for network security. Issues such as selfish mining and undercutting are discussed in greater length in a paper presented at the ACM CCS [Nar16].</p> 

<p>What we present is a novel mechanism design that prevents mining incentive from degrading by tying in usage of services to an inflation metric for block rewards. Transaction fees remain to provide incentive to mine and relay transactions but rewards depend on the demand for using the Syscoin network. A utility metric can be established by determining the number of Syscoin service transactions per block. In Syscoin 2.1, an arbitrary number was chosen (5, not network enforceable) which represents the ”high-demand” cutoff threshold for when to burn fees (under the threshold) or when to inflate the fees in the rewards (above the threshold). </p>

<p>This means the monetary base can expand (inflate) slightly to accommodate demand for Syscoin services and contract (deflate) when there are blocks that fall under the threshold. The fees that are being burned or inflated are not the transaction fees, which are always paid to miners separately from the block reward, but the Syscoin service fee, which is an additional and separate fee from the transaction fee and is dynamically adjustable from within the rates peg aliases. </p>

<p>This creates a democratic system that carries the fee rate which is capable of adjusting the monetary supply based on demand. The result is a price stability mechanism similar to inflation targeting by central banks but carried out in a decentralized fashion. The mechanism design closely follows the concept of Ideal Money [Nas02] discussed at a Penn State lecture given by John Nash Jr. </p>

<p>If we apply the notion of service transaction rates to facilitate the transfer of utility between network participants we have a metric that is the first of its kind, one that denotes true demand for the currency in circulation as a public utility that is auditable and provides money transfers with transferable utility; in other words, ”quality” money which would be classified as ideal. </p>

<p>Nash alluded to using a ”public utility” such as the supply of electric energy or water as a high quality utility for inflation targeting but those are indirectly related to demand which is indirectly related to velocity of money. Syscoin provides a way to determine the highest quality utility metric possible by providing a way to calculate true money velocity directly by averaging the service transaction creation rate over the monetary base and adjusting the base to accommodate demand in order to achieve price stability.</p>

<p><b>Self-governing rate system</b>. In order to allow users to transact in currencies other than Syscoin, we developed a mechanism to validate that offers were paid in correct amounts and to the correct person. This implementation is found in the user interface as well as in the consensus code. The sysrates.peg alias stores the current exchange rates between supported currencies, other digital tokens and Syscoin. </p>

<p>It is updated dynamically based on data sourced from exchanges. Other data points such as transaction fees and arbiter fees are also stored and dynamically adjustable during network run-time to avoid having to do any soft or hard forks and having them take effect in real-time versus voluntary updates of miners and client wallets. Transaction fees are used for determining the amount of fees used when sending payments to escrow with Syscoin, Bitcoin or ZCash [Devb]. </p>

<center><img src="/images/syscoin-108.jpg" alt="syscoin"></center>

<p>Because miners may change the fee amount required to mine and relay a transaction, these variables are dynamically adjustable based on market conditions. Sysrates.peg is simply a reference implementation created to provide the marketplace with a ready-made solution. Syscoin network users also have the ability to create their own rate pegs. By allowing users to select the exchange rate alias that their offers rely on, we create a self-governing system of exchange rates and fees which adapt to the needs of the users on the network.</p>

{% include page-toc.html %}

<p><b>Quality assurance through network simulation</b>. A test suite was developed to allow the simulation of live network scenarios. Tests cover pruning, expiry and general use-cases of Syscoin services. It is an integral part of achieving a commercial quality level product in any software application. The setmocktime rpc call is used to set the time in-advance of blocks to simulate expiration of services and pruning.</p>

<h4>Alias Identities</h4>

<p>We have applied domain-name like rules to Syscoin alias identities, allowing only unique case-insensitive names. Users are now able to send coins and encrypted messages to an alias using any case formatting desired, the recipient will always be the user who owns the lowercase version of the alias.</p>

<p><b>Cryptographic security through alias identities</b>. Any Syscoin service that a user creates or updates must update an alias identity input which employs a cryptographic scheme that secures the transaction with provable ownership of those transactions. Consensus code for Aliases, Offers, Certificates, Escrows and Messages all require inputs from the Unsigned Transaction Outputs (UTXO) of an alias transaction that has been signed with the owners private key. </p>

<p>This allows for an identity to play a key role in ensuring safety, secure from impersonation or any other attempt at attacking the integrity of the relationship between the identity and services that are associated with the identity. Because the inputs need to be valid in the UTXO database, at least one network confirmation of the inputs is required to ensure that the owner is indeed the one who is the one capable of making these transactions. </p>

<p>In order to improve usability, five outputs (an arbitrary number) are created upon an alias transaction so that multiple service transactions relating to an alias identity can be made within the same block on the network. The alias consensus code ensures that the public key of the alias input to the transaction matches the public key of the alias. This validates the user who is creating the transaction to modify or update an alias identity.</p>

<p><b>Transfer of ownership</b>. Aliases may be transferred to another public key but cannot be shared between multiple aliases. At the consensus level, transfers are checked to ensure the new public key of the alias does not already exist in another alias within the Syscoin alias database.</p>

<p><b>Zero-knowledge alias authentication</b>. Alias private keys can be generated deterministically by supplying a password hashed with a generated random 256bit number known as password salt. The salt is stored within the alias constrct. </p>

<p>Upon interactive client logins, the derived key can be regenerated based upon the user supplied password and checked against the public address of the alias that is being authenticated against through an alias information lookup from within Syscoin Core. This enabled wallet-less onchain controls and authenticated spending of coins/services without requiring a transfer of credentials over any network.</p>

<p><b>Safe search</b>. When creating aliases, certificates and offers, users can choose if they wish to enable or disable safe search. Any user who is adding content that is not suitable for public searching can set their offer to private which will hide it from searches but maintain its validity on the network.</p>

<p><b>Expiration</b>. Alias expiry happens based on time. The blockchain protocol acts as a decentralized time server which stamps blocks based on height and time. All other services connect to aliases and use the alias that owns the service to detect expiry. Offers, certificates and messages expire when the alias related to it expire and escrow will expire if and only if both buyer and seller aliases involved are expired.</p>

<p><b>Multisignature identities</b>. Syscoins alias identity system is linked to a public address upon creation. This can be any type of standard address including P2SH, P2PKH or even P2SH-P2WPKH (Segregated witness address). Syscoin builds upon Bitcoin’s hardened smart-contract design by allowing aliases to link ownership to P2SH addresses which are script hashes of any script defined contract that will run through the consensus layer on the Syscoin blockchain network. </p>

<p>An example of a script-enabled smart contract that can run on Syscoin is the standard multisignature contract where multiple parties are required to sign for the completion of a transaction. By combining an identity system with multisignature capabilities we have an easy to understand system that allows users control over their identity while providing maximum flexibility in terms of real-world usage.</p>

<center><img src="/images/syscoin-109.jpg" alt="syscoin"></center>

<h4>Certificates</h4>

<p>Digital certificates on the Syscoin blockchain are useful for all kinds of applications; from storing bits of data to creating data that may be sold and automatically transferred upon purchase, all with provable ownership via the blockchain.</p>

<p><b>Public and private data</b>. Certificates, like aliases, have public and private data. Private data can be accessed by foreign aliases either through creating a multisignature alias and including other aliases or by transferring ownership of the certificate to the new owner. </p>

<p>Using a multisignature approach allows certificate owners to maintain control of their certificates while still allowing decryption of private data by other users. In this instance an owner would change the alias of the certificate to point to a new multisignature alias, then assign two aliases owned by the owner and one alias owned by another party.</p>

{% include page-toc.html %}

<p><b>Transfer of ownership</b>. Certificates can be transferred to other aliases. New owners will receive reading rights for any private encrypted data and the transfer can be configured to allow editing of certificates upon transfer.</p>

<h4>Escrow</h4>

<p>Syscoin’s integrated escrow service allows safer payments of offers by securely holding a buyer’s tokens in escrow until the terms of the sale are met and the buyer releases payment to the seller. Syscoin uses an arbiterbased system, whereby arbiters act as trusted third-parties between buyers and merchant for a sale in the decentralized marketplace. </p>

<p>An arbiter is paid based on a dynamic fee set in the rates peg for the offer that is sold. At the end of the process of completing an escrow all three parties can be rated and given feedback related to the sale. Arbiters are chosen by buyers when accepting an offer. Normally the buyer and seller would agree on an arbiter before an offer is accepted. </p>

<p>In most cases no dispute is filed and no arbiter action is needed. If a merchant does not ship goods, the arbiter refunds the buyer. If the buyer receives goods as described but does not release payment, the arbiter releases funds to the merchant. </p>

<p>The feedback and rating system should help prevent irrational behavior by aligning incentives such that it allows actors to benefit if acting honestly. Escrow works with native payments in Syscoin as well as external payments with ZEC/BTC by signing transactions inside of the Syscoin network and posting to the appropriate network once the escrow contract is complete.</p>

<p><b>Escrow support for external payments</b>. The multisignature escrow feature works well with our DirectBTC/DirectZEC integrations which allow users to sign and send raw transactions to the Bitcoin/ZCash networks and spend those coins, all implemented via the Syscoin network. In Syscoin escrow, if a user wishes to pay via Bitcoin or ZCash they would pay to a generated P2SH representing an escrow address. </p>

<p>The raw transactions to send those coins to the merchant, reseller or buyer would all be done in Syscoin. Fully signed payments are sent to the Bitcoin/ZCash networks automatically upon release or refund with no manual merchant interaction required.</p>

<h4>Offers and decentralized marketplace</h4>

<p>We have developed a marketplace where users can securely and reliably buy and sell a variety of items. Entire stores can be created directly through the marketplace to sell a user’s own products or resell others’ products for commission.</p>

<p><b>Alias rates peg</b>. The sysrates.peg alias is used by default in all offers as it is managed and updated by the Syscoin team and provides fiat and cryptocurrency price updates based on data sourced from exchanges. Setting the currency of an offer looks up the conversion rate at the time of sale and applies it in taking tokens from the consumer sending to the merchant.</p>

<p>Since the offer consensus code can look up what price peg was used and at which block height, it has the ability to detect that a correct payment was made at any given time. This means any other nodes synchronizing from a previous block will be able to deterministically detect payments and discard those that do not pay enough.</p>

<p><b>Digital sales</b>. Certificates may be sold in conjunction with offers to create sales of digital ownership. A certificate may hold private information such as codes or registration keys that are redeemed for some service by the buyer of the offer. Certificates can be automatically transferred to the buyer upon completion of sale.</p>

<p><b>Reselling with whitelists</b>. Merchants may leverage a whitelist feature to offer resellers the chance to sell their offers for a commission. This allows drop-shipping of goods and services while offering provable sales through the decentralized marketplace. The merchant who created the offer controls the whitelist and can add a discount level on a per entry basis for each reseller. If the merchant sets their offer to private, then end users must purchase the item through one of the participating reseller offers.</p>

<p><b>Feedback and rating system</b>. Escrows and offers sold through the marketplace offer a convenient way to rate and leave feedback on a per sale basis. For an escrow, one rating is accepted (a number from 1 to 5) to represent a users satisfaction level with a transaction, with 1 being the least satisfactory and 5 being completely satisfied and recommending the user to others. Ratings and feedback can be given to and from arbiters, merchants and buyers.</p>

<p><b>Multiple payment options</b>. Syscoin currently offers three payment options which can be used in combination. Syscoin, ZCash and Bitcoin are currently the three offer options for payment. Syscoin is the native token and, as acceptance of the network grows, will likely be the token of choice for payments. However, to achieve network effect Bitcoin was added which has the highest liquidity of any digital token.</p> 

<center><img src="/images/syscoin-110.jpg" alt="syscoin"></center>

<p>It allows a vast community of users to use Syscoin services with little to no cross-chain configuration. ZCash is helpful for anonymous payments and was added in the same manner as Bitcoin. The Syscoin private key of the merchant who creates an offer is the same private key used for payments in Bitcoin and ZCash. The ease of use and convenience provided by this feature makes it a key part of the potential growth and network effect for Syscoin services.</p>

<p><b>Private payments via ZCash</b>. Because Syscoin addresses are compatible with ZCash Transparent addresses we can offer ZCash support with complete multisignature compatibility; allowing for optional Syscoin escrow functionality. A merchant has the ability to select a combination of payment options from a list of SYS, BTC or ZEC. Once a buyer tries to buy the offer they will see the payment options available. Once they select ZEC, a ZCash transparent address will be generated which uses the same private key as the merchants Syscoin address.</p>

<p><b>Shipping notification system</b>. A payment acknowledgement button on escrow and offer payments allows a multi-use notification system to the buyer that either the merchant acknowledges payment and/or they are about to ship the product. Tracking and other shipment information can then be sent via the encrypted messaging system.</p>

<p><b>Marketplace moderation</b>. Marketplace moderation is done through the safe search feature which allows for three tiers of moderation which is effected by the use of a multisignature sysban alias owned by the Syscoin team. Users of the network are able to set services to safe search but if they are creating content not suitable for viewing and not using safe search then the team can moderate these such pieces of data to remove from public viewing. The sysban moderation does not disable the services from use on the network; rather, they become publicly unviewable and omitted from searches in a similar fashion to private offers.</p>

<h4>Messages</h4>

<p>Encrypted messages use asymmetric cryptography to send data to alias public keys. The identity system plays a key role in messaging because senders and recipients aliases are used to determine the keys for encryption. The sender and recipient keys are encrypted with the message so that no third parties can read the data transmission without having the private key of either of the parties involved. Multiparty encryption is also possible through the use of <a href="/bitcoin-multi-signature-fragmented-backups/">multisignature alias identities</a>.</p>

{% include page-toc.html %}

<h2 id="getting">Getting Started With Syscoin</h2>

<h4>FULLY DECENTRALIZED MARKETPLACE</h4>

<center><img src="/images/syscoin-101.jpg" alt="syscoin"></center>

<p>We have developed a state-of-the-art marketplace where you can securely and reliably buy and sell any items you wish. Entire stores can be created directly through the marketplace where you can sell your own products or re-sell others’ products for commission.</p>

<p>Like Ebay or Amazon without corporate gouging, political interference, downtime, maintenance or hefty fees.</p>

<h4>WALLET FEATURES</h4>

<center><img src="/images/syscoin-102.jpg" alt="syscoin"></center>

<p>The Syscoin Blockmarket Wallet offers all the features you need to send and receive Syscoin, keep your transaction logs in order, buy and sell items, resell others items, send encrypted messages to others and more.</p>

<p>The Syscoin Blockmarket wallet is the first and only wallet of its kind. Its cutting edge features makes it a top choice of users all over the world. There is never any downtime or service outages.</p>

<p>Syscoin Blockmarket launched on September 12th, 2017 1:23 PM Pacific Standard Time</p>

<h4>VIDEO WALK THROUGH</h4>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/WtVobhqbGsQ?list=PLz_7wNJYWp4lkdOaGCYHfiRLoQfzU8lQ9" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>

<p>They have 16 tutorial videos to help you start buying and selling your products or services quickly. </p>

<p><b>DECENTRALIZED MARKETPLACE</b> - The Syscoin wallet comes with a fully decentralized marketplace. Buy, sell, and even resell other's items. It's like Ebay or Amazon, only better.</p>

<p><b>SEND AND RECEIVE MONEY WITH EASE</b> - Syscoin's money transfer feature ensures that your money is flawlessly sent or received in a secure, reliable manner.</p>

<p><b>ALIASES</b> - Gone are the days of typing in a complex wallet address to send or receive money. Aliases simplify the process by allowing you to use an easily remembered address, like "JoesAddress"</p>

<p><b>RESELL OTHER’S PRODUCTS</b> - You can now resell any item in the Syscoin Marketplace in your own store, or allow your own items to be resold by others.</p>

<p><b>ENCRYPTED MESSAGING</b> - Send and receive encrypted messages in a simple and secure inbox and outbox service to communicate with others on the Syscoin network using Aliases or SYS addresses.</p>

<p><b>NO DOWNTIME</b> - Unlike some P2P implementations, items on the Syscoin Market are always online. It doesn't matter if your wallet is open or closed, your items will always be available, guaranteed by Syscoin's 100% uptime.</p>

<p><b>ARBITRATED ESCROW</b> - Give your buyers the confidence to know that their funds are secure with Syscoin's arbitrated escrow service. Buyers can specify a mutually agreed upon 3rd party to secure the funds while the goods/services are in transit.</p>

<p><b>DIGITAL CERTIFICATES</b> - Certificates can be used to store and transfer small documents on the Blockchain with optional encryption.</p>

<center><img src="/images/syscoin-111.jpg" alt="syscoin"></center>

<h2 id="howto">How To Get A Syscoin Wallet?</h2>

<p>Syscoin (SYS) is a digital currency that allows low-cost transactions (our fee is per transaction) and provides businesses a safe infrastructure for trading goods, assets, digital certificates, and data.</p>

<p>Syscoin’s value derived from the decentralized services it provides on the blockchain, a decentralized system of record hosted by a series of “nodes” on the Syscoin network.</p>

<p>Syscoin 1.0 was the first decentralized marketplace and a script algorithm altcoin based on Litecoin. The original whitepaper[3] included Decentralized Marketplace Creation, Decentralized Smart Contracts and Documents, Decentralized Certificate Issuance and Transfer and Decentralized Data Storage and Retrieval. Some of these services were available upon launch but only accessible through a command-line interface.</p>

<p>The original whitepaper included:</p>

<ul>
<li>Decentralized Marketplace Creation,</li>
<li>Decentralized Smart Contracts and Documents,</li>
<li>Decentralized Certificate Issuance and Transfer</li>
<li>Decentralized Data Storage and Retrieval.</li>
</ul>

<p>You are in the right place, as we at HolyTransaction decided to add this digital currency among the crypto available on our multicurrency wallet.</p>

<p>So, from now on you can store Syscoin on Holytransaction, transfer them to any other wallet, and make crypto-to-crypto transfers from/to Syscoin, and ten more cryptocurrency’s networks.</p>

<p>All HolyTransaction customers can create a new address for their own Syscoin Wallet and use the user-friendly HolyTransaction Wallet platform to send and receive transactions or to instantly convert them to any other cryptocurrency we currently support.</p>

<h4>Syscoin Wallet Features</h4>

<p>Just like Bitcoin and all the other supported digital currencies, you can now:</p>

<ul>
<li>Send Syscoin to any address, even to addresses of other cryptocurrencies with instant conversion on the fly;</li>
<li>Receive transactions;</li>
<li>Exchange Syscoin with any supported coins;</li>
<li>Make instant transactions between HT users;</li>
<li>Get real time exchange rates on the website;</li>
<li>Set OTP for additional protection.</li>
</ul>

<p>If you are not able to see your newest Syscoin Wallet, you just need to click on the “plus” button on the top right of the balance page, once you successfully login into your own wallet.</p>

<center><img src="/images/syscoin-103.jpg" alt="syscoin"></center>

<h2 id="resources">Syscoin Resources</h2>

<ul>
<li><a href="http://www.syscoin.org/">Official Website</a></li>
<li><a href="http://twitter.com/syscoin">Twitter</a></li>
<li><a href="http://facebook.com/syscoin">Facebook</a></li>
<li><a href="https://www.linkedin.com/company/9428553">LinkedIn</a></li>
<li><a href="https://plus.google.com/+SyscoinOrg/">Google Plus</a></li>
<li><a href="http://syscoin.org/feed/">Feed</a></li>
</ul>

<h2 id="buy">How To Buy Syscoin?</h2>

<p>To purchase syscoin, you need to have a wallet to store the coins. The wallets are available on the official syscoin website; then you download the wallet that is compatible with your machine.</p>

<p>You create an account which allows Syscoin exchange, you then deposit funds into your account and you can start to buy and sell syscoin. After the creation of the Block Market desktop wallet, users can use other cryptocurrencies to buy and sell syscoin coins. You can buy syscoin on various exchanges i.e. Bittrex, Poloiniex, BTC38 and TUX exchange. </p>

<p>On changelly crypto to crypto exchange, you can exchange in USD, EUR using either credit or debit cards. Livecoin uses other cryptocurrencies such as Bitcoin and Ethereum as the main mode of purchasing SYS. This is similar to other exchanges such as Bittrex and Poloniex.</p>

<h4>EXCHANGES</h4>

<ul>
<li><a href="https://bittrex.com/Market/Index?MarketName=BTC-SYS">Bittrex</a></li>
<li><a href="https://www.binance.com/trade.html?symbol=SYS_BTC">Binance</a></li>
<li><a href="https://poloniex.com/exchange#btc_sys">Poloniex</a></li>
<li><a href="https://upbit.com/exchange?code=CRIX.UPBIT.BTC-SYS">Upbit</a></li>
<li><a href="https://www.livecoin.net/?currencyPair=SYS%2FBTC">Livecoin</a></li>
<li><a href="https://www.vebitcoin.com/">VeBitcoin</a></li>
<li><a href="https://alcurex.org/index.php/crypto/market?pair=sys_btc">Alcurex</a></li>
<li><a href="https://yobit.net/en/trade/SYS/BTC">Yobit</a></li>
<li><a href="https://tradebytrade.com/">Trade By Trade</a></li>
<li><a href="https://www.aex.com/page/trade.html?trade_coin_name=SYS">AEX</a></li>
<li><a href="https://bittylicious.com/">Bittylicious</a></li>
<li><a href="https://changelly.com/">Changelly</a></li>
<li><a href="https://flyp.me/">Flyp.me</a></li>
<li><a href="https://tuxexchange.com/trade?coin=SYS&market=BTC">Tux Exchange</a></li>
</ul>

<h4>FAUCETS / SERVICES / BLOCK EXPLORERS</h4>
<ul>
<li><a href="https://chainz.cryptoid.info/sys">CryptoID – Syscoin Block Explorer</a></li>
<li><a href="http://explorer.coinpayments.net/index.php?chain=24">CoinPayments – Syscoin Block Explorer</a></li>
<li><a href="http://explorer.coinpayments.net/faucet.php?chain=24">CoinPayments – Syscoin Faucet</a></li>
<li><a href="https://coinomi.com/">Coinomi – Syscoin MultiCoin Wallet (only supports send/receive)</a></li>
<li><a href="https://holytransaction.com/">HolyTransaction – Syscoin Multicoin Web Wallet (desktop & android)</a></li>
</ul>

<h2 id="latest">Latest Syscoin News</h2>

<h4>Syscoin 3.0 Update</h4>

<center><img src="/images/syscoin-104.jpg" alt="syscoin"></center>

<p>As most people who follow the blockchain space will know, there have been several important regulatory developments over the past few months, some of which are applicable to Blockchain Foundry and Syscoin, and all of which we need to pay close attention to.</p>

<p>On March 7, the SEC released its “Statement on Potentially Unlawful Online Platforms for Trading Digital Assets”. In reference to online cryptocurrency exchanges, part of the statement reads: “A number of these platforms provide a mechanism for trading assets that meet the definition of a ‘security’ under the federal securities laws”. This has important implications for many blockchain companies such as Blockchain Foundry and cryptocurrency projects like Syscoin, who strive to meet rapidly changing compliance standards.</p>

<p>Over the past several months, Blockchain Foundry has been working with our legal team to define and strengthen our view that Syscoin is not a security. Given the recent SEC update, this analysis is more important than ever, especially as some trading platforms have been delisting tokens that have not made an effort to take compliance seriously.</p>

{% include page-toc.html %}

<p>We have been advised that because Syscoin 3.0 introduces a new level of complexity and functionality into our protocol, it is necessary to undertake a similar analysis of the Syscoin 3.0 protocol prior to release. This analysis will ensure that Syscoin remains actively listed and traded at all exchanges who are taking compliance seriously.</p>

<p>These analyses take time and we are therefore rescheduling the release date of Syscoin 3.0 to April 30th, 2018. Our original target of March 31st is no longer valid because it is of paramount importance that we remain compliant and that we do things properly at this juncture if we are going to remain a credible player in the space. We understand that we are making short term sacrifices in order to endure the long haul and compliance is the only way to do that.</p>

<center><img src="/images/syscoin-105.jpg" alt="syscoin"></center>

<p>The new release date give us more time to perform additional security and performance testing while the analysis is being completed. We thank our amazing community for its support and will continue to provide updates as they are available for the Syscoin 3.0 release.</p>

