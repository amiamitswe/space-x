
const Select = ({ label, options, onChange }) => {
   return (
      <>
         {label ? <label>{label}</label> : null}
         <select onChange={onChange} className="form-select mb-2" aria-label="Default select example">
            <option value="clear">Clear</option>
            {options.map(option => <option key={option.id} value={option.value}>{option.title}</option>)}
         </select>
      </>
   );
};

export default Select;
