const data = cb => {
  const url = "https://opentdb.com/api.php?amount=5&type=boolean"
  fetch(url)
    .then(response => response.json())
    .then(data => cb(data))
    .catch(error => {
      console.error(error)
    })
}

export default data
