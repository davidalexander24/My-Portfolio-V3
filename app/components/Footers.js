import React from 'react';
import { IoMailOutline } from 'react-icons/io5';

function Footers() {
  return (
    <div className='w-full flex justify-center'>
      <div className="w-[800px] grays3bg py-6 px-8 inter flex justify-between items-center grays2 text-xs">
        <div>
          <p>
            © 2025 David Alexander. All rights reserved.
          </p>
          
        </div>
        <div className="flex items-center gap-1">
          <p className='text-base'><IoMailOutline /></p>
          <p>
            davidalexander2411@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footers;