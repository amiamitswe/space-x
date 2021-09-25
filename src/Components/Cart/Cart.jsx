import React from 'react';

const Cart = (props) => {
   const { onClick, space } = props;

   return (
      <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
         <div className='bg-light p-3 rounded-1 cursor-pointer' onClick={onClick}>
            <div className='w-100 text-center p-2' style={{ height: '166px' }}>
               <img src={space?.links.mission_patch_small} alt={space?.mission_name} height='150' width='150' />
            </div>
            <div className='mt-2'>
               <h2 className='fs-4 text-info text-truncate'>{space?.mission_name}</h2>
            </div>
            <div>
               <p className='fs-6 mb-1 text-truncate'>{space?.rocket.rocket_name}</p>
            </div>
            <div>
               <p className='fs-6 mb-0 text-truncate'>{space?.launch_date_utc}</p>
            </div>
         </div>
      </div>
   );
};

export default Cart;
