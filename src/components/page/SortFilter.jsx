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



            <div className="row">
                <div className="col-4 border border-dark rounded mt-3 mb-3 py-5 px-3">
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

                <div className="col-4 border border-dark rounded p-5">
                    <h3>Filter By</h3>
                    <h5>From:</h5>
                    <h5>To:</h5>
                    {
                        genres?.map(item =>
                            <button className="btn btn-secondary">{item.name}</button>
                        )
                    }

                </div>

            </div>
        </div>
    </>

};

export default SortFilter;