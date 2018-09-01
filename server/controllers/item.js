const Item = require('../models/item');
/**
 * Load item and append to req.
 */
function load(req, res, next, id) {
  Item.get(id)
    .then((item) => {
      req.item = item; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get item
 * @returns {Item}
 */
function get(req, res) {
  return res.json(req.item);
}

/**
 * Create new item
 * @property {string} req.body.name - The name of item.
 * @property {string} req.body.amount - The amount of item.
 * @returns {Item}
 */
function create(req, res, next) {
  const item = new Item({
    name: req.body.name,
    amount: req.body.amount,
    completed: false
  });

  item.save()
    .then(savedItem => res.json(savedItem))
    .catch(e => next(e));
}

/**
 * Update existing item
 * @property {string} req.body.name - The name of item.
 * @property {string} req.body.amount - The amount of item.
 * @returns {Item}
 */
function update(req, res, next) {
  const item = req.item;

  item.name = req.body.name;
  item.amount= req.body.amount;
  item.completed = req.body.completed;

  item.save()
    .then(savedItem => res.json(savedItem))
    .catch(e => next(e));

}

/**
 * Get item list.
 * @property {number} req.query.skip - Number of items to be skipped.
 * @property {number} req.query.limit - Limit number of items to be returned.
 * @returns {Item[]}
 */
function list(req, res, next) {
  Item.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
}

/**
 * Delete item.
 * @returns {Item}
 */
function remove(req, res, next) {
  const item = req.item;
  item.remove()
    .then(deletedItem => res.json(deletedItem))
    .catch(e => next(e));
}

module.exports = { load, get, create, update, list, remove };
