---
title: What Is Maker?
description: What Is Maker?
name: Maker
author: WeUseCoins
permalink: /what-is-maker/
authorurl: /
published: true
toc: 
  what: What Is Maker?
  getting: Getting Started With Maker
  howto: How To Get A Maker Wallet?
  resources: Maker Resources 
  buy: How To Buy Maker?
  spend: Where To Spend Maker?
  latest: Latest Maker News
img: maker.png
category: altcoin
summary: Maker (MKR) is an Ethereum-based utility and governance token that runs on the Maker smart contract platform.
---

<h2 id="what">What Is Maker?</h2>

<p><center><script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script><div class="coinmarketcap-currency-widget" data-currency="maker" data-base="USD" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div></center></p>

<p>Maker (MKR) is an <a href="/what-is-ethereum/">Ethereum-based utility and governance token</a> that runs on the Maker smart contract platform. MKR is used to stabilize another cryptocurrency called Dai through “a dynamic system of Collateralized Debt Positions (CDPs), autonomous feedback mechanisms, and appropriately incentivized external actors.” Holders of Maker vote upon adjustments to the platform in order keep Dai pegged to the value of 1 USD, and to keep the system solvent. If the Dai fund cannot remain solvent, new MKR tokens are printed and sold to fund the Dai system.</p>

<p>Through the Maker platform, anyone can leverage Ethereum-based assets to make Dai, letting the system hold them until the debt is paid off in an equal amount of Dai. Another function of Maker is to provide leverage and liquidity for the ERC20 exchange OasisDEX, which sells Maker and Dai among other Ethereum-based tokens. </p>

<h4>History of Maker</h4>

<p>Maker was announced in August 2015 as the “first tradeable token on the Ethereum network.” It raised funds by issuing MKR tokens for BTC and ETH through its own exchange, before the launch of the Maker platform in April 2016. Project lead Rune Christensen set out to create a “centralized decentralized” bank for Ethereum, the cornerstone of which would be an asset pegged to the US dollar. </p>

{% include page-toc.html %}

<p>This asset became known as the Dai and was released in December 2017. Maker has attracted institution-scale investors, leading to hefty increases in price that gave it a multi-billion-dollar market cap only a few weeks later.</p>

<p>Popular digital assets such as <a href="/what-is-bitcoin/">Bitcoin (BTC)</a> and <a href="/what-is-ethereum/">Ether (ETH)</a> are too volatile to be used as everyday currency. The value of a bitcoin often experiences large fluctuations, rising or falling by as much as 25% in a single day and occasionally rising over 300% in a month.</p>

<p>The Dai Stablecoin is a collateral-backed cryptocurrency whose value is stable relative to the US Dollar. We believe that stable digital assets like Dai Stablecoin are essential to realizing the full potential of blockchain technology. </p>

<p>Maker is a smart contract platform on Ethereum that backs and stabilizes the value of Dai through a dynamic system of Collateralized Debt Positions (CDPs), autonomous feedback mechanisms, and appropriately incentivized external actors. </p>

<p>Maker enables anyone to leverage their Ethereum assets to generate Dai on the Maker Platform. Once generated, Dai can be used in the same manner as any other cryptocurrency: it can be freely sent to others, used as payments for goods and services, or held as long term savings. Importantly, the generation of Dai also creates the components needed for a robust <a href="/long-live-decentralized-bitcoin/">decentralized margin trading platform</a>.</p>

<h4>Collateralized Debt Position Smart Contracts</h4>

<p>Anyone who has collateral assets can leverage them to generate Dai on the Maker Platform through Maker’s unique smart contracts known as Collateralized Debt Positions.</p>

<p>CDPs hold collateral assets deposited by a user and permit this user to generate Dai, but generating also accrues debt. This debt effectively locks the deposited collateral assets inside the CDP until it is later covered by paying back an equivalent amount of Dai, at which point the owner can again withdraw their collateral . Active CDPs are always collateralized in excess, meaning that the value of the collateral is higher than the value of the debt.</p>

<center><img src="/images/maker-110.jpg" alt="maker coin"></center>

<h4>The CDP interaction process</h4>

<p><b>Step 1: Creating the CDP and depositing collateral</b> - The CDP user first sends a transaction to Maker to create the CDP, and then sends another transaction to fund it with the amount and type of collateral that will be used to generate Dai. At this point the CDP is considered collateralized.</p>

<p><b>Step 2: Generating Dai from the collateralized CDP</b> - The CDP user then sends a transaction to retrieve the amount of Dai they want from the CDP, and in return the CDP accrues an equivalent amount of debt, locking them out of access to the collateral until the outstanding debt is paid.</p>

<p><b>Step 3: Paying down the debt and Stability Fee</b> - When the user wants to retrieve their collateral, they have to pay down the debt in the CDP, plus the Stability fee that continuously accrue on the debt over time. The Stability Fee can only be paid in MKR. Once the user sends the requisite Dai and MKR to the CDP, paying down the debt and Stability Fee, the CDP becomes debt free.</p>

<p><b>Step 4: Withdrawing collateral and closing the CDP</b> - With the Debt and Stability Fee paid down, the CDP user can freely retrieve all or some of their collateral back to their wallet by sending a transaction to Maker.</p>

<h4>Single-Collateral Dai vs Multi-Collateral Dai</h4>

