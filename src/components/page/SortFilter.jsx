import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchGenres } from "../../api";
import { getGenres } from "../../reduxStore/genres";
import { useDispatch, useSelector } from "react-redux";


function SortFilter() {

    const type = useParams();

    console.log(type);

    const dispatch = useDispatch();
    const { genres } = useSelector(state => state);

    const genresQuery = useQuery("genre", () => fetchGenres, {
        reply: false
    })

    console.log("genres:", genresQuery)

    genresQuery?.data?.then((item) =>
        dispatch(getGenres(item?.data?.genres))
    );

    return <>
        <div className="container">

            <h1>Sort-Filter</h1>
            
            <div className="row mt-5">
                <div className="col-4">
                    <select className="form-select" aria-label="Default select example" onChange={(e) => dispatch((e.target.options[e.target.selectedIndex].value))}>
                        <option defaultValue="DEFAULT" >Sort By</option>
                        <option defaultValue="original_title.asc">A to Z</option>
                        <option defaultValue="2">Z to A</option>
                        <option defaultValue="3">Most Popular</option>
                        <option defaultValue="4">Least Popular</option>
                        <option defaultValue="5">Newest Released</option>
                        <option defaultValue="6">Oldest Released</option>
                    </select>
                </div>

            </div>
            <div className="row mt-5">
                {
                    genres?.map(item =>
                        <h5>{item.name}</h5>
                    )
                }
            </div>
        </div>
    </>

};

export default SortFilter;