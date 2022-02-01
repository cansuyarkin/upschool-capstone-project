import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { fetchSearchMovies } from "../api";
import Card from "./Card";

function Search() {

    const { search } = useSelector(state => state);

  
    const searchData = useQuery(
        ["search movies", search],
        () => fetchSearchMovies(search),
        {
            retry: false,
            select: (data) => data.data.results
        }
    );



    return (
        <>
            <h3>Search Results</h3>
            <div className="container">
                <div className="row">
                    <Card data={searchData?.data} />
                </div>
                {/* card ve pagination */}

            </div>
        </>
    )
};

export default Search;