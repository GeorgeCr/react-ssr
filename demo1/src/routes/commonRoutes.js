import Dashboard from "../client/pages/Dashboard";
import Home from "../client/pages/Home";

const commonRoutes = [
  {
    path: "/",
    exact: true,
    component: Home,
    fetchInitialData: async (req) => {
      return "home";
    },
  },
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard,
    fetchInitialData: async (req) => [
      {
        id: "1",
        name: "John",
      },
      { id: "2", name: "Martin" },
    ],
  },
];

export default commonRoutes;
