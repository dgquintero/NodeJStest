function fechtData() {
  fetch('https://cjwy613v3i.execute-api.us-east-2.amazonaws.com/PDN/portfolio', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
  })
  .then(response => {
    // console.log(response)
    if(!response.ok){
      throw Error("Error")
    }
    return response.json()
  })
    
  .then(data => {
    // console.log(data.body.Items)
    const {description, experience_summary, image_url, twitter_user_name} = data.body.Items[3]
    const htmlExperience = `<p> ${experience_summary}</p>`
    const htmlDescription = `<p> ${description}</p>`
    const htmlImage = `<img src="${image_url}" alt="${description}" class="rounded-circle" width="500">`
    const htmltwitter = `<a href="https://twitter.com/${twitter_user_name}">twitter acount...</a>`
    // console.log(htmlImage)
    // console.log(html)
    document.querySelector('#appExperience').insertAdjacentHTML('afterbegin', htmlExperience)
    document.querySelector('#appDescription').insertAdjacentHTML('afterbegin', htmlDescription)
    document.querySelector('#appImage').insertAdjacentHTML('afterbegin', htmlImage)
    document.querySelector('#apptwitter').insertAdjacentHTML('afterbegin', htmltwitter)
    return data.body.Items;
})}

fechtData()
