import React from 'react'

const FormFieldArea =({
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
value

})  =>{

/** 
 * @param {String} icon - icon name displayed in input area
 * @returns  {Component} - the compnent with icon  
 */

  return (
    <div className={containerClassName} >
    {label ? null : <label className={labelClassName}>{label}</label>}
    <i className={iconClassName} ></i> 
    <textarea 
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
      />

</div>
  )
}

export default FormFieldArea;






