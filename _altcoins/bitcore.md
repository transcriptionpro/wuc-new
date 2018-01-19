---
title: What Is Bitcore?
description: What Is Bitcore?
name: Bitcore
author: WeUseCoins
permalink: /what-is-bitcore/
authorurl: /
published: true
toc: 
  what: What Is Bitcore?
  getting: Getting Started With Bitcore
  howto: How To Get A Bitcore Wallet?
  resources: Bitcore Resources 
  buy: How To Buy Bitcore?
  earn: How To Earn Bitcore?
  mining: What Is Bitcore Mining?
  latest: Latest Bitcore News
img: bitcore.png
category: appcoin
summary: Bitcore is the first known cryptocurrency to use the hybrid fork method to distribute BTX to Bitcoin holders.
---

<h2 id="what">What Is Bitcore?</h2>

<p><center><script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/currency.js"></script><div class="coinmarketcap-currency-widget" data-currency="bitcore" data-base="USD" data-secondary="BTC" data-ticker="true" data-rank="true" data-marketcap="true" data-volume="true" data-stats="USD" data-statsticker="false"></div></center></p>

<p>Bitcore (BTX) is a new cryptocurrency, created in April 2017 by the talented developers of Bitsend (BSD). 
It is a hybrid fork: We created a new chain so our blockchain stays super-tiny with currently less than 400 MB in size, but we also copied over 5 million balances from the <a href="/what-is-bitcoin/">Bitcoin</a> chain to the Bitcore chain, giving 0.5 BTX : 1.0 BTC. </p>

<center><img src="/images/bitcore-103.jpg" alt="bitcore"></center>

<p>It combines the latest Bitcoin crypto technology, including SegWit, Core 0.14 and Bloom, together with a 10 MB block size, fast 2.5 minutes block times, a new lowsized blockchain (~400 MB) and completely new tech like the smooth Diff64_15 difficulty algorithm and the GPU-mining algorithm Timetravel10. Total coin supply, the halving schedule and the <a href="/video-qa-scaling-and-the-block-size-debate/">actual block reward</a> are similar to Bitcoin. </p>

{% include page-toc.html %}

<p>The low blockchain size is a result of Bitcore not beeing a fork of Bitcoin like Bitcoin Cash or Bitcoin Gold. Instead it uses a new blockchain which makes use of the genuine hybrid fork method. </p>

<h4>Hybrid Fork</h4>

<p>Bitcore is the first known cryptocurrency to use the hybrid fork method to distribute BTX to Bitcoin holders. </p>

<p>Instead of forking Bitcoin at a specific block and copying the blockchain, Bitcore created a new coin with an empty blockchain. On the 2nd of November 2017 a snapshot of the Bitcoin blockchain was created and in the following days approx. 5 000 000 transactions were created to fill all <a href="/public-private-keys-entropy-bitcoin-security/">addresses (public keys)</a> on the Bitcore blockchain, that had funds of 0.01 BTC or above on the Bitcoin chain. The funding ratio is 0.5 BTX : 1.0 BTC. </p>

<h4>Is Bitcore A Bitcoin Fork?</h4>

<p>No, Bitcore is completely new cryptocurrency with a new blockchain but it uses a technique called hybrid fork. See above for details. </p>

<p>Some of the basic source code for B3 was written by the talented dev Christian. However this was a side-job as an external programmer, there has never been an affiliation by the Bitcore team or by Chris with B3. Everything regarding B3 is now the full responsibility of the B3 team. </p>

<p>Bitcloud is a masternode coin, which is continuing to receive constant updates from Christian. However most members of Bitcore are not involved in BTDX. </p>

<p>Bitsend is a cryptocurrency with a network being sustained by both miners and masternodes. To allow reaching their full potential in the future, Bitsend BSD, together with Bitcore BTX are receiving the main attention from developers and the support team. </p>

<center><img src="/images/bitcore-104.jpg" alt="bitcore"></center>

<p>This is a direct result of the positive responses both projects continue to receive from the community. </p>

<p>Airdrops are available for everyone that has at least 1.0 BTX in a registered Bitcore address. They happen every Monday, the snapshot for them is usually taken between 0:00 am and 24:00 Berlin time. Make sure to have your funds in your wallet during that time frame. </p>

<p>To be totally sure you will get the airdrop only move your coins after you received your airdrop. An announcement will be made in the bitcointalk forum, if the snapshot for the current airdrop is done. </p>

