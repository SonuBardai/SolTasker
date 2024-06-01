import { Route, Routes } from "react-router-dom";
import NavBar from "./shared/core/Navbar";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/Error";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { useMemo } from "react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

const App = () => {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );

  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ErrorBoundary>
  );
};

export default App;
