---
layout: post
title: A Reading List - Long Live Decentralized Bitcoin
description: A Reading List - Long Live Decentralized Bitcoin
author: WeUseCoins
authorurl: /
published: true
---

<p>Newbs might not know this, but bitcoin recently came out of an intense internal drama. Between July 2015 and August 2017 bitcoin was attacked by external forces who were hoping to destroy the very properties that made bitcoin valuable in the first place. This culminated in the creation of segwit and the UASF (user activated soft fork) movement. The UASF was successful, segwit was added to bitcoin and with that the anti-decentralization side left bitcoin altogether and created their own altcoin called bcash. Bitcoin's price was $2500, soon after segwit was activated the price doubled to $5000 and continued rising until here we are today at $15000.</p>

<p>During this drama, I took time away from writing open source code to help educate and argue on reddit, twitter and other social media. I came up with a reading list for quickly copypasting things. It may be interesting today for newbs or anyone who wants a history lesson on what exactly happened during those two years when bitcoin's very existence as a decentralized low-trust currency was questioned. Now the fight has essentially been won, I try not to comment on reddit that much anymore. There's nothing left to do except wait for Lightning and similar tech to become mature (or better yet, <a href="http://lightning.network/">help code it and test it</a>)</p>

<p>In this thread you can learn about block sizes, latency, decentralization, segwit, ASICBOOST, lightning network and all the other issues that were debated endlessly for over two years. So when someone tries to get you to invest in bcash, remind them of the time they supported Bitcoin Unlimited :P</p>

<h4>Summary / The fundamental tradeoff</h4>

<p>A trip to the moon requires a rocket with multiple stages by gmaxwell (must read) https://www.reddit.com/r/Bitcoin/comments/438hx0/a_trip_to_the_moon_requires_a_rocket_with/</p>

<p>Bram Cohen, creator of bittorrent, argues against a hard fork to a larger block size https://medium.com/@bramcohen/bitcoin-s-ironic-crisis-32226a85e39f#.558vetum4</p>

<p>gmaxwell's summary of the debate https://bitcointalk.org/index.php?topic=1343716.msg13701818#msg13701818</p>

<p>Core devs please explain your vision (see luke's post which also argues that blocks are already too big) https://www.reddit.com/r/Bitcoin/comments/61yvvv/request_to_core_devs_please_explain_your_vision/</p>

<p>Mod of r/btc speaking against a hard fork https://www.reddit.com/r/btc/comments/57hd14/core_reaction_to_viabtc_this_week/d8scokm/</p>

<p>It's becoming clear to me that a lot of people don't understand how fragile bitcoin is https://www.reddit.com/r/Bitcoin/comments/59kflj/its_becoming_clear_to_me_that_a_lot_of_people/</p>

<p>Blockchain space must be costly, it can never be free https://www.reddit.com/r/Bitcoin/comments/4og24h/i_just_attended_the_distributed_trade_conference/</p>

<p>Charlie Lee with a nice analogy about the fundamental tradeoff https://medium.com/@SatoshiLite/eating-the-bitcoin-cake-fc2b4ebfb85e#.444vr8shw</p>

<p>gmaxwell on the tradeoffs https://bitcointalk.org/index.php?topic=1520693.msg15303746#msg15303746</p>

<p>jratcliff on the layering https://www.reddit.com/r/btc/comments/59upyh/segwit_the_poison_pill_for_bitcoin/d9bstuw/</p>

<h4>Scaling on-chain will destroy bitcoin's decentralization</h4>

<p>Peter Todd: How a floating blocksize limit inevitably leads towards centralization [Feb 2013] https://bitcointalk.org/index.php?topic=144895.0 mailing list https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2013-February/002176.html with discussion on reddit in Aug 2015 https://www.reddit.com/r/Bitcoin/comments/3hnvi8/just_a_little_history_lesson_for_everyone_new_the/</p>

<p>Nick Szabo's blog post on what makes bitcoin so special http://unenumerated.blogspot.com/2017/02/money-blockchains-and-social-scalability.html</p>

<p>There is academic research showing that even small (2MB) increases to the blocksize results in drastic node dropoff counts due to the non-linear increase of RAM needed. http://bravenewcoin.com/assets/Whitepapers/block-size-1.1.1.pdf</p>

<p>Reddit summary of above link. In this table, you can see it estimates a 40% drop immediately in node count with a 2MB upgrade and a 50% over 6 months. At 4mb, it becomes 75% immediately and 80% over 6 months. At 8, it becomes 90% and 95%. https://www.reddit.com/r/Bitcoin/comments/5qw2wr/a_future_led_by_bitcoin_unlimited_is_a/dd442pw/</p>

<p>Larger block sizes make centralization pressures worse (mathematical) https://petertodd.org/2016/block-publication-incentives-for-miners</p>

<p>Talk at scalingbitcoin montreal, initial blockchain synchronization puts serious constraints on any increase in the block size https://www.youtube.com/watch?v=TgjrS-BPWDQ&t=2h02m06s with transcript https://scalingbitcoin.org/transcript/montreal2015/block-synchronization-time</p>

<p>Bitcoin's P2P Network: The Soft Underbelly of Bitcoin https://www.youtube.com/watch?v=Y6kibPzbrIc someone's notes: https://gist.github.com/romyilano/5e22394857a39889a1e5 reddit discussion https://www.reddit.com/r/Bitcoin/comments/4py5df/so_f2pool_antpool_btcc_pool_are_actually_one_pool/</p>

<p>In adversarial environments blockchains dont scale https://scalingbitcoin.org/transcript/hongkong2015/in-adversarial-environments-blockchains-dont-scale</p>

<p>Why miners will not voluntarily individually produce smaller blocks https://scalingbitcoin.org/transcript/hongkong2015/why-miners-will-not-voluntarily-individually-produce-smaller-blocks</p>

<p>Hal Finney: bitcoin's blockchain can only be a settlement layer (mostly interesting because it's hal finney and its in 2010) https://www.reddit.com/r/Bitcoin/comments/3sb5nj/most_bitcoin_transactions_will_occur_between/</p>

