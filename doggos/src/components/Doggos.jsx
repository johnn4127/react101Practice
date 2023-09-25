import React, {useState, useEffect} from 'react'

const Doggos = () => {

    const [pic, setPic] = useState("");

    const getDogPicture = async() => {
        let response = await fetch('https://dog.ceo/api/breeds/image/random')
        let data = await response.json()
        setPic(data.message)
    }

    useEffect(()=>{
        getDogPicture()
    }, [])


  return (
    <div>
        <button onClick={getDogPicture}>GIVE DOGGO</button>
        <img src={pic} alt="" />
    </div>
  )
}

export default Doggos