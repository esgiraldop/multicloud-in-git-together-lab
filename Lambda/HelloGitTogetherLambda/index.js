console.log('Loading function');

exports.handler = async (event, context) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('Community Info: ', event.message);
    console.log('Console for test #2');
    return "Hola Gente From Git Together. This is a deployment from Erick Giraldo";
    // throw new Error('Something went wrong');
};
