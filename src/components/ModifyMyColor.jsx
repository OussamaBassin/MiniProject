import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { modifyColor } from '@/redux/userSlice';
import { Button } from './ui/button';
const ModifyMyColor = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const [color,setColor] = useState('');
  const dispatch = useDispatch(); 
  const user = useSelector((state) => state.userStore.find((el) => parseInt(el.id) == parseInt(id) ));
  const handleChange = (e) =>{
    setColor(e.target.value)
  }


  return (
    <div className='flex gap-2'>
      <select className=' py-1.5 px-0.5 rounded-sm ' value={color} onChange={handleChange}>
        <option value="" >Select a color</option>
        <option value="#EB5A0C" >orange</option>
        <option value="#00008B">dark-blue</option>
        <option value="#555555">gray</option>
        <option value="#FF0000">red</option>
        <option value="#00FF00">green</option>
      </select>
      <Button onClick={()=>{dispatch(modifyColor({id:user.id, couleur: color})); navigate(`/accueil/${id}`)}}>Change</Button>
    </div>
  )
}

export default ModifyMyColor;