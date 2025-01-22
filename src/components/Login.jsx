import { useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from "./ui/button";
import { Input } from "./ui/input";


const LoginForm = () => {
    const globalUser = useSelector((state) => state.userStore);
    const [loginInfo , setLoginInfo] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) =>{
        const { name, value } = e.target;
        setLoginInfo((prev) => ({ ...prev, [name]: value }));
    }
    const handleSubmit = () =>{
        const user = globalUser.find(
          (element) =>
            element &&
            element.email === loginInfo.email &&
            element.MotDePasse === loginInfo.password
        );

        if(user){
            console.log(user);
            setLoginInfo({ email: "", password: "" });
            navigate(`/accueil/${user.id}`);
        }

    };


    return (
        <>
        <div className="w-1/2 h-60 bg-gray-800 p-10 flex flex-col justify-between  ">
            <Input type="email" name="email" placeholder="Email"  onChange={handleChange}  value={loginInfo.email} className="w-1/2 bg-white text-gray-700"/>
            <Input type="password" name="password" placeholder="Password" onChange={handleChange} value={loginInfo.password}  className="w-1/2 bg-white text-gray-700"/>
            <Button className="w-1/4 bg-orange-500 hover:bg-orange-700" onClick={handleSubmit}>Login</Button>
        </div>
        </>
    )
}

export default LoginForm