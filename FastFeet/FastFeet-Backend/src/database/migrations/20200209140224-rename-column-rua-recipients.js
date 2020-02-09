module.exports = {
  up: queryInterface => {
    return queryInterface.renameColumn('recipients', 'rua', 'street');
  },

  down: queryInterface => {
    return queryInterface.renameColumn('recipients', 'street', 'rua');
  },
};
