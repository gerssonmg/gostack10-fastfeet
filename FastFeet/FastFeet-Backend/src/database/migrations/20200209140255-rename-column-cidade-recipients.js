module.exports = {
  up: queryInterface => {
    return queryInterface.renameColumn('recipients', 'cidade', 'city');
  },

  down: queryInterface => {
    return queryInterface.renameColumn('recipients', 'city', 'cidade');
  },
};
