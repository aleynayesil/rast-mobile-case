const express = require('express');
const { getAccounts, getAccount, createNewAccount, deleteAccount, updateAccount} = require('../controllers/crudController.js');

const router = express.Router();

router.get('/getAccounts', getAccounts);
router.post('/createNewAccount', createNewAccount);
router.get('/getAccount/:id', getAccount);
router.patch('/updateAccount/:id', updateAccount);
router.delete('/deleteAccount/:id', deleteAccount);

module.exports = router;