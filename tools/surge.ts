import cp from 'child_process'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

async function main() {
  const argv = await yargs(hideBin(process.argv)).argv
  const url = argv.url as string

  console.log(`Surge to ${url}`)

  const surge = cp.spawn('surge', {})
  surge.stdout.on('data', (c) => {
    const outString = String(c)

    console.log(outString)

    if (outString.includes('project:')) {
      surge.stdin.write('dist/\n')
    }

    if (outString.includes('domain:')) {
      if (url) {
        for (let i = 0; i < 50; i++) surge.stdin.write('\b')
        surge.stdin.write('nondescript-basketball.surge.sh')
      }
      surge.stdin.write('\n')
    }

    if (outString.includes('Success')) {
      setTimeout(() => {
        surge.kill()
        process.exit(0)
      }, 100)
    }
  })
}

main()
