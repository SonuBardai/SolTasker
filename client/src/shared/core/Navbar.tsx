import { useNavigate } from "react-router-dom";
import { PROJECT_NAME } from "../constants";

import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { useStateDispatch } from "../store";
import { login } from "../store/reducers/user/thunk";

const NavBar = () => {
  const [taskerView, setTaskerView] = useState(true);
  const { publicKey } = useWallet();
  const navigate = useNavigate();
  const dispatch = useStateDispatch();

  useEffect(() => {
    if (publicKey) {
      dispatch(login(publicKey))
        .unwrap()
        .then(() => navigate("/dashboard"))
        .catch((err) => console.error(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey]);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" onClick={() => navigate("/")}>
          {PROJECT_NAME}
        </a>
      </div>

      <div className="gap-4 items-center flex justify-center">
        {publicKey && (
          <span className="flex items-center gap-2">
            <input type="checkbox" className="toggle" checked={taskerView} onChange={() => setTaskerView(!taskerView)} /> <span>Tasker dashboard</span>
          </span>
        )}
        <div className="flex-none gap-4">{publicKey ? <WalletDisconnectButton /> : <WalletMultiButton />}</div>
      </div>
    </div>
  );
};

export default NavBar;
