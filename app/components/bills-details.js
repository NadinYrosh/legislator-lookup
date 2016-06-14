import Ember from 'ember';

export default Ember.Component.extend({
  showBill: false,
  actions: {
    showBillDetails() {
      if(this.showBill){
        this.set('showBill', false);
      }else{
        this.set('showBill', true);
      }
    }
  }

});
