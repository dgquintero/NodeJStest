const AWS = require ('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' });


const createMessage = async (params) => {
    try {
        await documentClient.update(params).promise();
    } catch (err) {
        console.log(err)
        return err;
    }
}


exports.handler = async (event) => {
    try {
        let form = event.body
        console.log(form)
        let params = {
            Key:{
                "id": '3'
            },
            UpdateExpression: "set experience_summary= :a",

            ExpressionAttributeValues: {
                ':a': form.experience_summary
            },

            TableName: 'portfolio'
        }
        
        await createMessage(params)
        
        const response = {
            statusCode: 200,
            body: JSON.stringify('Portfolio updated'),
        };
        return response
    } catch (err) {
        
        const response = {
            statusCode: 400,
            body: JSON.stringify(err),
        };
        return response
        
        
    }
};
