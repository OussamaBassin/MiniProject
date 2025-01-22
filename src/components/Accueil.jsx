
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const Accueil = () => {

  const {id} = useParams();
  const user = useSelector((state) => state.userStore.find((el) => el.id === id ));


  return (
    <>
      <h1 className='font-bold text-4xl text-center '>Welcome back {user.nom} {user.prenom} your fave color is {user.couleur} </h1>
    
    </>
  )
}

export default Accueil