<p>Dai will initially launch with support for only one type of collateral, Pooled Ether. In the next 6-12 months we plan to upgrade Single-Collateral Dai to Multi-Collateral Dai. The primary difference is that it will support any number of CDP types.</p>

<h4>Pooled Ether (Temporary mechanism for Single-Collateral Dai)</h4>

<p>At first, Pooled Ether (PETH) will be the only collateral type accepted on Maker. Users who wish to open a CDP and generate Dai during the first phase of the Maker Platform need to first obtain PETH. This is done instantly and easily on the blockchain by depositing ETH into a special smart contract that pools the ETH from all users, and gives them corresponding PETH in return.</p>

<p>If there is a sudden market crash in ETH, and a CDP ends up containing more debt than the value of its collateral, the Maker Platform automatically dilutes the PETH to recapitalize the system. This means that the proportional claim of each PETH goes down.</p>

<p>After the Maker Platform is upgraded to support multiple collateral types, PETH will be removed and replaced by ETH alongside the other new collateral types.</p>

<h4>Price Stability Mechanisms</h4>

<p><b>Target Price</b> - The Dai Target Price has two primary functions on the Maker Platform: 1) It is used to calculate the collateral-to-debt ratio of a CDP, and 2) It is used to determine the value of collateral assets Dai holders receive in the case of a global settlement. The Target Price is initially denominated in USD and starts at 1, translating to a 1:1 USD soft peg.</p>

{% include page-toc.html %}

<p><b>Target Rate Feedback Mechanism </b>- In the event of severe market instability, the Target Rate Feedback Mechanism (TRFM) can be engaged. Engaging the TRFM breaks the fixed peg of Dai, but maintains the same denomination. </p>

<p>The TRFM is the automatic mechanism by which the Dai Stablecoin System adjusts the Target Rate in order to cause market forces to maintain stability of the Dai market price around the Target Price. The Target Rate determines the change of the Target Price over time, so it can act either as an incentive to hold Dai (if the Target Rate is positive) or an incentive to borrow Dai (If the Target Rate is negative). When the TRFM is not engaged the target rate is fixed at 0%, so the target price doesn’t change over time and Dai is pegged.</p>

<p>When the TRFM is engaged, both the Target Rate and the Target Price change dynamically to balance the supply and demand of Dai by automatically adjusting user incentives for generating and holding Dai. The feedback mechanism pushes the market price of Dai towards the variable Target Price, dampening its volatility and providing real-time liquidity during demand shocks.</p>

<p>With the TRFM engaged, when the market price of Dai is below the Target Price, the Target Rate increases. This causes the Target Price to increase at a higher rate, causing generation of Dai with CDPs to become more expensive. At the same time, the increased Target Rate causes the capital gains from holding Dai to increase, leading to a corresponding increase in demand for Dai. This combination of reduced supply and increased demand causes the Dai market price to increase, pushing it back up towards the Target Price.</p>

<p>The same mechanism works in reverse if the Dai market price is higher than the Target Price: the Target Rate decreases, leading to an increased demand for generating Dai and a decreased demand for holding it. This causes the Dai market price to decrease, pushing it down towards the Target Price.</p>

<p>This mechanism is a negative feedback loop: Deviation away from the Target Price in one direction increases the force in the opposite direction.</p>

<p><b>Sensitivity Parameter</b> - The TRFM’s Sensitivity Parameter is a parameter that determines the magnitude of Target Rate change in response to Dai target/market price deviation. This tunes the rate of feedback to the scale of the system. MKR voters can set the Sensitivity Parameter but when the TRFM is engaged the Target Price and the Target Rate are determined by market dynamics, and not directly controlled by MKR voters.</p>

<p>The Sensitivity Parameter is also what is used to engage or disengage the TRFM. If the Sensitivity Parameter and the Target Rate are both zero, Dai is pegged to the current Target Price.</p>

<p><b>Global Settlement</b> - Global settlement is a process that can be used as a last resort to cryptographically guarantee the Target Price to holders of Dai. It shuts down and gracefully unwinds the Maker Platform while ensuring that all users, both Dai holders and CDP users, receive the net value of assets they are entitled to. The process is fully decentralized, and MKR voters govern access to it to ensure that it is only used in case of serious emergencies. Examples of serious emergencies are long term market irrationality, hacking or security breaches, and system upgrades.</p>

<center><img src="/images/maker-111.jpg" alt="maker coin"></center>

<h4>Global Settlement: Step by Step</h4>

<p><b>Step 1: Global Settlement is activated</b> - If enough actors who have been designated as global settlers by Maker Governance believe that the system is subject to a serious attack, or if a global settlement is scheduled as part of a technical upgrade, they can active the Global Settlement function. This stops CDP creation and manipulation, and freezes the Price Feed at a fixed value that is then used to process proportional claims for all users.</p>

<p><b>Step 2: Global Settlement claims are processed</b> -  After Global Settlement has been activated, a period of time is needed to allow keepers to process the proportional claims of all Dai and CDP holders based on the fixed feed value. After this processing is done, all Dai holders and CDP holders will be able to claim a fixed amount of ETH with their Dai and CDPs.</p>

<p><b>Step 3: Dai and CDP holders claim the collateral with their Dai and CDPs</b>  - Each Dai and CDP holder can call a claim function on the Maker Platform to exchange their Dai and CDPs directly for a fixed amount of ETH that corresponds to the calculated value of their assets, based on the target price of Dai.</p>

