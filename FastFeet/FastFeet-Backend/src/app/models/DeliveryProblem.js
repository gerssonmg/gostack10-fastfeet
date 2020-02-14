/*

delivery_id (referência da encomenda);
description (descrição do problema que o entregador teve);
created_at;
updated_at;
*/
import Sequelize, { Model } from 'sequelize';

class DeliveryProblem extends Model {
  static init(sequelize) {
    super.init(
      {
        delivery_id: Sequelize.NUMBER,
        description: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default DeliveryProblem;
//
