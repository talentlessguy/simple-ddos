const { log } = console, { argv } = process

const { red, blue } = require('chalk')

const worker = (host, amount, interval) => {
    
    // Count errors & successful requests
    this.errors = 0, this.success = 0

    // Send requests with interval
    setInterval(() => {
        for (let i = 0; i < amount; i++) {
            require('request')(host, err => err ? this.errors++ : this.success++)
        }
        log(`Errors: ${red(this.errors)} Success: ${blue(this.success)}`)
        this.errors = this.success = 0
    }, interval)
}

worker(argv[2], argv[3], argv[4])
