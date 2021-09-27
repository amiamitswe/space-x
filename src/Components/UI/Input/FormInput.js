const FormInput = ({ label, onKeyDown, placeholder }) => {
   return (
      <>
         {label ? <label>{label}</label> : null}
         <input
            type="text"
            onKeyDown={onKeyDown}
            className="form-control mb-2"
            placeholder={placeholder}
         />
      </>
   );
};

export default FormInput;
