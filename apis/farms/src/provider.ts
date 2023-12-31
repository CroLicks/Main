import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const fonProvider = new StaticJsonRpcProvider(
  {
    url: 'https://fsc-dataseed2.fonscan.io',
    skipFetchSetup: true,
  },
  201022,
)
export const croProvider = new StaticJsonRpcProvider(
  {
    url: 'https://evm.cronos.org/',
    skipFetchSetup: true,
  },
  25,
)

export const bscProvider = new StaticJsonRpcProvider(
  {
    url: 'https://nodes.pancakeswap.com',
    skipFetchSetup: true,
  },
  56,
)

export const bscTestnetProvider = new StaticJsonRpcProvider(
  {
    url: 'https://bsc-testnet.nodereal.io/v1/e9a36765eb8a40b9bd12e680a1fd2bc5',
    skipFetchSetup: true,
  },
  97,
)

export const goerliProvider = new StaticJsonRpcProvider(
  {
    url: 'https://goerli.gateway.tenderly.co',
    skipFetchSetup: true,
  },
  5,
)
