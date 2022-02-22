import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import "../styles/globals.css";

// this represent the rinkeby test network chain
const supportedChainIds = [4];

const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
