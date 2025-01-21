import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFetchedUsers } from '../redux/userSlice';


const FetchUsers = () => {
    
    const dispatch = useDispatch();
    const FetchData = async () => {
        try {
            const response = await axios.get('https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire');
            
            response.data.map((element) => {
                dispatch(addFetchedUsers(element));
            });
            console.log(response.data)

            
        } catch (error) {
            console.log(`we caught an error ${error}`);
        }
    } 
    useEffect(() =>{ 
        FetchData();
    },[]);
    return null ;
}

export default FetchUsers;