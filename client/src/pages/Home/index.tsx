import { useWallet } from "@solana/wallet-adapter-react";
import { PROJECT_NAME } from "../../shared/constants";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { publicKey } = useWallet();
  const navigate = useNavigate();

  console.log("ALL ENV VARIABLES: ", import.meta.env);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Woah! Welcome to {PROJECT_NAME}!</h1>
          <div>Backend url: {import.meta.env.BACKEND_URL}</div>
          <div>Node env: {import.meta.env.NODE_ENV}</div>
          <p className="py-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam voluptatum expedita quisquam autem facere dolores deleniti modi fugiat at, sed odio quam odit aliquid
            iusto exercitationem distinctio labore a perferendis, suscipit, assumenda possimus reprehenderit. Beatae cumque deleniti dolorum qui deserunt!
          </p>
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
