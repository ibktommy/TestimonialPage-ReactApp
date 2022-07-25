import React, { useEffect, useState } from 'react';
import Card from './component/Card/Card';
import Form from './component/Form/Form';
import clientData from './data'

// Function to Get Data in localStorage and load it when the browser reloads
// const getLocalStorage = () => {
//   const dataArray = localStorage.getItem('data')
//   if (dataArray) {
//     return clientData === JSON.parse(dataArray)
//   } else {
//     return []
//   }
// }

window.addEventListener('DOMContentLoaded', () => {
  console.log('Hello')

  localStorage.getItem('data')
})

function App() {
  const [username, setUsername] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [message, setMessage] = useState("");
  const [data, setData] = useState(clientData)

  console.log(data)


  // Form Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(data);

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

      setData([...data, newData])
      setMessage("")
      setUsername('')
      setImageFile('')
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
            data.map(({ id, ...props }) => (
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
