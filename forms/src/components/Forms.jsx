import React,{ useState } from 'react'

const Forms = () => {
    const [email,setEmail] = useState('')
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [age,setAge] = useState(0)
    const [password, setPassword] = useState('')
    const [birthMonth, setbirthMonth] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('User entered email', email)
    }







  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
            id="email" 
            type="text" 
            value={email} 
            onChange={(e)=> setEmail(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Forms