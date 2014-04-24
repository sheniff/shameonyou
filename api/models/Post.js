/**
 * Post
 *
 * @module      :: Model
 * @description :: Single post to represent what someone should be ashamed of.
 * @docs		    :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  // config: {
  //   database: 'mongo'
  // },

  attributes: {

    code: {
      type: 'text',
      required: true
    },
    lang: 'string',
    comment: 'text',

    firevotes: function() {
      return Vote.count().where({ post: this.id, vote: 1 });
    },

    leafvotes: function() {
      return Vote.count().where({ post: this.id, vote: -1 });
    }

  }

};
