# NodeJStest

En este proyecto se creó una web app para un portafolio personal, usando tecnologías serverless usando funciones lambda en AWS. Estás funciones fueron expuestas en dos endpoints usando AWS Getway para poder ser consumidas desde la web.

  <a>
    <img src="img/Arq.jpeg" alt="Logo" width="400" height="800">
  </a>

## AWS Getway endpoints

Trae la información de los usuarios creados en la base de datos.

GET - https://cjwy613v3i.execute-api.us-east-2.amazonaws.com/PDN/portfolio

Permite editar la información de la experiencia de la persona.

PUT - https://cjwy613v3i.execute-api.us-east-2.amazonaws.com/PDN/portfolio

- Realizar petición put vía postman envíado el parametro experience_summary a modificar.

Ejemplo:

```sh
{
    "body": {
        "experience_summary": "Daniel Quintero Software developer Backend node js"
    }
}
```


## steps to build the app
- Conexión realizada a la API de Twitter
- Creación de la función serverless con AWS Lambda
- Creación de la base de datos usando Dynamo
- Creación de los diferentes endpoints para ser consumidos
- Integración de las diferentes tecnologías en a single page web app

## technologies used
- AWS Lambda functions
- AWS Dynamodb
- AWS API Gateway
- NodeJs
- Express
- fetch
- Javascript
- Html
- CSS
- bootstrap


## Run the solution

Se requiere [Node.js](https://nodejs.org/).

Clone this repository ...
```sh
git clone https://github.com/dgquintero/NodeJStest.git
```

Instalar las dependencias e iniciar el servidor.

```sh
cd NodeJStest
npm i
npm run dev
```
Abrir el navegador e ir

http://localhost:3000/

## Total Time
- 1st day 3 hr
- 2nd day 5 hr
- 3rd day 4 hr
- 4rd day 4 hr
