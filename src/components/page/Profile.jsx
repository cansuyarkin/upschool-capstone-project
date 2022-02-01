function Profile() {

    return <>
    <div className="container">
    <h3>Users Results</h3>

    <div className="col-4 mt-3 mb-3 py-5 px-3">
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue="DEFAULT" >Filter By</option>
                        <option defaultValue="original_title.asc">Closest Release Date</option>
                        <option defaultValue="2">Favorites</option>
                        <option defaultValue="3">Seenlist</option>
                    </select>
                </div>

    </div>
    
    </>
    
};

export default Profile;