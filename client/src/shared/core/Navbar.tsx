import { useNavigate } from "react-router-dom";
import { PROJECT_NAME } from "../constants";

import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const NavBar = () => {
  const { publicKey } = useWallet();
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" onClick={() => navigate("/")}>
          {PROJECT_NAME}
        </a>
      </div>

      <div className="flex-none gap-4">{publicKey ? <WalletDisconnectButton /> : <WalletMultiButton />}</div>
    </div>
  );
};

export default NavBar;
