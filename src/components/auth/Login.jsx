import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/Constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';
import Footer from '../Footer.jsx';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    
    const { loading } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submitData = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            });
            if (res.data.success) {
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center p-4 mx-auto max-w-7xl'>
                <form onSubmit={submitData} className='w-full max-w-md border border-gray-200 rounded-md p-4 bg-white'>
                    <h1 className='font-bold text-xl mb-5 text-center text-blue-800'>Login</h1>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input type="text" value={input.email} placeholder="sharma@gmail.com" onChange={changeEventHandler} name="email" />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input type="password" value={input.password} placeholder="****" onChange={changeEventHandler} name="password" />
                    </div>
                    <div className='my-4'>
                        <RadioGroup className="flex flex-col sm:flex-row items-start gap-4">
                            <div className="flex items-center space-x-2">
                                <Input type="radio" name="role" value="user" checked={input.role === 'user'} className="cursor-pointer" onChange={changeEventHandler} />
                                <Label htmlFor="r1">User</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input type="radio" name="role" value="admin" checked={input.role === 'admin'} className="cursor-pointer" onChange={changeEventHandler} />
                                <Label htmlFor="r2">Admin</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    {loading ? (
                        <Button className="w-full my-4" disabled>
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
                        </Button>
                    ) : (
                        <Button type="submit" className="w-full my-4 bg-blue-500 hover:bg-blue-800">Login</Button>
                    )}
                    <div className='text-center'>
                        <span>Don't have an account? <Link to="/signup" className="text-blue-700 underline">Signup</Link></span>
                    </div>
                </form>
            </div>
            <br/><br/>
            <Footer/>
        </>
    );
};

export default Login;
