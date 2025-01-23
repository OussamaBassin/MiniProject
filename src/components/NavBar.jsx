import { useSelector } from "react-redux";
import { useParams , Link ,useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const NavBar = () => {
    const { id } = useParams();
    const user = useSelector((state) => state.userStore.find((el) => parseInt(el.id) === parseInt(id)));
    const color = user.couleur;
    const navigate = useNavigate();

    if (!user) {
        console.log(id)
        return null;
    }

    if (!user.admin) {

        return(
            <>
                <nav className="w-screen py-5 items-center flex justify-evenly text-white font-semibold" style={{backgroundColor: color}}>
                    <Link to={`/profile/${id}`}>Profile</Link>
                    <Link to={`/modify-color/${id}`}>Modify Color</Link>
                    <Button onClick={()=>navigate('/')}>Log Out</Button>
                </nav>
            </>
        )
    }else{
        return(
            <>
                <nav className="w-screen py-5 items-center  flex justify-evenly  text-white font-semibold" style={{backgroundColor:color}}>
                    <Link to={`/profile/${id}`}>Profile</Link>
                    <Link to={`/modify-color/${id}`}>Modify Color</Link>
                    <Link to={`/add-user/${id}`}>Add Users</Link>
                    <Link to={`/users-list/${id}`}>Users List</Link>
                    <Button onClick={()=>navigate('/')}>Log Out</Button>
                </nav>
            </>
        )
    }
}

export default NavBar