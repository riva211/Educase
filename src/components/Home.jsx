import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
        <div className=''>
            <div className='w-full flex flex-col justify-end h-screen max-w-md p-6 bg-[#F7F8F9] shadow-md'>
           

                <div className=' font '>
                    <h1 className='text-[28px]  font-semibold  text-[#1D2226]'>Welcome to Popx</h1>
                    <p className='text-[#1D2226] text-warp w-3/5 opacity-[0.6] mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div className='mt-6 font space-y-4'>
                    <button 
                        className='w-full bg-[#7641df] hover:bg-[#613ea7] text-white text-[16px] font-medium  py-3 rounded-lg cursor-pointer'
                        onClick={() => navigate('/register')}
                    >
                        Create Account
                    </button>

                    <button 
                        className='w-full bg-[#6C25FF4B] hover:bg-[#E70B897B] text-black font-medium py-3 rounded-lg cursor-pointer'
                        onClick={() => navigate('/login')}
                    >
                        Already Registered? Login
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home