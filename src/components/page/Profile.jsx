import { useDispatch, useSelector } from "react-redux";

function Profile() {

    const { user } = useSelector(state => state);

    const dispatch = useDispatch();

    console.log(user.username)

    console.log(user.password)

    console.log(user.socials)

    console.log("count", user.seenList.totalCount)

    return <>
        <div className="container">
            <h3>Users Results</h3>

            <img src={user.avatarUrl} alt="" />
            <h4>{user.username}</h4>
            <p>Join Date: {user.joinDate}</p>

            <ul className='list'>
              <li> Seen Movies: {user.seenList.totalCount} </li>
              <li> Favorite Movies: {user.favorites.totalCount} </li>
            </ul>
    {/* <h6>Seen Movies: {user.seenList.totalCount}</h6> */}
    {/* <h6>Favorite Movies: {user.favoriteList.totalCount}</h6> */}
    



            <div className="col-4 mt-3 mb-3 py-5 px-3">
                <select className="form-select" aria-label="Default select example">
                    <option value="DEFAULT" >Filter By</option>
                    <option value="closest_release_date">Closest Release Date</option>
                    <option value="favorites">Favorites</option>
                    <option value="seen">Seenlist</option>
                </select>
            </div>

        </div>

    </>

};

export default Profile;