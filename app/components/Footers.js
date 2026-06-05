import React from 'react';
import { IoMailOutline } from 'react-icons/io5';

function Footers() {
  return (
    <div className='w-full flex justify-center'>
      <div className="w-full max-w-[800px] grays3bg py-4 sm:py-6 px-4 sm:px-8 inter flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0 items-start sm:items-center grays2 text-[11px] sm:text-xs">
        <div>
          <p>
            © 2026 David Alexander. All rights reserved.
          </p>

        </div>
        <div className="flex items-center gap-1 break-all sm:break-normal">
          <p className='text-sm sm:text-base'><IoMailOutline /></p>
          <p>
            davidalexander2411@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footers;