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
  support: "Current BIP 148 Support"
  what-could-happen-on-august-1-2017: "What could happen on August 1, 2017?"
  prepare: "How do I prepare?"
  wallets: "Wallets Supporting BIP 148"
  hodler: "As A Hodler (Long Term Investor)"
  trader: "As A Bitcoin Trader"
  exchanges: "Exchanges Supporting BIP 148"
  spender: "As A Spender"
  receiver: "As A Receiver"
  third-parties: "Warning About Third Parties"
  saying: "What Are Companies Saying About BIP148?"
  as-third-party: "As A Third Party"
  conclusion: "Conclusion"  
---

<p>In a few months, <b>beginning 1 August 2017</b>, there <i>may</i> be some turbulence ahead for the Bitcoin network.
<p>To help you protect your money, this guide will be frequently updated with the latest developments.
<p>Share this guide with your friends by directing them to: <b>www.uasfguide.com</b>

{% include page-toc.html %}

<h2 id="what">What is BIP 148?</h2>
<p>Bitcoin Improvement Proposal (BIP) 148 is a User Activated Soft Fork (UASF) that requires that miners signal for Segregated Witness (SegWit). SegWit readiness is signalled by miners by setting the version number of blocks mined.
<p>Signalling this bit does not mean miners support SegWit, but is a signal for readiness that miners are ready to enforce the rules.
<p>Miners are still allowed to mine blocks that do not support SegWit and are only required to not mine non-standard blocks that spend SegWit transactions along with not building on top of blocks that do this.
<p><b>Beginning 1 August 2017</b>, nodes that enforce BIP 148 will reject any block from miners that do not signal SegWit readiness, along with any block that is built on top of a block that does not signal support.

<h2 id="fork">Hard Fork v. Soft Fork</h2>
<p>Bitcoin Core developer Eric Lombrozo can help you understand the <a href="http://www.bitcoin.kn/2016/04/ciphrex-ceo-eric-lombrozo-contrasts-hard-soft-forks/">differences between a hard fork and a soft fork</a>.
<p>Many people do not fully understand the difference between hard and soft forks and the implications for the network and ecosystem.
<p>Hard forks is a permanent divergence in the the block chain, commonly occurs when non-upgraded nodes can’t validate blocks created by upgraded nodes that follow newer consensus rules.
<p>Soft forks is a temporary divergence in the block chain caused by non-upgraded nodes not following new consensus rules
<center><iframe width="700" height="394" src="https://www.youtube.com/embed/pdaXY1OOiWQ" frameborder="0" allowfullscreen=""></iframe></center>

<h2 id="why">Why BIP 148?</h2>
<p>This guide is about helping you protect your money by providing objective actionable things to do as a result of BIP 148 and not delving into the political, economic or other reasons.
<p>If you want a quick background and reasoning then this <a href="https://medium.com/@rusty_lightning/i-support-uasf-for-segregated-witness-75d9ef286fe5">piece</a> by the extremely respected open-source Linux kernal developer, Rusty Russell, who has been working on the Lighting Network should hit the spot.

<h2 id="support">Current BIP 148 Support</h2>
<p>What really matters in a UASF situation is which chain the economic actors like users, institutions, exchanges, payment processors, etc. support. There is no easy way to quantify this with a decentralized peer-to-peer network.
<p>This graph represents the total number of full nodes currently signaling BIP 148.
<p><center><img src="http://uasf.saltylemon.org/uasf_bips_all.png"></center>
<p>This graph represents the percentage of total number of full nodes currently signaling BIP 148.
<p><center><img src="http://uasf.saltylemon.org/uasf_percent_all.png"></center>

<h2 id="what-could-happen-on-august-1-2017">What could happen on 1 August 2017?</h2>
<p>If miners activate SegWit prior to 1 August 2017 then BIP 148 will not be enforced. All users of Bitcoin will remain on the same chain no matter what client they use.
<p>If miners do not activate SegWit then there may be a chain split. A chain split will mean that some users will see a different set of transactions than others.
<p>If the majority of miners enforce BIP 148 then these chain splits will be temporary and eventually all clients will see the same chain and SegWit will activate for all SegWit compatible clients (0.13.1+ for Bitcoin Core).
<p>If the majority of miners do not enforce BIP 148, users that enforce BIP 148 will diverge from users that do not enforce it.
<p>If the majority of miners do start enforcing BIP 148 at a later date then the legacy chain (without BIP 148 enforcement) may be reorganized once the BIP 148 chain has more work.
<p>The users who are running BIP 148 would be undisturbed, but users running legacy clients may see a large amount of history re-written and could lose funds.

