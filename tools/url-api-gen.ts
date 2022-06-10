import axios from 'axios'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import * as Openapi from 'openapi-typescript-codegen'
import * as yaml from 'js-yaml'

async function main() {
  const argv = await yargs(hideBin(process.argv)).argv

  const url = argv.url as string
  const to = argv.to as string

  try {
    const openapiMarkup = (await axios.get(url)).data as string
    await Openapi.generate({
      input: yaml.load(openapiMarkup) as any,
      output: to,
      exportCore: false,
      exportSchemas: false,
      exportServices: false,
    })
    console.log(`✅ ${url} -> ${to}`)
  } catch (err) {
    console.log(`❌ ${url} -> ${to}`, err)
  }
}
main()
