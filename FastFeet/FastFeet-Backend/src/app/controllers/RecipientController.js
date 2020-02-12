import * as Yup from 'yup';
import Recipient from '../models/Recipient';
import UserController from './UserController';

class RecipientController {
  async store(req, res) {
    if (!(await UserController.indexAdmin(req, res))) {
      return res.status(400).json({ error: 'User not Admin' });
    }

    // atrrs in required, será usado no retorno
    // caso tenha erro try/catch
    const schema = Yup.object().shape({
      name: Yup.string().required('name'),
      district: Yup.string().required('district'),
      street: Yup.string().required('street'),
      number: Yup.number().required('number'),
      state: Yup.string().required('state'),
      city: Yup.string().required('city'),
      complement: Yup.string().required('complement'),
      zipcode: Yup.string().required('zipcode'),
    });

    try {
      await schema.validate(req.body);
    } catch (err) {
      return res.status(400).json({ error: `Validation fails: ${err}` });
    }

    const {
      name,
      district,
      street,
      number,
      state,
      city,
      complement,
      zipcode,
    } = await Recipient.create(req.body);
    return res.json({
      name,
      district,
      street,
      number,
      state,
      city,
      complement,
      zipcode,
    });
  }

  async update(req, res) {
    if (!(await UserController.indexAdmin(req, res))) {
      return res.status(400).json({ error: 'User not Admin' });
    }

    const schema = Yup.object().shape({
      name: Yup.string().min(1),
      district: Yup.string().min(1),
      street: Yup.string().min(1),
      number: Yup.number().positive(),
      state: Yup.string().min(1),
      city: Yup.string().min(1),
      complement: Yup.string().min(1),
      zipcode: Yup.string().min(1),
    });

    try {
      await schema.validate(req.body);
    } catch (err) {
      return res.status(400).json({ error: `Validation fails: ${err}` });
    }

    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(400).json({ error: 'Id not found.' });
    }

    try {
      const {
        id,
        name,
        district,
        street,
        number,
        state,
        city,
        complement,
        zipcode,
      } = await recipient.update(req.body);
      return res.json({
        id,
        name,
        district,
        street,
        number,
        state,
        city,
        complement,
        zipcode,
      });
    } catch (err) {
      return res.status(400).json({ error: `Error update: ${err.name}` });
    }
  }
}

export default new RecipientController();
