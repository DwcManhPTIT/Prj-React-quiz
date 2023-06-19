import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helpers/cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";

function Logout(){

    const navigate= useNavigate();
    deleteAllCookies();
    const dispatch = useDispatch();
    
    useEffect(() =>{
        navigate("/login");
        dispatch(checkLogin(false));
    },[])
    return(
        <>
            Page Logout
        </>
    )
}
export default Logout;