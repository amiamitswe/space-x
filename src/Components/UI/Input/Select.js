
const Select = ({ options, onChange }) => {
  return (
    <select onChange={onChange} className="form-select" aria-label="Default select example">
      <option value="clear">Clear</option>
      {options.map(option => <option key={option.id} value={option.value}>{option.title}</option>)}
    </select>
  );
};

export default Select;
