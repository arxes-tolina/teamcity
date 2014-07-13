(function() {
  var ChangesLocator, Locator,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Locator = require('./locator');

  ChangesLocator = (function(_super) {
    __extends(ChangesLocator, _super);

    function ChangesLocator() {
      return ChangesLocator.__super__.constructor.apply(this, arguments);
    }

    ChangesLocator.dimensions(['id', 'project', 'buildType', 'build', 'vcsRoot', 'vcsRootInstance', 'username', 'user', 'version', 'internalVersion', 'comment', 'file', 'sinceChange', 'lookupLimit', 'start', 'count']);

    return ChangesLocator;

  })(Locator);

  module.exports = ChangesLocator;

}).call(this);