<h2 id="prepare">How do I prepare for BIP 148 if there is a split?</h2>
<p>The most important thing you can do is perform your own network consensus by <a href="/bitcoin-core/">running a full-node</a> and <a href="/what-is-a-private-key/">creating and storing your own private keys</a>.
<p>This will put you in <b>firm control</b> of all decisions related to how you interact instead of having some third-party make those decisions for you.
<p>Additionally, it is unknown how the legacy chain or the BIP 148 chain will be labeled. This could lead to significant confusion in the marketplace so it is important for you to know exactly what you are buying or selling.

<h3 id="wallets">Wallets Supporting BIP 148</h3>
<p>A listing of wallets here does not imply any endorsement of the quality or security of the software.
<p>Put on your big boy or big girl pants and use at your own risk.
<ol>
<li>09 Apr 2017 - <a href="https://twitter.com/SamouraiWallet/status/851005717070917633"></a>Samourai Wallet</li>
<li>11 Apr 2017 - <a href="https://twitter.com/coinkite/status/851822761794260992"></a>Coinkite</li>
<li>12 Apr 2017 - <a href="https://twitter.com/CoinomiWallet/status/852130791362637825"></a>Coinomi</li>
<li>22 May 2017 - <a href="https://github.com/greenaddress/abcore/issues/40#issuecomment-303118439">GreenAddress</a></li>
</ol>

<h3 id="hodler">As a Hodler (Long Term Investor)</h3>
<p>If a chain split occurs then long term investors will have equal amounts of coins on both sides of the chain.  If a chain split is resolved then they will have their original balance on the unified chain and need to take no actions.

<h3 id="trader">As A Bitcoin Trader</h3>
<p>As a trader you will need to find an exchange that supports, preferrably, both the legacy chain and the BIP 148 chain.
<p>Traders may have an opportunity to trade coins from one side to another. If exchanges support both chains then they could sell one and buy on the other.
<p>If sufficient demand exists on the BIP 148 chain, it may encourage miners to mine on that chain, which could eliminate any split.
<p>Traders should excercise caution when trading on the legacy chain as it may be reorganized without warning. Traders should also excercise caution on the BIP 148 chain, as if interest in it is insufficient, it may not hold long term value.
<p>The following is a list of exchanges that have or will support BIP 148.
<p>The list is ordered by date of an unequivocal public announcement for support of BIP 148.

<h3 id="exchanges">Exchanges Supporting BIP 148</h3>
<p>A listing of exchanges here does not imply any endorsement of the quality or security of the service.
<p>Put on your big boy or big girl pants and use at your own risk.
<ol>
<li>11 Apr 2017 - <a href="https://twitter.com/bitrefill/status/851818821946048512"></a>Bitrefill</li>
<li>12 Apr 2017 - <a href="https://twitter.com/prasosltd/status/852104011767566336"></a>Prasos</li>
<li>13 Apr 2017 - <a href="https://twitter.com/francispouliot_/status/852554864144109569"></a>Bylls</li>
<li>13 Apr 2017 - <a href="https://twitter.com/francispouliot_/status/852554864144109569"></a>Satoshi Counter</li>
<li>21 May 2017 - <a href="https://www.reddit.com/r/Bitcoin/comments/6chx7s/i_have_decided_that_my_node_will_run_bip_148_im/dhuspz3/">Vaultoro - Gold dealer</a></li>
<li>21 May 2017 - <a href="https://twitter.com/MojBitcoin/status/866308792568479745">MojBitcoin - European ATM</a></li>

</ol>

<h3 id="spender">Spending Bitcoins</h3>
<p>If you are spending Bitcoins then you should protect yourself from accidentally spending on both chains.  Since many transactions are valid on both chains, the same transaction could be “replayed” on the other chain, thus making it you spend on the other side as well.
<p>Before you send a transaction, you should split your coins and be sure which chain your receiver honors.
<p>You can either use a coin splitting service or you can split your own coins by creating and broadcasting your own transactions on both chains.

<h3 id="receiver">Receiving Bitcoins</h3>
<p>If you are receiving Bitcoins then you need to pick which side of the chain you honor.
<p><b>WARNING:</b> Since the legacy chain could be re-organized then you need to evaluate this risk when you receive coins on the legacy chain.
<p>The common security practice is to wait at least six confirmations before relying on a transaction or block.
<p>If there is a chain split then users should excercise extreme caution and closely monitor the split along with requiring more confirmations because the security of the chain may be weakened.
<p>To be extremely safe we recommend having at <b>least 100-200 confirmations</b> before you rely on the transaction or block.

