import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const FoxImageFetcher = () => {
    const [foxImage, setFoxImage] = useState('')

    const fetchFox = async() => {
        //this is the api key where I will retrieve the data
        let response = await fetch('https://randomfox.ca/floof/')
        let data = await response.json()
        setFoxImage(data.image)
        console.log(data)
    }

    useEffect(() => {
        fetchFox()
    }, [])


  return (
    <div>
        
        <img src={foxImage} alt="" />
    </div>
  )
}

export default FoxImageFetcher