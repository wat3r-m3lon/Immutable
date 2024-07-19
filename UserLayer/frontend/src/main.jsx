import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
// Web-vitals is a measure of Web performance developed by Google to help developers understand the quality of the user experience on their sites and provide suggestions on how to improve it. 
// It reflects the performance of the website loading speed, interactivity and stability.
import reportWebVitals from "./reportWebVitals"; 
import '@rainbow-me/rainbowkit/styles.css';
import { 
  RainbowKitProvider,
  lightTheme,
} from '@rainbow-me/rainbowkit'; // Rainbowkit is a metamask UI of front-end 
// wagmi: wagmi is a collection of React Hooks that contains everything you need to get started with Ethereum. wagmi can easily connect wallets, display ENS and balance information, sign messages, interact with contracts, and more - all with a cache, request duplicate data
// deletion and persistence.
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { goerli, polygon, polygonZkEvmTestnet, sepolia} from 'wagmi/chains';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { unipassWallet } from "@unipasswallet/rainbowkit-plugin";

// Configure the testnets
const { chains, provider } = configureChains(
  [goerli, polygon, polygonZkEvmTestnet, sepolia],
  [
    publicProvider()
  ]
);


const connectors = connectorsForWallets([
  {
    groupName: 'Suggested',
    wallets: [
      injectedWallet({ chains }),
      rainbowWallet({ chains }),
      metaMaskWallet({ chains }),
      coinbaseWallet({ chains, appName: 'My RainbowKit App' }),
      walletConnectWallet({ chains }),
      unipassWallet({
        chains,
        connect: {
          chainId: goerli.id,
          returnEmail: false,
          appSettings: {
            appName: "wagmi demo",
          },
        },
        get:{

        },
      }),
    ],
  },
]);

// Establish the connection
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={lightTheme({
        accentColor: 'white',
        accentColorForeground: '#1E88E5',
        borderRadius: 'small',
        fontStack: 'system',
      })}>
        <Router>
          <App />
        </Router>
      </RainbowKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);

reportWebVitals();