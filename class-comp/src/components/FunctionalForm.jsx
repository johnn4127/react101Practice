import React from 'react'

const FunctionalForm = (props) => {
  return (
    <div>
        <h1>FunctionalForm</h1>
        <form action="">
            <label>Name</label>
                <input type="text" placeholder={props.accountNumber}/>
            <label>ID</label>
                <input type="text" placeholder={props.Id}/>
            <label>Birth Date</label>
                <input type="date" placeholder={props.birthDate}/>
        <button type='submit'>SUBMIT </button>
        </form>
      </div>
  )
}

export default FunctionalForm