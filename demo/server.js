const { Server } = require('http')

new Server((req, res) => res.end('Hello World')).listen(3000, () => console.log('Server started'))
