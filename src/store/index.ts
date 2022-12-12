import { createStore } from '@stencil/store'
import { IState } from 'interface'

const { state, onChange } = createStore<IState>({
  appShow: false,
  showContent: false,
  loading: false,
  circle: false,
  reload: false,
  chain: {
    chainId: 0,
    chainName: '',
  },
  userAddress: '',
  userBalance: 0,
  receiveAmount: 0,
  sendAmount: 0,
  send: {
    id: 'klay-token',
    code: 'klaytn',
    name: 'Klaytn',
    symbol: 'KLAY',
    address: '0xc2098a8938119a52b1f7661893c0153a6cb116d5',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/9672/small/klaytn.png',
  },
  receive: {
    id: 'tether',
    code: 'tether',
    name: 'Tether',
    symbol: 'USDT',
    address: '0x55d398326f99059fF775485246999027B3197955',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png?1598003707',
  },
  info: {
    name: '',
    symbol: '',
    image: '',
    state: 0,
    market_cap_rank: 0,
    current_price: '',
    price_change_percentage: '',
    market_cap: '',
    address_count: '',
    liquid: '',
    liquid_value: 0,
    total_volume: '',
  },
})

export { state, onChange }
