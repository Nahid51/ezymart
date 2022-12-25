import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { BsFacebook, BsGoogle } from "react-icons/bs";
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { createUser } from '../../features/auth/authSlice';
// import { AiFillGoogleCircle } from "react-icons/ai";

const Register = () => {
    const { handleSubmit, register, reset, control } = useForm();
    const password = useWatch({ control, name: "password" });
    const confirmPassword = useWatch({ control, name: "confirmPassword" });
    const [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch()

    useEffect(() => {
        if (
            password !== undefined &&
            password !== "" &&
            confirmPassword !== undefined &&
            confirmPassword !== "" &&
            password === confirmPassword
        ) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [password, confirmPassword]);

    const onSubmit = (data) => {
        dispatch(createUser({ email: data.email, password: data.password }));
    };

    return (
        <div>
            <Head>
                <title>ezymart | Register</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='row'>
                <div className='col-12 col-lg-6'>
                    <img className='w-100' src="https://i.ibb.co/BNcycST/login.jpg" alt='' />
                </div>
                <div className='row col-12 col-lg-6'>
                    <div className='w-75 mx-auto my-auto'>
                        <div className='p-5 rounded-4' style={{ backgroundColor: "#E1E1E1" }}>
                            <h2 className='border-bottom border-dark'>Sign in</h2>
                            <small>Already a member? <Link href="/login" className='text-primary text-decoration-none'>Sign in</Link></small>
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="d-flex flex-column mt-3"

                            >
                                <div className='d-flex flex-column mb-2'>
                                    <label htmlFor="username" className='mb-1'><small>Username</small></label>
                                    <input
                                        type="text"
                                        name='username'
                                        id='username'
                                        className='p-2 rounded'
                                        placeholder='John Doe'
                                        {...register("username", { required: true, maxLength: 20 })}
                                    />
                                </div>
                                <div className='d-flex flex-column mb-2'>
                                    <label htmlFor="email" className='mb-1'><small>Email</small></label>
                                    <input
                                        type="email"
                                        name='email'
                                        id='email'
                                        className='p-2 rounded'
                                        placeholder='name@gmail.com'
                                        {...register("email", { required: true, maxLength: 20 })}
                                    />
                                </div>
                                <div className='d-flex flex-column mb-2'>
                                    <label htmlFor="password" className='mb-1'><small>Password</small></label>
                                    <input
                                        type="password"
                                        name='password'
                                        id='password'
                                        className='p-2 rounded'
                                        placeholder='example: C1rr!5R&2'
                                        {...register("password", { required: true, maxLength: 20 })}
                                    />
                                </div>
                                <div className='d-flex flex-column mb-2'>
                                    <label htmlFor="confirm-password" className='mb-1'><small>Confirm Password</small></label>
                                    <input
                                        type="password"
                                        id='confirm-password'
                                        className='p-2 rounded'
                                        placeholder='example: C1rr!5R&2'
                                        {...register("confirmPassword", { required: true, maxLength: 20 })}
                                    />
                                </div>
                                <Button
                                    type='submit'
                                    variant='primary'
                                    disabled={disabled}
                                >
                                    <small>Create an account</small>
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;