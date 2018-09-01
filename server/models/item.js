const Promise = require('bluebird');
const mongoose = require('mongoose');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');

const ItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    amount: {
      type: Number
    },
    completed: {
      type: Boolean
    },
  },
  {timestamps: true}
)


ItemSchema.statics = {
  /**
   * Get user
   * @param {ObjectId} id - The objectId of item.
   * @returns {Promise<User, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((item) => {
        if (item) {
          return item;
        }
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List items in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of items to be skipped.
   * @param {number} limit - Limit number of items to be returned.
   * @returns {Promise<Item[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();
  }
};

module.exports = mongoose.model('Item', ItemSchema);
