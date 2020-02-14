import * as Yup from 'yup';

import DeliveryProblem from '../models/DeliveryProblem';
import Delivery from '../models/Delivery';

import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';

class DeliveryProblemController {
  async store(req, res) {
    const schema = Yup.object().shape({
      delivery_id: Yup.number().required('delivery_id'),
      description: Yup.string()
        .required('required: description')
        .min(10, 'description > lenght(10)'),
    });

    try {
      await schema.validate(req.body);
    } catch (error) {
      return res.status(400).json({ error: `Validation fails: ${error}` });
    }

    try {
      const deliveryOK = await DeliveryProblem.create(req.body);
      return res.json({
        delivery: {
          id: deliveryOK.id,
        },
      });
    } catch (err) {
      return res.status(400).json({ error: `Create fails: ${err}` });
    }
  }

  /**
   * Listando todos os problemas
   * de uma encomenda pelo ID da encomenda
   * @param {*} req
   * @param {*} res
   */
  async index(req, res) {
    try {
      const { id } = req.params;
      const deliveryProblem = await DeliveryProblem.findAll({
        where: {
          delivery_id: id,
        },
        attributes: ['id', 'description'],
        include: [
          {
            model: Delivery,
            as: 'delivery',
            attributes: [
              'id',
              'product',
              'recipient_id',
              'deliveryman_id',
              'signature_id',
              'start_date',
              'end_date',
            ],
            include: [
              {
                model: Recipient,
                as: 'recipient',
                attributes: [
                  'name',
                  'district',
                  'street',
                  'number',
                  'complement',
                  'state',
                  'city',
                  'zipcode',
                ],
              },
              {
                model: Deliveryman,
                as: 'deliveryman',
                attributes: ['name', 'email'],
              },
            ],
          },
        ],
      });

      return res.json(deliveryProblem);
    } catch (error) {
      return res.status(400).json({ error: `Find DeliveryProblem: ${error}` });
    }
  }

  /**
   * Listando dos os problemas com
   * suas respectivas encomendas
   *
   * Logo e o mesmo que listar todas
   * as encomendas com problemas
   * @param {*} req
   * @param {*} res
   */
  async show(req, res) {
    try {
      const problemsDeliveries = await DeliveryProblem.findAll({
        attributes: ['id', 'description'],
        include: [
          {
            model: Delivery,
            as: 'delivery',
            attributes: [
              'id',
              'product',
              'recipient_id',
              'deliveryman_id',
              'signature_id',
              'start_date',
              'end_date',
            ],
            include: [
              {
                model: Recipient,
                as: 'recipient',
                attributes: [
                  'name',
                  'district',
                  'street',
                  'number',
                  'complement',
                  'state',
                  'city',
                  'zipcode',
                ],
              },
              {
                model: Deliveryman,
                as: 'deliveryman',
                attributes: ['name', 'email'],
              },
            ],
          },
        ],
      });

      return res.json(problemsDeliveries);
    } catch (error) {
      return res.status(400).json({ error: `Find DeliveryProblem: ${error}` });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const deliveryForCanceled = await DeliveryProblem.findAll({
        where: {
          id,
        },
        attributes: ['id', 'description'],
        include: [
          {
            model: Delivery,
            as: 'delivery',
            attributes: ['id', 'product'],
          },
        ],
      });

      const deliveryIdCanceled = deliveryForCanceled[0].delivery.id;
      try {
        const ret = await Delivery.update(
          {
            canceled_at: new Date(),
          },
          {
            where: {
              id: deliveryIdCanceled,
            },
          },
          {
            new: true,
          }
        );
        return res.json({
          ret,
        });
      } catch (error) {
        return res.status(400).json({ error: `Error.. Update:     ${error}` });
      }
    } catch (error) {
      return res.status(400).json({ error: `Find DeliveryProblem: ${error}` });
    }
  }
}

export default new DeliveryProblemController();
