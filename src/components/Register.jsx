import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    password: '',
    company: '',
    agency: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, type, name } = e.target;
    
    if (type === "radio") {
      setFormData({ ...formData, [name]: value }); // Use 'name' for radio buttons
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Full Name is required';
    if (!formData.number) newErrors.number = 'Phone Number is required';
    if (!formData.email) newErrors.email = 'Email Address is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.agency) newErrors.agency = 'Please select an option';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/Account');
    }
  };

  return (
    <div className='flex flex-col font h-screen max-w-md w-full p-6 bg-[#F7F8F9]  shadow-md'>
      <h2 className="font-medium text-[28px] md:text-[36px] lg:text-[36px] w-3/5">
        Create Your  PopX Account
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-6">
        {/* Full Name */}
        <div className="relative">
          <label htmlFor="name" className="absolute left-4 bg-[#F7F8F9] text-[13px] -top-2 text-[#6C25FF]">
            Full Name<span className='text-[#DD4A3D]'>*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter  full name"
            className="w-full px-3 py-3 bg-[#F7F8F9] border-[1px] rounded-md border-[#CBCBCB] focus:outline-none focus:ring-1 focus:ring-[#6C25FF]"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className='text-[#DD4A3D] text-sm'>{errors.name}</p>}
        </div>

        {/* Phone Number */}
        <div className="relative">
          <label htmlFor="number" className="absolute left-4 bg-[#F7F8F9] text-[13px] -top-2 text-[#6C25FF]">
            Phone Number<span className='text-[#DD4A3D]'>*</span>
          </label>
          <input
            id="number"
            type="number"
            placeholder="Enter  phone number"
            className="w-full px-3 py-3 bg-[#F7F8F9] border-[1px] rounded-md border-[#CBCBCB] focus:outline-none focus:ring-1 focus:ring-[#6C25FF]"
            value={formData.number}
            onChange={handleChange}
          />
          {errors.number && <p className='text-[#DD4A3D] text-sm'>{errors.number}</p>}
        </div>

        {/* Email Address */}
        <div className="relative">
          <label htmlFor="email" className="absolute left-4 bg-[#F7F8F9] text-[13px] -top-2 text-[#6C25FF]">
            Email Address<span className='text-[#DD4A3D]'>*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter  email address"
            className="w-full px-3 py-3 bg-[#F7F8F9] border-[1px] rounded-md border-[#CBCBCB] focus:outline-none focus:ring-1 focus:ring-[#6C25FF]"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className='text-[#DD4A3D] text-sm'>{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="relative">
          <label htmlFor="password" className="absolute left-4 bg-[#F7F8F9] text-[13px] -top-2 text-[#6C25FF]">
            Password<span className='text-[#DD4A3D]'>*</span>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter  password"
            className="w-full px-3 py-3 bg-[#F7F8F9] border-[1px] rounded-md border-[#CBCBCB] focus:outline-none focus:ring-1 focus:ring-[#6C25FF]"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className='text-[#DD4A3D] text-sm'>{errors.password}</p>}
        </div>
        
          {/* Company Name */}
          <div className="relative">
            <label
              htmlFor="company"
              className="absolute left-4 bg-[#F7F8F9]  text-[13px] -top-2 text-[#6C25FF] "
            >
              Company Name
            </label>
            <input
              id="company"
              type="text"
              placeholder='Enter company name'
              className="w-full px-3 py-3  bg-[#F7F8F9] placeholder-[#919191] mt-1 border-[1px] rounded-md border-[#CBCBCB] focus:outline-none focus:ring-1 focus:ring-[#6C25FF]"
            />
          </div>

        {/* Radio Buttons */}
        <div className="flex ml-3 flex-col font-normal text-black accent-[#6C25FF] gap-2">
          <label className="text-[13px]">Are you an Agency?<span className='text-[#DD4A3D]'>*</span></label>
          <div className="flex text-[14px] items-center gap-4">
            <div className="flex items-center bg-[#F7F8F9] gap-2">
              <input id="yes" type="radio" name="agency" value="yes" onChange={handleChange} />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex items-center gap-2">
              <input 
              className='bg-[#F7F8F9]'
              id="no" type="radio" name="agency" value="no" onChange={handleChange} />
              <label htmlFor="no">No</label>
            </div>
          </div>
          {errors.agency && <p className='text-[#DD4A3D] text-sm'>{errors.agency}</p>}
        </div>

        <button type="submit" className="bg-[#6C25FF] my-4 w-full hover:bg-[#6e25ff85] text-white font-medium py-3 rounded-lg cursor-pointer">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;