<p>Bitcore (BTX) is a new cryptocurrency born out of the SegWit versus Blockchain Unlimited debate offering a radical approach:</p>

<p>It combines the base ideas of both sides, implementing 20 MB blocks with SegWit already activated.</p>

<p>On top of that other new techs are already implented like Bloom and a ASIC-resistant <a href="/video-mining-bitcoin-and-genesis-mining/">mining algorithm</a>.</p>

<p>It was released and is currently worked on by the talented devoloppers of Bitsend.</p>

<p>If you are a holder of Bitcoin, you can claim your BTX for free, 1:1 according to your BTC holdings!</p>

<p>The idea is that BTX has basically the same specifications as BTC, meaning 16M coins in current circulation, 21M maximum in about 100 years, 10 minute block times BUT offering some great tech advantages while maintaining low transaction fees.</p>

<h4>Specs</h4>

<ul>
<li>BitCore BTX</li>
<li>21 M coins max. cap</li>
<li>10 min blocktime</li>
<li>halving from BTC Block 462987 = BTX Block 1</li>
<li>Segwit and Bloom online<br/>
...https://bitcoin.org/en/version-history<br/>
...https://bitcoin.org/en/release/v0.14.0</li>
<li>Core 0.14</li>
<li>20 MB Blocksize</li>
<li>the proved retarget system from BitSend - DK3</li>
<li>Algo Timetravel10</li>
<li>halving interval BTC 1:1 BTX starts with 12.5 BTC per block</li>
</ul>

<h2 id="getting">Getting Started With Bitcore</h2>

<p>Bitcore is a full bitcoin node — your apps run directly on the peer-to-peer network. For wallet application development, additional indexes have been added into Bitcoin for querying address balances, transaction history, and unspent outputs.</p>

<h4>OPEN SOURCE</h4>

<p>Bitcore is 100% open source, powered by the time-tested and battle-hardened Bitcore Library.</p>

<p>Apps built on Bitcore benefit from the extensive testing and review of dozens of bitcoin companies and community contributors.</p>

<h4>FULL-FEATURED & EXTENSIBLE</h4>

<p>Bitcore provides a powerful blockchain API and the Insight blockchain explorer, right out of the box.</p>

<p>A modular, service-based architecture makes Bitcore a perfect platform for enterprise applications.</p>

<h4>BUILT ON BITCOIND</h4>

<p>To build reliable bitcoin and blockchain-based applications, compatibility with Bitcoin is essential.</p>

<p>Bitcore uses the source code of Bitcoin directly, so accidental chain forks are a thing of the past.</p>

<h4>How To Start With?</h4>

<p>Install Bitcore with NPM</p>

<p>You'll need to have Node.js and ZeroMQ dependencies installed, and be running as a user without root privileges. For more detailed info, check out our expanded guide.</p>

<p><code>npm install -g bitcore</code></p>

<p>Start your node</p>

<p>Once you install Bitcore, the bitcored command will be available in your terminal. Run it to start your node.</p>

<p><code>bitcored</code></p>

<p>Open Insight</p>

<p>Your Bitcore node is now connecting to the peer-to-peer network and downloading the blockchain.</p>

<p>You can watch the download progress by opening Insight, the bundled blockchain explorer, in a web browser.</p>

<p><code>open http://localhost:3001/insight/</code></p>

<p>Create a Transaction</p>

<p><code>var bitcore = require('bitcore');</code></p>
<p><code>var transaction = new bitcore.Transaction();</code></p>
<p><code>var transaction.from(unspent).to(address, amount);</code></p>
<p><code>transaction.sign(privateKey);</code></p>

<h4>Applications</h4>
<ul>
<li><a href="https://github.com/bitpay/bitcore-node">Node</a> - A full node with extended capabilities using Bitcoin Core</li>
<li><a href="https://github.com/bitpay/insight-api">Insight API</a> - A blockchain explorer HTTP API</li>
<li><a href="https://github.com/bitpay/insight">Insight UI</a> - A blockchain explorer web user interface</li>
<li><a href="https://github.com/bitpay/bitcore-wallet-service">Wallet Service</a> - A multisig HD service for wallets</li>
<li><a href="https://github.com/bitpay/bitcore-wallet-client">Wallet Client</a> - A client for the wallet service</li>
<li><a href="https://github.com/bitpay/bitcore-wallet">CLI Wallet</a> - A command-line based wallet client</li>
<li><a href="https://github.com/bitpay/angular-bitcore-wallet-client">Angular Wallet Client</a> - An Angular based wallet client</li>
<li><a href="https://github.com/bitpay/copay">Copay</a> - An easy-to-use, multiplatform, multisignature, secure bitcoin wallet</li>
</ul>

