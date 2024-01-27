module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/get-reserves.policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['get-reserves'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}