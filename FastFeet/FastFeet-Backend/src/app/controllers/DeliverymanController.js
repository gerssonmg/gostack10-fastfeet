import * as Yup from 'yup';
import { Op } from 'sequelize';
import Deliveryman from '../models/Deliveryman';
import Delivery from '../models/Delivery';

class DeliverymanController {
  async index(req, res) {
    return res.json(
      await Delivery.findAll({
        where: {
          deliveryman_id: req.params.id,
          end_date: {
            [Op.is]: null,
          },
        },
        attributes: ['id', 'product', 'canceled_at'],
      })
    );
  }

  async show(req, res) {
    try {
      return res.json(
        await Delivery.findAll({
          where: {
            deliveryman_id: req.params.id,
            end_date: {
              [Op.not]: null,
            },
          },
          attributes: ['id', 'product', 'recipient_id', 'end_date'],
        })
      );
    } catch (error) {
      return res.status(400).json({ error: `Erro show:${error}` });
    }
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      avatar_id: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validataion fails' });
    }

    const deliverymanExists = await Deliveryman.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (deliverymanExists) {
      return res.status(400).json({ error: 'Deliveryman already exists.' });
    }
    const { id, name, email, avatar_id } = await Deliveryman.create(req.body);
    return res.json({
      id,
      name,
      email,
      avatar_id,
    });
  }

  async update(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);
    const { email } = req.body;

    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      avatar_id: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (email && email !== deliveryman.email) {
      const deliverymanExists = await Deliveryman.findOne({ where: { email } });
      if (deliverymanExists) {
        return res
          .status(400)
          .json({ error: 'Deliveryman Exists already exists.' });
      }
    }

    const { id, name, avatar_id } = await deliveryman.update(req.body);
    return res.json({
      id,
      name,
      email,
      avatar_id,
    });
  }

  async delete(req, res) {
    const d = await Deliveryman.destroy({
      where: { id: req.params.id },
    });

    return res.json(d);
  }
}

export default new DeliverymanController();
