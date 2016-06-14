import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators?bioguide_id='+params.sponsor_id+'&apikey=11ae7cffd6d54d86a9317be2f9d1fd2f';
    return Ember.$.getJSON(url).then(function(responseJSON){
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  }
});
