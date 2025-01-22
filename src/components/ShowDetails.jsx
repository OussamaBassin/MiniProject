import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import { useParams , useNavigate} from "react-router-dom";

const ShowDetails = () => {
    const {id} = useParams();
    const user = useSelector((state) => state.userStore.find((el) => el.id === id ));
    const navigate = useNavigate();

  return (
    <>
        <div className="w-screen flex flex-col items-center text-white">
            <section className="flex flex-col gap-1  bg-orange-700 p-5 rounded-md">
                <h1 className="text-xl font-bold text-slate-900">{user.nom} {user.prenom}</h1>
                <p>id: {user.id}</p>
                <p>nickname: {user.pseudo}</p>
                <p>curency: {user.Devise}</p>
                <p>email: {user.email}</p>
                <p>age: {user.age}</p>
                <p>pays: {user.Pays}</p>
                <p>color: {user.couleur}</p>
                <p>admin: {user.admin ? 'true' : 'false'}</p>
                <Button onClick={()=> navigate('/users-list')}>go back</Button>
            </section>
        </div>
    </>
  )
}

export default ShowDetails