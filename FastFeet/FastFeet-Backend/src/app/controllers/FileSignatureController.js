import File from '../models/File';

class FileSignatureController {
  async store(req, res) {
    try {
      const { originalname: name, filename: path } = req.file;

      const file = await File.create({
        name,
        path,
        avatar: false,
      });

      return res.json(file);
    } catch (error) {
      return res.status(400).json({ error: `Erro file:${error}` });
    }
  }
}

export default new FileSignatureController();
