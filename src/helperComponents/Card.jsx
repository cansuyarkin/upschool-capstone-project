import { CardStyle, MainCardStyle } from "../styledComponents/styledCard";
import Slider from "react-slick";
import {settings} from "./slider";
import { Link } from "react-router-dom";

function Card(props) {
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
                            <Link to={`/search/${item.id}`} className="text-decoration-none"><h5 className="title">{item.title}</h5></Link>
                        </div>
                        <div className="row">
                            <h6 className="subtitle">{item.release_date}</h6>
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