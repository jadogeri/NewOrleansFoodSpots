import React from 'react'

const Spacer = ({
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    margin,
    paddingTop,
    paddingBottom
}) => {
  return (
    <div style={{
        marginLeft : marginLeft,
        marginRight: marginRight,
        marginTop :marginTop,
        marginBottom: marginBottom,
        margin : margin,
        paddingBottom : paddingBottom,
        paddingTop: paddingTop
    }}></div>
  )
}

export default Spacer