<p>E.g. If the Dai Target Price is 1 U.S. Dollar, The ETH/USD Price is 200 and a user holds 1000 Dai when Global Settlement is activated, after the processing period they will be able to claim exactly 5 ETH from the Maker Platform. There is no time limit for when the final claim can be made.</p>

<h4>Risk Management of The Maker Platform</h4>

<p>The MKR token allows holders to vote to perform the following Risk Management actions:</p>

<ul>
<li><b>Add new CDP type:</b> Create a new CDP type with a unique set of Risk Parameters. A CDP type can either be a new type of collateral, or a new set of Risk Parameters for an existing collateral type.</li>
<li><b>Modify existing CDP types:</b> Change the Risk Parameters of one or more existing CDP types that were already added</li>
<li><b>Modify Sensitivity Parameter:</b> Change the sensitivity of the Target Rate Feedback Mechanism</li>
<li><b>Modify Target Rate:</b> Governance can change the Target Rate. In practice modifying the Target Rate will only be done in one specific circumstance: When MKR voters want to peg the price of Dai to its current Target Price. It will always be done in conjunction with modifying the Sensitivity Parameter. By setting both Sensitivity Parameter and Target Rate to 0%, the TRFM becomes disabled and the Target Price of Dai becomes pegged to its current value.</li>
<li><b>Choose the set of trusted oracles:</b> The Maker Platform derives its internal prices for collateral and the market price of Dai from a decentralized oracle infrastructure, consisting of a wide set of individual oracle nodes. MKR voters control how many nodes are in the set of trusted oracles, and who those nodes are. Up to half of the oracles can be compromised or malfunction without causing a disruption to the continued safe operation of the system</li>
<li><b>Modify Price Feed Sensitivity:</b> Change the rules that determine the largest change that the price feeds can affect on the internal price values in the system.</li>
<li><b>Choose the set of global settlers:</b> Global settlement is a crucial mechanic that allows the Maker Platform to survive attacks against the oracles or the governance process. The governance process chooses a set of global settlers and determines how many settlers are needed to activate global settlement.</li>
</ul>

<h2 id="getting">Getting Started With Maker</h2>

<h4>The Summary</h4>

<ul>
<li>1 Dai = $1</li>
<li>Maker keeps Dai at $1 using a system of collateral and price feeds. This collateral is carefully managed by the MKR token holders.</li>
<li>MKR holders act as a buyer of last resort.</li>
<li>Smart Contracts are blockchain magic.</li>
<li>Global settlement provides a final layer of safety.</li>
<li>You need stablecoins to realize the full potential of blockchain technology.</li>
<li>Maker also provides decentralized leverage, which is awesome.</li>
</ul>

<h4>How Maker Works</h4>

<p>The Maker platform operates according to the principles of a DAO, or digitally autonomous organization. This implies that a degree of artificial intelligence is used to control Maker’s ability to regulate itself and stabilize the value of the Dai. The process of stabilization also has a human element, in that a board of holders meets on a weekly basis to discuss actions to be voted upon and implemented by the network at large. These “Governance Meetings” have been in effect since the creation of Maker and are seen as largely responsible for guiding the coin towards success.</p>

{% include page-toc.html %}

<p>The Maker platform can be used by anyone to generate Dai by depositing collateral assets into the system in exchange for Dai. The assets are then released back to the holder after the debt has been paid off, plus proportional fees required to stabilize the Dai. It does this by issuing Collateralized Debt Positions through use of smart contracts that are generated using a system of dynamic risk parameters. In essence, Maker is half-AI and half-human, attempting to adapt the best qualities of both man and machine into blockchain functionality.</p>

<h4>Why Maker?</h4>

<ul>
<li>Novel, prediction/DAO platform built on top of the Ethereum blockchain</li>
<li>Long history with Ethereum, dedicated team and community</li>
<li>Provides a “decentralized bank” for Ethereum and ERC20 tokens</li>
<li>Governs the stability of USD-pegged asset, Dai</li>
<li>Holders are rewarded for proper guidance of Dai stability</li>
</ul>

<p>The most common response when someone is asked about the Maker project is: “Well it looks cool, but it’s too complicated and I don’t get it.” The following seeks to simplify how Maker works and to walk you through the system in an ELI5 fashion. I’m even going to write things like “ELI5 = explain it like I’m five,” because that’s how basic this is going to be. This is your parents’ Maker tutorial. If you’re looking for more details, technical explanations, or are just fresh out of books written in Haskell, I recommend the Purple Paper.</p>

<h4>What Product Does Maker Make?</h4>

<p>Rather than focus on what Maker is, this explanation focuses on the first product of the Maker organization. This product is called Dai.</p>

<p>Dai is type of a stablecoin. The concept of a stablecoin is fairly straight forward — it’s a token (like bitcoin and ether) that exists on a blockchain. But unlike bitcoin or ether, it has no volatility. “How can something have no volatility, volatility is relative!” Good catch. The asset that Dai is trying to be stable relative to is the U.S. Dollar. So, to summarize, one Dai equals one dollar. Dai is set to be the first working consumer-grade stablecoin.</p>

