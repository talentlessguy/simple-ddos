const request = require('request'), { log } = console

module.exports = (url = 'http://localhost', amount = 1000, interval = 1000) => {
    this.errors = 0, this.success = 0
        setInterval(() => {
            for (let i = 0; i < amount; i++) {
                request(url, err =>  err ? this.errors++ : this.success++)
            }
            log(`Errors: ${this.errors} Success: ${this.success}`)
            this.errors = this.success = 0
        }, interval)
}