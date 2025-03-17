const Input = ({ handleChange, value, title, name, color,type, checked,className }) => {
  return (
    // <label className="sidebar-label-container">
  <label className={className}>

      <input onChange={handleChange} type={type} value={value} name={name} checked={checked} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
};

export default Input;
