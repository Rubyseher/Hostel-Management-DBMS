import React, { useState } from "react";
import './Components.css'
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router';

function Login() {
    const [redirect, setRedirect] = useState();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        if(data.username=="root" && data.password=="oreo123456")
            setRedirect("./dashboard")
            // console.log(data);
        else console.log("wrong username or password");
    }; // your form submit function which will invoke after successful validation

    if (redirect) return <Redirect push to={{ pathname: redirect }} />

    return (
        <div className='loginBg'>
            <form onSubmit={handleSubmit(onSubmit)} className='loginBox'>
                <div className='login'>
                    <h1>Login</h1>
                    <input defaultValue="Username" {...register("username", { required: true })} />
                    <input defaultValue="Password" {...register("password", { required: true })} />
                    <Button className='gradientLogin' type="submit"><b>SUBMIT</b></Button>
                </div>
            </form>
        </div>
    )
}

export default Login;