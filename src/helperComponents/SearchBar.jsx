import { DebounceInput } from "react-debounce-input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchHandle } from "../reduxStore/searchHandle";

function SearchBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <>
            <div className="row my-5">
                <div className="col-6">
                <DebounceInput 
                    name="qInput"
                    type="text"
                    id="search"
                    className="form-control"
                    debounceTimeout={300}
                    onChange= { (event) => {
                        dispatch(searchHandle(event.target.value))
                        // navigate(`/search?q=${event.target.value}`)
                    }}
                    placeholder="Search a movie"
                />
                </div>
            </div>
        </>
    );
};

export default SearchBar;