<center><img src="/images/bitcore-105.jpg" alt="bitcore"></center>

<h4>Libraries</h4>
<ul>
<li><a href="https://github.com/bitpay/bitcore-lib">Lib</a> - All of the core Bitcoin primatives including transactions, private key management and others</li>
<li><a href="https://github.com/bitpay/bitcore-payment-protocol">Payment Protocol</a> - A protocol for communication between a merchant and customer</li>
<li><a href="https://github.com/bitpay/bitcore-p2p">P2P</a> - The peer-to-peer networking protocol</li>
<li><a href="https://github.com/bitpay/bitcore-mnemonic">Mnemonic</a> - Implements mnemonic code for generating deterministic keys</li>
<li><a href="https://github.com/bitpay/bitcore-channel">Channel</a> - Micropayment channels for rapidly adjusting bitcoin transactions</li>
<li><a href="https://github.com/bitpay/bitcore-message">Message</a> - Bitcoin message verification and signing</li>
<li><a href="https://github.com/bitpay/bitcore-ecies">ECIES</a> - Uses ECIES symmetric key negotiation from public keys to encrypt arbitrarily long data streams.</li>
</ul>

<h2 id="howto">How To Get A Bitcore Wallet?</h2>

<p>The latest open-source Bitcoin project, Bitcore has been launched to make it easier than ever to develop apps that interact with the real Bitcoin network. Bitcore is a complete, native interface to the Bitcoin network, providing a pure and powerful core for your Bitcoin project.</p>

<p>Designed by BitPay, Bitcore has been launched in order to encourage developers to build software that directly interfaces with the <a href="/video-how-bitcoin-works/">Bitcoin network</a>. As a powerful peer-to-peer network, Bitcoin is the next generation of financial technology; and because of the decentralized nature of the network, developers must be resilient and reliable, which makes open-source projects pivotal to forward progress. </p>

{% include page-toc.html %}

<p>According to bitcore.io, “Bitcore unchains developers from fallible, centralized API’s, and provides the tools to interact with the real Bitcoin network.”In the eyes of developers contemplating new Bitcoin projects, utilizing proprietary or centralized APIs hosted by closed software makes innovation very difficult. </p>

<p>In contrast, Bitcore’s open-source model will drive continued development and implementation of Bitcoin applications and services.Bitcore is an open-source JavaScript library that has the capability of doing anything imaginable with the Bitcoin protocol; and is designed to run server-side on node.js or client side within a web browser. </p>

<p>Bitcore is able to interact with a trusted Bitcoin node, such as a bitcoind instance. Bitcore was created from an internal fork of Stefan Thomas’ bitcoinjs project, which many other Bitcoin companies and projects have used. In order to ensure the sufficient out-of-the-box capability and to attract developers to begin using Bitcore, it was decided to make the fork open-source.The launch of Bitcore was supported by an initial project called Insight, which expressed the platform’s usability in real Bitcoin projects. </p>

<p>Insight is a simple block chain explorer and is an example of the benefits and open-source technology behind Bitcore.Bitcore can be installed from npm with class-like idioms available via Classtool. Examples of the extensive uses of Bitcore can be found at bitcore.io and on GitHub. </p>

<center><img src="/images/bitcore-107.jpg" alt="bitcore"></center>

<p>There are several projects currently underway including Bitcoin address validation, block and transaction monitoring, live block chain exploration, creating and sending a transaction through P2P, parsing a script, consuming bitcoind RPC - the list is expanding daily as more developers get involved.According to bitcore.io, “BitPay’s Bitcore is still under heavy development and is not yet ready for “drop-in” production use.” </p>

<p>However, the nature of open-source makes it possible for anyone, whether developer or not, to submit security issues along with bug fixes, ideas for improvement and code optimization.Bitcore will help drive the creativity and continued development of Bitcoin and its community of innovative individuals. </p>

<p>By interacting with the real Bitcoin network, developers will be able to actively create Bitcoin projects that are unique to their requirements, and share them with the Bitcore community. Bitcore takes a collaborative approach to developing Bitcoin projects and ideas, and is the first platform that has the ability to interact with the real Bitcoin network. </p>

<h4>Running a Wallet Service</h4>

