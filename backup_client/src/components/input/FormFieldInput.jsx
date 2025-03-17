import React from 'react'

const FormFieldInput =({
label,
type,
name,
placeholder,
autoComplete,
style,
required,
onChange,
onClick,
onBlur,
onFocus,
id,
onKeyUp,
labelClassName,
inputClassName,
containerClassName,
iconClassName,
onInvalid,
onInput,
value,
width

})  =>{

/** 
 * @param {String} icon - icon name displayed in input area
 * @returns  {Component} - the compnent with icon  
 */

  return (
    <div className={containerClassName} >
    {label ? null : <label className={labelClassName}>{label}</label>}
    <i className={iconClassName} ></i> 
    <input 
      type={type}
      name={name} 
      //className='btn'
      placeholder={placeholder}
      autoComplete={autoComplete}
      style={style}
      required={required}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
      id={id}
      onKeyUp={onKeyUp}
      className={inputClassName}
      onInvalid={onInvalid}
      onInput={onInput}
      value={value}    
      width={width}    
      />

</div>
  )
}

export default FormFieldInput;