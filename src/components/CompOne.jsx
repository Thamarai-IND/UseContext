import React, { useContext } from 'react'
import { GlobalContext } from '../context';

const CompOne = () => {

  const {theme} = useContext(GlobalContext);

  return (
    <div>
      <h1>Login</h1>
      <button style={theme === 'dark' ? {backgroundColor: "black", color: "#fff"} : {backgroundColor: "tomato", color: "lightgray"}}>
        Login
      </button>
    </div>
  )
}

export default CompOne;