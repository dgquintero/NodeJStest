
const axios = require('axios');
// const result = fetch('https://cjwy613v3i.execute-api.us-east-2.amazonaws.com/PDN/portfolio', {
//   method: 'GET',
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json'
//   }
// })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//       return data.data.guias;
//     })
    const apiResponse = await axios({
      method: "get",
      url: `https://cjwy613v3i.execute-api.us-east-2.amazonaws.com/PDN/portfolio`,
      heathers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      // handle success
      console.log(response)
      // const resul = response.data
      // res.send(resul)
      // resul.data.guias.forEach(function(element){
      //   if (element.codigo_remision === apiRoute)
      //     res.send(element)
      // });
      // console.log(resul.data.guias[1])
      // return resul
    })
