module.exports = {
  up: queryInterface => {
    return queryInterface.renameColumn('recipients', 'bairro', 'district');
  },

  down: queryInterface => {
    return queryInterface.renameColumn('recipients', 'district', 'bairro');
  },
};
