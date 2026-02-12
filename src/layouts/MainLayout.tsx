import { Outlet } from "react-router-dom";
import { Header } from "../components";

const MainLayout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;