<p>The purpose of this tutorial is to show how to setup the Wallet Service. The Wallet Service is the backend for wallets such as BitPay's Copay Multisignature Wallet. The wallet service is very much like the backend for traditional SPV (Simplified Payment Verification) wallets except that the wallet service is much more feature-full. It's recommended to be familiar with running a Bitcore node running before starting this tutorial, please see the Run a Full Node guide for details.</p>

<h4>Installing MongoDB</h4>

<p>MongoDB is the database for the Bitcore Wallet Service and is the main dependency outside of the Node.js modules. Follow the installation instructions detailed at the MongoDB website, and/or follow details below.</p>

<h4>Mac OS X</h4>

<p>The easiest way to install MongoDB is to use brew:</p>

<p><code>brew install update</code></p>
<p><code>brew install mongodb</code></p>
<p><code>mkdir -p /data/db</code></p>
<p><code>sudo chown -R `whoami` /data/db #this assumes that the next step will be run by the current user</code></p>
<p><code>mongod</code></p>

<h4>Ubuntu/Debian</h4>

<p>MongoDB is included in stardard repositories and can be installed via the package manager:</p>

<p><code>sudo apt-get install mongodb</code></p>

<p>This should automatically start the mongod process.</p>

<p>Kerberos packages will also need be available for the Node.js MongoDB driver depends:</p>

<p><code>apt-get install libkrb5-dev</code></p>

<p>Add the Wallet Service to Our Node</p>

<p>Note: If you do not already have a Bitcore node setup, please see the <a href="https://bitcore.io/guides/full-node">Run a Full Node</a> guide.</p>

<p><code>cd <your node></code></p>
<p><code>bitcore install bitcore-wallet-service</code></p>
<p><code>bitcore install insight-api</code></p>

<p>Now we should be ready to launch Bitcore and test the Wallet Service:</p>

<h4>Test the Wallet Service using Copay</h4>

<p>The wallet service should be running as a service within Bitcore. You may point wallets on the same network to:</p>

<p>http://your-bitcore-node-ip:3232/bws/api</p>

<p>Don't forget to include the "http://"</p>

<center><img src="/images/bitcore-101.jpg" alt="bitcore"></center>

<h4>Example</h4>

<p>Once the wallet service is running on your computer, configure your Copay wallet as such:</p>

<p>Open the settings in your Copay wallet. Scroll to "Bitcore Wallet Service" and change this value to: http://your-bitcore-node-ip:3232/bws/api</p>

<p>Please ensure that Copay is on the same network or that you have opened ports in order to let Copay access your new Wallet Service.</p>

<p>TLS/SSL support can be enabled by adding a few things to the bitcore-node.json config.</p>

<h4>Test the Wallet Service using the Bitcore Wallet Client</h4>

<p>Install the wallet client:</p>

<p><code>npm install -g bitcore-wallet</code></p>

<p>Create a new wallet on your server:</p>

<p><code>wallet-create -h http://your-bitcore-node-ip:3232/bws/api --testnet 'myWallet' 1-1</code></p>
<p><code>[info] Generating new keys</code></p>
<p><code>* Testnet Wallet Created.</code></p>
<p><code>* Saving file /Users/myUsername/.wallet.dat</code></p>

<p>Add a new address:</p>

<p><code>wallet -h http://your-bitcore-node-ip:3232/bws/api address</code></p>
<p><code>* New Address mjfmEtkaVbZPGPLBYvznPDer2dDdcruirB</code></p>

<p>Then send funds to this address from a faucet or other wallet. After you have funds, you can see them by checking your wallet status.</p>

<p><code>wallet -h http://your-bitcore-node-ip:3232/bws/api status</code></p>
<p><code>* Wallet myWallet [testnet]: 1-of-1 complete</code></p>
<p><code>* Copayers: myUsername</code></p>
<p><code>* Balance 1,000 bit (Locked: 0 bit)</code></p>

<p>Pro-tip: If you would rather not enter the host address of your wallet server every time you run a command, try aliasing it in your bash profile by adding a line like this to your .bashrc file:</p>

<p><code>alias mywallet='wallet -h http://your-bitcore-node-ip:3232/bws/api'</code></p>

<p>You can then send your bits by using your new alias:</p>

