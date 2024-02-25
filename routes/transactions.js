const express = require('express');

const router = express.Router();

const { getTransaction,addTransaction,deleteTransaction} = require("../controllers/transactions");
// "/" represents /api/v1/transactions
router.route("/").get(getTransaction).post(addTransaction);

router.route('/:id').delete(deleteTransaction)

module.exports = router;
