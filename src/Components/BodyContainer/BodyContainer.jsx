
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSpace } from '../../redux/actions/spaceList';
import { selectSpaceList, selectSpaceListLoading } from '../../redux/selectors/spaceList';
import Cart from '../Cart/Cart';
import Modal from '../UI/Modal/Modal';
import Spinner from '../UI/Spinner/Spinner';

const BodyContainer = () => {
   const dispatch = useDispatch();
   const [showModal, setShowModal] = useState(false);
   const spaceList = useSelector(selectSpaceList);
   const spaceListLoading = useSelector(selectSpaceListLoading);

   // modal open and close handler
   const showModalHandler = () => {
      setShowModal(true);
   };

   const closeModalHandler = () => {
      setShowModal(false);
   };

   // dispatch action
   useEffect(() => {
      dispatch(listSpace({ limit: 50 }));
   }, [dispatch]);




   return (
      <div className='container mt-4'>
         {spaceListLoading && <Spinner />}
         <div className="row">
            {spaceList?.map(space => (
               <Cart
                  key={space.flight_number}
                  space={space}
                  onClick={showModalHandler}
               />
            ))}


         </div>
         {showModal && <Modal closeModal={closeModalHandler} />}
      </div>
   );
};

export default BodyContainer;;
