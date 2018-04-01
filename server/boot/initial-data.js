var async = require('async');

module.exports = function(app) {
  var user = app.models.user;
  var district = app.models.District;
  var school = app.models.School;
  var group = app.models.Group;

  var usersData = [
    { username: 'admin', email: 'admin@hour-of-code.com', password: "admin" },
    { username: 'Teacher 1', email: 'teacher1@hour-of-code.com', password: "teacher" },
    { username: 'Teacher 2', email: 'teacher2@hour-of-code.com', password: "teacher" },
    { username: 'Teacher 3', email: 'teacher3@hour-of-code.com', password: "teacher" },
    { username: 'Teacher 4', email: 'teacher4@hour-of-code.com', password: "teacher" },
    { username: 'Mentor 1', email: 'Mentor1@hour-of-code.com', password: "mentor" },
    { username: 'Mentor 2', email: 'Mentor2@hour-of-code.com', password: "mentor" },
    { username: 'Mentor 3', email: 'Mentor3@hour-of-code.com', password: "mentor" },
    { username: 'Mentor 4', email: 'Mentor4@hour-of-code.com', password: "mentor" }
  ];

  var districtData = [
    { name: 'Залізничний' },
    { name: 'Шевченківський' },
    { name: 'Франківський' }
  ];

  var schoolsData = [
    { name: 'СШ 1', lat: '49.841116', lng: "23.974943", districtId: 1 },
    { name: 'СШ 2', lat: '49.841116', lng: "23.974943", districtId: 1 },
    { name: 'СШ 3', lat: '49.841116', lng: "23.974943", districtId: 1 },
    { name: 'СШ 11', lat: '49.841116', lng: "23.974943", districtId: 2 },
    { name: 'СШ 12', lat: '49.841116', lng: "23.974943", districtId: 2 },
    { name: 'СШ 13', lat: '49.841116', lng: "23.974943", districtId: 2 },
    { name: 'СШ 21', lat: '49.841116', lng: "23.974943", districtId: 3 },
    { name: 'СШ 22', lat: '49.841116', lng: "23.974943", districtId: 3 },
    { name: 'СШ 23', lat: '49.841116', lng: "23.974943", districtId: 3 }
  ];

  var groupsData = [
    { name: 'Клас 8А', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: "2018-12-03T11:00:08.482Z", details: "15 компютерів, принтер", mentorId: 6, teacherId: 2, schoolId: 1 }, //mentorId teacherId schoolId
    { name: 'Клас 9А', dateStart: '2018-12-04T13:00:08.482Z', dateEnd: "2018-12-03T14:00:08.482Z", details: "5 компютерів", mentorId: 7, teacherId: 3, schoolId: 1 },
    { name: 'Клас 10А 1', dateStart: '2018-12-05T09:00:08.482Z', dateEnd: "2018-12-03T11:00:08.482Z", details: "10 компютерів, інтернет", mentorId: 0, teacherId: 4, schoolId: 1 },
    { name: 'Клас 10А 2', dateStart: '2018-12-05T12:00:08.482Z', dateEnd: "2018-12-03T13:00:08.482Z", details: "12 компютерів, інтернет", mentorId: 6, teacherId: 3, schoolId: 1 },
    { name: 'Клас 18А', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: "2018-12-03T12:00:08.482Z", details: "15 компютерів, принтер", mentorId: 6, teacherId: 4, schoolId: 2 }, //mentorId teacherId schoolId
    { name: 'Клас 19А', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: "2018-12-03T09:00:08.482Z", details: "5 компютерів", mentorId: 0, teacherId: 7, schoolId: 2 }, 
    { name: 'Клас 110А 1', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: "2018-12-03T09:00:08.482Z", details: "10 компютерів, інтернет", mentorId: 8, teacherId: 2, schoolId: 2 },
    { name: 'Клас 110А 2', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: "2018-12-03T09:00:08.482Z", details: "10 компютерів, інтернет", mentorId: 9, teacherId: 3, schoolId: 2 },
    { name: 'Клас 28А', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: "2018-12-03T09:00:08.482Z", details: "15 компютерів, принтер", mentorId: 6, teacherId: 5, schoolId: 3}, //mentorId teacherId schoolId
    { name: 'Клас 29А', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: "2018-12-03T09:00:08.482Z", details: "5 компютерів", mentorId: 0, teacherId: 7, schoolId: 3 }, 
    { name: 'Клас 210А 1', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: "2018-12-03T09:00:08.482Z", details: "10 компютерів, інтернет", mentorId: 0, teacherId: 5, schoolId: 3 },
    { name: 'Клас 210А 2', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: "2018-12-03T09:00:08.482Z", details: "10 компютерів, інтернет", mentorId: 0, teacherId: 4, schoolId: 3 },
    { name: 'Клас 29А', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: "2018-12-03T09:00:08.482Z", details: "5 компютерів", mentorId: 0, teacherId: 7, schoolId: 4 }, 
    { name: 'Клас 210А 1', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: "2018-12-03T09:00:08.482Z", details: "10 компютерів, інтернет", mentorId: 0, teacherId: 5, schoolId: 4 },
    { name: 'Клас 210А 2', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: "2018-12-03T09:00:08.482Z", details: "10 компютерів, інтернет", mentorId: 0, teacherId: 4, schoolId: 4 }
  ];

  usersData.forEach(function(item) {
      user.create(item);
  });
  
  districtData.forEach(function(item) {
      district.create(item);
  });
  
  schoolsData.forEach(function(item) {
      school.create(item);
  });
  
  groupsData.forEach(function(item) {
      group.create(item);
  });
  

  // // Create customers and orders
  // Customer.create(customers[0], function(err, instance) {
  //   if (err) return console.error(err);
  //   console.log('Customer created: ', instance);
  //   orders[0].customerId = instance.id;
  //   orders[1].customerId = instance.id;
  //   Order.create(orders[0], function(err, instance) {
  //     if (err) return console.error(err);
  //     console.log('Order created: ', instance);
  //   });
  //   Order.create(orders[1], function(err, instance) {
  //     if (err) return console.error(err);
  //     console.log('Order created: ', instance);
  //   });
  // });
  // Customer.create(customers[1], function(err, instance) {
  //   if (err) return console.error(err);
  //   console.log('Customer created: ', instance);
  //   orders[2].customerId = instance.id;
  //   Order.create(orders[2], function(err, instance) {
  //     if (err) return console.error(err);
  //     console.log('Order created: ', instance);
  //   });
  // });
  // Customer.create(customers[2], function(err, instance) {
  //   if (err) return console.error(err);
  //   console.log('Customer created: ', instance);
  //   orders[3].customerId = instance.id;
  //   Order.create(orders[3], function(err, instance) {
  //     if (err) return console.error(err);
  //     console.log('Order created: ', instance);
  //   });
  // });
  // Customer.create(customers[3], function(err, instance) {
  //   if (err) return console.error(err);
  //   console.log('Customer created: ', instance);
  //   instance.orders.create(orders[4], function(err, instance) {
  //     if (err) return console.error(err);
  //     console.log('Order created: ', instance);
  //     instance.shipments.create({ date: new Date(), description: 'Shipment' },
  //       function(err, instance) {
  //         if (err) return console.error(err);
  //         console.log('Shipment created: ', instance);
  //       });
  //   });
  // });

};
