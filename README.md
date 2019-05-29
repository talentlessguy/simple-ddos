# SimpleDDoS

## Description

SimpleDDoS is a tiny Denial Of Service tool with multi-threading support for pentesting local hosted servers.

## Installation

```sh
yarn add simple-ddos
```

## Usage

### *One thread*

The function takes four arguments: host, amount of requests and interval.

```js
const ddos = require('simple-ddos')

ddos(5) // Launches 5 threads
// Makes 100 requests every 0.7 seconds
```

### *Multiple threads*

Only has one argument - the number of threads.

```js
require('./main')(5)
```

## TODO

- [ ] Add clusters for multiple process running