(function() {
  var etsyjs;

  etsyjs = module.exports = {
    client: require('./etsyjs/client'),
    user: require('./etsyjs/user'),
    search: require('./etsyjs/search')
  };

}).call(this);