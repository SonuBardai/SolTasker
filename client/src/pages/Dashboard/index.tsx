import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStateSelector } from "../../shared/store";
import { DashboardView } from "../../shared/store/reducers/user/reducer";
import TaskerDashboard from "./components/TaskerDashboard";
import TaskPosterDashboard from "./components/TaskPosterDashboard";

const Dashboard = () => {
  const { publicKey } = useWallet();
  const navigate = useNavigate();
  const { dashboardView } = useStateSelector((state) => state.user);

  useEffect(() => {
    if (!publicKey) {
      navigate("/");
    }
  }, [publicKey, navigate]);

  return <div>{dashboardView === DashboardView.Tasker ? <TaskerDashboard /> : <TaskPosterDashboard />}</div>;
};

export default Dashboard;
