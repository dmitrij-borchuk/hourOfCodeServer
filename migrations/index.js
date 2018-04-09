import v1 from './v1';

const migrations = [
  v1,
];

// (App, [Function], Number) -> Number
const runMigration = async (app, arr, v) => {
  const f = arr[v];
  if (f) {
    await f(app);
    return runMigration(app, arr, v + 1);
  }

  return v;
};

export default async (app, fromVersion) => {
  const v = parseInt(fromVersion, 10);

  return runMigration(app, migrations, v);
};
