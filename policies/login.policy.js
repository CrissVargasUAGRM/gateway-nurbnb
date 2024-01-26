const axios = require('axios');

module.exports = {
    name: 'login',
    schema: {
        $id: 'http://express-gateway.io/schemas/policies/proxy.json',
        type:  'object',
        properties: {
            baseUrl: {
                type: 'array',
                format: 'url',
                default: ['https://example.com']
            }
        }
    },
    policy: (actionParams) => {
        const that = this;
        return async(req, res, next) => {
            const response = await axios.post(actionParams.baseUrl[0] + '/login', req.body);
            res.status(200).send(response.data);
        }
    }
}