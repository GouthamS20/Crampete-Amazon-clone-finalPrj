import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutSuccess = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-amazonclone-background'>
      <div className='text-4xl text-green-500 mb-4'>
        <span role='img' aria-label='Tick Mark'>
          ✅
        </span>{' '}
        Thank you for your purchase!
      </div>
      <Link to='/'>
        <button className='btn'>Back to Home</button>
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
