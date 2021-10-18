function fetchTwitter() {
  fetch('/twitter', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
  }).then(response => {
      if (!response.ok) {
          throw Error("Error")
      }
      return response.json()
  }).then(data => {
      console.log(data.Items);
      const html = data.Items
        .map(tweet => {
          return `
          <div class="tweet">
            <p> ${tweet.user.screen_name} <p>
            <p> ${tweet.text}<p>
          </div>
          `;
        }).join("")
      console.log(html)
      document.querySelector("#apptweets").insertAdjacentHTML("afterbegin", html)

  })
  .catch(error => {
    console.log(error)
  })
}
fetchTwitter()
