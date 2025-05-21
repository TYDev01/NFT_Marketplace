import { createConfig, configureChains } from '@wagmi/core'
import { publicProvider } from '@wagmi/core/providers/public'
import { mainnet, polygon, optimism, arbitrum, sepolia } from '@wagmi/core/chains'
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask'
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'
import { InjectedConnector } from '@wagmi/core/connectors/injected'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, sepolia],
  [publicProvider()]
)

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // get from walletconnect.com
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})