import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
   var url = 'http://congress.api.sunlightfoundation.com/bills?apikey=11ae7cffd6d54d86a9317be2f9d1fd2f';
    return Ember.$.getJSON(url).then(function(responseJSON) {
     console.log(responseJSON);
     return responseJSON.results;
    });
  }
});
