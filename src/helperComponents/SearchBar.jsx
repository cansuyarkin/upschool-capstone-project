import { DebounceInput } from "react-debounce-input";
import { useDispatch } from "react-redux";
import { searchHandle } from "../reduxStore/searchHandle";

function SearchBar() {
    const dispatch = useDispatch();
    
    // const handleReset = () => {
    //     changeFunc("");
    //   };

    //   const changeFunc = (event) => {
    //     dispatch(searchHandle(event.target.value))
    //   };
    
    
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
                    }}
                    placeholder="Search a movie"
                />
                </div>
                <div className="col-6">
                    <button className=" btn btn-outline-secondary">Reset</button>
                </div>
            </div>
        </>
    );
};

export default SearchBar;