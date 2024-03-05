const FormField = ({
  htmlFor,
  title,
  type,
  id,
  placeholder,
  value,
  onChange,
  classes,
  min,
  max,
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>{title}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classes}
        required
        min={min}
        max={max}
      />
    </>
  );
};

export default FormField;
