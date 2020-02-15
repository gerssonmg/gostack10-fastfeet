import * as Yup from 'yup';
import { startOfHour, setHours, isAfter, isBefore } from 'date-fns';
import Queue from '../../lib/Queue';

import CancellationMain from '../jobs/CancellationMail';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

class DeliveryController {
  /**
   * pt: Retornar todas as encomendas
   *
   * en: Return all deliveries
   * @param {*} req
   * @param {*} res
   */
  async index(req, res) {
    try {
      return res.json(
        await Delivery.findAll({
          // attributes: ['id', 'product'],
        })
      );
    } catch (error) {
      return res.status(400).json({ error: `${error}` });
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string().required('product'),
      recipient_id: Yup.string().required('recipient_id'),
      deliveryman_id: Yup.string().required('deliveryman_id'),
    });

    try {
      await schema.validate(req.body);
    } catch (error) {
      return res.status(400).json({ error: `Validation fails: ${error}` });
    }

    try {
      // const payload = req.body;
      // payload.start_date = new Date();
      const deliveryOK = await Delivery.create(req.body);

      const delivery = await Delivery.findAll({
        where: {
          id: deliveryOK.id,
        },
        attributes: ['product'],
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
      });

      await Queue.add(CancellationMain.key, {
        delivery,
      });

      return res.json({
        delivery: {
          id: deliveryOK.id,
        },
      });
    } catch (err) {
      return res.status(400).json({ error: `Create fails: ${err}` });
    }
  }

  async update(req, res) {
    let delivery;
    try {
      delivery = await Delivery.findByPk(req.params.id);
    } catch (error) {
      return res.status(400).json({ error: `not found delivery: ${error}` });
    }

    const schema = Yup.object().shape({
      product: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const endpoint = req.url.split('/');
    if (endpoint[endpoint.length - 1] === 'status') {
      const { canceled_at, start, end } = req.body;

      if ((canceled_at && end) || (start && end) || (start && canceled_at)) {
        return res.status(400).json({
          error:
            'Just one attribute, it can be true. canceled_at or end or start ',
        });
      }
      if (start) {
        const data_now = new Date();

        const data_now_hours_clean = startOfHour(data_now);

        const hoursBeginDay = setHours(data_now_hours_clean, 8);

        const hoursEndDay = setHours(data_now_hours_clean, 18);

        if (
          isBefore(hoursBeginDay, data_now) &&
          isAfter(hoursEndDay, data_now)
        ) {
          try {
            delivery.start_date = data_now;
            const ret = await Delivery.update(
              {
                start_date: new Date(),
              },
              {
                where: {
                  id: req.params.id,
                },
                returning: true,
              }
            );
            return res.json({
              ret,
            });
          } catch (error) {
            return res
              .status(400)
              .json({ error: `Error.. Update:     ${error}` });
          }
        } else {
          return res.status(400).json({
            error: `Not range time valid.Is 08:00:00 of 18:00:00`,
          });
        }
      } else if (end) {
        try {
          const ret = await Delivery.update(
            {
              start_date: new Date(),
            },
            {
              where: {
                id: req.params.id,
              },
            }
          );
          return res.json({
            ret,
          });
        } catch (error) {
          return res
            .status(400)
            .json({ error: `Error.. Update:     ${error}` });
        }
      } else if (canceled_at) {
        try {
          const ret = await Delivery.update(
            {
              canceled_at: new Date(),
            },
            {
              where: {
                id: req.params.id,
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
          return res
            .status(400)
            .json({ error: `Error.. Update:     ${error}` });
        }
      }
    }

    try {
      const deliveryUpdate = await delivery.update(req.body);
      return res.json({
        deliveryUpdate,
      });
    } catch (error) {
      return res.status(400).json({ error: `Error Update:${error}` });
    }
  }

  async delete(req, res) {
    try {
      const deliveryDelete = await Delivery.destroy({
        where: { id: req.params.id },
      });
      return res.json(deliveryDelete);
    } catch (error) {
      return res.status(400).json({ error: `Error Delete:${error}` });
    }
  }
}

/**
 * Controller responsavel por manipular
 * as encomendas
 */
export default new DeliveryController();
