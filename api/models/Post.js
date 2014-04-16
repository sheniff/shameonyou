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
    comment: 'text'
  }

};
