'use strict';

module.exports = function(Group) {

    console.log('wwww');

    // Group.beforeRemote('upsert', function(ctx, modelInstance, next) {
    //     console.log('upsert called');
    //     next();
    // });

    Group.beforeRemote('create', function(context, user, next) {
        // context.args.data.date = Date.now();
        // context.args.data.owner = context.req.accessToken.userId;
        // console.log("context.req.accessToken.userId==", context.req.accessToken.userId);
        console.log("context.req.accessToken.==", context.req.accessToken);
        console.log("context.req.accessToken.userId==", context.req.accessToken.userId);
        console.log("context.args.data.mentorId==", context.args.data.mentorId);
        console.log("context.args.data==", context.args.data);

        if (context.args.data.mentorId && context.args.data.mentorId !== 0 && context.req.accessToken.userId !== context.args.data.mentorId) {
            next(new Error("Mentor can not remove another Mentor"));
        }
        else if ( // (!context.args.data.mentorId || context.args.data.mentorId === 0 ) 
            !(context.args.data.mentorId && context.args.data.mentorId !== 0) ||
            (context.args.data.mentorId && context.args.data.mentorId !== 0 && context.req.accessToken.userId === context.args.data.mentorId)) {

            // var u = Group.app.models.user.findOne({ filter: { where: { id: context.req.accessToken.userId } } });
            // console.log("u ===", u);

            Group.app.models.User.findById(context.req.accessToken.userId, function(err, userData) {
                if (err) return next(err);
                if (!userData) return next(new Error('No user with this access token was found.'));
                console.log("u  userData===", userData);


                console.log('email create sent!');
                Group.app.models.Email.send({
                    to: 'ibit.igor@gmail.com',
                    from: 'ibitlab.kindhack.notifier@gmail.com',
                    subject: 'Mentor unasigned from Group ' + context.args.data.name,
                    text: 'Details: ...'
                    // html: 'my <code>' + JSON.stringify(context.args.data) + '</code>'
                }, function(err, mail) {
                    console.log('email create sent! err==', err, ' mail==', mail);
                    // cb(err);
                    next();
                });


                // next();
            });

        }
        else {
            console.log('ELSE )');
            next();
        }

        // Test.app.models.Email.send({
        //     to: 'ibit.igor@gmail.com',
        //     from: 'ibitlab.kindhack.notifier@gmail.com',
        //     subject: 'my subject ON create',
        //     text: 'my text',
        //     html: 'my <code>' + context.args.data + '</code>'
        // }, function(err, mail) {
        //     console.log('email create sent! err==', err, ' mail==', mail);
        //     // cb(err);
        // });

        // next();
    });

};
