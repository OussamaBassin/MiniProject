import { useState } from "react";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import FetchUsers from "./FetchUsers";


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
        <div className="w-full h-2/3 p-8 flex flex-col justify-between  ">
            <h1 className="text-3xl text-black font-bold">Login</h1>
            <Input type="email" name="email" placeholder="Email"  onChange={handleChange}  value={loginInfo.email} className=" bg-white text-gray-700"/>
            <Input type="password" name="password" placeholder="Password" onChange={handleChange} value={loginInfo.password}  className=" bg-white text-gray-700"/>
            <Button className="w-1/4 bg-orange-500 hover:bg-orange-700" onClick={handleSubmit}>Login</Button>
            <p className="text-black">You don't have an account ?  <Link to='/create-account' className="text-blue-500 hover:text-blue-900 underline">create one</Link></p>
        </div>
        </>
    )
}

export default LoginForm