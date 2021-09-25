
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [spaceList, setSpaceList] = useState(spaceListData);

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

  // set initial value
  useEffect(() => {
    setSpaceList(spaceListData);
  }, [spaceListData]);

  // search Handler
  const searchHandler = (event) => {
    if (event.keyCode === 13) {
      const searchValue = event?.target.value.trim();
      setSearch(searchValue);

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

  return (
    <div className='container mt-4'>
      {spaceListLoading && <Spinner />}

      <div className='mb-4 row'>
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
              <Select />
            </div>
            <div className="col-4">
              <Select />
            </div>
            <div className="col-4">
              <Select />
            </div>
          </div>
        </div>
      </div>
      {spaceList?.length ?
        <div className="row">
          {spaceList?.map(space => (
            <Cart
              key={space.flight_number}
              space={space}
              onClick={showModalHandler}
            />
          ))}


        </div>
        : <h1 className='text-center text-info mt-5'>No Rocket data found with <span className='text-danger'>"{search}"</span> keyword !</h1>}
      {showModal && <Modal closeModal={closeModalHandler} />}
    </div>
  );
};

export default BodyContainer;;