<p><code>mywallet send mxo2iZ9e1c4piKMZGyeujk2MwgBU31W7cw 100bit</code></p>
<p><code>   * Tx created: ID 36f4 [pending] RequiredSignatures: 1</code></p>
<p><code>mywallet sign 36f4</code></p>
<p><code>   Transaction signed by you.</code></p>
<p><code>mywallet broadcast 36f4</code></p>
<p><code>   Transaction Broadcasted: TXID: fa7b45b63562c265c3a79904f1ec9c547bad5dee1508ce63628047a9097bfd0e</code></p>
<p><code>mywallet balance</code></p>
<p><code>   * Wallet balance 900 bit (Locked 0 bit)</code></p>

<h4>Adding SSL/TLS Support</h4>

<p>Create a self-signed certificate</p>

<p>These directions assume that you have openssl installed. If so, please run:</p>

<p><code>openssl</code></p>

<p>You should see an "OpenSSL>" prompt, then press Ctrl+D to exit. If you don't have OpenSSL, then install it here</p>

<p>Next, you can run the following commands to generate a self-signed certificate:</p>

<p><code>openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem</code></p>

<p>For ease of use, just type in a password that you can remember to encrypt the key (you have the option to remove it later), then fill out the form or just hit "enter" for every question. If you would like to remove the password from the key.pem that you just created, then follow the next step – otherwise skip it. If you leave the password encryption on your key, then you will need to type it in each time the <a href="/video-bitcoin-wallet-encryption/">Wallet Service</a> starts up:</p>

<center><img src="/images/bitcore-106.jpg" alt="bitcore"></center>

<p><code>openssl rsa -in key.pem -out key.nopass.pem</code></p>

<p>Now, key.pem has the password you typed in upon certificate creation and key.nopass.pem does not have any password. It would be a good idea to store key.pem and cert.pem somewhere safe on your computer.</p>

<p>Edit Your Config.</p>

<p><code>vi bitcore-node.json</code></p>

Added https options. Example:
<pre>
{
  "network": "livenet",
  "port": 3001,
  "https": true,
  "httpsOptions": {
    "key": "some-place-safe/key.nopass.pem",
    "cert": "some-place-safe/cert.pem"
  },
  "servicesConfig": {
    "bitcore-wallet-service": {
      "bwsPort": 3232
    },
    "bitcoind": {
      "datadir": "/home/user/.bitcore/data",
      "exec": "/home/user/bitcoin/src/bitcoind"
    }
  },
  "services": [
    "bitcoind",
    "bitcore-wallet-service",
    "insight-api",
    "web"
  ]
}
</pre>

<p>Notice that you can also specify which port your Wallet Service will run on (default is 3232).</p>

<p>You should now be able to run your own Wallet Service for your users. Now you can have ultimate control over your wallets without trusting random SPV nodes on the Internet.</p>

<h2 id="resources">Bitcore Resources</h2>

<ul>
<li><a href="https://bitcore.io">Official Website</a></li>
<li><a href="https://forum.bitcore.io/">Forum</a></li>
<li><a href="https://www.facebook.com/Bitcore.Coin/">Facebook</a></li>
<li><a href="https://twitter.com/bitcore_btx">Twitter</a></li>
<li><a href="https://github.com/bitpay/bitcore">Github</a></li>
</ul>

<h2 id="buy">How To Buy Bitcore?</h2>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/3o_4cxRUdqg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>

<p>Another coin that I have been following for the last week is Bitcore. It has risen dramatically and I want to show you how to claim your coins if you owned Bitcoin back in April when the fork occured.</p>

<p>Lets say you owned 1 BTC, then you are the owner of 0,5 BTX. If you have blockchain.info you should be able to claim your coins right away. </p>

<p>This is their home page and they have this really cool thing every monday until February I think when they will airdrop coins to your wallet but then you must keep your coins in your BTX wallet which you can download from their home page:</p>

<p>Here is the link to the download page for Windows:</p>

https://github.com/LIMXTEC/BitCore

<p>The last thing I want to show you before we head over to the chart is the spec sheet:</p>

<p>Comment: From this we can see that there will be as many Bitcores as there will be Bitcoins, 21 Million and the block size is bigger than Bitcoin Cash, 10 MB and the blocktime is only 2,5 minutes.</p>

<p>Now, lets head over to Coinmarketcap.com</p>

<p>Here is a screenshot from the fundamentals:</p>

<p>Comment: We can see that the market cap is around 30 million USD and that the current circulation is only 1,2 million but remember that this will increase to 21 million according to their home page.</p>

<p>Finally, lets look at the chart:</p>

<p>Comment: It is now trading at 25 dollars and it started to trade back in april but the volume has been really low until the last couple of weeks and that is when the price has shot up dramatically. Currently, it is setting an All Time High but I do think it is likely that it will fall back to the support level around 10,5-12 and that would be a very good time to get in.</p>

