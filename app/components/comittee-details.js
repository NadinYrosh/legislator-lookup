import Ember from 'ember';

export default Ember.Component.extend({
  showSub: false,
  subcommittees: null,
  actions: {
    showSubcommittees(committee) {
      if(this.showSub){
        this.set('showSub', false);
      }else {
        this.set('showSub', true);
        if(!committee.subcommittee){
          var committeeID = committee.committee_id;
          var url ='http://congress.api.sunlightfoundation.com/committees?parent_committee_id=' + committeeID + '&apikey=11ae7cffd6d54d86a9317be2f9d1fd2f';
          var self = this;
          this.subcommittee = Ember.$.getJSON(url).then(function(responseJSON){
            self.set('subcommittees', responseJSON.results);

          });
          console.log(self.subcommittees);
        }
      }
    }

  }
});
