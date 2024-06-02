import { useNavigate } from "react-router-dom";
import { PROJECT_NAME } from "../constants";

import { WalletDisconnectButton, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import { useStateDispatch, useStateSelector } from "../store";
import { login } from "../store/reducers/user/thunk";
import { DashboardView, setDashboardView } from "../store/reducers/user/reducer";

const NavBar = () => {
  const { publicKey } = useWallet();
  const navigate = useNavigate();
  const dispatch = useStateDispatch();
  const { dashboardView } = useStateSelector((state) => state.user);

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
            <input
              type="checkbox"
              className="toggle"
              checked={dashboardView === DashboardView.Tasker}
              onChange={() => dispatch(setDashboardView(dashboardView === DashboardView.Tasker ? DashboardView.TaskPoster : DashboardView.Tasker))}
            />{" "}
            <span>{dashboardView === DashboardView.Tasker ? "Tasker dashboard" : "Task Poster dashboard"}</span>
          </span>
        )}
        <div className="flex-none gap-4">{publicKey ? <WalletDisconnectButton /> : <WalletMultiButton />}</div>
      </div>
    </div>
  );
};

export default NavBar;
