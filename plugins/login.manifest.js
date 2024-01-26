module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/login.policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['login'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}