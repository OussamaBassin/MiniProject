import { useState } from "react";
import { useDispatch , useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from "./ui/button";
import { Input } from "./ui/input";


const LoginForm = () => {



    return (
        <>
        <div className="w-42 bg-gray-800 p-10">
            <Input type="text" placeholder="Name" className="w-1/2 bg-white text-gray-700"/>
        </div>
        </>
    )
}

export default LoginForm