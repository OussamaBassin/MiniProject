
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
      <h1 className='font-bold text-4xl text-center '>Welcome back {user.nom} {user.prenom} your fave color is {user.couleur} </h1>
      </div>
    
    </>
  )
}

export default Accueil