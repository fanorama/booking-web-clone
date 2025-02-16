import Navbar from "@components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div></div>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