<p>petertodd's 2013 video explaining this https://www.youtube.com/watch?v=cZp7UGgBR0I</p>

<p>luke-jr's summary https://www.reddit.com/r/Bitcoin/comments/61yvvv/request_to_core_devs_please_explain_your_vision/dficjhj/</p>

<p>Another jratcliff thread https://www.reddit.com/r/Bitcoin/comments/6lmpll/explaining_why_big_blocks_are_bad/</p>

<h4>Full blocks are not a disaster</h4>

<p>Blocks must be always full, there must always be a backlog https://medium.com/@bergealex4/bitcoin-is-unstable-without-the-block-size-size-limit-70db07070a54#.kh2vi86lr</p>

<p>Same as above, the mining gap means there must always be a backlog talk: https://www.youtube.com/watch?time_continue=2453&v=iKDC2DpzNbw transcript: https://scalingbitcoin.org/transcript/montreal2015/security-of-diminishing-block-subsidy</p>

<p>Backlogs arent that bad https://www.reddit.com/r/Bitcoin/comments/49p011/was_the_fee_event_really_so_bad_my_mind_is/</p>

<p>Examples where scarce block space causes people to use precious resources more efficiently https://www.reddit.com/r/Bitcoin/comments/4kxxvj/i_just_singlehandedly_increased_bitcoin_network/</p>

<p>https://www.reddit.com/r/Bitcoin/comments/47d4m2/why_does_coinbase_make_2_transactions_per/</p>

<p>https://www.reddit.com/r/Bitcoin/comments/53wucs/why_arent_blocks_full_yet/d7x19iv</p>

<p>Full blocks are fine https://www.reddit.com/r/Bitcoin/comments/5uld1a/misconception_full_blocks_mean_bitcoin_is_failing/</p>

<p>High miner fees imply a sustainable future for bitcoin https://www.reddit.com/r/BitcoinMarkets/comments/680tvf/fundamentals_friday_week_of_friday_april_28_2017/dgwmhl7/</p>

<p>gmaxwell on why full blocks are good https://www.reddit.com/r/Bitcoin/comments/6b57ca/full_blocks_good_or_bad/dhjxwbz/</p>

<p>The whole idea of the mempool being "filled" is wrong headed. The mempool doesn't "clog" or get stuck, or anything like that. https://www.reddit.com/r/Bitcoin/comments/7cusnx/to_the_people_still_doubting_that_this_congestion/dpssokf/</p>

<h4>Segwit</h4>

<h6>What is segwit</h6>

<p>luke-jr's longer summary https://www.reddit.com/r/Bitcoin/comments/6033h7/today_is_exactly_4_months_since_the_segwit_voting/df3tgwg/?context=1</p>

<p>Charlie Shrem's on upgrading to segwit https://twitter.com/CharlieShrem/status/842711238853513220</p>

<p>Original segwit talk at scalingbitcoin hong kong + transcript https://youtu.be/zchzn7aPQjI?t=110</p>

<p>https://scalingbitcoin.org/transcript/hongkong2015/segregated-witness-and-its-impact-on-scalability</p>

