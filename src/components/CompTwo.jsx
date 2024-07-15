import React, { useContext } from 'react'
import { GlobalContext } from '../context';

const CompTwo = () => {

    const {theme} = useContext(GlobalContext);

  return (
    <div style={{paddingLeft: "250px"}}>
      <h1>Register</h1>
      <button style={theme === 'dark' ? {backgroundColor: "red", color: "blue"} : {backgroundColor: "green", color: "orange"}}>
        Register
      </button>
    </div>
  )
}

export default CompTwo;