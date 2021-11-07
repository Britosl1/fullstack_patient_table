import PostUser from "../models/userModels.js";
import mongoose from 'mongoose';

export const getUserMessage = (_req, res) => {
  res.send('REST Fullstack Challenge 20201209 Running');
}

export const getUser = async (_req, res, next) => {
  try {
    const getUser = await PostUser.find();
    res.status(200).json(getUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  next();
};

export const getUserId = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const getById = await PostUser.findOne({ _id: userId });
    res.status(200).json(getById);

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  next();
};

export const updateUser = async (req, res, next) => {
  const { userId } = req.params;
  const { gender, name, location, email, login, dob, phone, nat } = req.body;

  try {
    const getById = await PostUser.findById(userId);

    const updatedUser = await PostUser.findOneAndUpdate({ _id: userId });

    res.status(200).json(updatedUser);

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  next()
};

export const deleteUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const deleteUser = await PostUser.findOneAndDelete({ _id: userId });
    console.log(userId);

    res.status(200).json(deleteUser);

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
  next();
};