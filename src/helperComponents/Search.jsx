import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { fetchSearchMovies } from "../api";


function Search() {

    const { search } = useSelector(state => state);


    const { data } = useQuery(
        ["search movies", search],
        () => fetchSearchMovies(search),
        { retry: false }
    );

    console.log("data::::", data);

    return (
        <>
            {/* {
                data.map(item => {
                    <li>{item.title}</li>
                })
            } */}
        </>
    )
};

export default Search;