import React, { useContext } from "react";
import { Context } from "../../App";

const Dashboard = () => {
  const data = useContext(Context);
  console.log(data);
  return <div>Dashboard</div>;
};

export default Dashboard;
