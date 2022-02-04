import { CardStyle, MainCardStyle } from "../styledComponents/styledCard";
import Slider from "react-slick";
import { settings } from "./slider";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { fetchGenres } from "../api";
import { getGenres } from '../reduxStore/genres';
import { addFavList, addSeenList } from "../reduxStore/user";
import { AiFillStar } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri"

function Card(props) {

    const dispatch = useDispatch();

    const {  genres } = useSelector(state => state)

    const genresQuery = useQuery("genres", () => fetchGenres, { retry: false })

    genresQuery?.data?.then((val) =>
        dispatch(getGenres(val?.data?.genres))
    )



    return (
        <>
            <Slider {...settings}>
                {
                    props.data?.map((item, index) => <CardStyle key={index}>

                        <MainCardStyle>
                            <div className="container">
                                <div className="row">
                                    <Link to={`/search/${item.id}`}><img className="img" src={item.poster_path ? `https://image.tmdb.org/t/p/w500` + item.poster_path : "https://www.freeiconspng.com/uploads/no-image-icon-15.png"} alt="" /></Link>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <AiFillStar onClick={() => dispatch(addFavList(item.id))} style={{ cursor: "pointer", width: "50px" , color:"orange"}} />
                                        <RiPlayListAddFill onClick={() => dispatch(addSeenList(item.id))} style={{ cursor: "pointer" , color:"black" }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <Link to={`/search/${item.id}`} className="text-decoration-none"><h5 className="title">{item.title}</h5></Link>
                                </div>
                                <div className="row">
                                    <h6 className="subtitle">{item.release_date}</h6>
                                </div>
                                <div className="row text-dark">
                                    <p>
                                        {
                                            item.genre_ids.map(item =>
                                                genres
                                                    ?.filter(genre => item === (genre.id)).map(item => item.name)).join(", ")
                                        }
                                    </p>
                                </div>
                            </div>
                        </MainCardStyle>



                    </CardStyle>)
                }
            </Slider>

        </>
    )
}

export default Card;

//<a href="https://www.freeiconspng.com/img/23494" title="Image from freeiconspng.com"><img src="https://www.freeiconspng.com/uploads/no-image-icon-15.png" width="350" alt="No Save Icon Format" /></a>