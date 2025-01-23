import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from './ui/button';
import { useNavigate , useParams } from 'react-router-dom';

const Profile = () => {
  const {id} = useParams();
  const user = useSelector((state) => state.userStore.find((el) => el.id==id));
  const navigate = useNavigate();
  return (
    <>
    <div className='w-full h-full flex items-center justify-center'>
      <div className='bg-orange-600 p-4 rounded-sm flex flex-col items-center text-white font-medium drop-shadow-sm'>
      <p>Name : {user.nom}</p> <br />
      <p>Last Name: {user.prenom}</p> <br />
      <p>Email : {user.email}</p> <br />
      <Button onClick={()=>{navigate(`/accueil/${id}`)}}>Go back</Button>
      </div>
    </div>
    </>
  )
}

export default Profile