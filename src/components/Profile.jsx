import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from './ui/button';
import { useNavigate , useParams } from 'react-router-dom';

const Profile = () => {
  const {id} = useParams();
  const user = useSelector((state) => state.userStore.find((el) => el.id===id));
  const navigate = useNavigate();
  return (
    <>
    <div>
      <p>Name : {user.nom}</p> <br />
      <p>Last Name: {user.prenom}</p> <br />
      <p>Email : {user.email}</p> <br />
      <Button onClick={()=>{navigate(`/accueil/${id}`)}}>Go back</Button>
    </div>
    </>
  )
}

export default Profile