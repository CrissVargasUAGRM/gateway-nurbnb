module.exports = {
    version: '1.2.0',
    init: function (pluginContext) {
        let policy = require('../policies/create-commend-person.policy');
        pluginContext.registerPolicy(policy);
    },
    policies: ['create-commend-person'],
    schema: {
        "$id":"http://express-gateway.io/schemas/policies/proxy.json"
    }
}