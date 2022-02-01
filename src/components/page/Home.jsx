import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiscover, fetchTrending } from "../../api";
import Card from "../../helperComponents/Card";
import Search from "../../helperComponents/Search";
import SearchBar from "../../helperComponents/SearchBar";
import { timewindowChange } from "../../reduxStore/trending";
import { Button } from "../../styledComponents/styledButton";
import Slider from "react-slick";
import { settings } from "../../helperComponents/slider";

function Home() {

    const { search, trend } = useSelector(state => state)

    const dispatch = useDispatch();

    const discoverMovie = useQuery("discover movie", fetchDiscover, {
        retry: false,
        select: (data) => data.data.results
    });

    const trendingMovie = useQuery(["trend movie", trend],
        () => fetchTrending(trend),
        {
            retry: false,
            select: (data) => data.data.results,
        }
    )

    console.log("discover::", discoverMovie)

    return <>
        
        <div className="container">
            <SearchBar />
            {
                search !== "" ? (
                    <Search />
                ) : (
                    <>

                        <h3>Discover</h3>
                        
                        <div className="row">
                            <Card data={discoverMovie?.data} />
                        </div>
                        
                        <div className="m-2">

                            <h3>Trending</h3>

                            <div className="btn-group">

                                <Button
                                    className={`btn btn-warning ${trend === "day" ? "active" : null}`}
                                    onClick={() => dispatch(timewindowChange("day"))}
                                >
                                    Today
                                </Button>

                                <Button
                                    className={`btn btn-warning ${trend === "week" ? "active" : null}`}
                                    onClick={() => dispatch(timewindowChange("week"))}
                                >
                                    Last Week
                                </Button>
                            </div>

                            <div className="row">
                                <Card data={trendingMovie?.data} />
                            </div>


                        </div>


                        <br />



                    </>
                )
            }

        </div>
    </>

};

export default Home;