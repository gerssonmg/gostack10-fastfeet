import * as Yup from 'yup';
import Delivery from '../models/Delivery';

class DeliveryController {
  async index(req, res) {
    try {
      return res.json(
        await Order.findAll({
          attributes: ['id', 'product'],
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
      const orderOK = await Order.create(req.body);
      return res.json({
        orderOK,
      });
    } catch (err) {
      return res.status(400).json({ error: `Create fails: ${err}` });
    }
  }

  async update(req, res) {
    let order;
    try {
      order = await Order.findByPk(req.params.id);
    } catch (error) {
      return res.status(400).json({ error: `not found order: ${error}` });
    }

    const schema = Yup.object().shape({
      product: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    try {
      const orderUpdate = await order.update(req.body);
      return res.json({
        orderUpdate,
      });
    } catch (error) {
      return res.status(400).json({ error: `Error Update:${error}` });
    }
  }

  async delete(req, res) {
    try {
      const orderDelete = await Order.destroy({
        where: { id: req.params.id },
      });
      return res.json(orderDelete);
    } catch (error) {
      return res.status(400).json({ error: `Error Delete:${error}` });
    }
  }
}

export default new DeliveryController();
