import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editBook: function() {
      // console.log(this.get('book'))
      this.sendAction('editBook', this.get('book'));
    },
    rankUp: function() {
      this.sendAction('rankUp', this.get('book'));
    }
  }
});
