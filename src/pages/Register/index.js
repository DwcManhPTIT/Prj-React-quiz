import { Await, useNavigate } from "react-router-dom";
import { setCookie } from "../../helpers/cookie";
import { checkExits, register } from "../../services/usersService";
import generateRandomToken from "../../helpers/generateRandomToken";

function Register() {
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullname = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        const checkEmail = await checkExits("email", email);

        if (checkEmail.length>0) {
            alert("Tai khoan da ton tai");
        }
        else {
            const options = {
                "fullName": fullname,
                "email": email,
                "password": password,
                "token": generateRandomToken(20),
            }
            const response = await register(options);

            if (response) {

                navigate("/login");
                console.log(response);

            }
            else {
                alert("Dang ki that bai");
            }
        }



    }
    return (
        <>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} >
                <div>
                    <input type="fullname" placeholder="Nhap ho va ten" />
                </div>
                <div>
                    <input type="email" placeholder="Nhap email" />
                </div>
                <div>
                    <input type="password" placeholder="Nhap mat khau" />
                </div>
                <button type="submit"  >Register</button>
            </form>
        </>
    )
}
export default Register;