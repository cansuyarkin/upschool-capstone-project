import {  useSelector } from "react-redux";

function Profile() {

    const { user } = useSelector(state => state);

    // const dispatch = useDispatch();

    console.log(user.username)

    console.log(user.password)

    console.log(user.socials)

    console.log("count", user.seenList.totalCount)

    return <>
        <div className="container">
            <div className="col-4">
                <h3 className="mt-5">Users Results</h3>

                <img src={user.avatarUrl} alt="" className="mt-3" />
                <h4 className="mt-3">{user.username}</h4>
                <p>Join Date: {user.joinDate}</p>

                <ul className='list'>
                    <li> Seen Movies: {user.seenList.totalCount} </li>
                    <li> Favorite Movies: {user.favorites.totalCount} </li>
                </ul>
            </div>

            <div className="col-sm-6">
                <form>
                    <h3 className="mt-5"> Filter By </h3>
                    <select id="myList" className="form-select" aria-label="Default select example">
                        <option value="DEFAULT"> Closest release date</option>
                        <option> Favorites </option>
                        <option> Seenlist </option>
                    </select>
                </form>

                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th className="text-muted" scope="col"><h5>Film Id</h5></th>
                            <th className="text-muted" scope="col"><h5>Film Title</h5></th>
                            <th className="text-muted" scope="col"><h5>Film Genre</h5></th>
                            <th className="text-muted" scope="col"><h5>Icons Actions</h5></th>
                        </tr>
                    </thead>

                    <tbody >


                    </tbody>
                </table>


            </div>

            {/* <h6>Seen Movies: {user.seenList.totalCount}</h6> */}
            {/* <h6>Favorite Movies: {user.favoriteList.totalCount}</h6> */}











        </div>

    </>

};

export default Profile;