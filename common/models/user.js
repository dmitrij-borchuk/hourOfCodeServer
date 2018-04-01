// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0


// user types:  1: rootadmin; 2: administration; 3: teacher; 4: mentor;
module.exports = function(User) {
    User.getName = function(userId, cb) {
        User.findById(userId, function(err, instance) {
            var response = "Name of user " + instance.name;
            cb(null, response);
            console.log(response);
        });
    };

    User.remoteMethod(
        'getName', {
            http: { path: '/getname', verb: 'get' },
            accepts: { arg: 'id', type: 'number', http: { source: 'query' } },
            returns: { arg: 'name', type: 'string' }
        }
    );
};
