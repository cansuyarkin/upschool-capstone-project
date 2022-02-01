import { themeChange } from "../../reduxStore/themeChanger";
import { useSelector, useDispatch } from "react-redux";
import { NavStyle } from "../../styledComponents";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import {MdDarkMode} from "react-icons/md";


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

                <div className="row">
                    <div className="col-2">
                        <h3><Link to="/" className="text-decoration-none" style={{ color: "black" }}>MyMovie</Link></h3>
                    </div>
                    <div className="col">
                        <div className="btn-group" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                            <h3>Movies</h3>
                            <ul id="movie-dropdown" className="dropdown-menu position-absolute top-100">
                                <li><Link className="dropdown-item" to="/sort-filter/popular">Popular</Link></li>
                                <li><Link className="dropdown-item" to="/sort-filter/top-rated">Top Rated</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <button onClick={() => dispatch(themeChange(state))}><MdDarkMode>Theme Change</MdDarkMode></button>

            {
                routes.filter(item => item.isNav).map((item, index) =>

                
                    <h3 key={index}><Link to={item.pathname} className="text-decoration-none" style={{ color: "black" }}>{item.title}</Link></h3>
                
               
               
                )
            }


        </NavStyle>
    </>

};

export default Navbar;