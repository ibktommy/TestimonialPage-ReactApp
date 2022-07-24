import React from 'react';
import Card from './component/Card/Card';
import Form from './component/Form/Form';
import clientData from './data.json'


function App() {
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

        <Form />
      </div>
    </>
  );
}

export default App;
