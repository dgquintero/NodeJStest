const AWS = require ('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' });


const getMessage = async (params) => {
    try {
        let m = await documentClient.scan(params).promise();
        // console.log(m)
        return m
    } catch (err) {
        console.log(err)
        return err;
    }
}


exports.handler = async (event) => {
    try {
        
        const params = {
            TableName: 'portfolio',
            Key: { "id": '1' }
        }
        const message = await getMessage(params)
        // console.log(message)
        const response = {
            statusCode: 200,
            body: message,
        };
        return response
    } catch (err) {
        
        const response = {
            statusCode: 400,
            body: JSON.stringify(err),
        };
        return response;
        
        
    }
};