<p>Yes, and no. You’re most likely familiar with stablecoins that hold USD in bank accounts and issue tokens on a blockchain that are ‘backed’ by these dollars. I call this legally-backed crypto, or an IOU coin, because if those bank accounts should ever be frozen or if the accountants defrauded token holders, the stablecoin now becomes an IOU on whatever’s left when they eventually get the bank accounts back (if they ever regain the bank accounts). Relying on the legal system to maintain crypto-tokens inserts an unreliable middle-man into the blockchain.</p>

<p>We can do better. Enter Dai.</p>

<p>Maker’s Dai is a stablecoin that lives completely on the blockchain chain with its stability unmediated by the legal system or trusted counterparties.</p>

<p>Stablecoins are what allow us to fully realize the promise of blockchain technology. Any application which requires a low threshold of volatility to be viable on a blockchain, consumer loans for example, simply cannot be denominated in a currency which fluctuates 10–20% in a day, like bitcoin and ether. If you’re using bitcoin to send a remittance from one country to another, there’s a good chance that the price movement over the period of one block confirmation (how long it takes the blockchain to include your transaction) will be larger than the fees charged by Western Union or PayPal. </p>

<p>If you’re betting on the outcome of a presidential election on Augur and the election isn’t for six months, you don’t want to denominate that bet in ether. Most importantly, stablecoins allow decentralized exchanges (an exchange without a trusted intermediary, where users always maintain full custody their own funds) to denominate trading pairs in US dollars instead of bitcoin or ether. This makes crypto trading more accessible to the average person and puts high-profile hacks, like that of Mt. Gox and Bitfinex, behind us for good.</p>

<center><img src="/images/maker-112.jpg" alt="maker coin"></center>

<p>This is going to be the most challenging part of this tutorial. To understand how Maker creates the stability for the Dai token requires a bit of <a href="/claim-sell-bitcoin-forks/">background about blockchains</a> and specifically, ethereum. I’ll put some quick definitions next to some of the words you may not understand. If you do have this foreknowledge, that’s great and you’re going to love the elegance of the Maker system. Let’s begin:</p>

<p>Note: If you’re simply a consumer, you do not need to understand the following explanation outside of your own curiosity. If you just want to buy Dai, you’ll be able to trade it for dollars, won, bitcoin, ether, and other currencies on a variety of exchanges.</p>

<p>Dai (Maker’s stablecoin) is backed by collateral (ether to be specific). Let’s say you’re an ether holder and you would like to create Dai. Your first move would be to send your ether to a “collateralized debt position” known in shorthand as a CDP. A CDP is a type of software that runs on the blockchain, in this case the ethereum blockchain, and lives within the Maker ecosystem. This software is called a smart contract, but don’t overthink that name too much.</p>

<p>The entire Maker ecosystem is built on “smart contracts” like a CDP, the smart contract mentioned above. A blockchain lets you do things by yourself where you used to need a middleman. Much like the internet lets you share information without a middleman, blockchains let you share value without a middleman. Bitcoin was the first network to put this concept to use, its core premise being that you can send bitcoins from Point A to Point B without having to trust anyone but yourself. </p>

<p>All trust is vested in the blockchain, which isn’t controlled by anyone. Ethereum took this concept a step further and allows users to add instructions to these transfers.That’s how the smart contract was born. Now you can say: “Send my ether from Point A to Point B on this date, at this time, and with these special instructions.”</p>

<p>The core smart contract at Maker is the CDP. Let’s use an analogy to describe these. Pretend you are at the bank asking for a home equity loan. You put up your house as collateral and they give you cash as a loan in return. If the value of your house decreases, they’re going to ask you to pay the loan back. If you can’t pay the loan back, they’re going to take your house. </p>

{% include page-toc.html %}

<p>To bring this back to Maker, just replace your house with ether, the bank with a smart contract, and the loan with Dai. That’s all there is to it. You give the Maker CDP smart contract your ether and it lets you take out a loan in Dai. If the value of your ether goes below a certain threshold, you either have to pay back the smart contract as you would a bank or it will auction off your ether to the highest bidder.</p>

<p>In summary, CDPs are simply where the collateral (ether) in the Maker system is held.</p>

<p>Once your ether is in the CDP smart contract, you are able to create Dai. The amount of Dai you can create is relative to how much ether you have put into the CDP. This ratio is fixed, but can be changed over time. The amount of Dai I can create relative to the ether I put in is called the collateralization ratio.</p>

<p>Let’s say ether is worth $100 right now and the collateralization ratio is 150%. If I send 1 ether ($100) into the CDP smart contract, then I am now able to create 66 Dai. This means that, at the current value of ether, each 100 Dai that I’ve created is backed by 1.5 ether collateral. In the Maker system, you don’t lose your ether, but you also no longer control it. The ether that you sent to the CDP is stuck there until you pay back the 66 Dai (this destroys the Dai). </p>

<p>The following diagram helps to visualize how you can open and close a CDP. Try to follow along with “your wallet” as actions are performed above. This diagram is somewhat simplified. For instance, a CDP doesn’t really sit in your wallet. It also removes a couple steps that are necessary for the more advanced aspects of the system, but ultimately irrelevant to you as a Dai borrower.</p>

<center><img src="/images/maker-101.jpg" alt="maker coin"></center>

<p>If the price of ether never fluctuated, it alone would ensure Dai’s stability (and we would not need Dai in the first place). But the price of ether varies so we need to account for that.</p>

