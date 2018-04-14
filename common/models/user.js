import R from 'ramda';
import util from 'util';
// user types:  1: rootadmin; 2: administration; 3: teacher; 4: mentor;
export default (User) => {
  User.getName = (userId, cb) => {
    User.findById(userId, (err, instance) => {
      const response = `Name of user ${instance.name}`;
      cb(null, response);
    });
  };

  User.remoteMethod('getName', {
    http: { path: '/getName', verb: 'get' },
    accepts: { arg: 'id', type: 'number', http: { source: 'query' } },
    returns: { arg: 'name', type: 'string' },
  });

  User.getRolesById = async (id, cb) => {
    const getApp = R.bind(util.promisify(User.getApp), User);
    const app = await getApp();
    const {
      Role,
      RoleMapping,
    } = app.models;
    const roleMappings = await RoleMapping.find({ where: { principalId: id } });
    const getRolesIds = R.compose(R.uniq, R.pluck('roleId'));
    const roleIds = getRolesIds(roleMappings);
    const conditions = R.map(d => ({ id: d }), roleIds);
    const roles = await Role.find({ where: { or: conditions } });
    const roleNames = R.pluck('name', roles);
    cb(null, roleNames);
  };
  User.remoteMethod('getRolesById', {
    http: { path: '/getRolesById', verb: 'get' },
    accepts: { arg: 'id', type: 'number', required: true },
    returns: { arg: 'payload', type: 'array' },
  });
};
