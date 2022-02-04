import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import { fetchCredits, fetchDetails, fetchRecommendations, fetchReviews } from "../../api";
import { castSettings, recomSettings } from "../../helperComponents/slider";

function Detail() {

    const { movieId } = useParams();



    console.log("movie id", movieId)

    const detail = useQuery(
        ["movie detail", movieId],
        () => fetchDetails(movieId),
        {
            retry: false,
        }
    );

    const credits = useQuery(
        ["movie credits", movieId],
        () => fetchCredits(movieId),
        {
            retry: false,
        }
    );

    const reviews = useQuery(
        ["movie reviews", movieId],
        () => fetchReviews(movieId),
        {
            retry: false
        }
    );

    const recommendations = useQuery(
        ["movie recommendations", movieId],
        () => fetchRecommendations(movieId),
        {
            retry: false,
        }
    );

    // console.log("movie detail", detail)
    console.log("new:", detail?.data?.data)
    console.log("credits", credits)
    console.log("review", reviews)
    console.log("rec", recommendations)

    const jobs = ["director", "producer"]



    return <>
        <div className="container border border-dark rounded p-5 mt-5" style={{ backgroundColor: "#a4b0be" }}>
            <div className="row">
                <h3>Movie Detail</h3>
                <div className="col-4 mt-3">
                    <img src={detail?.data?.data.poster_path ? `https://image.tmdb.org/t/p/w300${detail?.data?.data.poster_path}` : "https://www.freeiconspng.com/uploads/no-image-icon-15.png"} alt="" />
                </div>
                <div className="col-8 mt-3">
                    <h4>{detail?.data?.data?.title}</h4>
                    <h6>Release Date: {detail?.data?.data?.release_date}</h6>

                    <h6> Genres:
                        {detail?.data?.data?.genres.map((item,index) => <span key={index}> {item.name} </span>)}
                    </h6>

                    <h6>
                        Duration: {detail?.data?.data?.runtime} minutes
                    </h6>

                    <p className="mt-5">{detail?.data?.data?.overview}</p>
                    {
                        credits?.data?.data?.crew.filter(item => jobs.includes(item.job.toLowerCase())).map((item, index) => <h6>{item.job}: {item.name}</h6>)
                    }

                </div>
            </div>
        </div>


        <div className="container mt-5 px-5 pt-4 pb-5 border border-dark rounded" style={{ backgroundColor: "#dfe4ea" }}>

            <h3>Film Cast</h3>

            <Slider {...castSettings}>

                {
                    credits?.data?.data?.cast.map((item, index) => {
                        return <>
                            <img style={{ height: "100px" }} src={item.profile_path ? `https://image.tmdb.org/t/p/w300${item.profile_path}` : "https://www.freeiconspng.com/uploads/no-image-icon-15.png"} alt="" />
                            <h5>{item.name}</h5>
                            <h6>{item.character}</h6>
                        </>
                    }
                    )
                }


            </Slider>
        </div>



        <div className="container mt-5 py-4 px-5 border border-dark rounded" style={{ backgroundColor: "#ced6e0" }}>

            <h3>Reviews</h3>

            <img className="mt-3" src={reviews?.data?.data?.results[1]?.author_details?.avatar_path?.slice(1)} alt="" />

            <h6> Author:
                {
                    reviews?.data?.data?.results[1]?.author
                }
            </h6>



            <p>
                {reviews?.data?.data?.results[1]?.content}
            </p>
        </div>


        <div className="container mt-5 pt-4 pb-5 px-5 border border-dark rounded" style={{ backgroundColor: "#a4b0be" }}>

            <h3>Recommendations</h3>

            <Slider {...recomSettings}>

                {
                    recommendations?.data?.data?.results.map((item, index) => {
                        return <>
                            {/* <div className="card" style={{ backgroundColor: "lightblue", height: "400px" }}>
                                <img className="mt-5 ms-5 card-img-top" src={item.poster_path ? `https://image.tmdb.org/t/p/w300${item.poster_path}` : "https://www.freeiconspng.com/uploads/no-image-icon-15.png"} style={{ height: "200px" }} alt="" />
                                <div className="card-body">
                                    <h5 key={index} className="mt-2 ms-5 card-title">{item.original_title}</h5>
                                </div>
                            </div> */}
                            <div className="mx-4 mt-3">
                                <img className="mt-5 ms-5" src={item.poster_path ? `https://image.tmdb.org/t/p/w300${item.poster_path}` : "https://www.freeiconspng.com/uploads/no-image-icon-15.png"} style={{ height: "200px" }} alt="" />
                                <h5 key={index} className="mt-2 ms-5">{item.original_title}</h5>
                            </div>
                        </>
                    }



                    )
                }


            </Slider>
        </div>
    </>

};

export default Detail;