<p>By the way, if all you wanted to do was learn how to interact with the system, you can quit here!</p>

<p>There’s not much need to address what happens when ether goes up.The system becomes more collateralized and Dai becomes stronger. That’s not to say that Dai can’t become too strong, where there’s more demand for Dai than there is people willing to create it, but Maker has mechanisms that incentivize users to create more Dai if the price of Dai should trade above one dollar (see below: Target Rate Feedback Mechanism).But if ether goes down, now that can cause problems. </p>

<p>If the value of ether held as collateral is worth less than the amount of Dai it’s supposed to be backing, then Dai would not be worth one dollar and the system could collapse. Maker combats this by liquidating CDPs and auctioning off the ether inside before the value of the ether is less than the amount of Dai it is backing.</p> 

<p>Basically, if the price feed into the CDP indicates that the value of ether has gone below a certain threshold (let’s use 125% of created Dai), then the CDP is “liquidated” and the ether inside the CDP is auctioned off for Dai until there is enough Dai to pay back what was extracted from the CDP. Let’s go back to the diagram to see how this works. As before, I’ve simplified some of the steps for the sake of understanding, there are some additional features in the system that prevent various edge-case attacks.</p>

<center><img src="/images/maker-102.jpg" alt="maker coin"></center>

<p>See? Simple enough. The system liquidates your collateral and gives it away if don’t return the Dai you’ve borrowed to the CDP quickly enough. This ensures that Dai always has sufficient collateralization.</p>

<p>If you’ve been scrutinizing the system for flaws, it probably didn’t take you long to find one. It’s the possibility of a dreaded “black swan event.” It would involve a situation where the price of ether crashes well below the one-to-one collateralization ratio in a time frame too short for the system to handle. Fortunately, Maker has a solution for situations like this: MKR, or makercoin. </p>

<p>MKR is a token on the ethereum blockchain (like the rest of the Maker ecosystem) that has governance rights over the Maker smart contracts. For instance, the number used in the above examples (the collateralization rate of CDPs) is set by a vote of MKR holders. In return for regulating the system, MKR holders are rewarded with fees. There is, however, a catch to being a MKR holder. </p>

<p>They function as the buyer of last resort. Should the collateral in the system not be enough to cover the amount of Dai in existence, MKR is created and sold onto the open market in order to raise the additional collateral. </p>

<p>This provides a strong incentive for MKR holders to responsibly regulate the parameters at which CDPs can create Dai, as it will ultimately be their money on the line should the system fail, not holders of Dai. I could write a lot more about the mechanics and role of MKR, but that’s a subject for a different post.</p>

<p>Despite being developed over the course of three years by some of the best developers in the blockchain space, enduring a rigorous byte-code level audit, and having a working developer-focused stablecoin (Sai) on the mainnet for several months without incident, we all know that nothing is perfect. </p>

<p>To keep the system as secure as possible and prevent what cannot be foreseen, the Maker team has added a process called global settlement. When global settlement is triggered, the entire system freezes and all holders of Dai and CDPs are returned the underlying collateral. So, if a global settlement is triggered and I hold 100 Dai, and one ether is worth $100, I can exchange my 100 Dai directly for one ether right through a smart contract. </p>

<p>The collateral held in CDPs will be similarly released to its owners. A global settlement can be triggered by a select group of trusted individuals who hold the global settlement keys. If these signatories see something going horribly wrong, they will enter their keys initiate the process of gracefully winding down the system. “But doesn’t that make this….CENTRALIZED?!”</p>

<center><img src="/images/maker-113.jpg" alt="maker coin"></center>

<p>No, it doesn’t. The only thing a global settlement can do is give you back your collateral. It can’t steal your ether or Dai or interact with the system on your behalf. The worst case scenario in a global settlement is that you end up being exposed to the volatility of your collateral until the system is fixed or you can send it to an exchange.</p>

<p>The more savvy among you may have noticed an interesting consequence of the Dai creation process. Volatility cannot be destroyed, it can only be transferred. If we have a stable token like Dai that has been stripped of its volatility, where did it go? In the Maker system, volatility is transferred entirely to the holder of the CDP. Using our prior example, should I withdraw 66 Dai from a CDP containing one ether, I will only own that one ether if its price is above the liquidation ratio. Dai is effectively a loan on my ether.</p>

{% include page-toc.html %}

<p>This leads us to the interesting consequence: I can take the Dai that I borrowed and use it to buy more ether. By doing this, I am basically buying ether on margin. That’s right, completely decentralized leverage! Now when you trade on a decentralized exchange that has integrated with Maker, you’ll be able to bet on the price of ether with 2x, 3x, or more funds than you actually have.</p>

<h2 id="howto">How To Get A Maker Wallet?</h2>

<p>Maker is a Decentralized Autonomous Organization (DAO) that developed Dai Stablecoin System on the Ethereum blockchain.</p>

<p>A decentralized stablecoin is the required component necessary to unlock the next phase of the digital financial revolution. Maker has taken the best parts of earlier stablecoin designs and combined them into the ultimate decentralized currency: Dai (unicode symbol: )</p>

<p>The fact that Maker is a DAO means that it is possible for anyone, anywhere to become a part of Maker and help act as the backbone of the Dai economy.</p>