{% include page-toc.html %}

<p>I have also heard that it does go down in price after the airdrops on Mondays so that is something to be aware of.</p>

<h2 id="earn">How To Earn Bitcore?</h2>

<h4>Claim Bitcore coins via Wallet Airdrop</h4>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/L8Z2bO-v8_o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>

<p>A video showing how to claim your Bitcore coins via the Airdrop system. If you had a previous balance of Bitcoin you can claim free Bitcore coins using this process.</p>

<p>Minimum required Bitcoin balance at snapshot block 463619 26/04/2017 is 0.01 BTC. If you have less balance you cannot claim Bitcore.</p>

<h2 id="mining">What Is Bitcore Mining?</h2>

<p>The fierce Bitcoin scaling debate has ensued and intensified over the course of the last few months that has resulted in various solutions being proposed such as Bitcoin Cash, Segwit2x, and Bitcoin Gold. What if there was a scaling solution that already surpasses all the others? Bitcore is that solution and it is able to comfortably scale into the future while also implementing all of the latest innovations of the industry.</p>

<h4>Beginning of the Bitcore Project</h4>

<p>Bitcore was initially created on April 28th as an experimental scaling solution by the Bitsend development team that has continually provided their community with innovative and transparent development. Bitcore was started without an ICO but instead with a pre-mine that allows the development team to fairly and widely distribute coins to a rapidly growing community. </p>

<p>The pre-mine was done in the form of a Bitcoin snapshot at block 463619. All Bitcoin holders, at the time of the snapshot, can currently claim their requisite Bitcore through the official website at a 1 to 1 ratio until October 30th. The claiming process is done without exposing a user’s private key so the claiming is far more security conscious than most other projects with snapshot claiming. </p>

<p>In addition to the claiming, every Monday there are 3 percent weekly airdrops on all address balances greater than 10 BTX. The snapshot for the weekly airdrop is taken at midnight by CEST time. It is absolutely necessary to get your BTX into your QT wallet before this time to receive your weekly airdrop. The airdrop provides investors and users alike with an extra incentive to test and also hold Bitcore for the long term.</p>

<h4>Bitcore Specifications and Advantages</h4>

<p>Bitcore has a maximum total supply of 21 million coins and is mined through the ASIC resistant timetravel10 algorithm. Bitcore also has a 2.5 minute block time and the current mining reward is 3.125 BTX that matches the Bitcoin halving schedule. The real difference maker is that Bitcore has 10 MB blocks with Segwit enabled which allows for the network to handle about 17.6 billion transactions per year. </p>

<p>To put this in perspective, the Bitcore network can handle an entire years worth of Bitcoin transactions, at the current rate, in only three days. To do another comparison, Bitcore nearly matches Paypal in transactions per second which is vastly superior to any other currency at the moment. The large transaction cap is further augmented by the speed at which transaction take place. Bitcore transactions are completed within seconds and that easily makes it as fast as or even faster than all of the top currencies on the market. </p>

{% include page-toc.html %}

<p>The rapid speed and unrivaled scaling easily positions Bitcore to be able to act as an everyday currency in the future. If that was not enough innovation, Bitcore also has a unique difficulty algorithm called Bitcore 64_15. This algorithm ensures that there is no more than a 15 percent change in difficulty within a 64 block period.</p> 

<p>This innovative difficulty adjustment method prevents the block time issues that have plagued <a href="/what-is-bcash/">Bitcoin Cash</a>. The last major selling point is that the Bitcore blockchain currently is only 150 MB which means running the blockchain requires very little storage space and can even be run on cell phones.</p>

<center><img src="/images/bitcore-102.jpg" alt="bitcore"></center>

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/Dw6CuHD-Ca8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>

<p>In this video, I will demonstrate how to mine Bitcore (BTX), as simple as possible.</p>

<h2 id="latest">Latest Bitcore News</h2>

<p>The development team is almost finished with a Bitcore electrum wallet and the next task at hand will be to potentially work on integrating into coinomi’s multi-asset wallet. The team is also experimenting with cross chain atomic swaps, lightning network, Schnorr’s Signature, and even more initiatives to stay on the cutting edge of technology. To follow current development please search for and subscribe to all of our social media pages which consists of Facebook, Twitter, Telegram, Slack, QQ, Bitcointalk, and the official Bitcore webpage.</p>

