# SimpleDDoS

## Description

P.S It is a DoS tool, DDoS is a clickbait :)

SimpleDDoS is a tiny (544 bytes) Denial Of Service tool for pentesting local hosted servers.

## Usage

The function takes three arguments: url, amount of requests and interval.

One-liner:

```js
require('simple-ddos')('http://localhost', 100, 700)
// Makes 100 requests every 0.7 seconds
```

## TODO

- [ ] Add clusters for multiple process running