<p>MKR is a particularly risky asset and requires significantly more holder engagement than other assets. MKR holders are the highest authority in the Maker system - they govern the system and benefit financially when they govern it well, but they also have to foot the bill if things are mismanaged - as a group they need strong social cooperation and a vigilant attitude towards governance.</p>

<p>The biggest exchange for MKR is Oasis - a decentralized exchange that runs entirely on ethereum contracts, is fully autonomous without human control and has 0% fees. Another crucial part of the Dai Stable coin System is the CDP margin trading platform. CDPs are <a href="/video-ethereum-and-smart-contracts/">smart contracts</a> that handle the collateral assets that back the market value of outstanding Dai, while simultaneously serving as a platform for decentralized margin trading with lower costs and higher security than what is possible with current margin trading solutions.</p>

<p>The Dai stablecoin, the Oasisdex decentralized exchange, and the CDP margin trading platform combine to offer a full solution for global decentralized finance where everyone - from rural India to Wall Street - gets to benefit from the massive economies of scale that become available when global finance is done right.<p>

<p>Buying Maker (MKR) for funds from your bank requires a 2-step process. You're going to buy some BTC or ETH from an exchange that accepts deposits from a debit card or bank account, and then you're going to transfer your newly bought crypto to a marketplace that sells MKR in exchange for bitcoin or Ether.</p>

<center><img src="/images/maker-103.jpg" alt="maker coin"></center>

<center><img src="/images/maker-104.jpg" alt="maker coin"></center>

<center><img src="/images/maker-105.jpg" alt="maker coin"></center>

<h2 id="resources">Maker Resources</h2>

<ul>
<li><a href="https://makerdao.com/">Official Website</a></li>
<li><a href="https://developer.makerdao.com/">Development</a></li>
<li><a href="https://makerdao.com/whitepaper">White Paper (Overview)</a></li>
<li><a href="https://makerdao.com/purple">Purple Paper (Formal Spec)</a></li>
<li><a href="https://makerdao.com/assets/documents/Dai-Stability-Engine-Simulation.pdf">Market Dynamics Paper</a></li>
<li><a href="https://chat.makerdao.com/">Chat</a></li>
<li><a href="https://www.reddit.com/r/MakerDAO/">Subreddit</a></li>
<li><a href="https://medium.com/@MakerDAO">Blog</a></li>
<li><a href="https://soundcloud.com/makerdao">Recordings of Meetings</a></li>
<li><a href="https://makerdao.com/actions.html">Admin Multisig</a></li>
<li><a href="https://makerdao.com/pipeline-overview/">Road Map</a></li>
<li><a href="https://dai.makerdao.com/">Dai Dashboard</a></li>
<li><a href="https://coinmarketcap.com/currencies/dai/#markets">Purchase DAI</a></li>
<li><a href="https://coinmarketcap.com/currencies/maker/#markets">Purchase MKR</a></li>
<li><a href="https://mkr.tools/">Platform Data</a></li>
</ul>

<h4>Meeting Notes</h4>

<p>Governance Meeting Minutes 2017 January 8th https://forum.makerdao.com/t/governance-meeting-minutes-2016-january-8th/754/1</p>

<p>Governance Meeting Minutes 2017 January 15th https://forum.makerdao.com/t/governance-meeting-minutes-2017-january-15th/759/1</p>

<p>Governance Meeting Minutes 2017 January 22nd https://forum.makerdao.com/t/governance-meeting-minutes-2017-january-22nd/763/1</p>

<p>Governance Meeting Minutes 2017 January 29th https://forum.makerdao.com/t/governance-meeting-minutes-2017-january-29th/768/1</p>

<p>Governance Meeting Minutes 2017 February 5th https://forum.makerdao.com/t/governance-meeting-minutes-2017-february-5th/773/1</p>

<p>Governance Meeting Minutes 2107 February 12th https://forum.makerdao.com/t/governance-meeting-minutes-2107-february-12th/777/1</p>

<p>Governance Meeting Minutes 2107 February 19th https://forum.makerdao.com/t/governance-meeting-minutes-2107-february-19th/779/1</p>

<p>Governance Meeting Minutes 2107 February 26th https://forum.makerdao.com/t/governance-meeting-minutes-2107-february-26th/785/1</p>

<p>Maker Meeting Notes 2017 March 5th https://forum.makerdao.com/t/maker-meeting-notes-2017-march-5th/791/1</p>

<p>Maker Meeting Notes 2017 March 12th https://forum.makerdao.com/t/maker-meeting-notes-2017-march-12th/793/1</p>

<p>Maker Meeting Notes 2017 March 19th https://forum.makerdao.com/t/maker-meeting-notes-2017-march-19th/796/1</p>

<p>Maker Meeting Notes 2017 March 26th https://forum.makerdao.com/t/maker-meeting-notes-2017-march-26th/797/1</p>

<p>Maker Meeting Notes 2017 April 2nd https://forum.makerdao.com/t/maker-meeting-notes-2017-april-2nd/799/1</p>

<p>Maker Meeting Notes 2017 April 9th https://forum.makerdao.com/t/maker-meeting-notes-2017-april-9th/812/1</p>

<p>No Meeting 2017 April 15th</p>

<p>Maker Meeting Notes 2017 April 23rd https://forum.makerdao.com/t/maker-meeting-notes-2017-april-23rd/820</p>

<p>Maker Meeting Notes 2017 April 30th
https://forum.makerdao.com/t/maker-meeting-notes-2017-april-30th/824</p>

