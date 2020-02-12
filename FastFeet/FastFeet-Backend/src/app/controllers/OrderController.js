import * as Yup from 'yup';
import Delivery from '../models/Delivery';

class DeliveryController {
  async index(req, res) {
    try {
      return res.json(
        await Delivery.findAll({
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
      const deliveryOK = await Delivery.create(req.body);
      return res.json({
        deliveryOK,
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

export default new DeliveryController();
