import React from 'react'

export default function Alert(props) {
  const capitalize =(word) =>{

    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  if(props.alertobj == null) return (props.alertobj);
  return (
    <>
      <div className={`alert alert-${props.alertobj.type}`} role="alert">
          <strong>{capitalize(props.alertobj.type)} </strong>: {props.alertobj.msg}
      </div>
    </>
  )
}
