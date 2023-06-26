import models from '../db/models';

const { User } = models;

export const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.status(200).json({ users });
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  getUser: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
