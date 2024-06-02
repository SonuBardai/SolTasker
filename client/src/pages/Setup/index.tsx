import { useWallet } from "@solana/wallet-adapter-react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../shared/constants";

const Setup = () => {
  const { publicKey } = useWallet();
  const navigate = useNavigate();

  const clickHandler = (option: string) => {
    axios.post(`${BACKEND_URL}/v1/setup`, { option }).then(() => navigate("/dashboard"));
  };

  useEffect(() => {
    if (!publicKey) {
      navigate("/");
    }
  }, [publicKey, navigate]);

  return (
    <div className="px-8">
      <div className="flex w-full">
        <div className="grid h-max flex-grow card bg-base-300 rounded-box place-items-center cursor-pointer" onClick={() => clickHandler("tasker")}>
          <div className="card w-full h-full max-h-[76vh] bg-base-100 shadow-xl">
            <figure className="h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1629701764404-907eed4a139d?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="SolTasker"
                className="rounded-box object-cover h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">SolTasker</h2>
            </div>
          </div>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="grid h-max flex-grow card bg-base-300 rounded-box place-items-center cursor-pointer" onClick={() => clickHandler("poster")}>
          <div className="card w-full h-full max-h-[76vh] bg-base-100 shadow-xl">
            <figure className="h-full w-full">
              <img
                src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="SolTaskPoster"
                className="rounded-box object-cover h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">SolTaskPoster</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
