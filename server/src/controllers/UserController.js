/* models */
import models from '../db/models';

/* queues */
import { userQueue } from '../queues/userQueue';

const { User } = models;

export const UserController = {
  getAllUsers: async (req, res) => {
    try {
      await userQueue.add({ age: 30 });
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
  createUser: async (req, res) => {
    const { name } = req.body;
    try {
      const user = await User.create({ name });
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
};
