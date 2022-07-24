import React, { useEffect, useState } from 'react';
import Card from './component/Card/Card';
import Form from './component/Form/Form';
import clientData from './data.json'


function App() {
  const [username, setUsername] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [message, setMessage] = useState("");
  const [data, setData] = useState(clientData)

  // Form Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
    console.log(imageFile)

    if (!username || !message) {
      alert('PLEASE FILL IN THE INPUT FIELDS TO SUBMIT!')
    } else if (!imageFile) {
      alert('PLEASE SELECT AN IMAGE FOR UPLOAD!')
    } else {
      const newData = {
        id: data.length + 1,
        name: username,
        image: imageUrl,
        testimony: message
      }

      setData([...data, clientData.push(newData)])
      setMessage("")
      setUsername('')
      setImageFile(null)
    }
  };


  const handleName = (e) => {
    setUsername(e.target.value)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }
  const handleFile = (e) => {
    setImageFile(e.target.files[0])
  }

  useEffect(() => {
    if (imageFile) {
      setImageUrl(URL.createObjectURL(imageFile))
    }
  }, [imageFile])

  return (
    <>
      <div className="container flex">
        <h1>Testimonial Page</h1>

        <div className="container-content flex">
          {
            clientData.map(({ id, ...props }) => (
              <Card key={id} {...props} />
            ))
          }
        </div>

        <Form
          userdata={clientData}
          username={username}
          message={message}
          handleName={handleName}
          handleFile={handleFile}
          handleMessage={handleMessage}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}



export default App;
