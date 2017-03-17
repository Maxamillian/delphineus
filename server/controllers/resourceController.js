var Resource = require('./models').Resource;

module.exports = {
  getResources: function(req, res) {
    // promise version
    Resource.findAll()
      .then(function() {
        res.send();
      });
  },

  postResource: function(req, res) {
    res.send('Im Working');
  },

  getCategory: function(req, res) {
    res.send('Im Working');
  },

  getTag: function(req, res) {
    res.send('Im Working');
  },

  postLikes: function(req, res) {
    // todo
  },

  getCategories: function(req, res) {
    res.send('Im Working');
  },

  getTags: function(req, res) {
    // todo
  },

  getBookmarks: function(req, res) {
    res.send('Im Working');
  }
};
