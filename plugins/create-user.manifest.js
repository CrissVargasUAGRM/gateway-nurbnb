module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/create-user.policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['create-user'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}