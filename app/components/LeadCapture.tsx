import React from 'react';

const LeadCapture: React.FC = () => {
  return (
    <div className='w-[40vw] h-full z-10 flex justify-center items-center'>
      <div className='w-4/5 px-6 py-4 bg-white border shadow-[0px_0px_20px_1px_#00000024] rounded-lg'>
        <h2 className='text-xl font-semibold text-gray-800 mb-4 text-center'>
          Request Your Free Estimate Now!
        </h2>
        <form className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Full Name'
            required
            className='w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500'
          />
          <input
            type='tel'
            placeholder='Phone Number'
            required
            className='w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500'
          />
          <input
            type='email'
            placeholder='Email Address'
            required
            className='w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500'
          />
          <select
            required
            className='w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500'
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
            className='w-full p-2 border rounded-md focus:ring-2 focus:ring-purple-500'
          ></textarea>
          <button
            type='submit'
            className='w-full bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 transition'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeadCapture;
