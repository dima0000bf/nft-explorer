import { nftAbiService } from '@/services/NftAbiService'
import { UnpromiseFunc } from './promise'

type TIPStandard = 4.1 | 4.2 | 4.3
type InterfaceType = 'collection' | 'nft'
export type ItemInterface = {
  type: InterfaceType
  code: number
  standart: TIPStandard
}

// ascending !
const POSSIBLE_INTERFACES: ItemInterface[] = [
  { standart: 4.1, type: 'nft', code: 0x78084f7e },
  { standart: 4.1, type: 'collection', code: 0x1217aaab },
  // '4.2': 0x24d7d5f5 ... ???
  { standart: 4.3, type: 'nft', code: 0x4df6250b },
  { standart: 4.3, type: 'collection', code: 0x4387bbfb },
]

export async function testInterface(address: string, interfaceID: number) {
  try {
    const isSupports = await nftAbiService.supportsInterface(address, interfaceID)

    return [isSupports, null] as const
  } catch (err) {
    return [undefined, err] as const
  }
}

export async function findSupportedInterface(address: string) {
  const testCases: Promise<[ItemInterface, UnpromiseFunc<typeof testInterface>]>[] = []

  for (const intf of POSSIBLE_INTERFACES) {
    testCases.push(
      (async () => {
        const testResult = await testInterface(address, intf.code)
        return [intf, testResult]
      })()
    )
  }

  const results = await Promise.all(testCases)
  results.reverse()

  for (const [intf, [isSupported, err]] of results) {
    if (isSupported === undefined && err) return 'unsupported'

    if (err || isSupported === false) continue

    if (isSupported === true) return intf
  }

  return null
}
