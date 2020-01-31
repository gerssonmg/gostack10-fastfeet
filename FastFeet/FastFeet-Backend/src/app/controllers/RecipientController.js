import * as Yup from 'yup';
import Recipient from '../models/Recipient';
import UserController from './UserController';

class RecipientController {
  async store(req, res) {
    if (!(await UserController.indexAdmin(req, res))) {
      return res.status(400).json({ error: 'User not Admin' });
    }

    const schema = Yup.object().shape({
      name: Yup.string().required('name'),
      bairro: Yup.string().required('bairro'),
      rua: Yup.string().required('rua'),
      numero: Yup.number().required('numero'),
      estado: Yup.string().required('estado'),
      cidade: Yup.string().required('cidade'),
    });

    try {
      await schema.validate(req.body);
    } catch (err) {
      return res.status(400).json({ error: `Validation fails: ${err}` });
    }

    const {
      name,
      bairro,
      rua,
      numero,
      estado,
      cidade,
    } = await Recipient.create(req.body);
    return res.json({
      name,
      bairro,
      rua,
      numero,
      estado,
      cidade,
    });
  }

  async update(req, res) {
    if (!(await UserController.indexAdmin(req, res))) {
      return res.status(400).json({ error: 'User not Admin' });
    }

    const schema = Yup.object().shape({
      name: Yup.string().min(1, 'name'),
      bairro: Yup.string().min(1, 'bairro'),
      rua: Yup.string().min(1),
      numero: Yup.number().positive(),
      estado: Yup.string().min(1),
      cidade: Yup.string().min(1),
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

    const {
      id,
      name,
      bairro,
      rua,
      numero,
      estado,
      cidade,
    } = await recipient.update(req.body);
    return res.json({
      id,
      name,
      bairro,
      rua,
      numero,
      estado,
      cidade,
    });
  }
}

export default new RecipientController();
