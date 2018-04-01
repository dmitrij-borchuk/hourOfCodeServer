'use strict';

module.exports = function(Test) {
    Test.status = function(cb) {
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

    Test.remoteMethod(
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

    Test.getName = function(shopId, cb) {
        Test.findById(shopId, function(err, instance) {
            var response = "Name of coffee shop is " + instance.name;
            cb(null, response);
            console.log(response);
        });
    };

    Test.remoteMethod(
        'getName', {
            http: { path: '/getname', verb: 'get' },
            accepts: { arg: 'id', type: 'number', http: { source: 'query' } },
            returns: { arg: 'name', type: 'string' }
        }
    );

    Test.beforeRemote('create', function(context, user, next) {
        context.args.data.date = Date.now();
        // context.args.data.owner = context.req.accessToken.userId;


        Test.app.models.Email.send({
            to: 'ibit.igor@gmail.com',
            from: 'ibitlab.kindhack.notifier@gmail.com',
            subject: 'my subject ON create',
            text: 'my text',
            html: 'my <code>' + context.args.data + '</code>'
        }, function(err, mail) {
            console.log('email create sent! err==', err, ' mail==', mail);
            // cb(err);
        });

        next();
    });


    Test.sendEmail = function(cb) {
        Test.app.models.Email.send({
            to: 'ibit.igor@gmail.com',
            from: 'ibitlab.kindhack.notifier@gmail.com',
            subject: 'my subject ON sendEmail',
            text: 'my text',
            html: 'my <em>html</em>'
        }, function(err, mail) {
            console.log('email sent! err==', err, ' mail==', mail);
            cb(err);
        });
    }

    Test.remoteMethod(
        'sendEmail', {
            http: { path: '/sendEmail', verb: 'get' },
            // accepts: { arg: 'id', type: 'number', http: { source: 'query' } },
            // returns: { arg: 'name', type: 'string' }
        }
    );

};
