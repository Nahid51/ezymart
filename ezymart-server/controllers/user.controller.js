const userModel = require("../models/user.model.js");

exports.updateUser = async (req, res, next) => {
    try {
        const updateUser = await userModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.status(200).json(updateUser);

    } catch (error) {
        next(error)
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const deleteUser = await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteUser);

    } catch (error) {
        next(error)
    }
};

exports.getUser = async (req, res, next) => {
    try {
        const getUser = await userModel.findById(req.params.id);
        res.status(200).json(getUser);

    } catch (error) {
        next(error)
    }
};

exports.getUsers = async (req, res, next) => {
    try {
        const getUsers = await userModel.find({});
        res.status(200).json(getUsers);

    } catch (error) {
        next(error)
    }
};