import NotFound from "../client/pages/NotFound";
import commonRoutes from "./commonRoutes";

const routes = [
  ...commonRoutes,
  {
    path: "/not-found",
    exact: true,
    component: NotFound,
  },
];

export default routes;
