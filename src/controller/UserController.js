import { UserModel } from "../model/UserModel.js";


export const getUser = async (req, res) => {
    try {
        const dataUser = await UserModel.find();
        return res.status(200).json(dataUser);
    } catch (err) {
        return res.status(500).json({ err })
    }
}

export const createUser = async (req, res) => {
    try {
        const dataUser = new UserModel(req.body);
        await dataUser.save()
        return res.status(201).json(dataUser);
    } catch (err) {
        return res.status(500).json({ err })
    }
}

export const createNewUser = (req, res) => {
    const dataUser = new UserModel(req.body)

    return dataUser
        .save()
        .then((newUser) => {
            return res.status(201).json({
                success: true,
                message: 'New user created successfully',
                dataUser: newUser,
            });
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
        });
}

export const getAllUser = (req, res) => {
    UserModel.find()
        .then((allUser) => {
            return res.status(200).json({
                success: true,
                message: 'A list of all user',
                UserModel: allUser,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message,
            });
        });
}

export const getSingleUser = (req, res) => {
    const id = req.params.Id;
    UserModel.findById(id)
        .then((singleUser) => {
            res.status(200).json({
                success: true,
                message: `${singleUser.userName} already`,
                UserModel: singleUser,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'This username does not exist',
                error: err.message,
            });
        });
}

export const updateUser = (req, res) => {
    const id = req.params.Id;
    const updateObject = req.body;
    UserModel.findByIdAndUpdate({ _id: id }, { $set: updateObject })
        .exec()
        .then(() => {
            res.status(200).json({
                success: true,
                message: 'User is updated',
                UserModel: updateObject,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: err.message
            });
        });
}

export const deleteUser = (req, res) => {
    const id = req.params.Id;
    UserModel.findByIdAndRemove(id)
        .exec()
        .then(() => res.status(204).json({
            success: true,
            message: 'User is delete',
        }))
        .catch((err) => res.status(500).json({
            success: false,
            message: 'This username does not exist',
            error: err.message
        }));
}