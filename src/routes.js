import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Dash-Publications";
import Maps from "views/Dash-Projets";

import UserPage from "views/UserPage.js";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "Edit Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },

  {
    path: "/notifications",
    name: " Événements",
    icon: "ui-1_bell-53",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/extended-tables",
    name: " Publications",
    icon: "now-ui-icons location_bookmark",
    component: TableList,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "  Fermer votre session",
    icon: "arrows-1_minimal-left",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: " Projets",
    icon: "now-ui-icons education_paper",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: " Media",
    icon: "media-1_camera-compact",
    component: Icons,
    layout: "/admin",
  },
];
export default dashRoutes;
