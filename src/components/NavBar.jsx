import { useSelector } from "react-redux";
import { useParams , Link } from "react-router-dom";

const NavBar = () => {
    const { id } = useParams();
    const user = useSelector((state) => state.userStore.find((el) => el.id === id));

    if (!user) {
        return null;
    }

    if (!user.admin) {

        return(
            <>
                <nav className="w-screen flex justify-evenly">
                    <Link to={`/profile/${id}`}>Profile</Link>
                    <Link to={`/modify-color/${id}`}>Modify Color</Link>
                </nav>
            </>
        )
    }else{
        return(
            <>
                <nav className="w-screen flex justify-evenly">
                    <Link to={`/profile/${id}`}>Profile</Link>
                    <Link to={`/modify-color/${id}`}>Modify Color</Link>
                    <Link to={`/add-user`}>Add Users</Link>
                    <Link to={`/users-list`}>Users List</Link>
                </nav>
            </>
        )
    }
}

export default NavBar