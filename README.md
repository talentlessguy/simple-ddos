# 💀 SimpleDDoS

![Twitter](https://img.shields.io/twitter/follow/v1rtl.svg?label=twitter&style=flat-square)
![David](https://img.shields.io/david/talentlessguy/simple-ddos.svg?style=flat-square)
![Top lang](https://img.shields.io/github/languages/top/talentlessguy/simple-ddos.svg?style=flat-square)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/simple-ddos.svg?style=flat-square)

## Description

SimpleDDoS is a tiny Denial Of Service module with multi-threading support for pentesting local hosted servers.

### Don't run it on WSL! It has some network limitations and may break your device! Better test it on VM or real OS

## Installation

```sh
yarn add simple-ddos
```

## Usage

```js
const ddos = require('simple-ddos')

// Launches 10 threads of sending 100 requests every 1.5s
ddos(10, 'http://localhost', 100, 1500)
```
