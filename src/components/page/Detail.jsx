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
    // console.log("credits", credits)
    console.log("review", reviews)
    // console.log("rec", recommendations)

    const jobs = ["director", "producer"]

    return <>
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src={detail?.data?.data.poster_path ? `https://image.tmdb.org/t/p/w300${detail?.data?.data.poster_path}` : "https://www.freeiconspng.com/uploads/no-image-icon-15.png"} alt="" />
                </div>
                <div className="col-8">
                    <h4>{detail?.data?.data?.title}</h4>
                    <h5>{detail?.data?.data?.release_date}</h5>
                    <h5>{detail?.data?.data?.overview}</h5>
                    {
                        credits?.data?.data?.crew.filter(item => jobs.includes(item.job.toLowerCase())).map((item, index) => <h5 key={index}>{item.job}: {item.name}</h5>)
                    }

                </div>
            </div>
        </div>
        <div className="container mt-5">
            <Slider {...castSettings}>

                {
                    credits?.data?.data?.cast.map((item, index) =>
                        <h5 key={index}>{item.name} - {item.character}</h5>
                    )
                }


            </Slider>
        </div>

        <div className="container mt-5" style={{ backgroundColor: "lightblue" }}>

            <h6>
                {
                    reviews?.data?.data?.results[0]?.author
                }
            </h6>
            <img src={reviews?.data?.data?.results[0]?.author_details?.avatar_path?.slice(1)} alt="" />
            
           
            <p>
                {reviews?.data?.data?.results[0]?.content}
            </p>
        </div>

        <div className="container mt-5" style={{ backgroundColor: "lightpink" }}>
            <Slider {...recomSettings}>

                {
                    recommendations?.data?.data?.results.map((item, index) =>
                        <h5 key={index}>{item.original_title}</h5>
                    )
                }


            </Slider>
        </div>
    </>

};

export default Detail;