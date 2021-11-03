import react from "react";
import './Components.css'
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';

function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }; // your form submit function which will invoke after successful validation

    console.log(watch("example")); // you can watch individual input by pass the name of the input

    return (
        <div className='loginBg'>
            <form onSubmit={handleSubmit(onSubmit)} className='loginBox'>
                <div className='login'>
                    <h1>Login</h1>
                    <input defaultValue="Username" {...register("example")} />
                    <input defaultValue="Password" {...register("exampleRequired", { required: true })} />
                    {errors.exampleRequired && <p>This field is required</p>}
                    <Button className='gradientLogin' type="submit"><b>SUBMIT</b></Button>
                </div>
            </form>
        </div>
    )
}

export default Login;