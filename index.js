window.onload = function() {
  fetchDog()
  // select button
  document.getElementById('next').onclick = function() {
    fetchDog()
  }

  function fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(function(response) {
        return response.json()
      })
      .then(responseData => {
        console.log(responseData.message)
        document.getElementById('dog-image-container').innerHTML = `
          <img
              src="${responseData.message}"
              alt="dog"
            />`
      })
  }
}
