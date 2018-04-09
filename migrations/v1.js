const usersData = [
  { username: 'admin', email: 'admin@hour-of-code.com', password: 'admin' },
  { username: 'Waylon Dalton', email: 'teacher1@hour-of-code.com', password: 'teacher' },
  { username: 'Justine Henderson', email: 'teacher2@hour-of-code.com', password: 'teacher' },
  { username: 'Abdullah Lang', email: 'teacher3@hour-of-code.com', password: 'teacher' },
  { username: 'Marcus Cruz', email: 'teacher4@hour-of-code.com', password: 'teacher' },
  { username: 'Thalia Cobb', email: 'Mentor1@hour-of-code.com', password: 'mentor' },
  { username: 'Mathias Little', email: 'Mentor2@hour-of-code.com', password: 'mentor' },
  { username: 'Eddie Randolph', email: 'Mentor3@hour-of-code.com', password: 'mentor' },
  { username: 'Angela Walker', email: 'Mentor4@hour-of-code.com', password: 'mentor' },
];

const districtData = [
  { name: 'Залізничний' },
  { name: 'Шевченківський' },
  { name: 'Франківський' },
];

const schoolsData = [
  {
    name: 'СШ 1',
    lat: '49.892462',
    lng: '24.15398384',
    districtId: 1,
  },
  {
    name: 'СШ 2',
    lat: '49.73391247',
    lng: '24.09184913',
    districtId: 1,
  },
  {
    name: 'СШ 3',
    lat: '49.95107397',
    lng: '24.19411186',
    districtId: 1,
  },
  {
    name: 'СШ 11',
    lat: '49.87345064',
    lng: '24.13954534',
    districtId: 2,
  },
  {
    name: 'СШ 12',
    lat: '49.95632189',
    lng: '24.1781768',
    districtId: 2,
  },
  {
    name: 'СШ 13',
    lat: '49.71768529',
    lng: '24.01696071',
    districtId: 2,
  },
  {
    name: 'СШ 21',
    lat: '49.75717775',
    lng: '24.18284422',
    districtId: 3,
  },
  {
    name: 'СШ 22',
    lat: '49.74150492',
    lng: '24.03927265',
    districtId: 3,
  },
  {
    name: 'СШ 23',
    lat: '49.75043193',
    lng: '24.10458476',
    districtId: 3,
  },
];

const groupsData = [
  {
    name: 'Клас 8А', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: '2018-12-03T11:00:08.482Z', details: '15 компютерів, принтер', mentorId: 6, teacherId: 2, schoolId: 1,
  }, // mentorId teacherId schoolId
  {
    name: 'Клас 9А', dateStart: '2018-12-04T13:00:08.482Z', dateEnd: '2018-12-03T14:00:08.482Z', details: '5 компютерів', mentorId: 7, teacherId: 3, schoolId: 1,
  },
  {
    name: 'Клас 10А 1', dateStart: '2018-12-05T09:00:08.482Z', dateEnd: '2018-12-03T11:00:08.482Z', details: '10 компютерів, інтернет', mentorId: 0, teacherId: 4, schoolId: 1,
  },
  {
    name: 'Клас 10А 2', dateStart: '2018-12-05T12:00:08.482Z', dateEnd: '2018-12-03T13:00:08.482Z', details: '12 компютерів, інтернет', mentorId: 6, teacherId: 3, schoolId: 1,
  },
  {
    name: 'Клас 18А', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: '2018-12-03T12:00:08.482Z', details: '15 компютерів, принтер', mentorId: 6, teacherId: 4, schoolId: 2,
  }, // mentorId teacherId schoolId
  {
    name: 'Клас 19А', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: '2018-12-03T09:00:08.482Z', details: '5 компютерів', mentorId: 0, teacherId: 7, schoolId: 2,
  },
  {
    name: 'Клас 110А 1', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: '2018-12-03T09:00:08.482Z', details: '10 компютерів, інтернет', mentorId: 8, teacherId: 2, schoolId: 2,
  },
  {
    name: 'Клас 110А 2', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: '2018-12-03T09:00:08.482Z', details: '10 компютерів, інтернет', mentorId: 9, teacherId: 3, schoolId: 2,
  },
  {
    name: 'Клас 28А', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: '2018-12-03T09:00:08.482Z', details: '15 компютерів, принтер', mentorId: 6, teacherId: 5, schoolId: 3,
  }, // mentorId teacherId schoolId
  {
    name: 'Клас 29А', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: '2018-12-03T09:00:08.482Z', details: '5 компютерів', mentorId: 0, teacherId: 7, schoolId: 3,
  },
  {
    name: 'Клас 210А 1', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: '2018-12-03T09:00:08.482Z', details: '10 компютерів, інтернет', mentorId: 0, teacherId: 5, schoolId: 3,
  },
  {
    name: 'Клас 210А 2', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: '2018-12-03T09:00:08.482Z', details: '10 компютерів, інтернет', mentorId: 0, teacherId: 4, schoolId: 3,
  },
  {
    name: 'Клас 29А', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: '2018-12-03T09:00:08.482Z', details: '5 компютерів', mentorId: 0, teacherId: 7, schoolId: 4,
  },
  {
    name: 'Клас 210А 1', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: '2018-12-03T09:00:08.482Z', details: '10 компютерів, інтернет', mentorId: 0, teacherId: 5, schoolId: 4,
  },
  {
    name: 'Клас 210А 2', dateStart: '2018-12-03T09:00:08.482Z', dateEnd: '2018-12-03T09:00:08.482Z', details: '10 компютерів, інтернет', mentorId: 0, teacherId: 4, schoolId: 4,
  },
];

export default async (app) => {
  const {
    user,
    District,
    School,
    Group,
    Role,
    RoleMapping,
  } = app.models;

  const users = await user.create(usersData);
  const systemAdminRole = await Role.create({
    name: 'system-admin',
  });
  systemAdminRole.principals.create({
    principalType: RoleMapping.USER,
    principalId: users[0].id,
  });

  districtData.forEach((item) => {
    District.create(item);
  });

  schoolsData.forEach((item) => {
    School.create(item);
  });

  groupsData.forEach((item) => {
    Group.create(item);
  });
};
