import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './component/Card/Card';
import Form from './component/Form/Form';
// import clientData from './data.json'

function App() {
  const [username, setUsername] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [message, setMessage] = useState("");
  const [data, setData] = useState([])

  const getData = () => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'appplication/json',
        'Accept': 'appplication/json'
      }
    })
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then((responseData) => {
        console.log(responseData)
        setData(responseData)
      })
  }

  useEffect(() => {
    if (imageFile) {
      setImageUrl(URL.createObjectURL(imageFile))
    }

    getData()

  }, [imageFile])

  const handleName = (e) => {
    setUsername(e.target.value)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }
  const handleFile = (e) => {
    setImageFile(e.target.files[0])
  }

  return (
    <>
      <div className="container flex">
        <h1>Testimonial Page</h1>

        <div className="container-content flex">
          {
            data && data.length > 0 && data.map(({ id, ...props }) => (
              <Card key={id} {...props} />
            ))
          }
        </div>

        <Form
          // userdata={clientData}
          username={username}
          message={message}
          handleName={handleName}
          handleFile={handleFile}
          handleMessage={handleMessage}
          // handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default App;


