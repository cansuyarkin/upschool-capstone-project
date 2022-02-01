import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../reduxStore/user";
import { FormStyle, InputStyle, LoginButton } from "../../styledComponents/styledLogin";

function Login() {

    const { user } = useSelector(state => state);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    // const handleSubmit = e => {
    //     e.preventDefault();
    //     if (
    //         e.target.username.value === user.username

    //     ) {

    //     }
    // };

    // const handleChange = e => {
    //     e.preventDefault();
    // }

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
        <h1>Login</h1>
        <FormStyle>
            <InputStyle id="username" type="username" onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <InputStyle id="password" type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <LoginButton onClick={(e) => {
                e.preventDefault();
                dispatch(userLogin(username, password))
            }}>Log In</LoginButton>

            {/* <input type="checkbox" onClick={handlePassword}>Show Password</input> */}
        </FormStyle>
        {console.log(username)}
        {console.log(user)}
    </>

};

export default Login;