<p>Maker Meeting Notes 2017 May 7th
https://forum.makerdao.com/t/maker-meeting-notes-2017-may-7th/836</p>

<p>Maker Meeting Notes 2017 May 14th https://forum.makerdao.com/t/maker-meeting-notes-2017-may-14th/840</p>

<p>Maker Meeting Notes 2017 May 21st
https://forum.makerdao.com/t/maker-meeting-notes-2017-may-21st/842</p>

<p>Maker Meeting Notes 2017 May 28th
https://forum.makerdao.com/t/maker-meeting-notes-2017-may-28th/845</p>

<p>Maker Meeting Notes 2017 June 4th https://forum.makerdao.com/t/maker-meeting-notes-2017-june-4th/847/1</p>

<p>Maker Meeting Notes 2017 June 11th https://forum.makerdao.com/t/maker-meeting-notes-2017-june-11th/860</p>

<p>Maker Meeting Notes 2017 June 18th https://forum.makerdao.com/t/maker-meeting-notes-2017-june-18th/863</p>

<p>Maker Meeting Notes 2017 June 25th https://forum.makerdao.com/t/maker-meeting-notes-2017-june-25th/865</p>

<p>Maker Meeting Notes 2017 July 2nd https://forum.makerdao.com/t/maker-meeting-notes-2017-july-2nd/869</p>

<p>Maker Meeting Notes 2017 July 9th https://forum.makerdao.com/t/maker-meeting-notes-2017-july-9th/881</p>

<p>Maker Meeting Notes 2017 July 16th https://forum.makerdao.com/t/maker-meeting-notes-2017-july-16th/884</p>

<p>Maker Meeting Notes 2017 July 23rd https://forum.makerdao.com/t/maker-meeting-notes-2017-july-23rd/890</p>

<p>Maker Meeting Notes 2017 July 30th https://forum.makerdao.com/t/maker-meeting-notes-2017-july-30th/892</p>

<p>Maker Meeting Notes 2017 August 6th https://forum.makerdao.com/t/maker-meeting-notes-2017-august-6th/896</p>

<p>Maker Meeting Notes 2017 August 13th https://forum.makerdao.com/t/maker-meting-notes-2017-august-13th/906</p>

<p>Maker Meeting Notes 2017 August 20th https://forum.makerdao.com/t/maker-meeting-notes-2017-august-20th/911</p>

<p>Maker Meeting Notes 2017 August 27th https://forum.makerdao.com/t/maker-meeting-notes-2017-august-27th/915</p>

<p>Maker Meeting Notes 2017 September 3rd https://forum.makerdao.com/t/maker-meeting-notes-2017-september-3rd-2017/919</p>

<p>Maker Meeting Notes 2017 September 10th https://forum.makerdao.com/t/maker-meeting-notes-2017-september-10th-2017/930</p>

<p>Maker Meeting Notes 2017 September 17th https://forum.makerdao.com/t/maker-meeting-notes-2017-september-17th/932</p>

<p>Maker Meeting Notes 2017 September 24th https://forum.makerdao.com/t/maker-meeting-notes-2017-september-24th/937</p>

<p>Maker Meeting Notes 2017 October 1st https://forum.makerdao.com/t/maker-meeting-notes-2017-october-1st/944</p>

<p>Maker Meeting Notes 2017 October 8th https://forum.makerdao.com/t/maker-meeting-notes-2017-october-8th/951</p>

<p>Maker Meeting Notes 2017 October 15th https://forum.makerdao.com/t/maker-meeting-notes-2017-october-15th/955</p>

<p>Maker Meeting Notes 2017 October 22nd https://forum.makerdao.com/t/maker-meeting-notes-2017-october-22nd/959</p>

<p>Maker Meeting Notes 2017 October 29th https://forum.makerdao.com/t/maker-meeting-notes-2017-october-29th/964</p>

<p>NO MEETING 2017 November 5th</p>

<p>Maker Meeting Notes 2017 November 12th https://forum.makerdao.com/t/maker-meeting-notes-2017-november-12th/977</p>

<p>Maker Meeting Notes 2017 November 19th https://forum.makerdao.com/t/maker-meeting-notes-2017-november-19th/981</p>

<p>Maker Meeting Notes 2017 November 26th https://forum.makerdao.com/t/maker-meeting-notes-2017-november-26th/983</p>

<p>Maker Meeting Notes 2017 December 3rd https://forum.makerdao.com/t/maker-meeting-notes-2017-december-3rd/990</p>

<p>Maker Meeting Notes 2017 December 10th https://forum.makerdao.com/t/maker-meeting-notes-2017-december-10th/996</p>

<p>Maker Meeting Notes 2017 December 17th https://forum.makerdao.com/t/maker-meeting-notes-2017-december-17th/1000</p>

<p>Maker Meeting Notes 2018 January 7th https://forum.makerdao.com/t/maker-meeting-notes-2018-january-7th/1022</p>

<p>Maker Meeting Notes 2018 Januaray 14th https://forum.makerdao.com/t/maker-meeting-notes-2018-january-14th/1028</p>

<h2 id="buy">How To Buy Maker?</h2>

<p>In contrast to Dai which is a stablecoin that is suitable for payments and savings, MKR is a token that has a volatile price because of its unique supply mechanics and role on the Maker platform. MKR is a utility token, governance token and recapitalization resource of the Maker system.</p>

