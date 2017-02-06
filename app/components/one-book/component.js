import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editBook: function() {
      this.sendAction('editBook', book);
    }
  }
});
