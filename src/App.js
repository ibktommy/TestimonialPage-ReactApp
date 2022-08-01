import React, { useEffect, useState } from 'react';
import Card from './component/Card/Card';
import Form from './component/Form/Form';
import { getData } from './utils/fetchData';

function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [data, setData] = useState([])

  // Getting the Data and setting it in data-state using useEffect after the component renders
  useEffect(() => {
    getData(setData)
  }, [])

  console.log(data)

  // Delete a Chosen Card
  const deleteTestimonyCard = (id) => {
    setData(data.filter((eachData) => eachData.id !== id))
  }

  console.log(data)

  return (
    <>
      <div className="container flex">
        <h1>Testimonial Page</h1>

        <div className="container-content flex">
          {
            data && data.length > 0 && data.map(({ id, ...props }) => (
              <Card key={id} {...props} deleteTestimonyCard={deleteTestimonyCard} data={data} />
            ))
          }
        </div>

        <Form
          username={username}
          message={message}
          imageFile={imageFile}
          imageUrl={imageUrl}
          setMessage={setMessage}
          setUsername={setUsername}
          setImageFile={setImageFile}
          setImageUrl={setImageUrl}
          data={data}
          setData={setData}
        />
      </div>
    </>
  );
}

export default App;
