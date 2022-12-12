import { Component, h } from '@stencil/core'

@Component({
  tag: 'canoe-chain',
  styleUrl: 'index.scss',
})
export class CanoeChain {
  addChain = () => {
    if (window['ethereum']) {
      window['ethereum'].request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x2019',
            chainName: 'Klaytn Mainnet',
            rpcUrls: ['https://public-node-api.klaytnapi.com/v1/cypress'],
            nativeCurrency: {
              name: 'KLAY',
              symbol: 'KLAY',
              decimals: 18,
            },
            blockExplorerUrls: ['https://scope.klaytn.com'],
          },
        ],
      })
    }
  }

  render() {
    return (
      <section class="chain-info">
        <div>Chain Name: Klaytn mainnet</div>
        <div class="mt-2">Chain ID: 8217</div>
        <div class="mt-2">Currency Symbol : KLAY</div>
        <div class="mt-2">
          Brower's:{' '}
          <a class="text-blue no-underline" href="https://scope.klaytn.com" target="_blank" rel="noopener noreferrer">
            URL
          </a>
        </div>
        <div class="mt-2">
          Metamask RPC:{' '}
          <span class="text-blue cursor-pointer" onClick={this.addChain}>
            ADD
          </span>
        </div>
      </section>
    )
  }
}
