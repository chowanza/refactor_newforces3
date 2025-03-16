import React from 'react';

const LeadCapture: React.FC = () => {
  return (
    <div className='md:w-[40vw] w-full md:h-full h-[50vh] z-10 flex justify-center items-center md:mt-0 mt-10'>
      <div className='w-4/5 px-6 md:py-4 py-3 bg-white border shadow-[0px_0px_20px_1px_#00000024] rounded-lg'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4 text-center'>
          Request Your Free Estimate Now!
        </h2>
        <form className='flex flex-col gap-4 text-gray-800'>
          <input
            type='text'
            placeholder='Full Name'
            required
            className='w-full p-2 border-[2px] rounded-md focus:border-[#f97316]'
          />
          <input
            type='tel'
            placeholder='Phone Number'
            required
            className='w-full p-2 border-[2px] rounded-md focus:border-[#f97316]'
          />
          <input
            type='email'
            placeholder='Email Address'
            required
            className='w-full p-2 border-[2px] rounded-md focus:border-[#f97316]'
          />
          <select
            required
            className='w-full p-2 border-[2px] rounded-md focus:border-[#f97316]'
          >
            <option value='' disabled selected>
              Project Type
            </option>
            <option value='Residential'>Residential</option>
            <option value='Commercial'>Commercial</option>
            <option value='Renovation'>Renovation</option>
            <option value='Roofing'>Roofing</option>
          </select>
          <textarea
            placeholder='Message (Optional)'
            className='w-full p-2 border-[2px] rounded-md focus:border-[#f97316]'
          ></textarea>
          <button
            type='submit'
            className='w-full bg-[#f97316] text-white p-2 rounded-md hover:bg-[#f86306] transition'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadCapture;