<p>Segwit is not too complex https://www.reddit.com/r/btc/comments/57vjin/segwit_is_not_great/d8vos33/</p>

<p>Segwit does not make it possible for miners to steal coins, contrary to what some people say https://www.reddit.com/r/btc/comments/5e6bt0/concerns_with_segwit_and_anyone_can_spend/daa5jat/?context=1</p>

<p>https://keepingstock.net/segwit-eli5-misinformation-faq-19908ceacf23#.r8hlzaquz</p>

<p>Segwit is required for a useful lightning network It's now known that without a malleability fix useful indefinite channels are not really possible.</p>

<p>https://www.reddit.com/r/Bitcoin/comments/5tzqtc/gentle_reminder_the_ln_doesnt_require_segwit/ddqgda7/</p>

<p>https://www.reddit.com/r/Bitcoin/comments/5tzqtc/gentle_reminder_the_ln_doesnt_require_segwit/ddqbukj/</p>

<p>https://www.reddit.com/r/Bitcoin/comments/5x2oh0/olaoluwa_osuntokun_all_active_lightning_network/deeto14/?context=3</p>

<p>Clearing up SegWit Lies and Myths: https://achow101.com/2016/04/Segwit-FUD-Clearup</p>

<p>Segwit is bigger blocks https://www.reddit.com/r/Bitcoin/comments/5pb8vs/misinformation_is_working_54_incorrectly_believe/dcpz3en/</p>

<p>Typical usage results in segwit allowing capacity equivalent to 2mb blocks https://www.reddit.com/r/Bitcoin/comments/69i2md/observe_for_yourself_segwit_allows_2_mb_blocks_in/</p>

<h6>Why is segwit being blocked</h6>

<p>Jihan Wu (head of largest bitcoin mining group) is blocking segwit because of perceived loss of income https://www.reddit.com/r/Bitcoin/comments/60mb9e/complete_high_quality_translation_of_jihans/</p>

<p>Witness discount creates aligned incentives https://segwit.org/why-a-discount-factor-of-4-why-not-2-or-8-bbcebe91721e#.h36odthq0 https://medium.com/@SegWit.co/what-is-behind-the-segwit-discount-988f29dc1edf#.sr91dg406</p>

<p>or because he wants his mining enterprise to have control over bitcoin https://www.reddit.com/r/Bitcoin/comments/6jdyk8/direct_report_of_jihan_wus_real_reason_for/</p>

<p>Segwit is being blocked because it breaks ASICBOOST, a patented optimization used by bitmain ASIC manufacturer</p>

<p>Details and discovery by gmaxwell https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2017-April/013996.html</p>

<p>Reddit thread with discussion https://www.reddit.com/r/Bitcoin/comments/63otrp/gregory_maxwell_major_asic_manufacturer_is/</p>

<p>Simplified explaination by jonny1000 https://www.reddit.com/r/Bitcoin/comments/64qq5g/attempted_explanation_of_the_alleged_asicboost/</p>

<p>http://www.mit.edu/~jlrubin/public/pdfs/Asicboost.pdf</p>

<p>https://medium.com/@jimmysong/examining-bitmains-claims-about-asicboost-1d61118c678d</p>

<p>Evidence https://www.reddit.com/r/Bitcoin/comments/63yo27/some_circumstantial_evidence_supporting_the_claim/</p>

<p>https://www.reddit.com/r/Bitcoin/comments/63vn5g/please_dont_stop_us_from_using_asicboost_which/dfxmm75/</p>

<p>https://www.reddit.com/r/Bitcoin/comments/63soe3/reverse_engineering_an_asic_is_a_significant_task/dfx9ncr/</p>

<p>Bitmain admits their chips have asicboost but they say they never used it on the network (haha a likely story) https://blog.bitmain.com/en/regarding-recent-allegations-smear-campaigns/</p>

