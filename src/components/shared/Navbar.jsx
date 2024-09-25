import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import React from 'react';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const user = false; // Replace this with your actual user authentication logic

  return (
    <div className='bg-white shadow-md '>
      <div className='flex items-center justify-between px-4 lg:px-8 mx-auto max-w-7xl h-16 cursor-pointer '>
        <Link to='/'><h1 className='text-xl lg:text-2xl font-bold'>
          Tech<span className='text-xl lg:text-2xl font-bold text-blue-500'>Guide</span>
        </h1></Link>
        
        <div className='flex items-center gap-4 lg:gap-12'>
          {/* Navigation menu */}
          <ul className='hidden lg:flex font-medium items-center gap-5'>
          <Link to="/">Home</Link> 
                 <Link to="/findprojects"><li>Find projects</li></Link>
                 <Link to="/resume"><li>Resume</li></Link>
                 <Link to="/coverletter"><li>Cover letter</li></Link>
                 <Link to="/news"><li>Tech news</li></Link>
          </ul>

          {/* Mobile Menu Trigger */}
          <div className='lg:hidden'>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4">
                <ul className='flex flex-col font-medium space-y-3'>
                 <Link to="/">Home</Link> 
                 <Link to="/findprojects"><li>Find projects</li></Link>
                 <Link to="/resume"><li>Resume</li></Link>
                 <Link to="/coverletter"><li>Cover letter</li></Link>
                 <Link to="/news"><li>Tech news</li></Link>
                </ul>
              </PopoverContent>
            </Popover>
          </div>

          {!user ? (
            <div className='flex items-center gap-2'>
              <Link to="/login">
                <Button variant="outline" size="sm" className="lg:text-base text-sm">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-blue-500 text-white hover:bg-blue-800 text-sm lg:text-base" size="sm">Signup</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  <AvatarFallback>DS</AvatarFallback> {/* Fallback for when image is not available */}
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className='flex gap-4'>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>DS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className='font-md'>Diya Singh</h4>
                    <p className='text-sm text-muted-foreground'>Hello</p>
                  </div>
                </div>
                <div className='flex flex-col my-2 text-gray-600'>
                  <div className='flex items-center gap-2 cursor-pointer'>
                    <User2 />
                    <Button variant="link" size="sm">View Profile</Button>
                  </div>
                  <div className='flex items-center gap-2 cursor-pointer'>
                    <LogOut />
                    <Button variant="link" size="sm">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
