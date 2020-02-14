import * as Yup from 'yup';

import DeliveryProblem from '../models/DeliveryProblem';

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
}

export default new DeliveryProblemController();
