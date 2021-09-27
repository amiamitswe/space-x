import React from 'react';
import { formatDate, getDayData, getMonthData, getYearData } from '../../lib/halper';

const Cart = (props) => {
   const { onClick, space } = props;

   return (
      <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
         <div className='bg-light p-3 rounded-1 cursor-pointer' onClick={onClick}>
            <div className='w-100 text-center p-2' style={{ height: '166px' }}>
               <img src={space?.links.mission_patch_small} alt={space?.mission_name} height='150' width='150' />
            </div>
            <h2 className='fs-4 text-info text-truncate mt-2'>
               {space?.mission_name}
            </h2>
            <p className='fs-6 fw-bold text-black-50 mb-1 text-truncate'>
               Rocket : {space?.rocket.rocket_name}
            </p>
            <p className='fs-6 mb-0 text-truncate'>
               Launch Date : {formatDate(space?.launch_date_utc)}
            </p>
            <p className='mb-0 text-truncate' style={{ fontSize: '12px' }}>
               Upcoming :
               <span className={`fw-bold ms-2 ${space?.upcoming ? 'text-primary' : 'text-danger'}`}>
                  {space?.upcoming ? 'True' : 'False'}
               </span>
            </p>
            <p className='mb-0 text-truncate' style={{ fontSize: '12px' }}>
               Lunch Success :
               <span className={`fw-bold ms-2 ${space?.launch_success ? 'text-primary' : 'text-danger'}`}>
                  {space?.launch_success ? 'True' : 'False'}
               </span>
            </p>
            {/* <p>{getMonthData(space?.launch_date_utc)}</p>
            <p>{getYearData(space?.launch_date_utc)}</p>
            <p>{getDayData(space?.launch_date_utc)}</p> */}
         </div>
      </div>
   );
};

export default Cart;
