// require modules
const express = require('express');
const controller = require('../controller/inventoryController');
const { validateId,checkFilters,validateBody,validateResult } = require('../middleware/validator');

// create router
const router = express.Router();

// set up routes
// get all
router.get('/', checkFilters,controller.list);

//get one
router.get('/:id', validateId, controller.getById);

//create
router.post('/', validateBody,validateResult,controller.create);

//edit 
router.put('/:id', validateId,validateBody, validateResult,controller.update);

//delete
router.delete('/:id', validateId, controller.remove);

// export
module.exports = router;