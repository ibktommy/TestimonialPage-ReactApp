import React, { useEffect, useState } from 'react'
import UserCard from './component/Card/UserCard'
import Form from './component/Form/Form'
import { fetchData } from './utils/fetchData'

const App = () => {
  // Setting State
  const [data, setData] = useState([])

  // Setting useEffect Hook to get Data after Component Renders
  useEffect(() => {
    fetchData(setData)
  }, [])

  console.log(data)

  //Function To Get Data From Form-Component
  function addUserDataHandler(newUserData) {
    setData([...data, newUserData])

    // Save Data to Local Storage
    localStorage.setItem('data', JSON.stringify([...data, newUserData]))
  }

  return (
    <div>
      <UserCard usersData={data} />
      <Form onAddUserData={addUserDataHandler} dataNum={data} />
    </div>
  )
}

export default App