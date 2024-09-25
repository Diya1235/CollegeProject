import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/Constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';
import Footer from '../Footer';

const Sign = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        password: "",
        phone: "",
        role: "",
        file: ""
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const changeFilehandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    };
    
    const { loading } = useSelector(store => store.auth);
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("password", input.password);
        formData.append("phone", input.phone);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            });
            if (res.data.success) {
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto p-4'>
                <form onSubmit={submitHandler} className='w-full max-w-md border border-gray-200 rounded-md p-4 bg-white'>
                    <h1 className='font-bold text-xl mb-5 text-center text-blue-700'>Signup</h1>
                    <div className='my-2'>
                        <Label>Full Name</Label>
                        <Input type="text" value={input.fullname} name="fullname" placeholder="Rohit Sharma" onChange={changeEventHandler} />
                    </div>
                    <div className='my-2'>
                        <Label>Email</Label>
                        <Input type="text" value={input.email} name="email" placeholder="sharma@gmail.com" onChange={changeEventHandler} />
                    </div>
                    <div className='my-2'>
                        <Label>Phone</Label>
                        <Input type="text" value={input.phone} name="phone" placeholder="8684XXXXXX" onChange={changeEventHandler} />
                    </div>
                    <div className='my-2'>
                        <Label>Password</Label>
                        <Input type="password" value={input.password} name="password" placeholder="****" onChange={changeEventHandler} />
                    </div>
                    <div className='my-4'>
                        <RadioGroup className="flex flex-col sm:flex-row items-start gap-4">
                            <div className="flex items-center space-x-2">
                                <Input type="radio" name="role" value="user" className="cursor-pointer" checked={input.role === 'user'} onChange={changeEventHandler} />
                                <Label>User</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input type="radio" name="role" value="admin" className="cursor-pointer" checked={input.role === 'admin'} onChange={changeEventHandler} />
                                <Label>Admin</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className='my-4 flex flex-col sm:flex-row items-center gap-2'>
                        <Label className='mb-2 sm:mb-0'>Profile</Label>
                        <Input accept="image/*" onChange={changeFilehandler} type="file" className="cursor-pointer" />
                    </div>
                    {loading ? (
                        <Button className="w-full my-4" disabled>
                            <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please wait
                        </Button>
                    ) : (
                        <Button type="submit" className="w-full my-4 bg-blue-500 hover:bg-blue-800">Signup</Button>
                    )}
                    <div className='text-center'>
                        <span>Already have an account? <Link to="/login" className="text-blue-700 underline">Login</Link></span>
                    </div>
                </form>
            </div>
            <Footer/>
        </>
    );
};

export default Sign;