<h3 id="third-parties">Storing Bitcoins with Third Parties</h3>
<p>We highly recommend you contact any third-parties to determine whether they will be supporting the legacy chain, BIP 148 or both.
<p>Be sure to get any commitments in writing so that, if needed, your lawyer will have it for any litigation. For example, when something similar happened with <a href="https://www.reddit.com/r/Bitcoin/comments/4ut2iz/coinbase_just_announced_that_they_are_pocketing/">Ethereum there was significant confusion at Coinbase</a>.
<p>If you store your coins with a third party, such as an exchange, then you should understand their policy for which chain they support.
<p>Some custodians may only honor one chain and you may not get the full value of your coins if they only honor on one side.
<p>Under the <a href="https://en.wikipedia.org/wiki/Unjust_enrichment">theory of unjust enrichment</a>, significant legal issues could be raised if third-parties are accuring benefit to themselves that should accure to the benefit of users.
<p>The <b>safest plan</b> for storing coins on August 1, 2017 is to gain control of your coins, operate your own full node<b>(s)</b> and evaluate your options after a potential chain split.


<h3 id="saying">What are companies saying about BIP148?</h3>

<ol>
<li><a href="https://twitter.com/billbarhydt/status/851855874855391232">Abra</a></li>
<li><a href="https://twitter.com/francispouliot_/status/852554864144109569">Bitcoin Embassy.io</a></li>
<li><a href="https://www.reddit.com/r/Bitcoin/comments/642n66/bitcoinremindercom_supports_bip148_and_a_fix/">Bitcoin Reminder</a></li>
<li><a href="https://news.bitcoin.com/bitfury-mines-block-signaling-uasf-segwit/">Bitfury</a></li>
<li><a href="https://bitkong.com/segwit.txt">BitKong</a></li>
<li><a href="https://twitter.com/spair/status/852160130296762369">BitPay</a></li>
<li><a href="https://twitter.com/bitrated/status/852414265134907392">Bitrated</a></li>
<li><a href="https://twitter.com/bitrefill/status/851818821946048512">Bitrefill</a></li>
<li><a href="https://bitvest.io/segwit">Bitvest</a></li>
<li><a href="https://twitter.com/blockonomics_co/status/851770427529670658">Blockonomics</a></li>
<li><a href="https://www.reddit.com/r/Bitcoin/comments/63otrp/gregory_maxwell_major_asic_manufacturer_is/dfw02tg/">Bustabit</a></li>
<li><a href="https://twitter.com/francispouliot_/status/852554864144109569">Bylls</a></li>
<li><a href="https://blog.coingate.com/2017/04/coingate-supports-segwit-and-uasf/">CoinGate</a></li>
<li><a href="https://twitter.com/coinkite/status/851822761794260992">Coinkite</a></li>
<li><a href="https://twitter.com/CoinomiWallet/status/852130791362637825">Coinomi</a></li>
<li><a href="https://freedomnode.com/bitcoin-core-support.txt">Freedom Node</a></li>
<li><a href="https://twitter.com/joinmarket/status/851177740900368385">oin Market</a>J</li>
<li><a href="https://twitter.com/csuwildcat/status/851832163792150528">Microsoft</a></li>
<li><a href="https://twitter.com/prasosltd/status/852104011767566336">Prasos</a></li>
<li><a href="https://twitter.com/SamouraiWallet/status/851005717070917633">Samourai Wallet</a></li>
<li><a href="https://twitter.com/francispouliot_/status/852554864144109569">Satoshi Counter</a></li>
<li><a href="https://twitter.com/francispouliot_/status/850474196635439105">Satoshi Portal</a></li>
<li><a href="https://twitter.com/StamperyCo/status/852097157951873025">Stampery Inc.</a></li>
<li><a href="https://twitter.com/slushcz/status/851502735736418304">Trezor</a></li>
<li><a href="https://twitter.com/Vaultoro/status/851370469018284034">Vaultoro</a></li>
<li><a href="https://pastebin.com/raw/FeNHqySX">Walltime</a></li>
<li><a href="http://srv1.yogh.io/#json:getnetworkinfo">yogh.io</a></li>
</ol>

<p>[Add your business here by <a href="https://github.com/sunnankar/wuc-new/blob/gh-pages/_posts/2017-05-21-uasf-guide.md">creating a pull request</a> (must include public announcement link).

<h3 id="as-third-party">As A Third Party</h3>
<p>The safest route would be support both chains.

<h2 id="conclusion">Conclusion</h2>
<p>If BIP 148 is successful then little to no action is needed from most users.
<p>However, around August 1, 2017 users should be cautious, especially when receiving coins.
<p>Most users will likely wait until more clear information is available.