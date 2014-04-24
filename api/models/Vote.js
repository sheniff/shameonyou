/**
 * Vote
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  // config: {
  //   database: 'mongo'
  // },

  attributes: {

    post: 'integer',  // post ID
    vote: {           // Valid values for vote [-1, 1]
      type: 'integer',
      in: [-1, 1]
    }
  }

};
