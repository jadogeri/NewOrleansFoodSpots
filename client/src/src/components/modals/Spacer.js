import React from 'react'

const Spacer = ({
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight
}) => {
  return (
    <div style ={{
        margin : margin, marginTop : marginTop, marginBottom : marginBottom,
        marginLeft : marginLeft, marginRight : marginRight
    }}></div>
  )
}

export default Spacer