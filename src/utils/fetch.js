export const getData = (setData) => {
    fetch('data.json', {
      headers: {
        'Content-Type': 'appplication/json',
        'Accept': 'appplication/json'
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
          setData(JSON.parse(getLocalStorage))
        } else {
          setData(userData)
        }
      })
}