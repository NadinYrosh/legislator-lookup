import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('results', {path: '/results/:zip'});
  this.route('committees-tile');
  this.route('bills-tile');
  this.route('sponsor', {path: "/sponsor/:sponsor_id"});
});

export default Router;
