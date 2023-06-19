import { useNavigate } from "react-router-dom";
import { login } from "../../services/usersService";
import { setCookie } from "../../helpers/cookie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";




function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email =  e.target[0].value;
        const password = e.target[1].value;
        const response = await login(email, password);
        if(response.length > 0){
            setCookie("id", response[0].id, 1);
            setCookie("fullname", response[0].fullname, 1);
            setCookie("email", response[0].email, 1);
            setCookie("token", response[0].token, 1);
            navigate("/");
            console.log(response);
            dispatch(checkLogin(true));
        }
        else {
            alert("Sai tai khoan hoac mat khau");
        }
    }
    return(
        <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit} >
                <div>
                <input type="email" placeholder="nhap email" />
                </div>
                <div>
                    <input type="password" placeholder="nhap mat khau" />
                </div>
                <button type="submit"  >Login</button>
            </form>
        </>
    )
}
export default Login;