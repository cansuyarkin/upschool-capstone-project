import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchGenres } from "../../api";
import { getGenres } from "../../reduxStore/genres";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import DatePicker from "react-datepicker";

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

   
    const [startDate, setStartDate] = useState(new Date());
       
          
       

    return <>
        <div className="container">



            <div className="row">
                <div className="col-4 border border-dark rounded mt-3 mb-3 py-5 px-3">
                    <select className="form-select" aria-label="Default select example" onChange={(e) => dispatch((e.target.options[e.target.selectedIndex].value))}>
                        <option value="DEFAULT" >Sort By</option>
                        <option value="original_title.asc">A to Z</option>
                        <option value="original_title.desc">Z to A</option>
                        <option value="popularity.desc">Most Popular</option>
                        <option value="popularity.asc">Least Popular</option>
                        <option value="release_date.desc">Newest Released</option>
                        <option value="release_date.asc">Oldest Released</option>
                    </select>
                </div>

            </div>

            <div className="row mt-5">

                <div className="col-4 border border-dark rounded p-5">
                    <h3>Filter By</h3>
                    <h5>From:</h5>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    <h5 className="mt-2">To:</h5>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    {
                        genres?.map((item, index) =>
                            <button key={index} className="btn btn-secondary mt-3 mx-2">{item.name}</button>
                        )
                    }

                </div>

            </div>
        </div>
    </>

};

export default SortFilter;