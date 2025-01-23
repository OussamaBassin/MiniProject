
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const Accueil = () => {

  const {id} = useParams();
  const user = useSelector((state) => state.userStore.find((el) => parseInt(el.id) === parseInt(id) ));

  if (!user){
    return <p>no user {console.log(user)}</p>
  }
  return (
    <>
      <div className='h-full w-full flex justify-center items-center'>
      <h1 className='font-bold text-4xl text-center '>Welcome back <span style={{color:user.couleur}}>{user.nom} {user.prenom}</span> your fave color is <span style={{color:user.couleur}}>{user.couleur}</span> </h1>
      </div>
    
    </>
  )
}

export default Accueil