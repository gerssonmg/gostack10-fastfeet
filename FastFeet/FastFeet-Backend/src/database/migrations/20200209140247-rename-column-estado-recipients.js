module.exports = {
  up: queryInterface => {
    return queryInterface.renameColumn('recipients', 'estado', 'state');
  },

  down: queryInterface => {
    return queryInterface.renameColumn('recipients', 'state', 'estado');
  },
};
