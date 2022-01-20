const Item = require('../models/item');
const {body,validationResult} = require('express-validator');

function validateId(req, res, next) {
    let id = req.params.id;
    try {
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: "Invalid event id" });
        }
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const filterObj = [
    '_id',
    'name',
    'description',
    'stockCount',
    'salesPrice',
    'costPrice',
    'taxRate',
    'minCount',
    'createdAt',
    'updatedAt', 
    'category'];

function checkFilters(req, res, next) {
    try {
        const filters = req.query;
        if (filters) {
            let keys = Object.keys(filters);
            let isValid = true;
            keys.forEach(key => {
                if (!filterObj.includes(key)) {
                    isValid = false;
                }
            });
            if (!isValid)
                return res.status(400).json({ message: 'Choose query params from the list: ' + filterObj });
        }
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

let validateBody = [body('name', 'name cannot be empty').notEmpty().trim().escape(),
body('description', 'description cannot be empty').notEmpty().trim().escape(),
body('salesPrice', 'salesPrice cannot be empty').notEmpty().trim().escape(),
body('stockCount', 'stockCount cannot be empty').notEmpty().trim().escape(),
body('costPrice', 'costPrice cannot be empty').notEmpty().trim().escape(),
body('taxRate', 'taxRate cannot be empty').notEmpty().trim().escape(),
body('minCount', 'minCount cannot be empty').notEmpty().trim().escape(),
];

function validateResult (req, res, next) {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    else {
        return next();
    }
}


module.exports = { validateId, checkFilters, validateBody,validateResult};