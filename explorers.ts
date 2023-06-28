export const explorersList = [
  {
    id: 1,
    chain_id: '0x1',
    name: 'Ethereum',
    url: 'https://etherscan.io',
    chain: 'Ethereum',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    tags: ['Etheruem', 'Mainnet'],
    api_url: 'https://api.etherscan.io',
    api_key: process.env.NEXT_PUBLIC_ETHERSCAN_KEY,
  },
  {
    id: 5,
    chain_id: '0x5',
    name: 'Goerli Testnet',
    url: 'https://goerli.etherscan.io',
    chain: 'Ethereum',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    tags: ['Etheruem', 'Testnet', 'Goerli'],
    api_url: 'https://api-goerli.etherscan.io',
    api_key: process.env.NEXT_PUBLIC_ETHERSCAN_KEY,
  },
  {
    id: 11155111,
    chain_id: '0xaa36a7',
    name: 'Sepolia Testnet',
    url: 'https://sepolia.etherscan.io',
    chain: 'Ethereum',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
    tags: ['Etheruem', 'Testnet', 'Sepolia'],
    api_url: 'https://api-sepolia.etherscan.io',
    api_key: process.env.NEXT_PUBLIC_ETHERSCAN_KEY,
  },
  {
    id: 56,
    chain_id: '0x38',
    name: 'BNB Chain',
    url: 'https://bscscan.com',
    chain: 'BSC',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
    tags: ['BNB Chain', 'Mainnet'],
    api_url: 'https://api.bscscan.com',
    api_key: process.env.NEXT_PUBLIC_BSCSCAN_KEY,
  },
  {
    id: 97,
    chain_id: '0x61',
    name: 'BNB Chain Testnet',
    url: 'https://testnet.bscscan.com',
    chain: 'BSC',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
    tags: ['BNB Chain', 'Testnet'],
    api_url: 'https://api-testnet.bscscan.com',
    api_key: process.env.NEXT_PUBLIC_BSCSCAN_KEY,
  },
  {
    id: 10,
    chain_id: '0xa',
    name: 'Optimism',
    url: 'https://optimistic.etherscan.io',
    chain: 'Optimism',
    logo: 'https://optimistic.etherscan.io/images/favicon.ico',
    tags: ['Optimism', 'Mainnet'],
    api_url: 'https://api-goerli-optimism.etherscan.io',
    api_key: process.env.NEXT_PUBLIC_OPTIMISM_KEY,
  },
  {
    id: 420,
    chain_id: '0x1a4',
    name: 'Optimism Testnet',
    url: 'https://goerli-optimism.etherscan.io',
    chain: 'Optimism Goerli',
    logo: 'https://optimistic.etherscan.io/images/favicon.ico',
    tags: ['Optimism', 'Testnet'],
    api_url: 'https://api-goerli-optimism.etherscan.io',
    api_key: process.env.NEXT_PUBLIC_OPTIMISM_KEY,
  },
  {
    id: 42161,
    chain_id: '0xa4b1',
    name: 'Arbitrum One',
    url: 'https://arbiscan.io',
    chain: 'Arbitrum',
    logo: 'https://arbiscan.io/images/favicon.ico',
    tags: ['Arbitrum', 'Mainnet'],
    api_url: 'https://api.arbiscan.io',
    api_key: process.env.NEXT_PUBLIC_ARBITRUM_KEY,
  },
  {
    id: 421613,
    chain_id: '0x66eed',
    name: 'Arbitrum One Testnet',
    url: 'https://goerli.arbiscan.io/',
    chain: 'Arbitrum Goerli',
    logo: 'https://arbiscan.io/images/favicon.ico',
    tags: ['Arbitrum', 'Testnet'],
    api_url: 'https://api-goerli.arbiscan.io',
    api_key: process.env.NEXT_PUBLIC_ARBITRUM_KEY,
  },
  {
    id: 137,
    chain_id: '0x89',
    name: 'Polygon',
    url: 'https://polygonscan.com',
    chain: 'Polygon',
    logo: 'https://polygonscan.com/images/favicon.ico',
    tags: ['Polygon', 'Mainnet'],
    api_url: 'https://api.polygonscan.com',
    api_key: process.env.NEXT_PUBLIC_POLYGON_KEY,
  },
  {
    id: 1101,
    chain_id: '0x44d',
    name: 'Polygon zkEVM',
    url: 'https://zkevm.polygonscan.com',
    chain: 'Polygon',
    logo: 'https://polygonscan.com/images/favicon.ico',
    tags: ['Polygon', 'Mainnet', 'zkEVM'],
    api_url: 'https://api-zkevm.polygonscan.com',
    api_key: process.env.NEXT_PUBLIC_POLYGON_KEY,
  },
  {
    id: 80001,
    chain_id: '0x13881',
    name: 'Polygon Testnet',
    url: 'https://mumbai.polygonscan.com',
    chain: 'Polygon',
    logo: 'https://polygonscan.com/images/favicon.ico',
    tags: ['Polygon', 'Testnet'],
    api_url: 'https://api-testnet.polygonscan.com',
    api_key: process.env.NEXT_PUBLIC_POLYGON_KEY,
  },
  {
    id: 1442,
    chain_id: '0x5a2',
    name: 'Polygon zkEVM Testnet',
    url: 'https://testnet-zkevm.polygonscan.com/',
    chain: 'Polygon',
    logo: 'https://polygonscan.com/images/favicon.ico',
    tags: ['Polygon', 'Testnet', 'zkEVM'],
    api_url: 'https://api-testnet-zkevm.polygonscan.com',
    api_key: process.env.NEXT_PUBLIC_POLYGON_KEY,
  },
  {
    id: 43114,
    chain_id: '0xa86a',
    name: 'Avalanche',
    url: 'https://snowtrace.io',
    chain: 'Avalanache',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
    tags: ['Avalanche', 'Mainnet'],
    api_url: 'https://api.snowtrace.io',
    api_key: process.env.NEXT_PUBLIC_SNOWTRACE_KEY,
  },
  {
    id: 43113,
    chain_id: '0xa869',
    name: 'Avalanche Testnet',
    url: 'https://testnet.snowtrace.io/',
    chain: 'Avalanache',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
    tags: ['Avalanche', 'Testnet'],
    api_url: 'https://api-testnet.snowtrace.io',
    api_key: process.env.NEXT_PUBLIC_SNOWTRACE_KEY,
  },
  {
    id: 250,
    chain_id: '0xfa',
    name: 'Fantom',
    url: 'https://ftmscan.com',
    chain: 'Fantom',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png',
    tags: ['Fantom', 'Mainnet'],
    api_url: 'https://api.ftmscan.com',
    api_key: process.env.NEXT_PUBLIC_FTMSCAN_KEY,
  },
  {
    id: 4002,
    chain_id: '0xfa2',
    name: 'Fantom Testnet',
    url: 'https://testnet.ftmscan.com/',
    chain: 'Fantom',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png',
    tags: ['Fantom', 'Testnet'],
    api_url: 'https://api-testnet.ftmscan.com',
    api_key: process.env.NEXT_PUBLIC_FTMSCAN_KEY,
  },
  {
    id: 25,
    chain_id: '0x19',
    name: 'Cronos',
    url: 'https://cronoscan.com',
    chain: 'Cronos',
    logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png',
    tags: ['Cronos', 'Mainnet'],
    api_url: 'https://api.cronoscan.com',
    api_key: process.env.NEXT_PUBLIC_CRONOSCAN_KEY,
  },
  {
    id: 84531,
    chain_id: '0x14a33',
    name: 'Base Testnet',
    url: 'https://goerli.basescan.org',
    chain: 'Base',
    logo: 'https://goerli.basescan.org/images/favicon.ico',
    tags: ['Base', 'Testnet'],
    api_url: 'https://api-goerli.basescan.org',
  },
  {
    id: 59140,
    chain_id: '0xe704',
    name: 'Linea Testnet',
    url: 'https://goerli.lineascan.build',
    chain: 'Linea',
    logo: 'https://goerli.lineascan.build/images/favicon.ico',
    tags: ['Linea', 'Testnet'],
    api_url: 'https://api-testnet.lineascan.build',
  },
]
