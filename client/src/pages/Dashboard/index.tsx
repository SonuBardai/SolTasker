import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { publicKey } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    if (!publicKey) {
      navigate("/");
    }
  }, [publicKey, navigate]);

  return <div></div>;
};

export default Dashboard;
