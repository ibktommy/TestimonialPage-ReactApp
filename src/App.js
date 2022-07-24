import React, { useState } from 'react';
import Card from './component/Card/Card';
import Form from './component/Form/Form';
import clientData from './data.json'


function App() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [data, SetData] = useState(clientData)

  // Form Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);

    if (!username || !message) {
      alert('PLEASE FILL IN THE INPUT FIELDS TO SUBMIT!')
    } else {
      setMessage("")
      setUsername('')
    }
  };


  const handleName = (e) => {
    setUsername(e.target.value)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

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
          handleMessage={handleMessage}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}



export default App;
