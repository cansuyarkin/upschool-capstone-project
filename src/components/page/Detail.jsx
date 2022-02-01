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
    // console.log("new:", detail?.data?.data)
    console.log("credits", credits)
    console.log("review", reviews)
    console.log("rec", recommendations)

    const jobs = ["director", "producer"]

    return <>
        <div className="container border border-dark p-5 bg-light">
            <div className="row">
                <div className="col-4">
                    <img src={detail?.data?.data.poster_path ? `https://image.tmdb.org/t/p/w300${detail?.data?.data.poster_path}` : "https://www.freeiconspng.com/uploads/no-image-icon-15.png"} alt="" />
                </div>
                <div className="col-8">
                    <h4>{detail?.data?.data?.title}</h4>
                    <h6>{detail?.data?.data?.release_date}</h6>
                    <p>{detail?.data?.data?.overview}</p>
                    {
                        credits?.data?.data?.crew.filter(item => jobs.includes(item.job.toLowerCase())).map((item, index) => <h6>{item.job}: {item.name}</h6>)
                    }

                </div>
            </div>
        </div>

        <div className="container">
            <h3 className="mt-5">Film Cast</h3>
        </div>

        <div className="container mt-5 p-3" style={{backgroundColor: "#f5f6fa"}}>
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

        <div className="container mt-5">
            <h3>Reviews</h3>
        </div>

        <div className="container mt-3" style={{ backgroundColor: "lightblue" }}>

            <img className="mt-3" src={reviews?.data?.data?.results[0]?.author_details?.avatar_path?.slice(1)} alt="" />

            <h6> Author:
                {
                    reviews?.data?.data?.results[0]?.author
                }
            </h6>



            <p>
                {reviews?.data?.data?.results[0]?.content}
            </p>
        </div>

        <div className="container">
            <h3>Recommendations</h3>
        </div>

        <div className="container mt-3" style={{ backgroundColor: "lightpink" }}>

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