import React from 'react'
import { useNavigate } from 'react-router-dom'
import cam from "../Assets/cam1.svg"
import pro from "../Assets/pro.png"


function Account() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col text-[#1D2226] font h-screen max-w-md w-full  bg-[#F7F8F9]  shadow-md'>
            <div className=" bg-white ">
            <button className="cursor-pointer"
                    onClick={() => navigate('/')}
                >
                <h2 className="font-normal text-[ #1D2226] text-[21px] p-4">Account Settings</h2>
          
                </button>
            </div>
            <div className=" p-6 flex flex-col px-5   border-b-[1px] border-dashed  border-[#CBCBCB] gap-3 my-5">
                <div className="flex gap-3">
                    <div className="h-20 w-20 rounded-full relative">
                        <div className="h-7 w-7 flex items-center justify-center rounded-full text-white bg-[#7B3FF6] absolute right-0 -bottom-0">
                            <img src={cam} alt="" />
                        </div>
                        <img src={pro} alt="" />
                    </div>
                    <div className=" flex px-5 py- flex-col ">
                        <h3 className="font-medium text-[19px]">Marry Doe
                        </h3>
                        <span className=" font-normal  text-[14px]">
                            Marry@gmail.com
                        </span>
                    </div>
                </div>
                <p className=" font-normal  text-[14px] text-wrap mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde dolores numquam, voluptas omnis voluptate voluptates ipsum dolor sit.</p>
      
            </div>
        </div>
  )
}

export default Account