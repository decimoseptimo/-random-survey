const data = (onSuccess, onFailure) => {
  const url = "https://opentdb.com/api.php?amount=5&type=boolean"
  fetch(url)
    .then(response => response.json())
    .then(data => onSuccess(data))
    .catch(error => {
      onFailure(error)
    })
}

export default data
