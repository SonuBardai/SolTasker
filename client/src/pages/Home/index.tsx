import { useWallet } from "@solana/wallet-adapter-react";
import { PROJECT_NAME } from "../../shared/constants";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { publicKey } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (publicKey) {
      navigate("/setup");
    }
  }, [publicKey, navigate]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to {PROJECT_NAME}!</h1>
          <p className="py-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam voluptatum expedita quisquam autem facere dolores deleniti modi fugiat at, sed odio quam odit aliquid
            iusto exercitationem distinctio labore a perferendis, suscipit, assumenda possimus reprehenderit. Beatae cumque deleniti dolorum qui deserunt!
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
