module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/create-reserve.policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['create-reserve'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}