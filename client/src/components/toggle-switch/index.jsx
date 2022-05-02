import React from 'react'
// import './toggle-switch.css'

export default function toggleSwitch(props) {
    const { id, value, onChange } = props;
  return (
      <>
        <input id={id} type="checkbox" value={value} onChange={onChange} />
        {/* <label for="switch">Toggle</label> */}
      </>
  )
}
