module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/get-commend-property.policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['get-commend-property'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}