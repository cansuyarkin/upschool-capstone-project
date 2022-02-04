import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { userLogin, userLogout } from "../../reduxStore/user";
import { FormStyle, InputStyle, LoginButton } from "../../styledComponents/styledLogin";

function Login() {

    const { user } = useSelector(state => state);

    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const navigate = useNavigate();


    // const handlePassword = () => {
    //     var pw = document.getElementById("passwordArea");
    //     if (pw.type === "password") {
    //         pw.type = "text"
    //     }

    //     else {
    //         pw.type = "password";
    //     }
    // }


    // useEffect(() => {
    //     if (user.userLogin) {
    //         (navigate("/"))
    //     }
    // }, [user, navigate]
    // );




    return <>

        <FormStyle>
            <InputStyle id="username" type="username" onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <InputStyle id="password" type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <LoginButton onClick={(e) => {
                e.preventDefault();

                dispatch(userLogin(username, password))

            }}>Log In</LoginButton>

            {/* <input type="checkbox" onClick={handlePassword}>Show Password</input> */}

            <button className="btn btn-secondary mt-3" onClick={() => dispatch(userLogout())}>Log out</button>

        </FormStyle>

        
        {console.log(password)}
        {console.log("user:::", user)}
        {console.log("login", user.userLogin)}




    </>

};

export default Login;