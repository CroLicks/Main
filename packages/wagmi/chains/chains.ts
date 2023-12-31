import { rinkeby, mainnet} from 'wagmi/chains'
import { Chain } from 'wagmi'

export const avalandche: Chain = {
  id: 43114,
  name: 'Avalanche C-Chain',
  network: 'avalanche',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://snowtrace.io/',
    },
  },
}

export const avalandcheFuji: Chain = {
  id: 43113,
  name: 'Avalanche Fuji',
  network: 'avalanche-fuji',
  rpcUrls: {
    default: 'https://rpc.ankr.com/avalanche_fuji',
  },
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  blockExplorers: {
    default: {
      name: 'snowtrace',
      url: 'https://testnet.snowtrace.io/',
    },
  },
  testnet: true,
}

export const fantomOpera: Chain = {
  id: 250,
  name: 'Fantom Opera',
  network: 'fantom',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.ftm.tools',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://ftmscan.com',
    },
  },
}

export const fantomTestnet: Chain = {
  id: 4002,
  name: 'Fantom Testnet',
  network: 'fantom-testnet',
  nativeCurrency: { name: 'Fantom', symbol: 'FTM', decimals: 18 },
  rpcUrls: {
    default: 'https://rpc.testnet.fantom.network',
  },
  blockExplorers: {
    default: {
      name: 'FTMScan',
      url: 'https://testnet.ftmscan.com',
    },
  },
  testnet: true,
}

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

export const bsc: Chain = {
  id: 56,
  name: 'BNB Smart Chain',
  network: 'bsc',
  rpcUrls: {
    public: 'https://bsc-dataseed2.binance.org',
    default: 'https://bsc-dataseed1.binance.org',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 15921452,
  },
}

export const bscTest: Chain = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  network: 'bsc-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Binance Chain Native Token',
    symbol: 'tBNB',
  },
  rpcUrls: {
    public: 'https://data-seed-prebsc-1-s2.binance.org:8545/',
    default:'https://data-seed-prebsc-1-s2.binance.org:8545/',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://testnet.bscscan.com' },
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 17422483,
  },
  testnet: true,
}


export const fon: Chain = {
  id: 201022,
  name: 'FON Smart Chain',
  network: 'fon',
  nativeCurrency: {
    decimals: 18,
    name: 'FON Chain Native Token',
    symbol: 'FON',
  },
  rpcUrls: {
    public: 'https://fsc-dataseed2.fonscan.io/',
    default: 'https://fsc-dataseed2.fonscan.io/',
  },
  blockExplorers: {
    default: { name: 'FonScan', url: 'https://fonscan.io/' },
  },
  multicall: {
    address: '0x2E87e64A31fd353af41f5c4f3468EafE3FA9288D',
    blockCreated: 489291,
  },
  testnet: true,
}

export const cro: Chain = {
  id: 25,
  name: 'Cronos',
  network: 'cro',
  nativeCurrency: {
    decimals: 18,
    name: 'Cronos',
    symbol: 'CRO',
  },
  rpcUrls: {
    public: 'https://evm.cronos.org/',
    default: 'https://evm.cronos.org/',
  },
  blockExplorers: {
    default: { name: 'Cronoscan', url: 'https://cronoscan.com/' },
  },
  multicall: {
    address: '0x2E87e64A31fd353af41f5c4f3468EafE3FA9288D',
    blockCreated: 489291,
  },

}


export const goerli: Chain = {
  id: 5,
  name: 'Goerli',
  network: 'ETH',
  nativeCurrency: {
    decimals: 18,
    name: 'Goerli',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: 'https://goerli.gateway.tenderly.co/',
    default: 'https://goerli.gateway.tenderly.co/',
  },
  blockExplorers: {
    default: { name: 'Cronoscan', url: 'https://goerli.etherscan.io/' },
  },
  multicall: {
    address: '0xcA11bde05977b3631167028862bE2a173976CA11',
    blockCreated: 6507670,
  },

}

export { rinkeby, mainnet }
