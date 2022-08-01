export const fetchData = (data) => {
  fetch('data.json', {
    header: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then((response) => {
      return response.json()
    })
    .then((responseData) => {
      let userData = responseData

      // Setting Data-State based on the condition - if there exist a data in localStorage or Not
      let getLocalStorage = localStorage.getItem('data')
      if (getLocalStorage) {
        data(JSON.parse(getLocalStorage))
      } else {
        data(userData)
      }
    })
    .catch((error) => console.log(error.message))
}