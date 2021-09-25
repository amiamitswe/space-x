const FormInput = ({ onKeyDown, placeholder }) => {
   return (
      <input
         type="text"
         onKeyDown={onKeyDown}
         className="form-control"
         placeholder={placeholder}
      />
   );
};

export default FormInput;
