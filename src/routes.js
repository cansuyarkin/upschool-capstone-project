import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Profile from "./components/page/Profile";
import Detail from "./components/page/Detail";
import SortFilter from "./components/page/SortFilter";

export const routes = [
    {title: "Home", pathname: "/", element: Home, isNav: true },
    {title: "Login", pathname: "/login", element: Login, isNav: true },
    {title: "Profile", pathname: "/profile", element: Profile, isNav: true },
    {title: "Detail", pathname: "/detail", element: Detail, isNav: false },
    {title: "Sort Filter", pathname: "/sort-filter", element: SortFilter, isNav: false },
];

