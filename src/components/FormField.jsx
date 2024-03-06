const FormField = ({
  htmlFor,        // ID of the associated label
  title,          // Title displayed in the label
  type,           // Type of input field (text, date, number, etc.)
  id,             // ID of the input field
  placeholder,    // Placeholder text for the input field
  value,          // Current value of the input field
  onChange,       // Function to handle input changes
  classes,        // CSS classes for styling the input field
  min,            // Minimum value (for number or date input types)
  max,            // Maximum value (for number or date input types)
}) => {
  return (
    <>
      {/* Label associated with the input field */}
      <label htmlFor={htmlFor}>{title}</label>
      {/* Input field */}
      <input
        type={type}                   // Input type (text, date, number, etc.)
        id={id}                       // ID of the input field
        placeholder={placeholder}     // Placeholder text
        value={value}                 // Current value of the input field
        onChange={onChange}           // Function to handle input changes
        className={classes}           // CSS classes for styling
        required                      // Input field is required
        min={min}                     // Minimum value (for number or date input types)
        max={max}                     // Maximum value (for number or date input types)
      />
    </>
  );
};

export default FormField;
