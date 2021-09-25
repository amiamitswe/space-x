import './spinner.css';

const Spinner = () => {
   return (
      <div className='spinnerWrap'>
         <div className='spinner'>
            <div className="loadingio-spinner"><div className="loadingio">
               <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            </div></div>
         </div>
      </div>
   );
};

export default Spinner;
