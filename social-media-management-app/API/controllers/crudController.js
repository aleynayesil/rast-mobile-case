
const CrudSchema = require('../models/crud.js');

const getAccounts = async(req,res) => {
    try {
        const { name, sort, page = 1, limit = 10 } = req.query;
        const search = {};

        if (name) {
            search.name = { $regex: new RegExp(name , "i") };
        }

        const parsedPage = parseInt(page, 10);
        const parsedLimit = parseInt(limit, 10);

        const startIndex = (parsedPage - 1) * parsedLimit;
        const endIndex = parsedPage * parsedLimit;
    
        const count = await CrudSchema.countDocuments(search);

        const sortQuery = sort === "asc" ? { name: 1 } : sort === "desc" ? { name: -1 } : {};

        const getAccounts = await CrudSchema.find(search)
        .sort(sortQuery)
        .skip(startIndex)
        .limit(parsedLimit);


        res.status(201).json({
            getAccounts,
            page,
            limit,
            totalPages: JSON.parse(Math.ceil(count / parsedLimit)),
            currentPage: parsedPage,
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
        const {_id} = req.params;

        const getAccount = await CrudSchema.findById(_id);

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

        await CrudSchema.findByIdAndDelete(id);

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