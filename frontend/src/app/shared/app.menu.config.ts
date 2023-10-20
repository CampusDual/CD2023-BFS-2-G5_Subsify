import { MenuRootItem } from "ontimize-web-ngx";

export const MENU_CONFIG: MenuRootItem[] = [
  { id: "home", name: "HOME", icon: "home", route: "/main/home" },
  {
    id: "subscriptions",
    name: "SUBSCRIPTIONS",
    icon: "subscriptions",
    route: "/main/subscriptions",
  },
  {
    id: "plans",
    name: "PLANS",
    icon: "coronavirus",
    route: "/main/plans",
  },
  {
    id: "categories",
    name: "CATEGORIES",
    icon: "category",
    route: "/main/categories",
  },
  {
    id: "platforms",
    name: "PLATFORMS",
    icon: "stream",
    route: "/main/platforms",
  },
  {
    id: "logout",
    name: "LOGOUT",
    route: "/login",
    icon: "power_settings_new",
    confirm: "yes",
  },
];
