import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Profile from "./components/page/Profile";
import Detail from "./components/page/Detail";
import SortFilter from "./components/page/SortFilter";
import About from "./components/page/About";
import Contact from "./components/page/Contact";

export const routes = [
    {title: "Home", pathname: "/", element: Home, isNav: false },
    {title: "Login", pathname: "/login", element: Login, isNav: true },
    {title: "Profile", pathname: "/profile", element: Profile, isNav: true },
    {title: "About", pathname: "/about", element: About, isNav: true },
    {title: "Contact", pathname: "/contact", element: Contact, isNav: false },
    {title: "Detail", pathname: "/search/:movieId", element: Detail, isNav: false },
    {title: "Sort Filter", pathname: "/sort-filter", element: SortFilter, isNav: false },
    {title: "Sort Filter", pathname: "/sort-filter/:type", element: SortFilter, isNav: false },
    
];

