import { useWallet } from "@solana/wallet-adapter-react";
import { PROJECT_NAME } from "../../shared/constants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { publicKey } = useWallet();
  const navigate = useNavigate();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to {PROJECT_NAME}!</h1>
          <p className="py-6">Complete Tasks, Earn Solana - Power Up with Soltasker</p>
          {!publicKey ? (
            <button
              className="btn btn-primary"
              onClick={() => {
                const dropdown = document.querySelector(".wallet-adapter-dropdown");
                if (dropdown) {
                  const buttonInsideDropdown = dropdown.querySelector("button");
                  if (buttonInsideDropdown) {
                    buttonInsideDropdown.click();
                  }
                }
              }}
            >
              Connect Wallet
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => navigate("/dashboard")}>
              Dashboard
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
