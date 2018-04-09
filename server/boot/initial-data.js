import migration from '../../migrations';

export default async (app) => {
  const {
    System,
  } = app.models;

  let dbVersion;
  dbVersion = await System.findOne({ key: 'dbversion' });
  if (!dbVersion) {
    await System.create({
      key: 'dbversion',
      value: '0',
    });
    dbVersion = await System.findOne({ key: 'dbversion' });
  }

  try {
    const newVersion = await migration(app, dbVersion.value);
    await System.update({
      key: 'dbversion',
      value: `${newVersion}`,
    });
  } catch (error) {
    console.error('    Error while migration');
    console.error(`    ${error.message}`);
    throw error;
  }
};
