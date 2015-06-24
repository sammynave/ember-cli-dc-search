/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-dc-search',
  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/search-button/dist/js/search-button.js');
    app.import(app.bowerDirectory + '/search-button/dist/css/search-button.css');
  }
};
