import React, { useEffect, useState } from 'react';
import Card from './component/Card/Card';
import Form from './component/Form/Form';
import { getData } from './utils/fetch';


function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [data, setData] = useState([])

  useEffect(() => {
    getData(setData)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!username || !message) {
      alert('PLEASE FILL IN ALL INPUT FIELDS!')
    } else if (!imageFile) {
      alert('SELECT A PICTURE FOR UPLOAD')
    }
    const newData = {
      "id": data.length + 1,
      "name": username,
      "image": URL.createObjectURL(imageFile),
      "testimony": message
    }

    setUsername("")
    setMessage("")
    setImageFile(null)
    setImageUrl(null)
    setData([...data, newData])
    localStorage.setItem('data', JSON.stringify([...data, newData]))
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
          username={username}
          message={message}
          setMessage={setMessage}
          setUsername={setUsername}
          setImageFile={setImageFile}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}

export default App;


