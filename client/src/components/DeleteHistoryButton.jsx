import React from 'react'

const DeleteHistoryButton = ({
    icon,
    title,
    className,
    onClick
}) => {
  return (
    <div className="mt-7 flex flex-row items-center gap-6" style={{justifyContent:"center"}}>
                <button className={className} onClick={onClick}>
                  {icon}
                  {title}
                </button>
              </div>
  )
}

export default DeleteHistoryButton