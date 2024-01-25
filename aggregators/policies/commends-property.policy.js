const axios = require('axios');

module.exports = {
    name: 'commeds-property',
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
        return async (req, res, next) => {
            const id = req.params.id;
            const commendsData = await axios.get(actionParams.baseUrl[0] + '/commends/' + id);
            const propertyData = await axios.get(actionParams.baseUrl[1] + '/propiedad/' + id);

            const comentarios = commendsData.data;
            const propiedad = propertyData.data[0];
            propiedad.comentarios = comentarios;

            res.status(200).send(propiedad);
        }
    }
}