<p>Worth $100m per year to them (also in gmaxwell's original email) https://twitter.com/petertoddbtc/status/849798529929424898</p>

<p>Other calculations show less https://medium.com/@vcorem/the-real-savings-from-asicboost-to-bitmaintech-ff265c2d305b</p>

<p>This also blocks all these other cool updates, not just segwit https://www.reddit.com/r/Bitcoin/comments/63otrp/gregory_maxwell_major_asic_manufacturer_is/dfw0ej3/</p>

<p>Summary of bad consequences of asicboost https://www.reddit.com/r/Bitcoin/comments/64qq5g/attempted_explanation_of_the_alleged_asicboost/dg4hyqk/?context=1</p>

<p>Luke's summary of the entire situation https://www.reddit.com/r/Bitcoin/comments/6ego3s/why_is_killing_asicboost_not_a_priority/diagkkb/?context=1</p>

<p>Prices goes up because now segwit looks more likely https://twitter.com/TuurDemeester/status/849846845425799168</p>

<p>Asicboost discovery made the price rise https://twitter.com/TuurDemeester/status/851520094677200901</p>

<p>A pool was caught red handed doing asicboost, by this time it seemed fairly certain that segwit would get activated so it didnt produce as much interest as earlier https://www.reddit.com/r/Bitcoin/comments/6p7lr5/1hash_pool_has_mined_2_invalid_blocks/ and https://www.reddit.com/r/Bitcoin/comments/6p95dl/interesting_1hash_pool_mined_some_invalid_blocks/ and https://twitter.com/petertoddbtc/status/889475196322811904</p>

<p>This r/btc user is outraged at the entire forum because they support Bitmain and ASICBOOST https://www.reddit.com/r/btc/comments/67t43y/dragons_den_planned_smear_campaign_of_bitmain/dgtg9l2/</p>

<p>Antbleed, turns out Bitmain can shut down all its ASICs by remote control: http://www.antbleed.com/</p>

<h6>What if segwit never activates</h6>

<p>What if segwit never activates? https://www.reddit.com/r/Bitcoin/comments/6ab8js/transaction_fees_are_now_making_btc_like_the_banks/dhdq3id/ with https://www.reddit.com/r/Bitcoin/comments/5ksu3o/blinded_bearer_certificates/ and https://www.reddit.com/r/Bitcoin/comments/4xy0fm/scaling_quickly/</p>

<h4>Lightning</h4>

<p>bitcoinmagazine's series on what lightning is and how it works https://bitcoinmagazine.com/articles/understanding-the-lightning-network-part-building-a-bidirectional-payment-channel-1464710791/ https://bitcoinmagazine.com/articles/understanding-the-lightning-network-part-creating-the-network-1465326903/ https://bitcoinmagazine.com/articles/understanding-the-lightning-network-part-completing-the-puzzle-and-closing-the-channel-1466178980/</p>

<p>The Lightning Network ELIDHDICACS (Explain Like I Don’t Have Degrees in Cryptography and Computer Science) https://letstalkbitcoin.com/blog/post/the-lightning-network-elidhdicacs</p>

<p>Ligtning will increases fees for miners, not lower them https://medium.com/lightning-resources/the-lightning-paradox-f15ce0e8e374#.erfgunumh</p>

<p>Cost-benefit analysis of lightning from the point of view of miners https://medium.com/@rusty_lightning/miners-and-bitcoin-lightning-a133cd550310#.x42rovlg8</p>

<p>Routing blog post by rusty https://medium.com/@rusty_lightning/routing-dijkstra-bellman-ford-and-bfg-7715840f004 and reddit comments https://www.reddit.com/r/Bitcoin/comments/4lzkz1/rusty_russell_on_lightning_routing_routing/</p>

<p>Lightning protocol rfc https://github.com/lightningnetwork/lightning-rfc</p>

<p>Blog post with screenshots of ln being used on testnet https://medium.com/@btc_coach/lightning-network-in-action-b18a035c955d video https://www.youtube.com/watch?v=mxGiMu4V7ns</p>

<p>Video of sending and receiving ln on testnet https://twitter.com/alexbosworth/status/844030573131706368</p>

<p>Lightning tradeoffs http://www.coindesk.com/lightning-technical-challenges-bitcoin-scalability/</p>

<p>Beer sold for testnet lightning https://www.reddit.com/r/Bitcoin/comments/62uw23/lightning_network_is_working_room77_is_accepting/ and https://twitter.com/MrHodl/status/848265171269283845</p>

<p>Lightning will result in far fewer coins being stored on third parties because it supports instant transactions https://medium.com/@thecryptoconomy/the-barely-discussed-incredible-benefit-of-the-lightning-network-4ce82c75eb58</p>

<p>jgarzik argues strongly against LN, he owns a coin tracking startup https://twitter.com/petertoddbtc/status/860826532650123264 https://twitter.com/Beautyon_/status/886128801926795264</p>

<p>luke's great debunking / answer of some misinformation questions https://www.reddit.com/r/Bitcoin/comments/6st4eq/questions_about_lightning_network/dlfap0u/</p>

<p>Lightning centralization doesnt happen https://www.reddit.com/r/Bitcoin/comments/6vzau5/reminder_bitcoins_key_strength_is_in_being/dm4ou3v/?context=1</p>

<p>roasbeef on hubs and charging fees https://twitter.com/roasbeef/status/930209165728825344 and https://twitter.com/roasbeef/status/930210145790976000</p>

<p>Immutability / Being a swiss bank in your pocket / Why doing a hard fork (especially without consensus) is damaging</p>

<p>A downside of hard forks is damaging bitcoin's immutability https://www.reddit.com/r/Bitcoin/comments/5em6vu/what_happens_if_segwit_doesnt_activate/dae1r6c/?context=3</p>

<p>Interesting analysis of miners incentives and how failure is possible, don't trust the miners for long term https://www.reddit.com/r/Bitcoin/comments/5gtew4/why_an_increased_block_size_increases_the_cost_of/daybazj/?context=2</p>

<p>waxwing on the meaning of cash and settlement https://www.reddit.com/r/Bitcoin/comments/5ei7m3/unconfirmed_transactions_60k_total_fees_14btc/dad001v/</p>

<p>maaku on the cash question https://www.reddit.com/r/Bitcoin/comments/5i5iq5/we_are_spoiled/db5luiv/?context=1</p>

<p>Digital gold funamentalists gain nothing from supporting a hard fork to larger block sizes https://www.reddit.com/r/Bitcoin/comments/5xzunq/core_please_compromise_before_we_end_up_with_bu/dem73xg/?context=1</p>

<p>Those asking for a compromise don't understand the underlying political forces https://www.reddit.com/r/Bitcoin/comments/6ef7wb/some_comments_on_the_bip148_uasf_from_the/dia236b/?context=3</p>

<p>Nobody wants a contentious hard fork actually, anti-core people got emotionally manipulated https://www.reddit.com/r/Bitcoin/comments/5sq5or/contentious_forks_vs_incremental_progress/ddip57o/</p>

<p>The hard work of the core developers has kept bitcoin scalable https://www.reddit.com/r/Bitcoin/comments/3hfgpo/an_initiative_to_bring_advanced_privacy_features/cu7mhw8?context=9</p>

<p>Recent PRs to improve bitcoin scaleability ignored by the debate https://twitter.com/jfnewbery/status/883001356168167425</p>

<p>gmaxwell against hard forks since 2013 https://bitcointalk.org/index.php?topic=140233.20</p>

<p>maaku: hard forks are really bad https://www.reddit.com/r/Bitcoin/comments/5zxjza/adam_greg_core_devs_and_big_blockers_now_is_the/df275yk/?context=2</p>

<p>Some metrics on what the market thinks of decentralization and hostile hard forks</p>

<p>The price history shows that the exchange rate drops every time a hard fork threatens: https://i.imgur.com/EVPYLR8.jpg</p>

<p>and this example from 2017 https://twitter.com/WhalePanda/status/845562763820912642</p>

<p>http://imgur.com/a/DuHAn r/btc users lose money</p>

<p>price supporting theymos' moderation https://i.imgur.com/0jZdF9h.png</p>

<p>old version https://i.imgur.com/BFTxTJl.png</p>

<p>older version https://pbs.twimg.com/media/CxqtUakUQAEmC0d.jpg</p>

<p>about 50% of nodes updated to the soft fork node quite quickly https://imgur.com/O0xboVI</p>

<p>Bitcoin Unlimited / Emergent Consensus is badly designed, changes the game theory of bitcoin</p>

<p>Bitcoin Unlimited was a proposed hard fork client, it was made with the intention to stop segwit from activating</p>

<p>A Future Led by Bitcoin Unlimited is a Centralized Future https://blog.sia.tech/a-future-led-by-bitcoin-unlimited-is-a-centralized-future-e48ab52c817a#.p1ly6hldk</p>

<p>Flexible transactions are bugged https://www.reddit.com/r/Bitcoin/comments/57tf5g/bitcoindev_bluematt_on_flexible_transactions/</p>

<p>Bugged BU software mines an invalid block, wasting 13 bitcoins or $12k</p>

<p>https://www.reddit.com/r/Bitcoin/comments/5qwtr2/bitcoincom_loses_132btc_trying_to_fork_the/</p>

<p>https://www.reddit.com/r/btc/comments/5qx18i/bitcoincom_loses_132btc_trying_to_fork_the/</p>

<p>bitcoin.com employees are moderators of r/btc https://medium.com/@WhalePanda/the-curious-relation-between-bitcoin-com-anti-segwit-propaganda-26c877249976#.vl02566k4</p>

<p>miners don't control stuff like the block size http://hackingdistributed.com/2016/01/03/time-for-bitcoin-user-voice/</p>

<p>even gavin agreed that economic majority controls things https://www.reddit.com/r/Bitcoin/comments/5ywoi9/in_2010_gavin_predicted_that_exchanges_ie_the/</p>

<p>fork clients are trying to steal bitcoin's brand and network effect, theyre no different from altcoins https://medium.com/@Coinosphere/why-bitcoin-unlimited-should-be-correctly-classified-as-an-attempted-robbery-of-bitcoin-not-a-9355d075763c#.qeaynlx5m</p>

<p>BU being active makes it easier to reverse payments, increases wasted work making the network less secure and giving an advantage to bigger miners https://www.reddit.com/r/Bitcoin/comments/5g1x84/bitcoin_unlimited_bu_median_value_of_miner_eb/</p>

<p>bitcoin unlimited takes power away from users and gives it to miners https://medium.com/@alpalpalp/bitcoin-unlimiteds-placebo-controls-6320cbc137d4#.q0dv15gd5</p>

<p>bitcoin unlimited's accepted depth https://twitter.com/tdryja/status/804770009272696832</p>

<p>BU's lying propaganda poster https://imgur.com/osrViDE</p>

<p>BU is bugged, poorly-reviewed and crashes bitcoin unlimited allegedly funded by kraken stolen coins</p>

<p>https://www.reddit.com/r/btc/comments/55ajuh/taint_analysis_on_bitcoin_stolen_from_kraken_on/</p>

<p>https://www.reddit.com/r/btc/comments/559miz/taint_analysis_on_btc_allegedly_stolen_from_kraken/</p>

<h4>Other funding stuff</h4>

<p>https://www.reddit.com/r/Bitcoin/comments/5zozmn/damning_evidence_on_how_bitcoin_unlimited_pays/</p>

<p>A serious bug in BU https://www.reddit.com/r/Bitcoin/comments/5h70s3/bitcoin_unlimited_bu_the_developers_have_realized/</p>

<p>A summary of what's wrong with BU: https://www.reddit.com/r/Bitcoin/comments/5z3wg2/jihanwu_we_will_switch_the_entire_pool_to/devak98/</p>

<p>Bitcoin Unlimited Remote Exploit Crash 14/3/2017
https://www.reddit.com/r/Bitcoin/comments/5zdkv3/bitcoin_unlimited_remote_exploit_crash/ https://www.reddit.com/r/Bitcoin/comments/5zeb76/timber/ https://www.reddit.com/r/btc/comments/5zdrru/peter_todd_bu_remote_crash_dos_wtf_bug_assert0_in/</p>

<p>BU devs calling it as disaster https://twitter.com/SooMartindale/status/841758265188966401 also r/btc deleted a thread about the exploit https://i.imgur.com/lVvFRqN.png</p>

<p>Summary of incident https://www.reddit.com/r/Bitcoin/comments/5zf97j/i_was_undecided_now_im_not/</p>

<p>More than 20 exchanges will list BTU as an altcoin</p>

<p>https://www.reddit.com/r/Bitcoin/comments/5zyg6g/bitcoin_exchanges_unveil_emergency_hard_fork/</p>

<p>Again a few days later https://www.reddit.com/r/Bitcoin/comments/60qmkt/bu_is_taking_another_shit_timberrrrrr/</p>

<h4>User Activated Soft Fork (UASF</h4>

<p>site for it, including list of businesses supporting it http://www.uasf.co/</p>

<p>luke's view

https://www.reddit.com/r/Bitcoin/comments/5zsk45/i_am_shaolinfry_author_of_the_recent_user/df1dqen/?context=3</p>

<p>threat of UASF makes the miner fall into line in litecoin</p>

<p>https://www.reddit.com/r/litecoin/comments/66omhr/litecoin_global_roundtable_resolution/dgk2thk/?context=3</p>

<p>UASF delivers the goods for vertcoin</p>

<p>https://www.reddit.com/r/Bitcoin/comments/692mi3/in_test_case_uasf_results_in_miner_consensus/dh3cm34/?context=1</p>

<p>UASF coin is more valuable https://www.reddit.com/r/Bitcoin/comments/6cgv44/a_uasf_chain_will_be_profoundly_more_valuable/</p>

<p>All the links together in one place https://www.reddit.com/r/Bitcoin/comments/6dzpew/hi_its_mkwia_again_maintainer_of_uasfbitcoin_on/</p>

<p>p2sh was a uasf https://github.com/bitcoin/bitcoin/blob/v0.6.0/src/main.cpp#L1281-L1283</p>

<p>jgarzik annoyed at the strict timeline that segwit2x has to follow because of bip148 https://twitter.com/jgarzik/status/886605836902162432</p>

<p>Committed intolerant minority https://www.reddit.com/r/Bitcoin/comments/6d7dyt/a_plea_for_rational_intolerance_extremism_and/</p>

<p>alp on the game theory of the intolerant minority https://medium.com/@alpalpalp/user-activated-soft-forks-and-the-intolerant-minority-a54e57869f57</p>

<p>The risk of UASF is less than the cost of doing nothing https://www.reddit.com/r/Bitcoin/comments/6bof7a/were_getting_to_the_point_where_a_the_cost_of_not/</p>

<p>uasf delivered the goods for bitcoin, it forced antpool and others to signal (May 2016) https://bitcoinmagazine.com/articles/antpool-will-not-run-segwit-without-block-size-increase-hard-fork-1464028753/ "When asked specifically whether Antpool would run SegWit code without a hard fork increase in the block size also included in a release of Bitcoin Core, Wu responded: “No. It is acceptable that the hard fork code is not activated, but it needs to be included in a ‘release’ of Bitcoin Core. I have made it clear about the definition of ‘release,’ which is not ‘public.’”"</p>

<p>Screenshot of peter rizun capitulating https://twitter.com/chris_belcher_/status/905231603991007232</p>

<p>Fighting off 2x HF
https://twitter.com/MrHodl/status/895089909723049984</p>

<p>https://www.reddit.com/r/Bitcoin/comments/6h612o/can_someone_explain_to_me_why_core_wont_endorse/?st=j6ic5n17&sh=cc37ee23</p>

<p>https://www.reddit.com/r/Bitcoin/comments/6smezz/segwit2x_hard_fork_is_completely_useless_its_a/?st=j6ic2aw3&sh=371418dd</p>

<p>https://www.reddit.com/r/Bitcoin/comments/6sbspv/who_exactly_is_segwit2x_catering_for_now_segwit/?st=j6ic5nic&sh=1f86cadd</p>

<p>https://medium.com/@elliotolds/lesser-known-reasons-to-keep-blocks-small-in-the-words-of-bitcoin-core-developers-44861968185e</p>

<p>b2x is most of all about firing core https://twitter.com/WhalePanda/status/912664487135760384</p>

<p>https://medium.com/@StopAndDecrypt/thats-not-bitcoin-this-is-bitcoin-95f05a6fd6c2</p>

<p>Misinformation / sockpuppets
https://www.reddit.com/r/Bitcoin/comments/6uqz6k/markets_update_bitcoin_cash_rallies_for_three/dlurbpx/</p>

<p>three year old account, only started posting today https://archive.is/3STjH</p>

<p>Why we should not hard fork after the UASF worked: https://www.reddit.com/r/Bitcoin/comments/6sl1qf/heres_why_we_should_not_hard_fork_in_a_few_months/</p>

<h4>History</h4>

<p>Good article that covers virtually all the important history https://bitcoinmagazine.com/articles/long-road-segwit-how-bitcoins-biggest-protocol-upgrade-became-reality/</p>

<p>Interesting post with some history pre-2015 https://btcmanager.com/the-long-history-of-the-fight-over-scaling-bitcoin/</p>

<p>The core scalabality roadmap + my summary from 3/2017 https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2015-December/011865.html my summary https://www.reddit.com/r/Bitcoin/comments/5xa5fa/the_core_development_scalability_roadmap/</p>

<p>History from summer 2015 https://www.reddit.com/r/Bitcoin/comments/5xg7f8/the_origins_of_the_blocksize_debate/</p>

<p>Brief reminders of the ETC situation https://www.reddit.com/r/Bitcoin/comments/6nvlgo/simple_breakdown_of_bip91_its_simply_the_miners/dkcycrz/</p>

<p>Longer writeup of ethereum's TheDAO bailout fraud https://www.reddit.com/r/ethereumfraud/comments/6bgvqv/faq_what_exactly_is_the_fraud_in_ethereum/</p>

<p>Point that the bigblocker side is only blocking segwit as a hostage https://www.reddit.com/r/BitcoinMarkets/comments/5sqhcq/daily_discussion_wednesday_february_08_2017/ddi3ctv/?context=3</p>

<p>jonny1000's recall of the history of r/bitcoin https://www.reddit.com/r/Bitcoin/comments/6s34gg/rbtc_spreading_misinformation_in_rbitcoinmarkets/dl9wkfx/</p>

<p>Misc (mostly memes)
libbitcoin's Understanding Bitcoin series (another must read) https://github.com/libbitcoin/libbitcoin/wiki/Understanding-Bitcoin</p>

<p>github commit where satoshi added the block size limit https://www.reddit.com/r/Bitcoin/comments/63859l/github_commit_where_satoshi_added_the_block_size/</p>

<p>hard fork proposals from some core devs https://bitcoinhardforkresearch.github.io/</p>

<p>blockstream hasnt taken over the entire bitcoin core project https://www.reddit.com/r/Bitcoin/comments/622bjp/bitcoin_core_blockstream/</p>

<p>blockstream is one of the good guys https://www.reddit.com/r/Bitcoin/comments/6cttkh/its_happening_blockstream_opens_liquid_sidechain/dhxu4er/</p>

<p>Forkers, we're not raising a single byte! Song lyrics by belcher https://gist.github.com/chris-belcher/7264cd6750a86f8b4a9a</p>

<p>Some stuff here along with that cool photoshopped poster https://medium.com/@jimmysong/bitcoin-realism-or-how-i-learned-to-stop-worrying-and-love-1mb-blocks-c191c35e74cb</p>

<p>Nice graphic https://twitter.com/RNR_0/status/871070843698380800</p>

<p>gmaxwell saying how he is probably responsible for the most privacy tech in bitcoin, while mike hearn screwed up privacy https://www.reddit.com/r/btc/comments/6azyme/hey_bu_wheres_your_testnet/dhiq3xo/?context=6</p>

<p>Fairly cool propaganda poster https://twitter.com/urbanarson/status/880476631583924225</p>

<p>btc tankman https://i.redd.it/gxjqenzpr27z.png https://twitter.com/DanDarkPill/status/853653168151986177</p>

<p>asicboost discovery meme https://twitter.com/allenscottoshi/status/849888189124947971</p>

<p>https://twitter.com/urbanarson/status/882020516521013250</p>

<p>gavin wanted to kill the bitcoin chain https://twitter.com/allenscottoshi/status/849888189124947971</p>

<p>stuff that r/btc believes https://www.reddit.com/r/Bitcoin/comments/6ld4a5/serious_is_the_rbtc_and_the_bu_crowd_a_joke_how/djszsqu/</p>

<p>after segwit2x NYA got agreed all the fee pressure disappeared, laurenmt found they were artificial spam https://twitter.com/i/moments/885827802775396352</p>

<p>theymos saying why victory isnt inevitable https://www.reddit.com/r/Bitcoin/comments/6lmpll/explaining_why_big_blocks_are_bad/djvxv2o/</p>

<p>with ignorant enemies like these its no wonder we won https://bitco.in/forum/threads/gold-collapsing-bitcoin-up.16/page-999 ""So, once segwit2x activates, from that moment on it will require a coordinated fork to avoid the up coming "baked in" HF. ""</p>

<p>a positive effect of bcash, it made blockchain utxo spammers move away from bitcoin https://www.reddit.com/r/btc/comments/76lv0b/cryptograffitiinfo_now_accepts_bitcoin_cash/dof38gw/</p>

<p>summary of craig wright, jihan wu and roger ver's positions https://medium.com/@HjalmarPeters/the-big-blockers-bead6027deb2</p>

<p>Why is bitcoin so strong against attack?!?! (because we're motivated and awesome) https://www.reddit.com/r/btc/comments/64wo1h/bitcoin_unlimited_is_being_blocked_by_antivirus/dg5n00x/</p>

<p>what happened to #oldjeffgarzik https://www.reddit.com/r/Bitcoin/comments/6ufv5x/a_reminder_of_some_of_jeff_garziks_greatest/</p>

<p>big blockers fully deserve to lose every last bitcoin they ever had and more https://www.reddit.com/r/BitcoinMarkets/comments/756nxf/daily_discussion_monday_october_09_2017/do5ihqi/</p>

<p>gavinandresen brainstorming how to kill bitcoin with a 51% in a nasty way https://twitter.com/btcdrak/status/843914877542567937</p>

<p>Roger Ver as bitcoin Judas https://imgur.com/a/Rf1Pi</p>

<p>A bunch of tweets and memes celebrating UASF</p>

<p>https://twitter.com/shaolinfry/status/842457019286188032 | https://twitter.com/SatoshiLite/status/888335092560441345 | https://twitter.com/btcArtGallery/status/887485162925285377 | https://twitter.com/Beautyon_/status/888109901611802624 | https://twitter.com/Excellion/status/889211512966873088 | https://twitter.com/lopp/status/888200452197801984 | https://twitter.com/AlpacaSW/status/886988980524396544 | https://twitter.com/BashCo_/status/877253729531162624 | https://twitter.com/tdryja/status/865212300361379840 | https://twitter.com/Excellion/status/871179040157179904 | https://twitter.com/TraceMayer/status/849856343074902016 | https://twitter.com/TraceMayer/status/841855022640033792 | https://fs.bitcoinmagazine.com/img/images/Screen_Shot_2017-08-18_at_01.36.47.original.png</p>
