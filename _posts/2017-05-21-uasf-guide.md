---
layout: post
title: BIP 148 - The Beginner's Guide To A User Activated Soft Fork (UASF)
description: August 1, 2017 BIP 148 will go into effect and could have serious implications for the Bitcoin community. Learn how to protect yourself and your money.
author: WeUseCoins
authorurl: /
published: true
toc:
  what: "What Is BIP 148?"
  fork: "Hard v. Soft Fork"
  why: "Why BIP 148?"
  what-could-happen-on-august-1-2017: "What could happen on August 1, 2017?"
  prepare: "How do I prepare?"
  hodler: "As A Hodler (Long Term Investor)"
  trader: "As A Bitcoin Trader"
  exchanges: "Exchanges Supporting BIP 148"
  spender: "As A Spender"
  receiver: "As A Receiver"
  third-parties: "Warning About Third Parties"
  conclusion: "Conclusion"  
---

<p>In a few months, there may be some turbulence ahead for the Bitcoin network. This guide will be frequently updated with the latest developments.

<h2 id="what">What is BIP 148?</h2>
<p>Bitcoin Improvement Proposal (BIP) 148 is a User Activated Soft Fork (UASF) that requires that miners signal for Segregated Witness (SegWit). SegWit readiness is signalled by miners by setting the version number of blocks mined.
<p>Signalling this bit does not mean miners support SegWit, but is a signal for readiness that miners are ready to enforce the rules.
<p>Miners are still allowed to mine blocks that do not support SegWit and are only required to not mine non-standard blocks that spend SegWit transactions along with not building on top of blocks that do this.
<p><b>Beginning August 1, 2017</b>, nodes that enforce BIP148 will reject any block from miners that do not signal SegWit readiness, along with any block that is built on top of a block that does not signal support.

<h2 id="fork">Hard Fork v. Soft Fork</h2>
<p>Bitcoin Core developer Eric Lombrozo can help you understand the <a href"http://www.bitcoin.kn/2016/04/ciphrex-ceo-eric-lombrozo-contrasts-hard-soft-forks/">differences between a hard fork and a soft fork</a>.
<p>Many people do not fully understand the difference between hard and soft forks and the implications for the network and ecosystem.
<p>Hard forks is a permanent divergence in the the block chain, commonly occurs when non-upgraded nodes can’t validate blocks created by upgraded nodes that follow newer consensus rules.
<p>Soft forks is a temporary divergence in the block chain caused by non-upgraded nodes not following new consensus rules
<center><iframe width="700" height="394" src="https://www.youtube.com/embed/pdaXY1OOiWQ" frameborder="0" allowfullscreen=""></iframe></center>

<h2 id="why">Why BIP 148?</h2>
<p>This guide is about helping you protect your money by providing objective actionable things to do as a result of BIP 148 and not delving into the political, economic or other reasons.
<p>If you want a quick background and reasoning then this <a href="https://medium.com/@rusty_lightning/i-support-uasf-for-segregated-witness-75d9ef286fe5">piece</a> by the extremely respected open-source Linux kernal developer, Rusty Russell, who has been working on the Lighting Network should hit the spot.

<h2 id="what-could-happen-on-august-1-2017">What could happen on August 1, 2017?</h2>
<p>If miners activate SegWit prior to August 1, 2017, BIP148 will not be enforced.  All users of Bitcoin will remain on the same chain no matter what client they use.
<p>If miners do not activate SegWit, there may be a chain split.  A chain split will mean that some users will see a different set of transactions than others.  If  the majority of miners enforce BIP148, these chain splits will be temporary and eventually all clients will see the same chain, and SegWit will activate for all SegWit compatible clients (0.13.1+ for Bitcoin Core).
<p>If the majority of miners do not enforce BIP148, users that enforce  BIP148 will diverge from users that do not enforce it.  If the majority of miners do start enforcing BIP148 at a later date, the legacy chain (without BIP148 enforcement) may be reorganized once the BIP148 chain has more work.
<p>The users who are running BIP148 would be undisturbed, but users running legacy clients may see a large amount of history re-written and could lose funds.

<h2 id="prepare">How do I prepare for BIP148 if there is a split?</h2>
<p>The most important thing you can do is perform your own network consensus by running a full-node and creating and storing your own private keys. This will put you in firm control of all decisions related to how you interact instead of having some third-party make those decisions for you.

<h3 id="hodler">As a Hodler (Long Term Investor)</h3>
<p>If a chain split occurs then long term investors will have equal amounts of coins on both sides of the chain.  If a chain split is resolved then they will have their original balance on the unified chain and need to take no actions.

<h3 id="trader">As A Bitcoin Trader</h3>
<p>As a trader you will need to find an exchange that supports, preferrably, both the legacy chain and the BIP 148 chain.
<p>Traders may have an opportunity to trade coins from one side to another.  If exchanges support both chains, then they could sell one and buy on the other.  If sufficient demand exists on the BIP148 chain, it may encourage miners to mine on that chain, which could eliminate any split.  Traders should excercise caution when trading on the legacy chain as it may be reorganized without warning.  Traders should also excercise caution on the BIP148 chain, as if interest in it is insufficient, it may not hold long term value.
<p>The following is a list of exchanges that have or will support BIP 148.
<p>The list is ordered by date of an unequivocal public announcement for support of BIP 148.
< h3 id="exchanges">Exchanges Supporting BIP 148</h3>
<ol>
<li>21 May 2017 - <a href="https://www.reddit.com/r/Bitcoin/comments/6chx7s/i_have_decided_that_my_node_will_run_bip_148_im/dhuspz3/">Vaultoro</a><li>
</ol>

<h3 id="spender">Spending Bitcoins</h3>
<p>If you are spending Bitcoins then you should protect yourself from accidentally spending on both chains.  Since many transactions are valid on both chains, the same transaction could be “replayed” on the other chain, thus making it you spend on the other side as well.
<p>Before you send a transaction, you should split your coins and be sure which chain your receiver honors.
<p>You can either use a coin splitting service or you can split your own coins by creating and broadcasting your own transactions on both chains.

<h3 id="receiver">Receiving Bitcoins</h3>
<p>If you are receiving Bitcoins then you need to pick which side of the chain you honor.
<p><b>WARNING:</b>Since the legacy chain could be re-organized then you need to evaluate this risk when you receive coins on the legacy chain.
<p>If there is a chain split then users should excercise extreme caution and closely monitor the split along with requiring more confirmations from normal six because the security of the chain may be weakened.
<p>To be extremely safe we recommend having at least 100-200 confirmations before you rely on the transaction or block.

<h3 id="third-parties">Storing Bitcoins with Third Parties</h3>
<p>If you store your coins with a third party, such as an exchange, then you should understand their policy for which chain they support.
<p>Some custodians may only honor one chain and you may not get the full value of your coins if they only honor on one side.
<p>Under the <a href="https://en.wikipedia.org/wiki/Unjust_enrichment">theory of unjust enrichment</a>, significant legal issues could be raised if third-parties are accuring benefit to themselves that should accure to the benefit of users.
<p>The <b>safest plan</b> for storing coins on August 1, 2017 is to gain control of your coins, operate your own full node<b>(s)</b> and evaluate your options after a potential chain split.

<h2 id="conclusion">Conclusion</h2>
<p>If BIP148 is successful then little to no action is needed from most users.
<p>However, around August 1, 2017 users should be cautious, especially when receiving coins.
<p>Most users will likely wait until more clear information is available.