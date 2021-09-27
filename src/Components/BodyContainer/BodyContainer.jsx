
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { shortByTime, shortByUpComing, sortByStatus } from '../../lib/data';
import {
   getLastMonthOfThisYear,
   getMonthOfGetDate,
   getYearData,
   getLastWeakOfThisYear,
   getWeakOfGetDate
} from '../../lib/helper';
import { listSpace } from '../../redux/actions/spaceList';
import { selectSpaceList, selectSpaceListLoading } from '../../redux/selectors/spaceList';
import Cart from '../Cart/Cart';
import FormInput from '../UI/Input/FormInput';
import Select from '../UI/Input/Select';
import Modal from '../UI/Modal/Modal';
import Spinner from '../UI/Spinner/Spinner';

const BodyContainer = () => {
   const dispatch = useDispatch();

   const spaceListData = useSelector(selectSpaceList);
   const spaceListLoading = useSelector(selectSpaceListLoading);

   const [error, setError] = useState(null);
   const [showModal, setShowModal] = useState(false);
   const [spaceList, setSpaceList] = useState(spaceListData);
   const [selectedSpaceData, setSelectedSpaceData] = useState(null);

   const showModalHandler = (flight_number) => {
      const spaceData = [...spaceListData];
      const findIndexOfRocket = spaceListData.findIndex(item => item.flight_number === flight_number);
      const selectedItemData = spaceData[findIndexOfRocket];
      setSelectedSpaceData(selectedItemData);
      setShowModal(true);
   };

   const closeModalHandler = () => {
      setSelectedSpaceData(null);
      setShowModal(false);
   };

   useEffect(() => {
      dispatch(listSpace({ limit: 200 }));
   }, [dispatch]);

   useEffect(() => {
      setSpaceList(spaceListData);
   }, [spaceListData]);

   const searchHandler = (event) => {
      if (event.keyCode === 13) {
         const searchValue = event?.target.value.trim();

         const searchItem = [];
         if (searchValue.length > 0) {
            spaceListData.forEach(item => {
               if (item?.rocket?.rocket_name.toLowerCase() === searchValue.toLowerCase()) {
                  searchItem.push(item);
                  setError(null);
               }
               else setError(searchValue);
            });
            setSpaceList(searchItem);
         }
         else {
            setSpaceList(spaceListData);
            setError(null);
         }
      }
   };

   const filterByStatusHandler = (event) => {
      const selectedStatus = (event.target.value);

      const searchItem = [];
      if (selectedStatus === 'success') {
         spaceListData.forEach(item => {
            if (item?.launch_success === true) {
               searchItem.push(item);
               setError(null);
            }
            else setError("Success");
         });
         setSpaceList(searchItem);
         return;
      }

      if (selectedStatus === 'failed') {
         spaceListData.forEach(item => {
            if (item?.launch_success === false) {
               searchItem.push(item);
               setError(null);
            }
            else setError("Failed");
         });
         setSpaceList(searchItem);
         return;
      }

      if (selectedStatus === 'clear') {
         setSpaceList(spaceListData);
         return;
      }
   };

   const filterByUpcomingHandler = (event) => {
      const selectedItem = (event.target.value);

      const searchItem = [];
      if (selectedItem === 'completed') {
         spaceListData.forEach(item => {
            if (item?.upcoming === false) {
               searchItem.push(item);
               setError(null);
            }
            else setError("Completed");
         });
         setSpaceList(searchItem);
         return;
      }
      if (selectedItem === 'upcoming') {
         spaceListData.forEach(item => {
            if (item?.upcoming === true) {
               searchItem.push(item);
               setError(null);
            }
            else setError("Upcoming");
         });
         setSpaceList(searchItem);
         return;
      }

      if (selectedItem === 'clear') {
         setSpaceList(spaceListData);
         return;
      }
   };

   const filterByTime = (event) => {
      const selectedTime = (event.target.value);


      const searchItem = [];
      if (selectedTime === 'year') {
         spaceListData.forEach(item => {
            if (getYearData(item?.launch_date_utc) === getYearData(new Date()) - 1) {
               searchItem.push(item);
               setError(null);
            }
            else setError("Last Year");
         });
         setSpaceList(searchItem);
         return;
      };

      if (selectedTime === 'month') {
         spaceListData.forEach(item => {
            if (getMonthOfGetDate(item?.launch_date_utc) >= getLastMonthOfThisYear(new Date())) {
               searchItem.push(item);
               setError(null);
            }
            else setError("Last Month");

         });
         setSpaceList(searchItem);
         return;
      };

      if (selectedTime === 'weak') {
         spaceListData.forEach(item => {
            if (getWeakOfGetDate(item?.launch_date_utc) >= getLastWeakOfThisYear(new Date())) {
               searchItem.push(item);
               setError(null);
            }
            else setError("Last Weak");

         });
         setSpaceList(searchItem);
         return;
      };

      if (selectedTime === 'clear') {
         setSpaceList(spaceListData);
         return;
      }
   };

   return (
      <div className='container my-4'>
         {spaceListLoading && <Spinner />}

         <div className='mb-2 row'>
            <div className='col-12 col-lg-5'>
               <FormInput
                  label='Please type rocket name and press enter'
                  placeholder='Rocket Name ...'
                  onKeyDown={searchHandler}
               />
            </div>
            <div className='col-lg-1'></div>
            <div className='col-12 col-lg-6'>
               <div className="row">
                  <div className="col-12 col-lg-4">
                     <Select
                        label='Lunch Status'
                        options={sortByStatus}
                        onChange={filterByStatusHandler}
                     />
                  </div>
                  <div className="col-12 col-lg-4">
                     <Select
                        label='Upcoming'
                        options={shortByUpComing}
                        onChange={filterByUpcomingHandler} />
                  </div>
                  <div className="col-12 col-lg-4">
                     <Select
                        label='Filter by Time'
                        options={shortByTime}
                        onChange={filterByTime}
                     />
                  </div>
               </div>
            </div>
         </div>
         <p className='fs-6'>Total Space data count : {spaceList?.length}</p>
         {spaceList?.length ?
            <div className="row">
               {spaceList?.map(space => (
                  <Cart
                     key={space.flight_number + space.mission_name}
                     space={space}
                     onClick={showModalHandler}
                  />
               ))}
            </div>
            :
            <>{error ? <h1 className='text-center text-info mt-5'>
               No Rocket data found with
               <span className='text-danger mx-2'>"{error}"</span></h1> : null}</>
         }
         {showModal && <Modal
            spaceData={selectedSpaceData}
            closeModal={closeModalHandler} />}
      </div>
   );
};

export default BodyContainer;;