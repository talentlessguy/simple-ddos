# simple-ddos

![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/simple-ddos.svg?style=flat-square)
![npm](https://img.shields.io/npm/dt/simple-ddos.svg?style=flat-square)

```
 █▀▀ █ █▀▄▀█ █▀█ █   █▀▀ █▀▄ █▀▄ █▀█ █▀▀ 
 ▄▄█ █ █ ▀ █ █▀▀ █▄▄ ██▄ █▄▀ █▄▀ █▄█ ▄▄█
```

## Description

SimpleDDoS is a tiny Denial Of Service module with multi-threading support using `cluster`.

Author of the module is not responsible for any illegal actions. This module was written for testing and educational purposes.

## Known issues

- Doesn't work on WSL with a high number of requests

## Installation

```sh
pnpm i simple-ddos
```

## Usage

### CLI

```sh
simple-ddos <threads> <url> <request count> <interval>
```

### Example

```
# Launches 10 threads of sending 100 requests every 1.5s
simple-ddos 10 http://localhost:3000 100 1500
```

### API

#### `ddos(threadsCount, host, requestCount, interval)`

```js
import { simpleDDoS } from 'simple-ddos'

// Launches 10 threads of sending 100 requests every 1.5s
simpleDDoS(10, 'http://localhost:3000', 100, 1500)
```
