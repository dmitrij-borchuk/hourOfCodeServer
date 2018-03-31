'use strict';

module.exports = function(Document) {
    Document.status = function(cb) {
        var currentDate = new Date();
        var currentHour = currentDate.getHours();
        var OPEN_HOUR = 6;
        var CLOSE_HOUR = 20;
        console.log('Current hour is %d', currentHour);
        var response;
        if (currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR) {
            response = 'We are open for business.';
        }
        else {
            response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
        }
        cb(null, response);
    };

    Document.remoteMethod(
        'status', {
            http: {
                path: '/status',
                verb: 'get'
            },
            returns: {
                arg: 'status',
                type: 'string'
            }
        }
    );

    Document.getName = function(shopId, cb) {
        Document.findById(shopId, function(err, instance) {
            var response = "Name of coffee shop is " + instance.name;
            cb(null, response);
            console.log(response);
        });
    };

    Document.remoteMethod(
        'getName', {
            http: { path: '/getname', verb: 'get' },
            accepts: { arg: 'id', type: 'number', http: { source: 'query' } },
            returns: { arg: 'name', type: 'string' }
        }
    );

    Document.beforeRemote('create', function(context, user, next) {
        context.args.data.date = Date.now();
        context.args.data.owner = context.req.accessToken.userId;
        next();
    });


};
