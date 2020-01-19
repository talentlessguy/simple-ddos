const cluster = require('cluster'),
  { log } = console

const { red } = require('chalk')

module.exports = (threads = 5, host = 'http://localhost:3000', amount = 1000, interval = 1000) => {
  // Spawn main process
  cluster.setupMaster({
    exec: `${__dirname}/worker.js`,
    args: [host, amount, interval]
  })

  // Count threads
  let threadsCount = 0

  for (let i = 0; i < threads; i++) {
    cluster.fork()
    threadsCount++
  }

  log(`Running DDoS in ${threadsCount} threads`)

  cluster.on('exit', (worker, code, signal) =>
    log(
      red(`
Worker ${worker.process.pid} died. Before the death he said ${signal}.`)
    )
  )
}