<center><img src="/images/maker-114.jpg" alt="maker coin"></center>

<p>There exists 1,000,000 MKR in total at the launch of Dai, with 530,000 MKR in market circulation and as of November 5th 2017 470,000 MKR still remaining in the development fund.</p>

{% include page-toc.html %}

<p>As a utility token, MKR is required for paying the fees accrued on CDPs that have been used to generate Dai in the Maker system. Only MKR can pay these fees, and when paid the MKR is burned, removing it from the supply. This means that if the adoption and demand for Dai and CDPs increases, there will be additional demand for MKR so users can pay the fees. It also means the supply will decrease as MKR is burned.</p>

<p>As a governance token, MKR is used by MKR holders to vote for the risk management and business logic of the Maker system. Risk management is crucial for the systems success and survival, and is done in practice by voting on specific risk parameters for each collateral asset and CDP type. </p>

<p>The risk parameters need to be set rigorously to correspond to the risk profile of the collateral assets used by the CDPs in the system, and determine factors such as how much extra collateral is required for generating Dai with the collateral asset, or how much Dai can be backed in total by a specific collateral asset.</p>

<p>The voting process for the governance of the system is done through continuous approval voting. This means every MKR holder can vote for any number of proposals with the MKR he holds, and can submit a new proposal, or cast or withdraw his votes at any point in time. The proposal that has the most votes from all MKR holders becomes the “top proposal” and can be activated to implement changes to the risk parameters of the system. There is a security delay after the proposal is activated, before its changes are implemented, in order to give the community enough time to react and prevent malicious proposals from damaging the system.</p>

<p>The initial governance framework for Dai risk management will be using the Sunday meetings to spread awareness around new proposals, and coordinate votes. Based on the experience learned in governing Dai we will work together in the community to come up with a holistic framework for future governance of the scale that the system will need in the long run. There will be a simple dapp available that allows any MKR holder to easily vote with their MKR by using metamask, mist or parity. More advanced features are planned for the future, such as delegating your votes to a proxy voter, and the ability to safely vote with MKR held in cold storage.</p>

<p>If MKR holders are highly competent and govern the system well, CDPs will always remain overcollateralized and there will be no threat of insolvency to the system. However mistakes or unforeseen circumstances can happen, and as a result it is possible that parts of the collateral portfolio becomes undercollateralized. When this happens the last function of the MKR token is triggered: automatic recapitalization through forced MKR dilution. </p>

<p>This means that the Maker system automatically creates new MKR tokens and sells them on the market, instantly raising money to recapitalize the shortfall of value in the system and bring it back from insolvency. This means that MKR holders are held directly accountable for their actions, since bad governance will result in their tokens becoming diluted.</p>

<center><img src="/images/maker-106.jpg" alt="maker coin"></center>

<h2 id="spend">Where To Spend Maker?</h2>

<p>Maker DAO is a decentralized autonomous organization on the <a href="/video-hard-fork-defined/">Ethereum blockchain</a> seeking to minimize the price volatility of its own stable token Dai against the IMF’s currency basket SDR. It's token, MKR is a speculative Ethereum based asset that backs the value of the dai, a stable price stable coin issued on Ethereum. Maker earns a continuous fee on all outstanding dai in return for governing the system and taking on the risk of bailouts. Maker’s income is funnelled to MKR owners through BuyBack program (Buy&Burn).</p>

<center><img src="/images/maker-107.jpg" alt="maker coin"></center>

<h2 id="latest">Latest Maker News</h2>

<h4>MKR prize winners of ETHDenver</h4>

<center><img src="/images/maker-108.jpg" alt="maker coin"></center>

<p>We here at Maker were thrilled to see such high quality projects come out of the hack at ETHDenver! In the end, we selected two great project from two great teams for our first place MKR award.</p>

<p>Congratulations and thank you to the ETHLeveragers and the Shorties for their outstanding work on the Maker platform. Both teams will be awarded 2.5 MKR.</p>

<p>The ETH leveragers created a hack that delivered on the following:</p>

<p>1) Help users calculate the leverage of a nested stack of CDPs given a price floor (e.g. 2.41x leverage given a price floor of $933).</p>

<p>2) Launch a recursive sequence of CDP opens/draws and then sells on OasisDex.</p>

<p>3) Reverse the process to liquidate the CDPs.</p>

<h4>Dai CDP User Stories</h4>

<center><img src="/images/maker-109.jpg" alt="maker coin"></center>

<p>Curious how to start engaging with CDPs? The Dai Stablecoin System allows for opportunities for both profit-seeking traders and stability-seeking holders to participate in a decentralized ecosystem. To create Dai, you send Ether to a Collateralized Debt Position (CDP) on the Maker platform. Anyone can lock their tokens up as collateral and issue Dai against them.</p>

{% include page-toc.html %}

<p>The Dai Stablecoin System, with CDP creation at its core, is a completely decentralized infrastructure. Users can interact with the system in numerous ways, without relying on any third party and without any permission. MakerDAO is just an infrastructure provider and we are excited users are finding multiple use cases for our platform.</p>

<p>Users have been creative in their reasons for creating CDPs. We heard interesting and compelling stories about users who took out and paid off car loans, repaid mortgages, paid household allowances, those who borrowed with financial interest and more.</p>



