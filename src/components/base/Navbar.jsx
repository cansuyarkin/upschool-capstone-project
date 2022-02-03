import { themeChange } from "../../reduxStore/themeChanger";
import { useSelector, useDispatch } from "react-redux";
import { NavStyle } from "../../styledComponents";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import { MdDarkMode } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi"

function Navbar(props) {

    const state = useSelector(state => state.theme)
    const dispatch = useDispatch();

    const openDropdown = () => {
        document.getElementById("movie-dropdown").classList.add("d-block")
    };

    const closeDropdown = () => {
        document.getElementById("movie-dropdown").classList.remove("d-block")
    }

    return <>
        <NavStyle>

            <div className="container">

                <div className="row pt-2">
                    <div className="col-2">
                        {/* <BiCameraMovie  /> */}
                        <h3 className="mt-1"><Link to="/" className="text-decoration-none border border-1 border-dark rounded shadow py-1 px-4" style={{ color: "black" }}>MyMovie</Link></h3>
                        {/* <h2><Link to="/" className="text-decoration-none" style={{ color: "black" }}>MyMovie</Link></h2> */}
                    </div>
                    <div className="col-4">
                        <div className="btn-group" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                            <h4>Movies</h4>
                            <ul id="movie-dropdown" className="dropdown-menu position-absolute top-100">
                                <li><Link className="dropdown-item" to="/sort-filter/popular">Popular</Link></li>
                                <li><Link className="dropdown-item" to="/sort-filter/top-rated">Top Rated</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col" style={{ display: "flex", flexDirection: "row", justifyContent: "end", alignItems: "center" }}>
                        {/* <button onClick={() => dispatch(themeChange(state))}><MdDarkMode>Theme Change</MdDarkMode></button> */}
                        <MdDarkMode style={{ cursor: "pointer" }} onClick={() => dispatch(themeChange(state))} />
                    </div>
                    <div className="col-4" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", }}>
                        {
                            routes.filter(item => item.isNav).map((item, index) =>

                                <h4 key={index}><Link to={item.pathname} className="text-decoration-none" style={{ color: "black", cursor: "pointer" }}>{item.title}</Link></h4>

                            )
                        }
                    </div>
                </div>
            </div>

        </NavStyle>
    </>

};

export default Navbar;