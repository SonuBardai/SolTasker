import { useNavigate } from "react-router-dom";
import { PROJECT_NAME } from "../constants";

import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const NavBar = () => {
  const { publicKey } = useWallet();
  const navigate = useNavigate();

  const handleClick = () => {};

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" onClick={() => navigate("/")}>
          {PROJECT_NAME}
        </a>
      </div>

      <div className="flex-none gap-4">
        {publicKey ? <WalletDisconnectButton /> : <WalletMultiButton />}
        <button
          className="btn btn-outline btn-ghost"
          onClick={() => {
            handleClick;
          }}
        >
          Connect wallet
        </button>
      </div>
    </div>
  );
};

export default NavBar;
