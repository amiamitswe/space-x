
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortByStatus } from '../../lib/data';
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

  const [showModal, setShowModal] = useState(false);
  const [spaceList, setSpaceList] = useState(spaceListData);
  const [limit, setLimit] = useState(20);

  // modal open and close handler
  const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  // dispatch action
  useEffect(() => {
    dispatch(listSpace({ limit }));
  }, [dispatch, limit]);

  const loadMoreHandler = () => {
    setLimit(preLimit => preLimit + 20);
  };

  // set initial value
  useEffect(() => {
    setSpaceList(spaceListData);
  }, [spaceListData]);


  // search Handler with rocket name
  const searchHandler = (event) => {
    if (event.keyCode === 13) {
      const searchValue = event?.target.value.trim();

      const searchItem = [];
      if (searchValue.length > 0) {
        spaceListData.forEach(item => {
          // check rocket name and search name is same
          if (item?.rocket?.rocket_name.toLowerCase() === searchValue.toLowerCase()) {
            searchItem.push(item);
          }
        });
        setSpaceList(searchItem);
      }
      else {
        setSpaceList(spaceListData);
      }
    }
  };

  // filter list by success status "success or failed"
  const filterByStatusHandler = (event) => {
    const selectedStatus = (event.target.value);

    const searchItem = [];
    if (selectedStatus === 'success') {
      spaceListData.forEach(item => {
        // check mission success
        if (item?.launch_success === true) {
          searchItem.push(item);
        }
      });
      setSpaceList(searchItem);
      return;
    }

    if (selectedStatus === 'failed') {
      spaceListData.forEach(item => {
        // check mission failed
        if (item?.launch_success === false) {
          searchItem.push(item);
        }
      });
      setSpaceList(searchItem);
      return;
    }

    // clear all filter about status
    if (selectedStatus === 'clear') {
      setSpaceList(spaceListData);
      return;
    }

  };

  return (
    <div className='container my-4'>
      {spaceListLoading && <Spinner />}

      <div className='mb-2 row'>
        <div className='col-4'>
          <FormInput
            placeholder='Rocket Name ...'
            onKeyDown={searchHandler}
          />
        </div>
        <div className="col-2"></div>
        <div className='col-6'>
          <div className="row">
            <div className="col-4">
              <Select options={sortByStatus} onChange={filterByStatusHandler} />
            </div>
            {/* <div className="col-4">
              <Select />
            </div>
            <div className="col-4">
              <Select />
            </div> */}
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
        : <h1 className='text-center text-info mt-5'>No Rocket data found ...!</h1>}

      <div className='text-center'>
        <button onClick={loadMoreHandler} className='btn btn-primary'>Load More ...</button>
      </div>
      {showModal && <Modal closeModal={closeModalHandler} />}
    </div>
  );
};

export default BodyContainer;;