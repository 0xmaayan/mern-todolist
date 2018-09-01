const itemCtrl = require('../controllers/item');
const express = require('express');
const router = express.Router();


router.route('/')
/** GET /api/items - Get list of items */
  .get(itemCtrl.list)

  /** POST /api/items - Create new item */
  .post(itemCtrl.create);

router.route('/:itemId')
/** GET /api/items/:itemId - Get item */
  .get(itemCtrl.get)

  /** PUT /api/items/:itemId - Update item */
  .put(itemCtrl.update)

  /** DELETE /api/items/:itemId - Delete item */
  .delete(itemCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('itemId', itemCtrl.load);

module.exports = router;
