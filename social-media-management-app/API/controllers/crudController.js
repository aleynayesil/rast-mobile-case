const crud = require('../models/crud.js');
const CrudSchema = require('../models/crud.js');

const getAccounts = async(req,res) => {
    try {
        const getAccounts = await CrudSchema.find();

        res.status(201).json({
            getAccounts
        });

    } catch (error) {
        return res.status(500).json({message: message.error});
    }
}

const createNewAccount = async(req, res) => {
    try {
        const newAccount = await CrudSchema.create(req.body);

        res.status(201).json({
            newAccount
        });

    } catch (error) {
        return res.status(500).json({message: message.error});
    }
}

const getAccount = async(req, res) => {
    try {
        const {id} = req.params;

        const getAccount = await CrudSchema.findById(id);

        res.status(201).json({
            getAccount
        });

    } catch (error) {
        return res.status(500).json({message: message.error});
    }
}

const deleteAccount = async(req, res) => {
    try {
        const {id} = req.params;

        const deleteAccount = await CrudSchema.findByIdAndDelete(id);

        res.status(201).json({
            message: "Silme işleminiz başarılı."
        });

    } catch (error) {
        return res.status(500).json({message: message.error});
    }
}

const updateAccount = async(req, res) => {
    try {
        const {id} = req.params;

        const updateAccount = await CrudSchema.findByIdAndUpdate(id, req.body, {new: true});

        res.status(201).json({
            updateAccount
        });

    } catch (error) {
        return res.status(500).json({message: message.error});
    }
}

module.exports = {getAccounts, getAccount, createNewAccount, deleteAccount, updateAccount};