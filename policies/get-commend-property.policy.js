const axios = require('axios');

module.exports = {
    name: 'get-commend-property',
    schema: {
        $id: 'http://express-gateway.io/schemas/policies/proxy.json',
        type:  'object',
        properties: {
            baseUrl: {
                type: 'object',
                format: 'url',
                default: ['https://example.com']
            }
        }
    },
    policy: (actionParams) => {
        const that = this;
        return async(req, res, next) => {
            const idUser = req.params.id;
            const response = await axios.get(actionParams.baseUrl[0]+`/commends/${idUser}`);
            res.status(200).send(response.data);
        }
    }
}