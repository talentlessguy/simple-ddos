# SimpleDDoS

## Description

SimpleDDoS is a tiny Denial Of Service tool with multi-threading support for pentesting local hosted servers.

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
