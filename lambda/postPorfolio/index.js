const AWS = require ('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-2' });


const createMessage = async (params) => {
    try {
        await documentClient.put(params).promise();
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
            Item:{
                id: '3', description: form.description, image_url: form.image_url,
                twitter_user_name: form.twitter_user_name, experience_summary: form.experience_summary
        },
        TableName: 'portfolio'
        }
        
        await createMessage(params)
        
        const response = {
            statusCode: 200,
            body: JSON.stringify('Portfolio created'),
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
