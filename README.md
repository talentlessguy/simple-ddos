# 💀 SimpleDDoS

[![Twitter](https://img.shields.io/twitter/follow/v1rtl.svg?label=twitter&style=flat-square)](https://twitter.com/v1rtl)
![David](https://img.shields.io/david/talentlessguy/simple-ddos.svg?style=flat-square)
![Top lang](https://img.shields.io/github/languages/top/talentlessguy/simple-ddos.svg?style=flat-square)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/simple-ddos.svg?style=flat-square)
![npm](https://img.shields.io/npm/dt/simple-ddos.svg?style=flat-square)

## Description

SimpleDDoS is a tiny Denial Of Service module with multi-threading support using `cluster` for testing localhost servers.

Author of the module is not responsible for any illegal actions. This module was written for testing purposes.

## Known issues

- Doesn't work on WSL with a high number of requests

## Installation

```sh
# yarn
yarn global add simple-ddos
# npm
npm i -g simple-ddos
```

## Usage

### CLI

```
# Launches 10 threads of sending 100 requests every 1.5s
simple-ddos 10 http://localhost 100 1500
```

### `ddos(threadsCount, host, requestCount, interval)`

The module launches a list of threads and sends a lot of requests to some host with some interval.

```js
const ddos = require('simple-ddos')

// Launches 10 threads of sending 100 requests every 1.5s
ddos(10, 'http://localhost', 100, 1500)
```
