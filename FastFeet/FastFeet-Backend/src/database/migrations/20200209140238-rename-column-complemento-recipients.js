module.exports = {
  up: queryInterface => {
    return queryInterface.renameColumn(
      'recipients',
      'complemento',
      'complement'
    );
  },

  down: queryInterface => {
    return queryInterface.renameColumn(
      'recipients',
      'complement',
      'complemento'
    );
  },
};
