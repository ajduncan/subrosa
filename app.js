'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Subrosa = new Module('subrosa');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Subrosa.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Subrosa.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Subrosa.menus.add({
    roles: ['authenticated'],
    title: 'Subrosa',
    link: 'subrosa',
    menu: 'main'
  });
  
  Subrosa.aggregateAsset('css', 'subrosa.css');
  Subrosa.aggregateAsset('js', 'sha3.js', {global: true});

  return Subrosa;
});
