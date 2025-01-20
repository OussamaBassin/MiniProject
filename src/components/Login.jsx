import { useState } from "react";
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from "./ui/button";
import { Input } from "./ui/input";


const LoginForm = () => {
    const globalUser = useSelector((state) => state.userStore);
    const [loginInfo , setLoginInfo] = useState({});
    // const navigate = useNavigate();
    const handleChange = (e) =>{
        setLoginInfo(e.target.value)
    }
    const handleSubmit = () =>{
        globalUser.map(element => {
            if(element.email === loginInfo.email && element.MotDePasse === loginInfo.password){
                // navigate('/');
                setLoginInfo('');
                console.log(element);
            }
            else{
                alert('Your email or password are incorrect')
            }
            
        });
    }

    return (
        <>
        <div className="w-1/2 h-60 bg-gray-800 p-10 flex flex-col justify-between  ">
            <Input type="email" placeholder="Email"  onChange={handleChange} value={loginInfo.email} className="w-1/2 bg-white text-gray-700"/>
            <Input type="password" placeholder="Password" onChange={handleChange} value={loginInfo.password} className="w-1/2 bg-white text-gray-700"/>
            <Button className="w-1/4 bg-orange-500 hover:bg-orange-700" onClick={handleSubmit}>Login</Button>
        </div>
        </>
    )
}

export default LoginForm