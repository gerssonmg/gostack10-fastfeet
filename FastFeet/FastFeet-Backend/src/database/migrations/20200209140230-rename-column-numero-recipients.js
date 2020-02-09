module.exports = {
  up: queryInterface => {
    return queryInterface.renameColumn('recipients', 'numero', 'number');
  },

  down: queryInterface => {
    return queryInterface.renameColumn('recipients', 'number', 'numero');
  },
};
