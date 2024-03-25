// create your App component here
import React, {useEffect, useState} from 'react'

export default function App() {
    const [message, setMessage] = useState(null)
   
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((r) => r.json())
          .then(data => setMessage(data.message));
          }, []);

      if(!message){
        return <p>Loading...</p>
      }
      
  return (
    <div>
      <p>Dog Image</p>
      <img src={message} alt="A Random Dog"/>
    </div>
  )
}
