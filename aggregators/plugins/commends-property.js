module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/commends-property.policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['commeds-property'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}