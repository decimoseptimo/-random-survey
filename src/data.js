/**
 * Fetches survey's questions, runs callbacks on success or failure
 * @param {Function} onSuccess success callback
 * @param {Function} onFailure failure callback
 */
export const getData = (onSuccess, onFailure) => {
  const url = "https://opentdb.com/api.php?amount=5&type=boolean"
  fetch(url)
    .then(response => response.json())
    .then(data => onSuccess(data))
    .catch(error => {
      onFailure(error)
    })
}

/**
 * Posts a completed survey to and API endpoint, runs callbacks on success or failure
 * @param {Array} data completed survey
 * @param {Function} onSuccess success callback
 * @param {Function} onFailure failure callback
 */
export const postData = (data, onSuccess, onFailure) => {
  const url = "/api/surveys"
  fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => onSuccess(data))
    .catch(error => {
      onFailure(error)
    })
}
