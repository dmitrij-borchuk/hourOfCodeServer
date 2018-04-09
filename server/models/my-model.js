export default (MyModel) => {
  // send an email
  MyModel.sendEmail = (cb) => {
    MyModel.app.models.Email.send({
      to: 'ibit.igor@gmail.com',
      from: 'ibitlab.kindhack.notifier@gmail.com',
      subject: 'my subject',
      text: 'my text',
      html: 'my <em>html</em>',
    }, (err) => {
      console.log('email sent!');
      cb(err);
    });
  }
};
