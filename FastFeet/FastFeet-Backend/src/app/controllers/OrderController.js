import * as Yup from 'yup';
import Order from '../models/Order';

class OrderController {
  async index(req, res) {
    try {
      return res.json(
        await Order.findAll({
          attributes: ['id', 'product'],
        })
      );
    } catch (err) {
      return res.status(400).json({ error: err });
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
    } catch (err) {
      return res.status(400).json({ error: `Validation fails: ${err}` });
    }

    try {
      const orderOK = await Order.create(req.body);
      return res.json({
        orderOK,
      });
    } catch (err) {
      return res.status(400).json({ error: `Create fails: ${err}` });
    }
  }

  async update(req, res) {
    return res.json('UPDATE OK');
    const deliveryman = await Order.findByPk(req.params.id);
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
      const deliverymanExists = await Order.findOne({ where: { email } });
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
    return res.json('DELETE OK');
    const d = await Order.destroy({
      where: { id: req.params.id },
    });

    return res.json(d);
  }
}

export default new OrderController();
