const {Item,itemSchema} = require('../models/item');

// checks if the item is present or not with the given id
async function getItem(req, res) {
    try {
        const item = await Item.findById(req.params.id);
        if (item == null) {
            return res.status(404).json({ message: "Cannot find Item" });
        }
        return item;
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}



// lists all the items which match the filter, if there is no filter it just returns all the items
async function list(req, res) {
    try {
        const filters = req.query;
        const items = await Item.find(filters);
        res.status(201).json(items);
    } catch (err) {
        res.send({ message: err.message })
    }
}

// list the details of a particular item based on ID
async function getById(req, res) {
    try {
        const item = await getItem(req, res);
        res.status(201).json(item);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// create an item
async function create(req, res) {
    try {
        const item = new Item(req.body);
        const newItem = await item.save();
        res.status(201).json({ newItem });
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

// update an item
async function update(req, res) {
    try {
        const item = await getItem(req, res);
        const updatedItem = await item.set(req.body).save();
        res.json(updatedItem);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

// delete an item
async function remove(req, res) {
    try {
        const item = await getItem(req, res);
        await item.deleteOne();
        res.json('Item has been deleted!');
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports = { list, getById, create, update, remove };