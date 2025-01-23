
import { useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import { Button } from './ui/button';

const UsersList = () => {
  const {id} = useParams();
  const globalUser = useSelector((state) => state.userStore);
  const navigate = useNavigate();
  const showDetails = (id) =>{
    navigate(`/show-details/${id}`);
    console.log(id)
  }

  return (
    <>
      <main className='w-full h-full py-2 flex flex-col items-center gap-2'>
      <Button onClick={() => navigate(`/accueil/${id}`)} >
                go Back
      </Button>
      <div className='flex flex-wrap h-full w-full justify-center gap-2 overflow-x-hidden'>
        {globalUser.map((el) => {
          return ( 
            <div className='w-1/4 bg-orange-700 p-2 rounded-md text-white space-y-2'> 
              <p>{el.nom}</p>
              <p>{el.prenom}</p>
              <p>{el.email}</p>
              <p>{el.id}</p>
              <Button onClick={() => showDetails(el.id)}>
                Show Details
              </Button>
            </div>
          );
        })}
      </div>
      </main>
    </>
  );
};

export default UsersList;
