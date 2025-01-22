
import { useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { Button } from './ui/button';

const UsersList = () => {
  const globalUser = useSelector((state) => state.userStore);
  const navigate = useNavigate();
  const showDetails = (id) =>{
    navigate(`/show-details/${id}`);
    console.log(id)
  }

  return (
    <>
      <div className='flex flex-wrap w-screen justify-center gap-2'>
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
    </>
  );
};

export default UsersList;
